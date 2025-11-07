import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

// Mapeo de sistemas
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

// Validación de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validación de teléfono (formatos españoles e internacionales)
function isValidPhone(phone: string): boolean {
  // Permitir formato español: +34 XXX XXX XXX, 34XXXXXXXXX, XXXXXXXXX
  // Y formato internacional: +XX XXX XXX XXX
  const phoneRegex = /^(\+?\d{1,3}[\s-]?)?\d{9,15}$/;
  const cleanPhone = phone.replace(/[\s()-]/g, ''); // Limpiar espacios, guiones, paréntesis
  return phoneRegex.test(cleanPhone);
}

// Función para enviar email
async function sendEmail(data: ContactFormData) {
  // Configurar transportador de email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const sistemaLabel = sistemaLabels[data.sistema || 'otro'] || data.sistema || 'No especificado';

  // Construir email HTML
  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
    .field-value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #3b82f6; }
    .mensaje { background: #eff6ff; padding: 15px; border-radius: 4px; border-left: 3px solid #3b82f6; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
    .tag { display: inline-block; background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-right: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🆕 Nuevo Contacto desde Web</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">👤 Nombre Completo</div>
        <div class="field-value">${data.nombre}</div>
      </div>

      <div class="field">
        <div class="field-label">📧 Email</div>
        <div class="field-value">
          <a href="mailto:${data.email}">${data.email}</a>
        </div>
      </div>

      ${data.empresa ? `
      <div class="field">
        <div class="field-label">🏢 Empresa</div>
        <div class="field-value">${data.empresa}</div>
      </div>
      ` : ''}

      ${data.telefono ? `
      <div class="field">
        <div class="field-label">📞 Teléfono</div>
        <div class="field-value">
          <a href="tel:${data.telefono}">${data.telefono}</a>
        </div>
      </div>
      ` : ''}

      <div class="field">
        <div class="field-label">🖥️ Sistema Actual</div>
        <div class="field-value">${sistemaLabel}</div>
      </div>

      <div class="field">
        <div class="field-label">💬 Mensaje</div>
        <div class="mensaje">${data.mensaje.replace(/\n/g, '<br>')}</div>
      </div>

      <div class="field">
        <div class="field-label">📋 Consentimientos</div>
        <div class="field-value">
          <span class="tag">${data.aceptoPrivacidad ? '✅' : '❌'} Privacidad</span>
          <span class="tag">${data.aceptoComunicaciones ? '✅' : '❌'} Comunicaciones</span>
        </div>
      </div>

      <div class="footer">
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES', {
          timeZone: 'Europe/Madrid',
          dateStyle: 'full',
          timeStyle: 'medium'
        })}</p>
        <p><strong>Origen:</strong> Formulario web arjepartners.com/contacto</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  // Email en texto plano (fallback)
  const emailText = `
NUEVO CONTACTO DESDE WEB - Arjé Partners
========================================

Nombre: ${data.nombre}
Email: ${data.email}
${data.empresa ? `Empresa: ${data.empresa}` : ''}
${data.telefono ? `Teléfono: ${data.telefono}` : ''}
Sistema Actual: ${sistemaLabel}

MENSAJE:
${data.mensaje}

CONSENTIMIENTOS:
- Privacidad: ${data.aceptoPrivacidad ? 'SÍ' : 'NO'}
- Comunicaciones: ${data.aceptoComunicaciones ? 'SÍ' : 'NO'}

Fecha: ${new Date().toLocaleString('es-ES')}
Origen: Formulario web arjepartners.com/contacto
  `;

  // Enviar email
  await transporter.sendMail({
    from: `"Web Arjé Partners" <${process.env.SMTP_USER}>`,
    to: 'info@arjepartners.com',
    replyTo: data.email,
    subject: `🆕 Nuevo contacto web: ${data.nombre}${data.empresa ? ' - ' + data.empresa : ''}`,
    text: emailText,
    html: emailHtml,
  });
}

// Handler POST
export async function POST(request: NextRequest) {
  try {
    // 1. Parse y validación de datos
    const data: ContactFormData = await request.json();

    // Validaciones básicas
    if (!data.nombre || !data.email || !data.mensaje) {
      return NextResponse.json(
        { error: 'Los campos Nombre, Email y Mensaje son obligatorios' },
        { status: 400 }
      );
    }

    // Validación de privacidad
    if (!data.aceptoPrivacidad) {
      return NextResponse.json(
        { error: 'Debes aceptar la política de privacidad' },
        { status: 400 }
      );
    }

    // Validación formato email
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido. Por favor, introduce un email correcto (ejemplo: nombre@empresa.com)' },
        { status: 400 }
      );
    }

    // Validación formato teléfono (solo si se proporciona)
    if (data.telefono && data.telefono.trim() !== '') {
      if (!isValidPhone(data.telefono)) {
        return NextResponse.json(
          { error: 'El formato del teléfono no es válido. Por favor, introduce un número correcto (ejemplo: +34 600 123 456 o 600123456)' },
          { status: 400 }
        );
      }
    }

    // 2. Verificar configuración SMTP
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP not configured - missing SMTP_USER or SMTP_PASSWORD');
      return NextResponse.json(
        {
          error: 'El servicio de contacto no está configurado correctamente. Por favor, contáctanos directamente en info@arjepartners.com'
        },
        { status: 503 }
      );
    }

    // 3. Enviar email
    console.log('Sending contact email for:', data.email);
    await sendEmail(data);
    console.log('Email sent successfully');

    // 4. Respuesta exitosa
    return NextResponse.json({
      success: true,
      message: 'Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.'
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error processing contact form:', error);

    // Error específico de email
    if (error.code === 'EAUTH' || error.code === 'ESOCKET') {
      return NextResponse.json(
        {
          error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente en info@arjepartners.com',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: 'Error al procesar el formulario. Por favor, inténtalo de nuevo o contáctanos en info@arjepartners.com',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Health check
export async function GET() {
  const isConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASSWORD);

  return NextResponse.json({
    status: isConfigured ? 'ok' : 'misconfigured',
    service: 'contact-api',
    emailConfigured: isConfigured,
    timestamp: new Date().toISOString()
  });
}
