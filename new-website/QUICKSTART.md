# 🚀 Quick Start - Nueva Web Arjé Partners

## 1. Instalar Dependencias

```bash
cd /Users/javiergimeno/entornos/ArjeWeb/new-website
npm install
```

## 2. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abre tu navegador en **http://localhost:3000**

## 3. Páginas Disponibles

- **/** - Home (Hero, Value Prop, Integración, Clientes, CTA)
- **/nosotros** - Sobre la empresa
- **/servicios** - Servicios ofrecidos
- **/insights** - Blog con artículos
- **/insights/ia-produccion-treasury** - Ejemplo de artículo
- **/contacto** - Formulario de contacto

## 4. Revisar y Editar

### Textos
Todos los textos están en los archivos `.tsx` de cada página en `app/`

### Colores
Editar `tailwind.config.ts` para cambiar la paleta

### Artículos
- Lista: `app/insights/page.tsx`
- Contenido: `app/insights/[slug]/page.tsx`

## 5. Build para Producción

```bash
npm run build
```

Genera la carpeta `out/` con archivos estáticos listos para publicar.

## 6. Preview del Build

```bash
npm run start
```

Sirve el build de producción localmente.

## 📋 Checklist de Revisión

- [ ] Revisar Home - ¿Te gusta el diseño?
- [ ] Revisar Insights - ¿Funciona el listado?
- [ ] Revisar artículo individual - ¿Se ve bien?
- [ ] Revisar Nosotros - ¿Contenido correcto?
- [ ] Revisar Servicios - ¿Faltan servicios?
- [ ] Revisar Contacto - ¿Formulario completo?
- [ ] Probar en mobile - ¿Responsive OK?
- [ ] Revisar colores - ¿Armonizan con el logo?
- [ ] Revisar animaciones - ¿Demasiado? ¿Muy poco?

## 🎨 Comparación con Referencias

Esta web está inspirada en:

- **OpenAI** - Hero limpio, gradientes sutiles
- **Clay** - Secciones con mucho espacio, badges informativos
- **Cohere** - Stats prominentes, CTAs claros

## ✏️ Próximos Pasos Sugeridos

1. Revisar TODO el contenido
2. Añadir imágenes reales (productos, equipo)
3. Integrar formulario de contacto con backend
4. Añadir más artículos a Insights
5. Configurar Google Analytics
6. Optimizar SEO
7. Deploy cuando estés 100% satisfecho

## 🆘 ¿Algo no funciona?

### Errores de compilación
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado
```bash
npm run dev -- -p 3001
```

### Cambios no se ven
- Guardar el archivo
- Esperar hot-reload (2-3 segundos)
- Si no, recargar navegador (Cmd+R)

---

**¿Listo para publicar?** Lee `DEPLOYMENT.md`
