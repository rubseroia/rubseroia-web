# ============================================================
# MEJORAS PENDIENTES — RubseroIA
# Estas tareas requieren acceso al servidor/hosting o herramientas externas
# Fecha: 2026-08-11
# ============================================================


## 🔴 CRÍTICO — Hacer esta semana

### 1. SUBIR ARCHIVOS AL SERVIDOR
**Archivos generados que debes subir a la raíz de tu hosting:**

| Archivo | Ruta en servidor | Descripción |
|---------|-----------------|-------------|
| `sitemap.xml` | `/sitemap.xml` | Mapa del sitio para Google |
| `robots.txt` | `/robots.txt` | Instrucciones para rastreadores |
| `manifest.json` | `/manifest.json` | Configuración PWA |
| `index_mejorado.html` | `/index.html` | Reemplaza tu HTML actual |

**Instrucciones:**
1. Descarga los 4 archivos de esta carpeta
2. Súbelos vía FTP, SFTP o panel de control de tu hosting
3. Si usas GitHub Pages, haz commit y push
4. Verifica que `https://rubseroIA.com/sitemap.xml` cargue correctamente

---

### 2. CREAR IMAGEN OG (Open Graph)
**Qué necesitas:** Una imagen de 1200×630 px que se muestre al compartir tu web.

**Contenido recomendado:**
- Logo RubseroIA centrado
- Texto: "IA para tu Negocio — Consulta Gratis"
- Fondo oscuro con gradiente (coincide con tu branding)
- Tipografía: Bricolage Grotesque

**Herramientas para crearla:**
- Canva (gratis): https://www.canva.com
- Figma (gratis): https://www.figma.com
- Adobe Express (gratis): https://www.adobe.com/express

**Ruta donde subirla:** `/img/og-image.jpg`

**Verificación:** https://developers.facebook.com/tools/debug/

---

### 3. CREAR ICONOS PWA
Necesitas 2 iconos para el manifest.json:
- `/img/icon-192.png` (192×192 px)
- `/img/icon-512.png` (512×512 px)

**Generador gratuito:** https://favicon.io/ o https://realfavicongenerator.net/

---

### 4. CONFIGURAR GOOGLE SEARCH CONSOLE
**Pasos:**
1. Ve a https://search.google.com/search-console
2. Añade tu propiedad: `rubseroIA.com`
3. Verifica la propiedad (método recomendado: archivo HTML o tag meta)
4. Ve a "Sitemaps" en el menú lateral
5. Añade: `sitemap.xml`
6. Espera 24-48h para que Google empiece a rastrear

**Monitorea regularmente:**
- Errores de rastreo
- Palabras clave por las que te encuentran
- Core Web Vitals

---

### 5. CONFIGURAR CLOUDFLARE (GRATIS)
**Beneficios:**
- CDN global (tu web carga más rápido en toda España)
- Compresión Brotli automática
- Minificación de CSS/JS/HTML
- SSL/TLS gratuito (HTTPS)
- Protección DDoS

**Pasos:**
1. Crea cuenta en https://dash.cloudflare.com/sign-up
2. Añade tu dominio `rubseroIA.com`
3. Cloudflare te dará 2 nameservers
4. Ve a tu registrador de dominio (donde compraste rubseroIA.com)
5. Cambia los nameservers por los de Cloudflare
6. Espera 24h a que se propaguen los DNS
7. En Cloudflare, activa:
   - SSL/TLS → Flexible o Full
   - Speed → Auto Minify (CSS, JS, HTML)
   - Speed → Brotli: ON
   - Caching → Browser Cache TTL: 1 month

---


## 🟡 IMPORTANTE — Hacer este mes

### 6. EXTRAER CSS A ARCHIVO EXTERNO
**Problema actual:** El CSS inline (~600 líneas) bloquea el renderizado.

**Solución:**
1. Crea un archivo `styles.css` con TODO el contenido de `<style>`
2. En el HTML, reemplaza `<style>...</style>` por:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. Para optimizar LCP (Largest Contentful Paint), puedes mantener inline 
   solo el CSS "above the fold" (hero + nav) y el resto en el archivo externo.

**Alternativa rápida:** Si usas Cloudflare, activa "Auto Minify" y no 
hace falta extraerlo todavía. El inline es aceptable para una landing SPA.

