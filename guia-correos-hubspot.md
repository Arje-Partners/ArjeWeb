# Guía de Diseño de Correos en HubSpot - Arjé Partners

## Índice
1. [Configuración Inicial en HubSpot](#configuración-inicial)
2. [Estructura y Módulos Recomendados](#estructura-y-módulos)
3. [Plantillas Base](#plantillas-base)
4. [Tokens y Personalización](#tokens-y-personalización)
5. [Optimización para Móviles](#optimización-móviles)
6. [Testing y Preview](#testing-y-preview)
7. [Mejores Prácticas](#mejores-prácticas)
8. [Checklist Pre-Envío](#checklist)

---

## Configuración Inicial en HubSpot {#configuración-inicial}

### 1. Configurar Colores de Marca en HubSpot

**Marketing > Files and Templates > Design Manager > Settings**

```json
{
  "primary_color": "#298CB5",
  "primary_hover": "#19556E",
  "secondary_color": "#379683",
  "text_color": "#232323",
  "link_color": "#298CB5",
  "background_color": "#F9FAFB",
  "white": "#FFFFFF",
  "gray_light": "#F3F4F6",
  "gray_medium": "#E5E7EB",
  "gray_dark": "#1F2937"
}
```

### 2. Configurar Fuentes

En HubSpot, las fuentes web pueden no renderizar bien en todos los clientes de correo.

**Stack de fuentes recomendado:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

**Alternativa más cercana a Epilogue:**
```css
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### 3. Logo y Recursos

- **Logo principal:** Subir versión PNG con fondo transparente (mínimo 300px ancho)
- **Logo alternativo:** Versión blanca para fondos oscuros
- **Favicon:** 32x32px para correos con favicon support

---

## Estructura y Módulos Recomendados {#estructura-y-módulos}

### Anatomía de un Email en HubSpot

```
┌─────────────────────────────────┐
│   PRE-HEADER TEXT               │ ← Texto visible en inbox
├─────────────────────────────────┤
│   HEADER                        │ ← Logo + Nav (opcional)
├─────────────────────────────────┤
│   HERO SECTION                  │ ← Imagen + Título principal
├─────────────────────────────────┤
│   CONTENT BLOCKS                │ ← Módulos de contenido
│   - Texto                       │
│   - Imagen + Texto              │
│   - CTA Buttons                 │
│   - Listas                      │
├─────────────────────────────────┤
│   CALL TO ACTION                │ ← CTA principal destacado
├─────────────────────────────────┤
│   FOOTER                        │ ← Info legal + Links
│   - Dirección                   │
│   - Unsubscribe                 │
│   - Social Media                │
└─────────────────────────────────┘
```

### Módulos Esenciales para Crear

#### 1. **Header Module** (header-arje.module)
```html
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td align="center" style="padding: 30px 20px; background-color: #FFFFFF;">
      <a href="https://arjepartners.com">
        <img src="{{ module.logo_src }}" alt="Arjé Partners" width="150" style="max-width: 150px; height: auto; display: block;">
      </a>
    </td>
  </tr>
</table>
```

**Campos editables:**
- Logo image picker
- Logo width (number field, default: 150)
- Background color (color field, default: #FFFFFF)
- Padding top/bottom (number fields)

#### 2. **Hero Module** (hero-arje.module)
```html
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td style="background-color: {{ module.background_color }}; padding: 60px 40px; text-align: center;">
      {% if module.show_image %}
      <img src="{{ module.hero_image }}" alt="{{ module.image_alt }}" width="600" style="max-width: 100%; height: auto; display: block; margin: 0 auto 30px;">
      {% endif %}

      <h1 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 32px; line-height: 1.2; color: {{ module.heading_color }}; font-weight: 700; margin: 0 0 20px 0;">
        {{ module.heading }}
      </h1>

      {% if module.subheading %}
      <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.5; color: {{ module.text_color }}; margin: 0;">
        {{ module.subheading }}
      </p>
      {% endif %}
    </td>
  </tr>
</table>
```

**Campos editables:**
- Heading (text)
- Subheading (text, optional)
- Hero image (image picker, optional)
- Image alt text
- Show/hide image (boolean)
- Background color (default: #F9FAFB)
- Heading color (default: #232323)
- Text color (default: #232323)

#### 3. **Content Block Module** (content-block-arje.module)
```html
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td style="padding: 40px;">
      {% if module.heading %}
      <h2 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 24px; line-height: 1.3; color: #232323; font-weight: 600; margin: 0 0 20px 0;">
        {{ module.heading }}
      </h2>
      {% endif %}

      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #232323;">
        {{ module.content }}
      </div>
    </td>
  </tr>
</table>
```

**Campos editables:**
- Heading (text, optional)
- Content (rich text)
- Padding (number field, default: 40)

#### 4. **CTA Button Module** (cta-button-arje.module)
```html
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td align="{{ module.alignment }}" style="padding: 30px 40px;">
      <table cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="border-radius: 4px; background-color: {{ module.button_color }};">
            <a href="{{ module.button_url }}" style="display: inline-block; padding: 14px 32px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; color: {{ module.button_text_color }}; text-decoration: none; border-radius: 4px;">
              {{ module.button_text }}
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

**Campos editables:**
- Button text
- Button URL
- Button color (default: #298CB5)
- Button text color (default: #FFFFFF)
- Alignment (choice: left, center, right - default: center)

#### 5. **Two Column Module** (two-column-arje.module)
```html
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td style="padding: 40px;">
      <!--[if mso]>
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation"><tr>
      <td width="50%" valign="top">
      <![endif]-->
      <div style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
        <img src="{{ module.left_image }}" alt="{{ module.left_alt }}" width="280" style="max-width: 100%; height: auto; display: block;">
      </div>
      <!--[if mso]>
      </td>
      <td width="50%" valign="top">
      <![endif]-->
      <div style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top; padding-left: 20px;">
        <h3 style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 20px; line-height: 1.3; color: #232323; font-weight: 600; margin: 0 0 15px 0;">
          {{ module.heading }}
        </h3>
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #232323;">
          {{ module.content }}
        </div>
      </div>
      <!--[if mso]>
      </td></tr></table>
      <![endif]-->
    </td>
  </tr>
</table>
```

#### 6. **Footer Module** (footer-arje.module)
```html
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td style="padding: 40px; background-color: #F3F4F6; text-align: center; border-top: 1px solid #E5E7EB;">
      <!-- Social Media Icons -->
      {% if module.show_social %}
      <table cellpadding="0" cellspacing="0" role="presentation" style="margin: 0 auto 20px;">
        <tr>
          {% if module.linkedin_url %}
          <td style="padding: 0 10px;">
            <a href="{{ module.linkedin_url }}" style="color: #298CB5; text-decoration: none;">
              <img src="linkedin-icon.png" alt="LinkedIn" width="24" height="24" style="display: block;">
            </a>
          </td>
          {% endif %}
          {% if module.twitter_url %}
          <td style="padding: 0 10px;">
            <a href="{{ module.twitter_url }}" style="color: #298CB5; text-decoration: none;">
              <img src="twitter-icon.png" alt="Twitter" width="24" height="24" style="display: block;">
            </a>
          </td>
          {% endif %}
        </tr>
      </table>
      {% endif %}

      <!-- Company Info -->
      <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #666666; margin: 0 0 10px 0;">
        <strong>Arjé Partners</strong><br>
        Calle del Mastelero 12, 28033 Madrid<br>
        <a href="tel:+34915620800" style="color: #298CB5; text-decoration: none;">+34 915 62 08 00</a> |
        <a href="mailto:info@arjepartners.com" style="color: #298CB5; text-decoration: none;">info@arjepartners.com</a>
      </p>

      <!-- Legal Links -->
      <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 1.6; color: #999999; margin: 20px 0 0 0;">
        <a href="{{ unsubscribe_link }}" style="color: #298CB5; text-decoration: none;">Cancelar suscripción</a> |
        <a href="{{ site_settings.company_privacy_policy_url }}" style="color: #298CB5; text-decoration: none;">Política de Privacidad</a>
      </p>

      <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 1.6; color: #999999; margin: 10px 0 0 0;">
        © {{ current_year }} Arjé Partners. Todos los derechos reservados.
      </p>
    </td>
  </tr>
</table>
```

---

## Plantillas Base {#plantillas-base}

### Plantilla 1: Newsletter Mensual

**Uso:** Actualizaciones periódicas, noticias, artículos del blog

**Estructura:**
1. Pre-header: "Novedades de [Mes] - Arjé Partners"
2. Header con logo
3. Hero con título del mes
4. 3-4 bloques de contenido con imágenes
5. CTA principal
6. Footer completo

**Nombre en HubSpot:** `arje-newsletter-template`

---

### Plantilla 2: Email Promocional

**Uso:** Ofertas, servicios nuevos, eventos

**Estructura:**
1. Pre-header: Mensaje urgente o beneficio principal
2. Header minimalista
3. Hero grande con imagen de producto/servicio
4. Beneficios en lista (3-4 puntos)
5. CTA prominente (repetir 2 veces si el correo es largo)
6. Footer reducido

**Nombre en HubSpot:** `arje-promotional-template`

---

### Plantilla 3: Email Transaccional

**Uso:** Confirmaciones, bienvenida, onboarding

**Estructura:**
1. Pre-header: Estado de la acción
2. Header simple con logo
3. Contenido centrado y directo
4. Información estructurada en tabla o lista
5. CTA si es necesario (ej: "Completar perfil")
6. Footer legal mínimo

**Nombre en HubSpot:** `arje-transactional-template`

---

### Plantilla 4: Email de Seguimiento

**Uso:** Follow-ups de ventas, recordatorios

**Estructura:**
1. Pre-header: Personalizado con nombre
2. Header minimalista
3. Saludo personalizado
4. 2-3 párrafos concisos
5. CTA claro (agendar reunión, descargar recurso)
6. Firma personal (nombre, cargo, contacto)
7. Footer reducido

**Nombre en HubSpot:** `arje-followup-template`

---

## Tokens y Personalización {#tokens-y-personalización}

### Tokens Esenciales de HubSpot

```hubl
{# Datos del Contacto #}
{{ contact.firstname }}
{{ contact.lastname }}
{{ contact.email }}
{{ contact.company }}
{{ contact.jobtitle }}
{{ contact.industry }}

{# Propiedades Custom #}
{{ contact.ultima_interaccion }}
{{ contact.servicio_interes }}

{# URLs del Sistema #}
{{ unsubscribe_link }}
{{ unsubscribe_link_all }}
{{ view_as_page_url }}
{{ site_settings.company_name }}
{{ site_settings.company_street_address_1 }}
{{ site_settings.company_city }}

{# Fecha y Hora #}
{{ current_year }}
{{ local_time_zone }}
```

### Ejemplos de Personalización

#### Saludo Inteligente
```hubl
{% if contact.firstname %}
  Hola {{ contact.firstname }},
{% else %}
  Hola,
{% endif %}
```

#### Contenido Condicional por Industria
```hubl
{% if contact.industry == "Tecnología" %}
  <p>Como empresa tecnológica, sabemos que necesitas soluciones ágiles...</p>
{% elif contact.industry == "Retail" %}
  <p>En el sector retail, la velocidad es crucial...</p>
{% else %}
  <p>Entendemos los desafíos únicos de tu industria...</p>
{% endif %}
```

#### CTA Personalizado
```hubl
{% if contact.lifecycle_stage == "lead" %}
  <a href="https://arjepartners.com/demo">Solicita una Demo</a>
{% elif contact.lifecycle_stage == "opportunity" %}
  <a href="https://arjepartners.com/propuesta">Ver Propuesta</a>
{% else %}
  <a href="https://arjepartners.com/contacto">Contáctanos</a>
{% endif %}
```

---

## Optimización para Móviles {#optimización-móviles}

### Media Queries Esenciales

```html
<style type="text/css">
  /* Móviles */
  @media only screen and (max-width: 600px) {
    /* Forzar ancho completo */
    .mobile-full-width {
      width: 100% !important;
      max-width: 100% !important;
    }

    /* Aumentar tamaño de fuente */
    .mobile-text {
      font-size: 16px !important;
      line-height: 1.5 !important;
    }

    /* Headings más pequeños */
    .mobile-heading {
      font-size: 24px !important;
    }

    /* Padding reducido */
    .mobile-padding {
      padding: 20px !important;
    }

    /* Botones más grandes */
    .mobile-button {
      padding: 16px 24px !important;
      font-size: 18px !important;
    }

    /* Ocultar en móvil */
    .hide-mobile {
      display: none !important;
      max-height: 0 !important;
      overflow: hidden !important;
    }

    /* Columnas a una sola columna */
    .mobile-stack {
      display: block !important;
      width: 100% !important;
    }
  }
</style>
```

### Estructura Responsive

```html
<!-- Tabla responsive con fallback para Outlook -->
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td class="mobile-padding" style="padding: 40px;">
      <!--[if mso]>
      <table width="100%"><tr>
      <td width="50%">
      <![endif]-->

      <div class="mobile-stack" style="display: inline-block; width: 48%; vertical-align: top;">
        <!-- Contenido columna 1 -->
      </div>

      <!--[if mso]>
      </td>
      <td width="50%">
      <![endif]-->

      <div class="mobile-stack" style="display: inline-block; width: 48%; vertical-align: top;">
        <!-- Contenido columna 2 -->
      </div>

      <!--[if mso]>
      </td></tr></table>
      <![endif]-->
    </td>
  </tr>
</table>
```

---

## Testing y Preview {#testing-y-preview}

### Checklist de Testing en HubSpot

#### Pre-envío (dentro de HubSpot)
- [ ] Preview en móvil (HubSpot mobile preview)
- [ ] Preview en escritorio
- [ ] Verificar todos los links (usar "Check links")
- [ ] Revisar personalización con datos de prueba
- [ ] Verificar pre-header text
- [ ] Confirmar from name y from email
- [ ] Verificar subject line (sin spam triggers)
- [ ] Revisar spelling y gramática

#### Test Real
- [ ] Enviar email de prueba a ti mismo
- [ ] Verificar en Gmail (web)
- [ ] Verificar en Gmail (app móvil)
- [ ] Verificar en Outlook (web)
- [ ] Verificar en Outlook (desktop)
- [ ] Verificar en Apple Mail (Mac)
- [ ] Verificar en Apple Mail (iPhone)

### Herramientas de Testing Recomendadas

1. **Litmus** (integración con HubSpot)
   - Testing en 90+ clientes de correo
   - Análisis de spam score
   - Link checking automatizado

2. **Email on Acid**
   - Similar a Litmus
   - Buena integración con HubSpot

3. **Mail Tester** (gratuito)
   - https://www.mail-tester.com
   - Análisis de spam score básico

### Tests Específicos de HubSpot

```hubl
{# Test mode - Mostrar datos del contacto #}
{% if contact %}
  <!-- TESTING MODE -->
  <div style="background: #FFE161; padding: 10px; text-align: center; font-size: 12px;">
    <strong>TEST:</strong> {{ contact.email }} | {{ contact.lifecycle_stage }}
  </div>
{% endif %}
```

---

## Mejores Prácticas {#mejores-prácticas}

### 1. Subject Lines

**✅ Buenos ejemplos:**
- "[Nombre], tu guía de tesorería está lista"
- "3 formas de optimizar tu ERP este trimestre"
- "Invitación exclusiva: Webinar de Arjé Partners"

**❌ Evitar:**
- "¡¡¡OFERTA INCREÍBLE!!!" (demasiados signos)
- "RE: tu cuenta" (confuso si no es respuesta)
- Subject lines > 50 caracteres (se cortan en móvil)
- Palabras spam: gratis, urgente, ganador, dinero

### 2. Pre-header Text

**Longitud ideal:** 40-130 caracteres

**Técnica:** Complementa el subject, no lo repitas

```html
<!-- Ejemplo -->
Subject: "Optimiza tu gestión financiera"
Pre-header: "Descubre cómo nuestros clientes ahorraron 40% en tiempo"
```

**En HubSpot:**
```hubl
{{ email_body.preview_text }}
```

### 3. Imágenes

**Tamaños recomendados:**
- Ancho máximo: 600px
- Hero image: 600x300px (ratio 2:1)
- Logos: 150-200px ancho
- Iconos: 32x32px o 48x48px

**Optimización:**
- Formato: JPG para fotos, PNG para logos/gráficos
- Peso máximo: 200KB por imagen
- Usar CDN de HubSpot
- Siempre incluir alt text

**Alt text efectivo:**
```html
<!-- ❌ Malo -->
<img src="img.jpg" alt="imagen">

<!-- ✅ Bueno -->
<img src="img.jpg" alt="Dashboard de control de tesorería mostrando gráficos de flujo de caja">
```

### 4. Texto y Copy

**Estructura de párrafos:**
- Máximo 3-4 líneas por párrafo
- Usar listas con bullets cuando sea posible
- Destacar información clave en **negrita**
- Espaciado generoso entre secciones

**Tono de voz Arjé Partners:**
- Profesional pero cercano
- Experto sin ser pedante
- Directo y orientado a soluciones
- Usar "tú" en vez de "usted" (más cercano)

### 5. CTAs (Call to Actions)

**Reglas de oro:**
- Un CTA principal por email
- Botón siempre visible (no solo link)
- Texto accionable ("Descargar guía" vs "Clic aquí")
- Contraste alto con el fondo
- Mínimo 44x44px (target touch size)

**Posicionamiento:**
- Above the fold si es posible
- Repetir al final si el email es largo (> 2 scrolls)

**Texto efectivo:**
```
✅ Buenos:
- "Solicita tu demo gratuita"
- "Descarga la guía completa"
- "Agenda una consultoría"
- "Ver casos de éxito"

❌ Evitar:
- "Clic aquí"
- "Leer más"
- "Enviar"
```

### 6. Accesibilidad

```html
<!-- Usar role="presentation" en tablas de layout -->
<table role="presentation" cellpadding="0" cellspacing="0">

<!-- Alt text descriptivo -->
<img src="img.jpg" alt="Descripción clara del contenido visual">

<!-- Contraste suficiente: mínimo 4.5:1 para texto normal -->
<p style="color: #232323; background-color: #FFFFFF;">

<!-- Links descriptivos -->
<a href="...">Leer artículo completo sobre IA en tesorería</a>
<!-- No: <a href="...">clic aquí</a> -->

<!-- Headings semánticos -->
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<p>Párrafo</p>
```

### 7. Peso Total del Email

**Límites recomendados:**
- Peso total HTML: < 102KB (Gmail trunca después)
- Número de imágenes: < 10
- Peso total con imágenes: < 500KB

**Técnicas de optimización:**
- Inline CSS solo para estilos críticos
- Comprimir imágenes (TinyPNG, ImageOptim)
- Evitar GIFs pesados (< 1MB)

### 8. Frecuencia y Timing

**Frecuencia recomendada:**
- Newsletter: 1x al mes
- Promocional: Máximo 1x por semana
- Transaccional: Según necesidad

**Mejores horarios (B2B en España):**
- Martes a Jueves
- 9:00-10:00 AM (llegada a oficina)
- 2:00-3:00 PM (después de comida)

**Usar A/B testing en HubSpot para optimizar**

---

## Checklist Pre-Envío {#checklist}

### ✅ Contenido
- [ ] Subject line optimizado (< 50 caracteres)
- [ ] Pre-header text complementa el subject
- [ ] Personalización funciona correctamente
- [ ] Todos los links funcionan
- [ ] CTAs claros y visibles
- [ ] Ortografía y gramática revisadas
- [ ] Tokens de personalización probados

### ✅ Diseño
- [ ] Logo de Arjé visible y correcto
- [ ] Colores corporativos aplicados
- [ ] Imágenes optimizadas (< 200KB c/u)
- [ ] Alt text en todas las imágenes
- [ ] Responsive en móvil
- [ ] Legible sin imágenes (preview text)

### ✅ Técnico
- [ ] From name: "Arjé Partners" o "[Nombre] de Arjé"
- [ ] From email: configurado correctamente
- [ ] Reply-to email: activo y monitoreado
- [ ] Footer con dirección física
- [ ] Link de unsubscribe visible y funcional
- [ ] Peso total < 102KB
- [ ] Testing en múltiples clientes

### ✅ Legal (RGPD)
- [ ] Contactos tienen opt-in
- [ ] Link de cancelación de suscripción
- [ ] Política de privacidad enlazada
- [ ] Dirección física de la empresa
- [ ] Identificación clara del remitente

### ✅ HubSpot Específico
- [ ] Lista de contactos correcta
- [ ] Exclusiones aplicadas (unsubscribed, bounced)
- [ ] Smart content probado
- [ ] Tracking activado
- [ ] UTM parameters configurados
- [ ] A/B test configurado (si aplica)

---

## Snippets Útiles para HubSpot

### Pre-header Personalizado
```hubl
<div style="display: none; max-height: 0; overflow: hidden;">
  {% if contact.firstname %}
    {{ contact.firstname }}, descubre cómo podemos ayudarte a optimizar tu gestión financiera con soluciones personalizadas.
  {% else %}
    Descubre cómo optimizar tu gestión financiera con soluciones de Arjé Partners.
  {% endif %}
  <!-- Espaciador para ocultar texto adicional -->
  &#847; &zwnj; &nbsp; &#847; &zwnj; &nbsp; &#847; &zwnj; &nbsp;
</div>
```

### Botón con Tracking UTM
```html
{% set utm_source = "hubspot" %}
{% set utm_medium = "email" %}
{% set utm_campaign = "newsletter-enero-2025" %}

<a href="https://arjepartners.com/contacto?utm_source={{ utm_source }}&utm_medium={{ utm_medium }}&utm_campaign={{ utm_campaign }}"
   style="display: inline-block; padding: 14px 32px; background-color: #298CB5; color: #FFFFFF; text-decoration: none; border-radius: 4px; font-weight: 600;">
  Contacta con nosotros
</a>
```

### Firma Personal
```html
<table cellpadding="0" cellspacing="0" role="presentation" style="margin-top: 30px;">
  <tr>
    <td style="padding-right: 20px; vertical-align: top;">
      <img src="{{ owner.avatar_url }}" alt="{{ owner.first_name }} {{ owner.last_name }}" width="80" height="80" style="border-radius: 50%; display: block;">
    </td>
    <td style="vertical-align: top;">
      <p style="margin: 0; font-size: 16px; font-weight: 600; color: #232323;">
        {{ owner.first_name }} {{ owner.last_name }}
      </p>
      <p style="margin: 5px 0; font-size: 14px; color: #666666;">
        {{ owner.position }}
      </p>
      <p style="margin: 5px 0; font-size: 14px;">
        <a href="mailto:{{ owner.email }}" style="color: #298CB5; text-decoration: none;">{{ owner.email }}</a>
      </p>
      <p style="margin: 5px 0; font-size: 14px;">
        <a href="tel:{{ owner.phone }}" style="color: #298CB5; text-decoration: none;">{{ owner.phone }}</a>
      </p>
    </td>
  </tr>
</table>
```

### View in Browser Link
```html
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td style="padding: 10px; text-align: center; font-size: 12px; color: #666666;">
      ¿No se visualiza correctamente? <a href="{{ view_as_page_url }}" style="color: #298CB5; text-decoration: none;">Ver en navegador</a>
    </td>
  </tr>
</table>
```

---

## Recursos Adicionales

### Documentación HubSpot
- [HubSpot Email User Guide](https://knowledge.hubspot.com/email)
- [HubL Variables Reference](https://developers.hubspot.com/docs/cms/hubl)
- [Email Best Practices](https://knowledge.hubspot.com/email/email-best-practices)

### Herramientas de Diseño
- **Can I Email:** Verificar soporte CSS en clientes de correo
- **Really Good Emails:** Inspiración de diseño
- **Litmus Community:** Recursos y tips

### Plantillas de Referencia
- Buscar "HubSpot email templates" en HubSpot Marketplace
- Adaptar siempre a los colores y estilo de Arjé

---

## Contacto de Soporte

Para dudas sobre implementación en HubSpot:
- **Email:** info@arjepartners.com
- **Teléfono:** +34 915 62 08 00

---

Documento creado: 2025
Versión: 1.0
