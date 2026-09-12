/* =========================================================
   RubseroIA — Google Analytics 4 Tracking
   El Measurement ID y la carga de gtag.js viven en el <head> de
   index.html. Este archivo solo define los eventos de conversión.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // ---------- Eventos por clic (data-event en el HTML) ----------
  // Elementos marcados con [data-event] en index.html:
  //   cta_hero_click, cta_hero_secondary, cta_nav_click,
  //   cta_pricing_starter, cta_pricing_pro, cta_pricing_enterprise,
  //   cta_whatsapp_click, cta_email_click
  document.querySelectorAll("[data-event]").forEach(function (el) {
    el.addEventListener("click", function () {
      var eventName = el.getAttribute("data-event");
      if (typeof gtag === "function") {
        gtag("event", eventName, {
          event_category: "conversion",
          event_label: el.textContent.trim()
        });
      } else {
        console.log("[tracking] " + eventName + " (GA4 aún no instalado)");
      }
    });
  });

  // ---------- Vista de la sección de precios (intención de compra) ----------
  var pricingSection = document.getElementById("precios");
  if (pricingSection && "IntersectionObserver" in window) {
    var pricingViewed = false;
    var pricingObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !pricingViewed) {
            pricingViewed = true;
            if (typeof gtag === "function") {
              gtag("event", "view_pricing", {
                event_category: "engagement",
                event_label: "Usuario vio precios"
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    pricingObserver.observe(pricingSection);
  }

  // ---------- Vista de la sección de contacto (alta intención) ----------
  var contactSection = document.getElementById("contacto");
  if (contactSection && "IntersectionObserver" in window) {
    var contactViewed = false;
    var contactObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !contactViewed) {
            contactViewed = true;
            if (typeof gtag === "function") {
              gtag("event", "view_contact", {
                event_category: "engagement",
                event_label: "Usuario vio contacto"
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    contactObserver.observe(contactSection);
  }

  // ---------- Tiempo en página (engagement) ----------
  [30, 60, 120].forEach(function (seconds) {
    setTimeout(function () {
      if (typeof gtag === "function") {
        gtag("event", "time_on_page_" + seconds + "s", {
          event_category: "engagement",
          event_label: seconds + " segundos en página"
        });
      }
    }, seconds * 1000);
  });
});
