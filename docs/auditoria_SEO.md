# ============================================================
# AUDITORÍA SEO TÉCNICA — RubseroIA
# Fecha: 2026-08-11
# URL analizada: https://rubseroIA.com (index.html)
# ============================================================


## 🔴 CRÍTICO — Arreglar urgentemente

### 1. FALTA <h1> EN EL HERO
**Problema:** Tu título principal está dentro de <h1> pero usa <span> internos. 
Google lee bien el texto, pero la estructura semántica puede mejorarse.

**Solución:** Mantén el <h1> pero asegúrate de que el texto sea plano dentro:
```html
<h1>
  <span class="h1-line">Tu negocio</span>
  <span class="h1-line h1-accent">potenciado</span>
  <span class="h1-line">con IA real</span>
</h1>
```
✅ Esto ya está bien, pero verifica que Google no vea los <span> vacíos durante la carga.

### 2. FALTA ATRIBUTO alt EN EL LOGO SVG
**Problema:** El logo SVG no tiene atributo alt ni aria-label.

**Solución:**
```html
<a href="#" class="logo" aria-label="RubseroIA — Inicio">
  <div class="logo-mark" role="img" aria-label="Logo RubseroIA">
```

### 3. FALTA ATRIBUTO lang EN <html>
**Problema:** Ya lo tienes (`<html lang="es">`), ✅ CORRECTO.

### 4. FALTA META DESCRIPTION
**Problema:** No hay `<meta name="description">` en el <head>.

**Solución:** Usa la del archivo 02_meta_tags.html que te generé.

### 5. FALTA CANONICAL TAG
**Problema:** No hay `<link rel="canonical">`.

**Solución:**
```html
<link rel="canonical" href="https://rubseroIA.com/">
```

### 6. FALTA ROBOTS META
**Problema:** No hay `<meta name="robots">`.

**Solución:**
```html
<meta name="robots" content="index, follow">
```

### 7. NO HAY ESTRUCTURA DE ENCABEZADOS (H2, H3)
**Problema:** Las secciones usan <h2 class="sec-title"> pero no hay <h3> para subsecciones.
Los servicios, pasos del proceso y FAQs deberían usar H3.

**Solución:**
- Servicios: cambia `<h3>` a `<h3>` (ya lo tienes, ✅ bien)
- Proceso: cambia `<h3>` a `<h3>` (ya lo tienes, ✅ bien)
- Asegúrate de que no haya saltos de H1 → H4

### 8. IMÁGENES SIN ATRIBUTO alt
**Problema:** No hay imágenes reales (todo es SVG y CSS), pero cuando añadas:
- Foto del equipo
- Capturas de dashboards
- Logo de clientes

**Solución:** Siempre usa alt descriptivo:
```html
<img src="dashboard-ia.jpg" alt="Dashboard de análisis de datos con IA para clínicas dentales">
```

### 9. FALTA SITEMAP.XML REFERENCIADO
**Problema:** No hay referencia al sitemap en el <head> ni en robots.txt.

**Solución:** Añade en <head>:
```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
```
Y crea un archivo `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://rubseroIA.com/sitemap.xml
```


## 🟡 IMPORTANTE — Mejorar para subir posiciones

### 10. VELOCIDAD DE CARGA — JavaScript bloqueante
**Problema:** Todo el JS está al final del body (✅ bien), pero el canvas de partículas 
se ejecuta inmediatamente y puede ralentizar en móviles.

**Solución:** Usa `requestIdleCallback` o carga el canvas solo en desktop:
```javascript
if (!window.matchMedia('(pointer: coarse)').matches) {
  // Inicializar canvas solo en dispositivos con ratón
}
```

### 11. CSS INLINE MUY PESADO
**Problema:** Tienes ~600 líneas de CSS en <style>. Esto bloquea el renderizado 
y penaliza el LCP (Largest Contentful Paint).

**Solución:**
- Extrae el CSS a un archivo externo: `styles.css`
- Usa `<link rel="stylesheet" href="styles.css">`
- O al menos, divide el CSS crítico (above-the-fold) del resto

### 12. FUENTES DE GOOGLE SIN display=swap
**Problema:** Las fuentes de Google pueden bloquear el renderizado.

**Solución:**
```html
<link href="https://fonts.googleapis.com/css2?family=...&display=swap" rel="stylesheet">
```
Ya tienes `display=swap`, ✅ CORRECTO.

### 13. FALTA PRECONNECT A FUENTES
**Problema:** No hay `<link rel="preconnect">` para fonts.googleapis.com.

**Solución:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 14. CURSOR PERSONALIZADO EN MÓVIL
**Problema:** El cursor personalizado (`cursor:none`) en móvil puede causar problemas 
de usabilidad y accesibilidad.