---

### 7. INSTALAR GOOGLE ANALYTICS 4
**Pasos:**
1. Ve a https://analytics.google.com
2. Crea una propiedad para `rubseroIA.com`
3. Obtén el Measurement ID (ej: `G-XXXXXXXXXX`)
4. Añade este código en el `<head>`, justo después de las meta tags:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Eventos recomendados para trackear:**
- Click en "Consulta gratuita"
- Click en "Empezar ahora" (plan Starter)
- Click en "Empezar ahora" (plan Profesional)
- Envío del formulario de contacto
- Scroll hasta la sección de precios

---

### 8. CREAR PÁGINA 404 PERSONALIZADA
Crea un archivo `404.html` en la raíz:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Página no encontrada — RubseroIA</title>
  <meta name="robots" content="noindex">
  <style>
    body{background:#04060F;color:#E8EEFF;font-family:'Inter',sans-serif;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    min-height:100vh;text-align:center;padding:2rem}
    h1{font-family:'Bricolage Grotesque',sans-serif;font-size:3rem;margin-bottom:1rem}
    p{color:#6B7FAA;margin-bottom:2rem}
    a{color:#01FFC2;text-decoration:none;font-weight:600}
    a:hover{text-decoration:underline}
  </style>
</head>
<body>
  <h1>404</h1>
  <p>Esta página no existe. Pero podemos crearla con IA.</p>
  <a href="/">← Volver al inicio</a>
</body>
</html>
```

**Configuración en servidor:**
- **Apache:** Añade a `.htaccess`: `ErrorDocument 404 /404.html`
- **Nginx:** Añade a `nginx.conf`:
  ```
  error_page 404 /404.html;
  location = /404.html {
    internal;
  }
  ```
- **Cloudflare Pages / Netlify / Vercel:** El archivo `404.html` en raíz funciona automáticamente.

---

### 9. CREAR PÁGINA DE PRIVACIDAD
Tu footer enlaza a `#` en "Privacidad". Necesitas una página real:

Crea `/privacidad/index.html` con:
- Política de privacidad básica (cumplimiento RGPD)
- Uso de cookies (si añades GA4, necesitas banner de cookies)
- Datos de contacto del responsable
- Derechos del usuario (acceso, rectificación, supresión)

**Generador gratuito:** https://www.aepd.es/es/pguias/privacidad

---

### 10. CONFIGURAR HTTPS (SSL/TLS)
Si aún no tienes HTTPS:
1. Si usas Cloudflare → SSL gratuito automático
2. Si usas Let's Encrypt (hosting propio):
   ```bash
   certbot --nginx -d rubseroIA.com -d www.rubseroIA.com
   ```
3. Redirige HTTP → HTTPS:
   ```apache
   # .htaccess
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

---

### 11. REDIRECCIÓN WWW → NO-WWW (o viceversa)
Elige una versión canónica y redirige la otra:

```apache
# Si tu canonical es sin www, redirige www → sin www
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.rubseroia\.es$ [NC]
RewriteRule ^(.*)$ https://rubseroIA.com/$1 [L,R=301]
```

---

### 12. COMPRESIÓN GZIP/BROTLI EN SERVIDOR
Si NO usas Cloudflare, configura compresión en tu servidor:

**Apache (.htaccess):**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

**Nginx (nginx.conf):**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml;
```

---


## 🟢 RECOMENDABLE — Para escalar

### 13. CREAR BLOG / SECCIÓN DE CONTENIDO
Google premia sitios con contenido fresco. Ideas de posts:
- "Cómo implementar un chatbot IA en tu clínica dental"
- "5 tareas que puedes automatizar con IA este mes"
- "Guía: IA para pymes en España 2026"
- "Caso de éxito: +73% productividad con automatización"

**Estructura recomendada:**
```
/blog/
  /index.html           (listado de posts)
  /chatbot-clinica/     (post individual)
  /automatizar-tareas/  (post individual)
```

---

### 14. CREAR PÁGINA "CASOS DE ÉXITO"
Convierte los testimonios en casos de estudio completos:
- Problema del cliente
- Solución implementada
- Resultados concretos (números)
- Testimonio en video (ideal)

Esto mejora la autoridad de dominio y la tasa de conversión.

---

### 15. IMPLEMENTAR COOKIES BANNER (RGPD)
Si instalas GA4 o cualquier script de terceros, necesitas:
- Banner de cookies al entrar
- Opción de rechazar cookies no esenciales
- Política de cookies enlazada

**Herramientas gratuitas:**
- CookieYes: https://www.cookieyes.com/
- Cookiebot: https://www.cookiebot.com/
- Osano: https://www.osano.com/

---

### 16. BACKLINKS (ENLACES ENTRANTES)
Estrategias para conseguir enlaces:
- Regístrate en directorios de empresas: Google Business, Yelp, Bing Places
- Publica artículos en LinkedIn con enlace a tu web
- Colabora con blogs del sector tecnológico
- Participa en foros como Reddit r/Spain o Forocoches (con valor real)
- Pide enlaces a tus clientes satisfechos ("As seen on...")

---

### 17. GOOGLE BUSINESS PROFILE
Crea tu ficha en Google:
https://business.google.com/

Beneficios:
- Apareces en Google Maps
- Reviews visibles en búsquedas locales
- Mejor posicionamiento local para "consultoría IA Valencia"

---

### 18. VELOCIDAD: OPTIMIZAR IMÁGENES FUTURAS
Cuando añadas imágenes reales:
- Formato: WebP (con fallback JPG)
- Tamaño máximo: 200 KB por imagen
- Dimensiones exactas (no escalar con CSS)
- Atributos `width` y `height` siempre
- `loading="lazy"` para imágenes below-the-fold
- `decoding="async"` para imágenes above-the-fold

**Herramienta:** Squoosh (Google) — https://squoosh.app/

---

### 19. MONITORIZAR CON GTmetrix / PageSpeed
Revisa mensualmente:
- https://gtmetrix.com/
- https://pagespeed.web.dev/

Objetivos:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

### 20. AÑADIR CALENDLY / AGENDAMIENTO
En lugar de solo un formulario, añade opción de reservar cita directa:
- Calendly (gratis): https://calendly.com/
- Google Calendar Appointment Slots
- Microsoft Bookings

Esto reduce fricción y aumenta conversiones.

---


## 📋 CHECKLIST DE IMPLEMENTACIÓN

| # | Tarea | Prioridad | Herramienta/Skill necesaria | Tiempo |
|---|-------|-----------|----------------------------|--------|
| 1 | Subir archivos al servidor | 🔴 | FTP/cPanel/Git | 10 min |
| 2 | Crear imagen OG 1200×630 | 🔴 | Canva/Figma | 30 min |
| 3 | Crear iconos PWA | 🔴 | favicon.io | 10 min |
| 4 | Google Search Console | 🔴 | Google | 15 min |
| 5 | Cloudflare | 🔴 | Cloudflare + DNS | 30 min |
| 6 | Extraer CSS externo | 🟡 | Editor de código | 20 min |
| 7 | Google Analytics 4 | 🟡 | Google | 20 min |
| 8 | Página 404 | 🟡 | Editor de código | 15 min |
| 9 | Página de privacidad | 🟡 | Generador AEPD | 20 min |
| 10 | HTTPS + redirect | 🟡 | certbot / Cloudflare | 15 min |
| 11 | Redirección www | 🟡 | .htaccess / nginx | 5 min |
| 12 | Compresión Gzip | 🟡 | Servidor / Cloudflare | 10 min |
| 13 | Blog de contenido | 🟢 | CMS o HTML manual | 2h/post |
| 14 | Casos de éxito | 🟢 | Editor de código | 2h |
| 15 | Banner cookies RGPD | 🟢 | CookieYes | 15 min |
| 16 | Backlinks | 🟢 | Networking manual | Continuo |
| 17 | Google Business | 🟢 | Google | 20 min |
| 18 | Optimizar imágenes | 🟢 | Squoosh | 10 min |
| 19 | Monitorizar velocidad | 🟢 | PageSpeed | 10 min/mes |
| 20 | Calendly | 🟢 | Calendly | 15 min |


## 🔗 ENLACES ÚTILES

- Validar Schema: https://validator.schema.org/
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- SSL Checker: https://www.ssllabs.com/ssltest/
- DNS Checker: https://dnschecker.org/
- GTmetrix: https://gtmetrix.com/
