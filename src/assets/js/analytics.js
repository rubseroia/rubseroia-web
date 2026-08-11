/* =========================================================
   RubseroIA — Google Analytics 4 Tracking
   Reemplaza G-XXXXXXXXXX con tu Measurement ID real
   ========================================================= */

// Configuración GA4
gtag('config', 'G-XXXXXXXXXX', {
  page_title: document.title,
  page_location: window.location.href,
  send_page_view: true,
  custom_map: {
    'custom_parameter_1': 'service_interest'
  }
});

// =========================================================
// EVENTOS DE CONVERSIÓN
// =========================================================

document.addEventListener('DOMContentLoaded', function() {

  // 1. Click en CTA principal "Consulta gratuita"
  const ctaMain = document.querySelector('.cta-main');
  if (ctaMain) {
    ctaMain.addEventListener('click', function() {
      gtag('event', 'click_cta_consulta', {
        event_category: 'conversion',
        event_label: 'Hero - Consulta gratuita',
        value: 1
      });
    });
  }

  // 2. Click en "Ver qué hacemos"
  const ctaGhost = document.querySelector('.cta-ghost');
  if (ctaGhost) {
    ctaGhost.addEventListener('click', function() {
      gtag('event', 'click_cta_servicios', {
        event_category: 'engagement',
        event_label: 'Hero - Ver servicios',
        value: 1
      });
    });
  }

  // 3. Click en plan Starter
  const planStarter = document.querySelector('[aria-label="Contratar plan Starter"]');
  if (planStarter) {
    planStarter.addEventListener('click', function() {
      gtag('event', 'click_plan_starter', {
        event_category: 'conversion',
        event_label: 'Plan Starter',
        value: 497
      });
    });
  }

  // 4. Click en plan Profesional (más popular)
  const planPro = document.querySelector('[aria-label="Contratar plan Profesional"]');
  if (planPro) {
    planPro.addEventListener('click', function() {
      gtag('event', 'click_plan_profesional', {
        event_category: 'conversion',
        event_label: 'Plan Profesional',
        value: 1197
      });
    });
  }

  // 5. Click en plan Enterprise
  const planEnterprise = document.querySelector('[aria-label="Contactar para plan Enterprise"]');
  if (planEnterprise) {
    planEnterprise.addEventListener('click', function() {
      gtag('event', 'click_plan_enterprise', {
        event_category: 'conversion',
        event_label: 'Plan Enterprise',
        value: 0
      });
    });
  }

  // 6. Envío del formulario de contacto
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function() {
      const servicio = document.getElementById('sv')?.value || 'No especificado';
      gtag('event', 'formulario_contacto', {
        event_category: 'conversion',
        event_label: 'Formulario enviado',
        service_interest: servicio,
        value: 1
      });
    });
  }

  // 7. Scroll hasta sección de precios (intención de compra)
  let pricingViewed = false;
  const pricingSection = document.getElementById('precios');
  if (pricingSection) {
    const pricingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !pricingViewed) {
          pricingViewed = true;
          gtag('event', 'view_pricing', {
            event_category: 'engagement',
            event_label: 'Usuario vio precios',
            value: 1
          });
        }
      });
    }, { threshold: 0.5 });
    pricingObserver.observe(pricingSection);
  }

  // 8. Scroll hasta sección de contacto (alta intención)
  let contactViewed = false;
  const contactSection = document.getElementById('contacto');
  if (contactSection) {
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !contactViewed) {
          contactViewed = true;
          gtag('event', 'view_contact', {
            event_category: 'engagement',
            event_label: 'Usuario vio contacto',
            value: 1
          });
        }
      });
    }, { threshold: 0.5 });
    contactObserver.observe(contactSection);
  }

  // 9. Tiempo en página (engagement)
  setTimeout(() => {
    gtag('event', 'time_on_page_30s', {
      event_category: 'engagement',
      event_label: '30 segundos en página',
      value: 1
    });
  }, 30000);

  setTimeout(() => {
    gtag('event', 'time_on_page_60s', {
      event_category: 'engagement',
      event_label: '60 segundos en página',
      value: 1
    });
  }, 60000);

  setTimeout(() => {
    gtag('event', 'time_on_page_120s', {
      event_category: 'engagement',
      event_label: '120 segundos en página',
      value: 1
    });
  }, 120000);

});