**Solución:** Desactiva en touch devices:
```css
@media (hover: hover) and (pointer: fine) {
  body { cursor: none; }
  #cursor, #cursor-ring { display: block; }
}
@media (hover: none) {
  #cursor, #cursor-ring { display: none !important; }
  body { cursor: auto; }
}
```

### 15. FALTA ATRIBUTO defer/async EN SCRIPTS
**Problema:** Los scripts inline no pueden tener defer, pero si extraes el JS a archivos 
externos, usa defer:

**Solución:**
```html
<script src="main.js" defer></script>
```

### 16. FALTA ATRIBUTO loading="lazy" EN IMÁGENES FUTURAS
Cuando añadas imágenes (testimonios, portfolio), usa:
```html
<img src="caso-exito.jpg" alt="Caso de éxito chatbot IA clínica" loading="lazy">
```

### 17. FALTA WIDTH Y HEIGHT EN IMÁGENES
Previene el CLS (Cumulative Layout Shift). Siempre define:
```html
<img src="logo.png" alt="Logo" width="120" height="40">
```


## 🟢 RECOMENDABLE — Para escalar

### 18. AÑADIR BREADCRUMB SCHEMA
Cuando tengas páginas internas (blog, casos de éxito), añade:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Inicio",
    "item": "https://rubseroIA.com/"
  }]
}
</script>
```

### 19. CREAR PÁGINA 404 PERSONALIZADA
```html
<!-- 404.html -->
<title>Página no encontrada — RubseroIA</title>
<meta name="robots" content="noindex">
<h1>404 — Página no encontrada</h1>
<a href="/">Volver al inicio</a>
```

### 20. AÑADIR MANIFEST.JSON (PWA)
```json
{
  "name": "RubseroIA",
  "short_name": "RubseroIA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#04060F",
  "theme_color": "#01FFC2"
}
```

### 21. COMPRESIÓN GZIP/BROTLI EN SERVIDOR
Activa la compresión en tu hosting (Nginx/Apache) para reducir el tamaño del HTML/CSS/JS.

### 22. CDN PARA ASSETS ESTÁTICOS
Si usas Cloudflare (gratis), activa:
- Caché de estáticos
- Minificación automática de CSS/JS/HTML
- Brotli compression

### 23. GOOGLE SEARCH CONSOLE
Registra tu dominio en:
https://search.google.com/search-console

Y sube el sitemap.xml

### 24. GOOGLE ANALYTICS 4 + EVENTOS
Añade el tracking de GA4 y eventos en los botones CTA:
```javascript
gtag('event', 'click', {
  'event_category': 'CTA',
  'event_label': 'Consulta gratuita'
});
```


## 📊 CHECKLIST RÁPIDO DE IMPLEMENTACIÓN

| # | Tarea | Prioridad | Tiempo estimado |
|---|-------|-----------|-----------------|
| 1 | Añadir meta description | 🔴 CRÍTICO | 2 min |
| 2 | Añadir canonical | 🔴 CRÍTICO | 1 min |
| 3 | Añadir robots meta | 🔴 CRÍTICO | 1 min |
| 4 | Crear sitemap.xml | 🔴 CRÍTICO | 5 min |
| 5 | Crear robots.txt | 🔴 CRÍTICO | 2 min |
| 6 | Pegar Schema Markup | 🔴 CRÍTICO | 5 min |
| 7 | Añadir preconnect fonts | 🟡 IMPORTANTE | 1 min |
| 8 | Extraer CSS a archivo externo | 🟡 IMPORTANTE | 30 min |
| 9 | Desactivar cursor en móvil | 🟡 IMPORTANTE | 5 min |
| 10 | Configurar Cloudflare | 🟢 RECOMENDABLE | 15 min |
| 11 | Registrar Search Console | 🟢 RECOMENDABLE | 10 min |
| 12 | Añadir GA4 | 🟢 RECOMENDABLE | 15 min |


## 🎯 RESULTADO ESPERADO TRAS ESTOS CAMBIOS

- ✅ Google indexará tu web correctamente
- ✅ Aparecerán rich snippets (FAQ, valoraciones, servicios)
- ✅ Mejorará el posicionamiento para "consultoría IA España"
- ✅ Subirá la puntuación de PageSpeed Insights (actualmente probable 60-70, 
     objetivo: 90+)
- ✅ Aumentará el CTR en resultados de búsqueda


## 🔗 HERRAMIENTAS PARA VERIFICAR

1. https://search.google.com/test/rich-results
2. https://validator.schema.org/
3. https://pagespeed.web.dev/
4. https://search.google.com/search-console
5. https://www.semrush.com/siteaudit (gratis limitado)
