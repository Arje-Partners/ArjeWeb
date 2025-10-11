import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';

// Tipos
interface ContactFormData {
  nombre: string;
  email: string;
  empresa?: string;
  telefono?: string;
  sistema?: string;
  mensaje: string;
  aceptoPrivacidad: boolean;
  aceptoComunicaciones: boolean;
}

// Configuración HubSpot
const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN
});

// Lógica de complejidad de integración
const complejidadIntegracion: Record<string, string> = {
  'sap': 'Media',
  'oracle': 'Media',
  'infor': 'Alta',
  'ifs': 'Alta',
  'custom': 'Muy Alta',
  'legacy': 'Muy Alta',
  'excel': 'Baja',
  'otro': 'Media',
};

// Mapeo de sistemas para HubSpot
const sistemaLabels: Record<string, string> = {
  'sap': 'SAP',
  'oracle': 'Oracle',
  'infor': 'Infor M3',
  'ifs': 'IFS',
  'custom': 'Sistema Custom/Propio',
  'legacy': 'Sistema Legacy',
  'excel': 'Excel / Manual',
  'otro': 'Otro',
};

// Función para separar nombre y apellido
function parseNombreCompleto(nombreCompleto: string): { firstname: string; lastname: string } {
  const parts = nombreCompleto.trim().split(' ');
  if (parts.length === 1) {
    return { firstname: parts[0], lastname: '' };
  }
  const firstname = parts[0];
  const lastname = parts.slice(1).join(' ');
  return { firstname, lastname };
}

// Función para enviar notificación interna (Slack opcional)
async function sendInternalNotification(data: ContactFormData, complejidad: string) {
  if (!process.env.SLACK_WEBHOOK_URL) {
    console.log('Slack webhook not configured, skipping notification');
    return;
  }

  try {
    const sistemaLabel = sistemaLabels[data.sistema || 'otro'] || data.sistema || 'No especificado';

    const slackMessage = {
      text: '🆕 Nuevo Lead desde Web',
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🆕 Nuevo Lead desde Web',
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Nombre:*\n${data.nombre}`
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${data.email}`
            },
            {
              type: 'mrkdwn',
              text: `*Empresa:*\n${data.empresa || 'No especificada'}`
            },
            {
              type: 'mrkdwn',
              text: `*Teléfono:*\n${data.telefono || 'No especificado'}`
            },
            {
              type: 'mrkdwn',
              text: `*Sistema actual:*\n${sistemaLabel}`
            },
            {
              type: 'mrkdwn',
              text: `*Complejidad:*\n${complejidad}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Mensaje:*\n${data.mensaje}`
          }
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Comunicaciones comerciales: ${data.aceptoComunicaciones ? '✅ Sí' : '❌ No'}`
            }
          ]
        }
      ]
    };

    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage)
    });
  } catch (error) {
    console.error('Error sending Slack notification:', error);
    // No fallar el proceso si Slack falla
  }
}

// Handler POST
export async function POST(request: NextRequest) {
  try {
    // 1. Parse y validación de datos
    const data: ContactFormData = await request.json();

    // Validaciones básicas
    if (!data.nombre || !data.email || !data.mensaje) {
      return NextResponse.json(
        { error: 'Campos obligatorios faltantes' },
        { status: 400 }
      );
    }

    if (!data.aceptoPrivacidad) {
      return NextResponse.json(
        { error: 'Debes aceptar la política de privacidad' },
        { status: 400 }
      );
    }

    // 2. Procesar datos
    const { firstname, lastname } = parseNombreCompleto(data.nombre);
    const sistemaLabel = sistemaLabels[data.sistema || 'otro'] || data.sistema || 'No especificado';
    const complejidad = complejidadIntegracion[data.sistema || 'otro'] || 'Media';

    // 3. Crear contacto en HubSpot
    const hubspotProperties: any = {
      email: data.email,
      firstname: firstname,
      lastname: lastname,
      phone: data.telefono || '',
      company: data.empresa || '',
      // Propiedades personalizadas (deben existir en HubSpot)
      sistema_actual: sistemaLabel,
      mensaje_inicial: data.mensaje,
      fuente_contacto: 'Web - Formulario Contacto',
      complejidad_integracion: complejidad,
      lead_status: 'Nuevo',
      lifecyclestage: 'lead',
      // Consentimientos RGPD
      acepta_comunicaciones_comerciales: data.aceptoComunicaciones ? 'Sí' : 'No',
      fecha_consentimiento_privacidad: new Date().toISOString(),
    };

    console.log('Creating HubSpot contact with properties:', hubspotProperties);

    let contactId: string | undefined;

    try {
      // Intentar crear contacto
      const response = await hubspotClient.crm.contacts.basicApi.create({
        properties: hubspotProperties,
        associations: []
      });

      contactId = response.id;
      console.log('HubSpot contact created successfully:', contactId);

    } catch (hubspotError: any) {
      // Si el error es que el contacto ya existe, actualizar
      if (hubspotError.code === 409 || hubspotError.message?.includes('duplicate')) {
        console.log('Contact exists, updating...');

        // Buscar contacto por email
        const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: 'EQ' as any, // HubSpot SDK type quirk
              value: data.email
            }]
          }],
          limit: 1
        });

        if (searchResponse.results && searchResponse.results.length > 0) {
          contactId = searchResponse.results[0].id;

          // Actualizar con nueva información
          await hubspotClient.crm.contacts.basicApi.update(contactId, {
            properties: {
              ...hubspotProperties,
              // No sobreescribir firstname/lastname si ya existen
              numero_contactos_web: String(
                parseInt(searchResponse.results[0].properties.numero_contactos_web || '0') + 1
              ),
              ultima_interaccion_web: new Date().toISOString(),
            }
          });

          console.log('HubSpot contact updated successfully:', contactId);
        }
      } else {
        throw hubspotError;
      }
    }

    // 4. Enviar notificación interna
    await sendInternalNotification(data, complejidad);

    // 5. Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: 'Contacto enviado exitosamente',
      contactId: contactId
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error processing contact form:', error);

    // Determinar tipo de error
    if (error.message?.includes('HubSpot')) {
      return NextResponse.json(
        {
          error: 'Error al conectar con el sistema. Por favor, inténtalo de nuevo o contáctanos directamente.',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: 'Error al procesar el formulario. Por favor, inténtalo de nuevo.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'contact-api',
    timestamp: new Date().toISOString()
  });
}
