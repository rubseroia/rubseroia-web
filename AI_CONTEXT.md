# 🤖 AI_CONTEXT — RubseroIA Web Project
## Archivo de contexto para asistentes de IA (Kimi, Claude, ChatGPT, etc.)
## Última actualización: 2026-08-11
## Dominio: rubseroIA.com

---

## 📋 RESUMEN DEL PROYECTO

**RubseroIA** es una empresa de consultoría e implementación de inteligencia artificial para pymes y empresas en España. Su web es una landing page one-page con secciones de servicios, proceso, resultados, precios, FAQ y contacto.

- **Stack:** HTML5, CSS3, Vanilla JS, GitHub Pages, Cloudflare
- **Diseño:** Dark theme (#04060F), acentos en cian (#01FFC2), tipografías Bricolage Grotesque + Inter + Space Mono
- **SEO:** Schema markup completo, meta tags optimizados, sitemap.xml, robots.txt
- **Accesibilidad:** ARIA labels, roles semánticos, navegación por teclado
- **PWA:** manifest.json configurado
- **Analytics:** Google Analytics 4 con 9 eventos de conversión

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
rubseroia-project/
│
├── src/
│   ├── index.html              ← Landing principal (SEO optimizado)
│   ├── 404.html                ← Página de error con branding
│   ├── sitemap.xml             ← Mapa del sitio
│   ├── robots.txt              ← Instrucciones rastreadores
│   ├── manifest.json           ← Configuración PWA
│   ├──
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css        ← Estilos principales (extraídos del inline)
│   │   ├── js/
│   │   │   ├── main.js         ← Scripts de la web (cursor, canvas, animaciones)
│   │   │   └── analytics.js    ← Tracking GA4 con eventos de conversión
│   │   └── img/
│   │       ├── og-image.jpg    ← 1200×630 (COMPARTIR EN REDES) ⚠️ PENDIENTE
│   │       ├── icon-192.png    ← Icono PWA ⚠️ PENDIENTE
│   │       ├── icon-512.png    ← Icono PWA ⚠️ PENDIENTE
│   │       └── logo.png        ← Logo para Schema ⚠️ PENDIENTE
│   ├──
│   ├── privacidad/
│   │   └── index.html          ← Política de privacidad RGPD completa
│   ├──
│   ├── blog/                   ← Posts del blog (carpeta vacía, futuro)
│   └── casos-exito/            ← Casos de estudio (carpeta vacía, futuro)
│
├── .github/
│   └── workflows/
│       └── deploy.yml          ← CI/CD: minifica y despliega a GitHub Pages
│
├── docs/
│   ├── arquitectura.md         ← Plan de arquitectura auto-escalable
│   ├── auditoria_SEO.md       ← Auditoría técnica con 24 puntos
│   └── mejoras_pendientes.md   ← 20 tareas que requieren acceso externo
│
├── seo/
│   ├── meta_tags.html          ← Meta tags de referencia
│   └── schema_markup.html      ← Schemas JSON-LD de referencia
│
└── README.md                   ← Documentación del proyecto
```

---

## 🎨 PALETA DE COLORES

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#04060F` | Fondo principal |
| `--bg2` | `#080D1C` | Fondo secundario (proceso, FAQ) |
| `--g1` | `#01FFC2` | Acento principal (CTAs, tags, cursor) |
| `--g2` | `#7B3FFF` | Acento secundario (gradientes) |
| `--g3` | `#FF2D6B` | Acento terciario (gradientes) |
| `--text` | `#E8EEFF` | Texto principal |
| `--text2` | `#6B7FAA` | Texto secundario |
| `--text3` | `#2E3A58` | Texto terciario/marquee |
| `--border` | `rgba(255,255,255,0.07)` | Bordes |
| `--card` | `rgba(255,255,255,0.035)` | Fondos de tarjetas |

---

## 🔤 TIPOGRAFÍAS

| Fuente | Uso | Peso |
|--------|-----|------|
| Bricolage Grotesque | Títulos, logo, precios, stats | 400, 500, 700, 800 |
| Inter | Cuerpo de texto, formularios | 300, 400, 500 |
| Space Mono | Tags, números, labels | 400, 700 |

---

## 🏗️ SECCIONES DE LA WEB

| ID | Nombre | Contenido |
|----|--------|-----------|
| `nav` | Navegación | Logo + links + CTA |
| `hero` | Hero | H1 + sub + 2 CTAs + blobs animados |
| `marquee` | Sectores | 10 sectores en scroll infinito |
| `servicios` | Servicios | 6 tarjetas de servicios en grid 2×3 |
| `proceso` | Proceso | 4 pasos en grid horizontal |
| `resultados` | Resultados | 4 stats + 3 testimonios |
| `precios` | Precios | 3 planes (Starter €497, Pro €1.197, Enterprise) |
| `faq` | FAQ | 5 preguntas acordeón |
| `contacto` | Contacto | Info + formulario |
| `footer` | Footer | Logo + links + copyright |

---

## ⚙️ FUNCIONALIDADES JS

| Función | Descripción |
|---------|-------------|
| Cursor personalizado | Círculo cian + anillo, sigue al ratón, se expande en hover |
| Canvas partículas | 80 partículas conectadas por líneas, fondo animado |
| SVC glow | Efecto radial al pasar el ratón por tarjetas de servicios |
| Scroll reveal | Elementos `.rv` aparecen al hacer scroll |
| Counter animado | Números de stats animan desde 0 al entrar en viewport |
| FAQ acordeón | Abre/cierra preguntas, solo una abierta a la vez |
| Formulario | Validación básica, mensaje de éxito simulado |
| Menú móvil | Hamburguesa despliega nav en móvil |

---

## 📊 SCHEMAS JSON-LD IMPLEMENTADOS

1. **Organization** — Datos de la empresa
2. **Service** — Catálogo de 6 servicios con descripciones
3. **FAQPage** — 5 preguntas frecuentes
4. **LocalBusiness** + AggregateRating — 5 estrellas, 3 reviews
5. **HowTo** — Proceso de 4 pasos

---

## 🎯 EVENTOS GA4 CONFIGURADOS

| Evento | Trigger | Valor |
|--------|---------|-------|
| `click_cta_consulta` | Click "Consulta gratuita" | 1 |
| `click_cta_servicios` | Click "Ver qué hacemos" | 1 |
| `click_plan_starter` | Click plan Starter | 497 |
| `click_plan_profesional` | Click plan Profesional | 1197 |
| `click_plan_enterprise` | Click plan Enterprise | 0 |
| `formulario_contacto` | Envío formulario | 1 |
| `view_pricing` | Scroll hasta precios | 1 |
| `view_contact` | Scroll hasta contacto | 1 |
| `time_on_page_XXs` | 30s / 60s / 120s en página | 1 |

---

## ⚠️ TAREAS PENDIENTES

### 🔴 Urgentes (requieren acceso al servidor/hosting)
- [ ] Crear imagen OG 1200×630 px
- [ ] Crear iconos PWA 192×192 y 512×512
- [ ] Subir todo a GitHub Pages / hosting
- [ ] Configurar DNS (registros A + CNAME)
- [ ] Configurar Cloudflare (SSL + CDN)
- [ ] Registrar Google Search Console
- [ ] Instalar Google Analytics 4 (reemplazar G-XXXXXXXXXX)
- [ ] Crear Google Business Profile

### 🟡 Importantes
- [ ] Extraer JS de index.html a main.js externo
- [ ] Configurar Formspree/Netlify Forms para el formulario real
- [ ] Añadir banner de cookies RGPD
- [ ] Crear primer post de blog
- [ ] Crear primer caso de éxito

### 🟢 Futuro / Escalabilidad
- [ ] Sistema de blog con plantillas
- [ ] Página de casos de éxito individuales
- [ ] Integración Calendly para reservas
- [ ] Newsletter con captura de emails
- [ ] Backlinks en directorios de empresas

---

## 📝 REGLAS DE ESTILO PARA NUEVO CONTENIDO

Cuando añadas nuevas páginas o secciones:

1. **Mantén la paleta:** No introduzcas nuevos colores. Usa los tokens CSS.
2. **Tipografías:** Títulos = Bricolage Grotesque, Cuerpo = Inter, Mono = Space Mono
3. **Bordes redondeados:** Usa `border-radius: var(--r)` (20px)
4. **Animaciones:** Usa `cubic-bezier(.16,1,.3,1)` para reveals
5. **Accesibilidad:** Siempre añade `aria-label`, `role`, y estructura semántica
6. **SEO:** Cada página nueva necesita title, meta description, canonical, y schema si aplica
7. **Responsive:** Mobile-first, breakpoints en 960px, 820px, 640px

---

## 🔗 ENLACES IMPORTANTES

- **Dominio:** rubseroIA.com
- **Hosting objetivo:** GitHub Pages + Cloudflare
- **Analytics:** Google Analytics 4 (Measurement ID pendiente)
- **Search Console:** Pendiente registro
- **Business Profile:** Pendiente registro

---

## 💬 CÓMO USAR ESTE ARCHIVO

Cuando trabajes con cualquier IA (Kimi, Claude, ChatGPT, etc.):

1. **Pega este archivo completo** al inicio de la conversación
2. **Pega también el archivo específico** que quieres modificar
3. **Pide los cambios** con referencia a las secciones de este contexto

Ejemplo de prompt:
> "Basándote en el AI_CONTEXT de RubseroIA, quiero añadir una nueva sección 
> de 'Blog' al index.html. Usa la paleta de colores y tipografías del proyecto."

---

*Este archivo debe actualizarse cada vez que se hagan cambios significativos al proyecto.*
