# Guía de Estilos - Arjé Partners

## Tipografías

### Fuente Principal
**Epilogue** - Google Fonts
- Pesos disponibles: 100, 200, 300, 400, 500, 600, 700, 800, 900 (incluyendo itálicas)
- Uso: Títulos, subtítulos y texto general
- Importación: `https://fonts.googleapis.com/css?family=Epilogue:100,200,300,400,500,600,700,800,900,100i,200i,300i,400i,500i,600i,700i,800i,900i&display=swap`

### Fuente Secundaria
**Jost**
- Uso: Body general

### Fuente Alternativa (Proyecto Next.js)
**Inter**
- Uso: Sans-serif para el proyecto nuevo en `new-website`
- Fallback: system-ui, sans-serif

---

## Sistema de Tamaños de Texto

### display-1
- **Tamaño:** 4.6rem (desktop)
- **Línea:** 1.1
- **Móvil:** 3.68rem (992px), 3.22rem-2.26rem (768px y menor)

### display-2
- **Tamaño:** 3rem (desktop)
- **Línea:** 1.1
- **Móvil:** 2.4rem-1.7rem (768px y menor)

### display-4
- **Tamaño:** 1rem
- **Línea:** 1.5

### display-5
- **Tamaño:** 1.8rem
- **Línea:** 1.5
- **Móvil:** 1.44rem-1.28rem (768px y menor)

### display-7
- **Tamaño:** 1.1rem
- **Línea:** 1.5
- **Móvil:** 0.88rem-1.035rem (768px y menor)

---

## Paleta de Colores

### Colores Principales

#### Azul Arjé (Color Corporativo)
- **Principal:** `#298CB5` - rgb(41, 140, 181)
- **Claro:** `#3BA3D0`
- **Oscuro:** `#1F6D8C`
- **Hover:** `#19556E`
- **Uso:** Color principal de marca, botones primarios, iconos destacados

#### Blanco
- **Principal:** `#FFFFFF` - rgb(255, 255, 255)
- **Alternativo:** `#FAFAFA`
- **Uso:** Fondos, texto sobre fondos oscuros

#### Negro/Gris Oscuro
- **Principal:** `#232323` - rgb(35, 35, 35)
- **Negro puro:** `#111111` / `#000000`
- **Uso:** Texto principal, overlays

---

### Colores Secundarios

#### Verde (Secondary)
- **Principal:** `#379683`
- **Hover:** `#20574C`
- **Uso:** Elementos secundarios

#### Cyan (Success)
- **Principal:** `#40B0BF`
- **Hover:** `#2A747E`
- **Uso:** Mensajes de éxito, estados positivos

#### Azul Claro (Info)
- **Principal:** `#47B5ED`
- **Hover:** `#148CCA`
- **Uso:** Información, elementos informativos

#### Amarillo (Warning)
- **Principal:** `#FFE161`
- **Hover:** `#FFD10A`
- **Texto:** `#614F00`
- **Uso:** Advertencias, alertas

#### Naranja (Danger)
- **Principal:** `#FF9966`
- **Hover:** `#FF5F0F`
- **Uso:** Errores, acciones peligrosas

---

### Escala de Grises (Proyecto Next.js)

- **50:** `#F9FAFB`
- **100:** `#F3F4F6`
- **200:** `#E5E7EB`
- **800:** `#1F2937`
- **900:** `#111827`

---

## Botones

### Tamaños
- **Small:** padding `0.6rem 1.2rem`, border-radius `4px`
- **Medium:** padding `0.6rem 1.2rem`, border-radius `4px`
- **Large:** padding `1rem 2.6rem`, border-radius `4px`

### Estilos

#### Botón Primario (.btn-primary)
- **Background:** `#298CB5`
- **Borde:** `#298CB5`
- **Texto:** `#FFFFFF`
- **Hover Background:** `#19556E`
- **Box-shadow:** `0 2px 2px 0 rgba(0, 0, 0, 0.2)`
- **Box-shadow Hover:** `0 2px 5px 0 rgba(0, 0, 0, 0.2)`

