# Configuración SMTP para Formulario de Contacto

## 📧 Opciones de Configuración SMTP

### Opción 1: Gmail (Recomendado para desarrollo)

1. **Habilitar acceso de aplicaciones menos seguras** o **usar contraseña de aplicación**

2. **Obtener contraseña de aplicación:**
   - Ve a https://myaccount.google.com/security
   - En "Cómo inicias sesión en Google", selecciona "Contraseñas de aplicaciones"
   - Genera una contraseña para "Correo" / "Otra (nombre personalizado)"
   - Copia la contraseña de 16 caracteres

3. **Configurar `.env.local`:**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-email@gmail.com
SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx  # Contraseña de aplicación
```

### Opción 2: Office 365 / Outlook (Recomendado para producción)

Si tienes un correo corporativo `info@arjepartners.com` en Office 365:

```bash
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@arjepartners.com
SMTP_PASSWORD=tu-contraseña-office365
```

**Nota:** Es posible que necesites habilitar "SMTP AUTH" en la configuración de Exchange Online.

### Opción 3: SMTP Custom

Si tienes tu propio servidor de correo:

```bash
SMTP_HOST=mail.arjepartners.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@arjepartners.com
SMTP_PASSWORD=tu-contraseña
```

## 🚀 Configuración Local

1. Copia el archivo de ejemplo:
```bash
cp .env.example .env.local
```

2. Edita `.env.local` y añade tus credenciales SMTP:
```bash
# Google Analytics (ya configurado)
NEXT_PUBLIC_GA_ID=G-TQQR3H5RF7

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=javier@gmail.com  # TU EMAIL AQUÍ
SMTP_PASSWORD=xxxx xxxx xxxx xxxx  # TU CONTRASEÑA DE APLICACIÓN AQUÍ
```

3. Reinicia el servidor de desarrollo:
```bash
npm run dev
```

4. Prueba el formulario en http://localhost:3000/contacto

## ☁️ Configuración en Vercel (Producción)

1. Ve a tu proyecto en Vercel Dashboard
2. Settings > Environment Variables
3. Añade las siguientes variables:

```
SMTP_HOST = smtp.office365.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = info@arjepartners.com
SMTP_PASSWORD = [tu-contraseña]
```

4. Redeploy el proyecto para aplicar los cambios

## ✅ Verificación

### Test del endpoint

Puedes verificar que el servicio está configurado:

```bash
curl https://arjepartners.com/api/contact
```

Respuesta esperada:
```json
{
  "status": "ok",
  "service": "contact-api",
  "emailConfigured": true,
  "timestamp": "2024-11-07T10:00:00.000Z"
}
```

Si `emailConfigured` es `false`, revisa las variables de entorno.

### Test del formulario

1. Ve a https://arjepartners.com/contacto
2. Rellena el formulario con datos de prueba
3. Verifica que recibes el email en info@arjepartners.com

## 🔍 Troubleshooting

### Error: "Invalid login: 535-5.7.8 Username and Password not accepted"

**Gmail:**
- Asegúrate de usar una **contraseña de aplicación**, no tu contraseña normal
- Verifica que la verificación en dos pasos esté habilitada

**Office 365:**
- Verifica que SMTP AUTH esté habilitado en Exchange Online Admin Center
- Prueba con un usuario específico (no un alias)

### Error: "Connection timeout"

- Verifica que el puerto sea correcto (587 para TLS)
- Algunos proveedores de hosting bloquean el puerto 587, prueba con 465 y `SMTP_SECURE=true`

### Error: "El servicio de contacto no está configurado"

- Las variables de entorno `SMTP_USER` y `SMTP_PASSWORD` no están configuradas
- En local: verifica que `.env.local` existe y tiene los valores
- En Vercel: verifica que las variables estén en Settings > Environment Variables

### Emails no llegan

1. Verifica la carpeta de spam/correo no deseado
2. Comprueba los logs del servidor:
   ```bash
   # En Vercel: Functions > Logs
   # En local: revisa la consola donde corre npm run dev
   ```
3. Prueba enviando un email de test manualmente con las mismas credenciales

## 📝 Formato de Email

El formulario envía un email HTML con:
- 👤 Nombre completo
- 📧 Email (con reply-to automático)
- 🏢 Empresa (opcional)
- 📞 Teléfono (opcional, validado)
- 🖥️ Sistema actual (SAP, Oracle, Custom, etc.)
- 💬 Mensaje
- 📋 Consentimientos (privacidad y comunicaciones)

El destinatario puede responder directamente al email y llegará al remitente original.

## 🔒 Seguridad

- ✅ Validación de formato de email con regex
- ✅ Validación de formato de teléfono (español e internacional)
- ✅ Campos obligatorios: nombre, email, mensaje, privacidad
- ✅ Sanitización de datos para prevenir XSS
- ✅ Rate limiting recomendado (configurar en Vercel)
- ✅ Credenciales SMTP en variables de entorno (nunca en código)

## 📚 Referencias

- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [Office 365 SMTP Settings](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)