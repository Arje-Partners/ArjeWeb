# Arjé Partners - Nueva Web 🚀

Web moderna inspirada en OpenAI, Clay y Cohere, construida con Next.js 14, TypeScript y Tailwind CSS.

## 🎨 Diseño

**Inspiración:** OpenAI, Clay, Cohere
- Diseño limpio y minimalista
- Animaciones sutiles y profesionales
- Enfoque en contenido y legibilidad
- Responsive 100%

**Colores:**
- Azul Principal: `#298CB5`
- Azul Claro: `#3BA3D0`
- Azul Oscuro: `#1F6D8C`

## 📦 Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** CSS + Tailwind
- **Deployment:** Static Export (compatible con GitHub Pages)

## 🚀 Instalación

```bash
cd new-website
npm install
```

## 💻 Desarrollo

```bash
npm run dev
```

La web estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
new-website/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Home
│   ├── nosotros/page.tsx       # Nosotros
│   ├── servicios/page.tsx      # Servicios
│   ├── contacto/page.tsx       # Contacto
│   ├── insights/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Artículo individual
│   └── globals.css             # Estilos globales
├── components/
│   ├── Navbar.tsx              # Navegación
│   ├── Footer.tsx              # Footer
│   └── sections/
│       ├── Hero.tsx            # Hero section
│       ├── ValueProposition.tsx
│       ├── Integration.tsx
│       ├── Clients.tsx
│       └── CTA.tsx
├── public/
│   └── images/                 # Logos e imágenes
└── tailwind.config.ts
```

## 📄 Páginas

### Home `/`
- Hero con animaciones
- Value proposition
- Tipos de integración
- Clientes y testimonios
- CTA final

### Insights `/insights`
- Listado de artículos
- Categorías
- Búsqueda/filtrado
- Newsletter signup

### Artículo Individual `/insights/[slug]`
- Contenido del artículo
- Meta información
- CTA de contacto
- Related articles (futuro)

### Nosotros `/nosotros`
- Misión y valores
- Equipo
- Estadísticas

### Servicios `/servicios`
- 4 servicios principales
- Proceso de implementación
- CTA demo

### Contacto `/contacto`
- Formulario de contacto
- Información de contacto
- Mapa de ubicación

## 🎨 Características de Diseño

### Animaciones
- Fade in on scroll
- Slide up effects
- Hover transformations
- Gradient animations

### Componentes Reutilizables
- Botones con hover effects
- Cards con sombras dinámicas
- Badges y tags
- Grid layouts responsive

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Navegación móvil hamburger
- Imágenes optimizadas

## 🚢 Deployment

### Build para Producción

```bash
npm run build
```

Esto genera la carpeta `out/` con archivos estáticos listos para deployment.

### Opciones de Deployment

#### 1. GitHub Pages
```bash
# El contenido de 'out/' se puede subir directamente a GitHub Pages
```

#### 2. Vercel (Recomendado)
```bash
# Conecta el repo y Vercel hace deployment automático
```

#### 3. Netlify
```bash
# Arrastra la carpeta 'out/' al dashboard de Netlify
```

## 📝 Agregar Nuevo Contenido

### Nuevo Artículo en Insights

1. Añadir metadata del artículo en `/app/insights/page.tsx`:
```typescript
{
  id: "mi-nuevo-articulo",
  title: "Título del Artículo",
  excerpt: "Resumen...",
  date: "2025-10-04",
  category: "Categoría",
  readTime: "5 min",
  tags: ["tag1", "tag2"]
}
```

2. Añadir contenido completo en `/app/insights/[slug]/page.tsx` en el objeto `articles`:
```typescript
"mi-nuevo-articulo": {
  title: "...",
  content: `Contenido en Markdown...`
}
```

### Futuro: CMS Integration
Para gestión de contenido más fácil, se puede integrar:
- **Contentful**
- **Sanity**
- **Strapi**
- **WordPress Headless**

## 🔧 Configuración

### Colores Personalizados
Editar `tailwind.config.ts`:
```typescript
colors: {
  arje: {
    blue: '#298CB5',
    // ...
  }
}
```

### SEO
Editar `app/layout.tsx` para metadata global
Editar cada página para metadata específica

## ✅ Checklist Pre-Lanzamiento

- [ ] Revisar todos los textos y contenidos
- [ ] Verificar links internos funcionan
- [ ] Probar formulario de contacto
- [ ] Optimizar imágenes
- [ ] Configurar Google Analytics
- [ ] Añadir favicon personalizado
- [ ] Verificar responsive en todos los dispositivos
- [ ] Probar en diferentes navegadores
- [ ] Configurar redirects (index.html -> inicio.html)
- [ ] Backup de la web actual

## 📞 Soporte

Para preguntas o issues: info@arjepartners.com

---

**Versión:** 1.0.0
**Última actualización:** 2025-10-04
**Desarrollado con ❤️ para Arjé Partners**