#### Botón Outline Primario (.btn-primary-outline)
- **Background:** Transparente
- **Texto:** `#298CB5`
- **Hover Texto:** `#19556E`
- **Sin borde visible**

---

## Elementos de Interfaz

### Overlays
- **Background:** `#000000`
- **Opacidad predeterminada:** 0.5
- **Opacidad header principal:** 0.9 con `rgb(35, 35, 35)`

### Formularios
- **Background:** `#FFFFFF`
- **Texto:** `#232323`
- **Padding:** `0.6rem 1.2rem`
- **Border-radius:** `4px`
- **Box-shadow:** `rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.07) 0px 1px 3px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px`
- **Altura mínima:** `48px`

### Navegación
- **Color de enlaces:** `text-white text-primary`
- **Display:** `display-4`

---

## Uso en HTML/CSS

### Clases de Color de Texto
```css
.text-primary   /* #298CB5 */
.text-secondary /* #379683 */
.text-success   /* #40B0BF */
.text-info      /* #47B5ED */
.text-warning   /* #FFE161 */
.text-danger    /* #FF9966 */
.text-white     /* #FAFAFA */
.text-black     /* #232323 */
```

### Clases de Fondo
```css
.bg-primary   /* #298CB5 */
.bg-success   /* #40B0BF */
.bg-info      /* #47B5ED */
.bg-warning   /* #FFE161 */
.bg-danger    /* #FF9966 */
.bg-white     /* #FFFFFF */
.bg-black     /* #000000 */
```

### Clases Utilitarias de Texto
```css
.mbr-white     /* #FFFFFF */
.mbr-black     /* #111111 */
.mbr-light     /* font-weight: 300 */
.mbr-regular   /* font-weight: 400 */
.mbr-semibold  /* font-weight: 500 */
.mbr-bold      /* font-weight: 700 */
```

---

## Configuración Tailwind (Proyecto Next.js)

```javascript
colors: {
  arje: {
    blue: {
      DEFAULT: '#298CB5',
      light: '#3BA3D0',
      dark: '#1F6D8C',
    },
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      800: '#1F2937',
      900: '#111827',
    }
  }
}
```

### Uso en Tailwind
```html
<!-- Texto azul corporativo -->
<div class="text-arje-blue">...</div>

<!-- Fondo azul corporativo -->
<div class="bg-arje-blue">...</div>

<!-- Variantes -->
<div class="text-arje-blue-light">...</div>
<div class="bg-arje-blue-dark">...</div>
```

---

## Notas de Implementación

