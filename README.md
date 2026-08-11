# 🚀 RubseroIA — Web Oficial

> Consultoría e implementación de inteligencia artificial para empresas en España.

**Dominio:** [https://rubseroIA.com](https://rubseroIA.com)

---

## 📁 Estructura del proyecto

```
rubseroia-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD automático a GitHub Pages
│
├── src/
│   ├── index.html              # Landing principal (optimizada SEO)
│   ├── 404.html                # Página de error personalizada
│   ├── privacidad/
│   │   └── index.html          # Política de privacidad RGPD
│   ├── blog/                   # Posts del blog (futuro)
│   ├── casos-exito/            # Casos de estudio (futuro)
│   └── assets/
│       ├── css/
│       │   └── main.css        # Estilos principales
│       ├── js/
│       │   ├── main.js         # Scripts de la web
│       │   └── analytics.js    # Tracking GA4 con eventos
│       └── img/                # Imágenes del sitio
│
├── sitemap.xml                 # Mapa del sitio para Google
├── robots.txt                  # Instrucciones para rastreadores
├── manifest.json               # Configuración PWA
└── README.md                   # Este archivo
```

---

## 🚀 Despliegue automático

Cada vez que hagas `push` a la rama `main`, GitHub Actions:

1. Minifica CSS y JS automáticamente
2. Copia todos los archivos estáticos
3. Despliega a GitHub Pages

**URL del sitio:** `https://rubseroIA.com`

---

## 🛠️ Configuración inicial (solo una vez)

### 1. Crear repositorio en GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/rubseroia-web.git
git push -u origin main
```

### 2. Activar GitHub Pages
1. Ve a **Settings** → **Pages** en tu repo
2. Source: **GitHub Actions**
3. Guarda

### 3. Configurar dominio personalizado
1. Ve a **Settings** → **Pages** → **Custom domain**
2. Escribe: `rubseroIA.com`
3. Guarda

### 4. Configurar DNS (en tu registrador de dominio)
Añade estos registros DNS:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | TU_USUARIO.github.io |

### 5. Configurar Cloudflare (recomendado)
1. Crea cuenta en [cloudflare.com](https://cloudflare.com)
2. Añade tu dominio `rubseroIA.com`
3. Cambia los nameservers en tu registrador por los de Cloudflare
4. Activa:
   - SSL/TLS: **Full (strict)**
   - Speed → Auto Minify: CSS, JS, HTML
   - Speed → Brotli: **ON**
   - Caching → Browser Cache TTL: **1 month**

### 6. Google Search Console
1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Añade propiedad: `rubseroIA.com`
3. Verifica mediante archivo HTML o tag meta
4. Ve a **Sitemaps** → Añade `sitemap.xml`

### 7. Google Analytics 4
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea propiedad para `rubseroIA.com`
3. Copia el Measurement ID (ej: `G-XXXXXXXXXX`)
4. Reemplaza `G-XXXXXXXXXX` en `src/assets/js/analytics.js`
5. Añade el script de GA4 en el `<head>` de `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📸 Imágenes necesarias

Sube estas imágenes a `src/assets/img/`:

| Archivo | Tamaño | Uso |
|---------|--------|-----|
| `og-image.jpg` | 1200×630 px | Compartir en redes sociales |
| `icon-192.png` | 192×192 px | Icono PWA |
| `icon-512.png` | 512×512 px | Icono PWA |
| `logo.png` | 200×200 px | Schema markup / Google Business |

**Generadores gratuitos:**
- [favicon.io](https://favicon.io) — Iconos PWA
- [Canva](https://canva.com) — Imagen OG

---

## 📝 Añadir nuevo contenido

### Nuevo post de blog
1. Crea `src/blog/nombre-del-post/index.html`
2. Usa la plantilla de blog (ver `docs/blog-template.html`)
3. Añade la URL al `sitemap.xml`
4. Haz `git push`

### Nuevo caso de éxito
1. Crea `src/casos-exito/nombre-caso/index.html`
2. Incluye: problema, solución, resultados, testimonio
3. Añade al `sitemap.xml`
4. Haz `git push`

---

## 📊 Métricas a seguir

| Métrica | Herramienta | Frecuencia |
|---------|-------------|------------|
| Tráfico orgánico | Google Search Console | Semanal |
| Conversiones | Google Analytics 4 | Semanal |
| Velocidad web | PageSpeed Insights | Mensual |
| Core Web Vitals | Search Console | Mensual |
| Posición keywords | Search Console | Mensual |

---

## 🔗 Enlaces útiles

- [Validar Schema](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 📄 Licencia

© 2026 RubseroIA. Todos los derechos reservados.
