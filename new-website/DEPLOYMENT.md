# 🚀 Guía de Deployment

## Pre-requisitos

1. ✅ Revisar toda la web en local
2. ✅ Probar en diferentes dispositivos
3. ✅ Backup de la web actual

## Opción 1: GitHub Pages (Actual)

### Paso 1: Build
```bash
cd new-website
npm install
npm run build
```

### Paso 2: Reemplazar contenido
```bash
# Hacer backup de la web actual
cd ..
mkdir backup-$(date +%Y%m%d)
cp *.html backup-*/
cp -r assets backup-*/

# Copiar nueva web
cp -r new-website/out/* .

# Verificar
ls -la
```

### Paso 3: Commit y Push
```bash
git add .
git commit -m "Nueva web moderna - Rediseño completo"
git push origin main
```

La web se actualizará automáticamente en `arjepartners.com`

## Opción 2: Vercel (Recomendado)

### Ventajas
- Deployment automático en cada push
- Preview deployments para cada PR
- CDN global
- Analytics incluido
- Zero config

### Pasos

1. **Conectar repo a Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Import git repository
   - Seleccionar `ArjeWeb`

2. **Configurar proyecto**
   - Framework Preset: `Next.js`
   - Root Directory: `new-website`
   - Build Command: `npm run build` (auto-detectado)
   - Output Directory: `out` (auto-detectado)

3. **Variables de entorno** (si las hay)
   ```
   NEXT_PUBLIC_SITE_URL=https://arjepartners.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Esperar ~2 minutos
   - ✅ Listo!

5. **Configurar dominio custom**
   - Settings > Domains
   - Añadir `arjepartners.com`
   - Seguir instrucciones de DNS

## Opción 3: Netlify

Similar a Vercel pero con interfaz diferente:

1. Drag & drop de la carpeta `out/` al dashboard
2. O conectar con GitHub para auto-deploy

## Mantenimiento Post-Deploy

### Monitoreo
- Verificar que todos los links funcionen
- Probar formulario de contacto
- Revisar Analytics

### Actualizaciones futuras
Cualquier cambio en el código:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Vercel/Netlify harán deploy automático.
GitHub Pages requiere re-build manual.

## Rollback (Si algo sale mal)

### GitHub Pages
```bash
git revert HEAD
git push origin main

# O restaurar backup
cp -r backup-YYYYMMDD/* .
git add .
git commit -m "Rollback a versión anterior"
git push
```

### Vercel/Netlify
- Ir al dashboard
- Deployments
- Click en deployment anterior
- "Promote to Production"

## Checklist Post-Deploy

- [ ] Verificar Home carga correctamente
- [ ] Probar todas las páginas
- [ ] Verificar links internos
- [ ] Probar formulario de contacto
- [ ] Verificar en mobile
- [ ] Verificar en diferentes navegadores
- [ ] Google Search Console (submit sitemap)
- [ ] Configurar Google Analytics
- [ ] Configurar email para formulario

## Troubleshooting

### Imágenes no cargan
- Verificar rutas en `/public/images/`
- Verificar Image optimization está desactivado en Next.js config

### 404 en rutas
- Verificar `output: 'export'` en `next.config.ts`
- Verificar `trailingSlash: true`

### Estilos no se aplican
- Verificar build completo
- Limpiar caché: `rm -rf .next && npm run build`

---

¿Dudas? Contacta al equipo de desarrollo.