1. **Responsive:** Todos los tamaños de fuente utilizan tipografía fluida para adaptar automáticamente en dispositivos móviles
2. **Font-weight:** Preferir pesos 400 (regular), 500 (semibold), 600 (medium-bold) y 700 (bold)
3. **Line-height:** Generalmente 1.1 para títulos grandes, 1.3-1.5 para títulos medios, y 1.5-1.7 para texto de párrafo
4. **Transiciones:** Los botones y elementos interactivos usan `transition: all 0.2s ease-in-out` o `0.3s ease-in-out`
5. **Iconos:** Los iconos destacados usan el color `rgb(41, 140, 181)` (#298CB5)

---

## Código para Correos Electrónicos

### HTML Inline Styles
Para usar en correos electrónicos, se recomienda usar estilos inline:

```html
<!-- Texto con fuente principal -->
<p style="font-family: 'Epilogue', Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #232323;">
  Contenido del correo
</p>

<!-- Título principal -->
<h1 style="font-family: 'Epilogue', Arial, sans-serif; font-size: 36px; line-height: 1.1; color: #232323; font-weight: 700;">
  Título Principal
</h1>

<!-- Botón primario -->
<a href="#" style="display: inline-block; padding: 10px 20px; background-color: #298CB5; color: #FFFFFF; text-decoration: none; border-radius: 4px; font-family: 'Epilogue', Arial, sans-serif; font-weight: 600; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);">
  Texto del Botón
</a>

<!-- Enlace con color corporativo -->
<a href="#" style="color: #298CB5; text-decoration: none; font-family: 'Epilogue', Arial, sans-serif;">
  Enlace
</a>
```

### Estructura de Correo Básica
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arjé Partners</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Epilogue', Arial, sans-serif; background-color: #F9FAFB;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F9FAFB;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 4px;">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center;">
              <img src="logo-arje.png" alt="Arjé Partners" style="max-width: 150px; height: auto;">
            </td>
          </tr>

          <!-- Contenido -->
          <tr>
            <td style="padding: 20px 40px;">
              <h1 style="font-family: 'Epilogue', Arial, sans-serif; font-size: 28px; line-height: 1.1; color: #232323; font-weight: 700; margin: 0 0 20px 0;">
                Título del Correo
              </h1>
              <p style="font-family: 'Epilogue', Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #232323; margin: 0 0 20px 0;">
                Contenido del mensaje.
              </p>
            </td>
          </tr>

          <!-- Botón CTA -->
          <tr>
            <td style="padding: 20px 40px; text-align: center;">
              <a href="#" style="display: inline-block; padding: 12px 24px; background-color: #298CB5; color: #FFFFFF; text-decoration: none; border-radius: 4px; font-family: 'Epilogue', Arial, sans-serif; font-weight: 600; font-size: 16px;">
                Llamada a la Acción
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="font-family: 'Epilogue', Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #666666; margin: 0;">
                © 2025 Arjé Partners. Todos los derechos reservados.
              </p>
              <p style="font-family: 'Epilogue', Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #666666; margin: 10px 0 0 0;">
                <a href="mailto:info@arjepartners.com" style="color: #298CB5; text-decoration: none;">info@arjepartners.com</a> |
                <a href="tel:+34915620800" style="color: #298CB5; text-decoration: none;">+34 915 62 08 00</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

### Componentes Reutilizables para Correos

#### Párrafo estándar
```html
<p style="font-family: 'Epilogue', Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #232323; margin: 0 0 20px 0;">
  Texto del párrafo
</p>
```

#### Título H2
```html
<h2 style="font-family: 'Epilogue', Arial, sans-serif; font-size: 24px; line-height: 1.3; color: #232323; font-weight: 600; margin: 0 0 15px 0;">
  Subtítulo
</h2>
```

#### Lista con viñetas
```html
<ul style="font-family: 'Epilogue', Arial, sans-serif; font-size: 16px; line-height: 1.7; color: #232323; margin: 0 0 20px 0; padding-left: 20px;">
  <li style="margin-bottom: 8px;">Elemento 1</li>
  <li style="margin-bottom: 8px;">Elemento 2</li>
  <li style="margin-bottom: 8px;">Elemento 3</li>
</ul>
```

#### Caja destacada (call-out box)
```html
<table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F3F4F6; border-left: 4px solid #298CB5; margin: 20px 0;">
  <tr>
    <td style="padding: 20px;">
      <p style="font-family: 'Epilogue', Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #232323; margin: 0;">
        Información destacada o importante
      </p>
    </td>
  </tr>
</table>
```

---

## Recomendaciones para Correos

1. **Fuentes Seguras:** Incluir `Arial, sans-serif` como fallback después de Epilogue
2. **Tablas:** Usar tablas en lugar de divs para mejor compatibilidad con clientes de correo
3. **Imágenes:** Incluir alt text descriptivo y dimensiones explícitas
4. **Enlaces:** Siempre con color `#298CB5` para mantener consistencia de marca
5. **Espaciado:** Usar padding generoso (mínimo 20px) para legibilidad en móviles
6. **Ancho:** Máximo 600px para correcta visualización en la mayoría de clientes
7. **Testing:** Probar en múltiples clientes de correo (Gmail, Outlook, Apple Mail, etc.)

---

Documento generado: 2025