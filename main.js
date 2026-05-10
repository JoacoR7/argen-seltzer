document.addEventListener("DOMContentLoaded", () => {
  setLang('es', document.querySelector('.lang-btn.active'));
  document.getElementById("pdfModal").addEventListener("click", (e) => {
    if (e.target.id === "pdfModal") {
      closePDF();
    }
  });
});

// ── i18n DICTIONARY ──
const i18n = {
  es: {
    "nav.about": "Nosotros",
    "nav.why": "¿Por qué?",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "hero.tag": "Miami, Broward & Palm Beach — Delivery incluido",
    "hero.subtitle": "El auténtico sifón argentino, ahora en el corazón de South Florida. Tradición, calidad y efervescencia sin límites.",
    "hero.cta1": "Ver precios",
    "hero.cta2": "Contactar",
    "hero.stat1": "Presión constante",
    "hero.stat2": "Zonas de entrega",
    "hero.stat3": "Contratos largos",
    "card.arg.label": "Origen",
    "card.arg.desc": "Argentina",
    "card.wine.label": "Maridaje",
    "card.wine.desc": "Malbec",
    "card.siphon.label": "Nuestro producto",
    "card.siphon.desc": "Sifón de soda argentino con presión constante y cantidad de gas justa en cada vaso.",
    "card.us.label": "Destino",
    "card.us.desc": "South Florida",
    "about.tag": "Nuestra historia",
    "about.title": "SOBRE<br>NOSOTROS",
    "about.c1.title": "Nuestra Historia",
    "about.c1.text": "Argen Seltzer nació de un recuerdo compartido y un profundo deseo de recrear el ritual argentino de la mesa familiar en South Florida. Todo comenzó con la imagen del sifón familiar: esa botella icónica, siempre presente en cada comida.",
    "about.c2.title": "Tradición Moderna",
    "about.c2.text": "Somos más que un proveedor de bebidas; somos un vínculo cultural. Tomamos la excelencia operacional de la sodería argentina tradicional y la adaptamos a los estándares de South Florida, combinando un producto de herencia con logística moderna.",
    "about.c3.title": "Calidad Premium",
    "about.c3.text": "Nuestro sistema de sifón especializado mantiene presión interna constante. A diferencia del agua con gas convencional, cada disparo entrega la misma efervescencia intensa y crocante que el primero.",
    "why.tag": "Ventajas",
    "why.title": "¿POR QUÉ<br>NOSOTROS?",
    "why.f1.title": "Servicio Flexible",
    "why.f1.text": "Sin contratos a largo plazo ni cargos ocultos. Ordená, pausá o escalá tu volumen según tu consumo. Nos adaptamos a vos, ya seas residencial o comercial.",
    "why.f2.title": "Logística Impecable",
    "why.f2.text": "Entrega puntual y profesional en Miami y Broward. El delivery ya está incluido en el precio. Sin sorpresas, sin demoras.",
    "why.f3.title": "Pagos Integrados",
    "why.f3.text": "Transacciones simples y sin fricción. Aceptamos múltiples métodos para tu comodidad total.",
    "why.pay.label": "Métodos de pago:",
    "why.pay.cash": "💵 Efectivo",
    "why.pay.credit": "💳 Tarjeta de Crédito",
    "why.pay.debit": "💳 Tarjeta de Débito",
    "pricing.tag": "Tarifas",
    "pricing.title": "NUESTROS<br>PRECIOS",
    "pricing.tab.res": "Residencial",
    "pricing.tab.com": "Comercial",
    "pricing.res.unit": "por unidad • Delivery incluido",
    "pricing.res.f1": "Delivery incluido en el precio",
    "pricing.res.f2": "Capacidad de sifón: 1.5 L (50 oz)",
    "pricing.res.f3": "Pedido mínimo: 8 sifones",
    "pricing.res.f4": "Sin contratos a largo plazo",
    "pricing.res.f5": "Cobertura Miami, Broward y Palm Beach",
    "pricing.res.cta": "Hacer un pedido",
    "pricing.com.note": "📌 Delivery incluido en todos los precios • Capacidad de sifón 1.5 L (50 oz)",
    "pricing.com.p1.label": "Sifón Argen Seltzer",
    "pricing.com.p1.desc": "Color negro — Marca estándar",
    "pricing.com.p2.label": "Sifón personalizado",
    "pricing.com.p2.desc": "Color negro — Tu marca",
    "pricing.com.p3.label": "Sifón personalizado",
    "pricing.com.p3.desc": "Color alternativo — Tu marca",
    "pricing.com.p4.label": "Sifón grande Argen Seltzer",
    "pricing.com.p4.desc": "Color verde — Marca estándar",
    "pricing.com.p5.label": "Sifón grande personalizado",
    "pricing.com.p5.desc": "Color verde — Tu marca",
    "pricing.com.p6.label": "Sifón grande personalizado",
    "pricing.com.p6.desc": "Color alternativo — Tu marca",
    "pricing.com.cta": "Solicitar cotización",
    "contact.tag": "Contacto",
    "contact.title1": "UNITE A",
    "contact.subtitle": "¿Listo para el auténtico sifón argentino? Contactanos hoy.",
    "contact.phone.label": "Teléfono",
    "contact.coverage.label": "Cobertura",
    "contact.coverage.text": "Delivery incluido en Miami & Broward",
    "pdf.button": "Carta de presentación"
  },
  en: {
    "nav.about": "About",
    "nav.why": "Why Us?",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "hero.tag": "Miami, Broward & Palm Beach — Delivery included",
    "hero.subtitle": "The authentic Argentine siphon, now in the heart of South Florida. Tradition, quality, and endless effervescence.",
    "hero.cta1": "See pricing",
    "hero.cta2": "Contact",
    "hero.stat1": "Constant pressure",
    "hero.stat2": "Delivery zones",
    "hero.stat3": "Long contracts",
    "card.arg.label": "Origin",
    "card.arg.desc": "Argentina",
    "card.wine.label": "Pairing",
    "card.wine.desc": "Malbec",
    "card.siphon.label": "Our product",
    "card.siphon.desc": "Argentine soda siphon with constant pressure and perfect carbonation in every glass.",
    "card.us.label": "Destination",
    "card.us.desc": "South Florida",
    "about.tag": "Our story",
    "about.title": "ABOUT<br>US",
    "about.c1.title": "Our Story",
    "about.c1.text": "Argen Seltzer was born from a shared memory and a deep-seated desire to recreate the timeless Argentine table ritual in the heart of South Florida. It all began with the image of the family sifón: that iconic bottle, always present at every meal.",
    "about.c2.title": "Modern Tradition",
    "about.c2.text": "We are more than a beverage provider; we are a cultural link. We have taken the operational excellence of the traditional Argentine sodería and adapted it to the standards of South Florida, combining a heritage product with modern logistics.",
    "about.c3.title": "Premium Quality",
    "about.c3.text": "Our specialized siphon system maintains constant internal pressure. Unlike conventional sparkling water, every pour delivers the exact same crisp, high-impact effervescence as the first.",
    "why.tag": "Advantages",
    "why.title": "WHY<br>CHOOSE US?",
    "why.f1.title": "Flexible Service",
    "why.f1.text": "No long-term contracts or hidden fees. Order, pause, or scale your volume based on your consumption. We adapt to you, whether residential or commercial.",
    "why.f2.title": "Seamless Logistics",
    "why.f2.text": "Punctual, professional delivery across Miami and Broward. Delivery is already included in the price. No surprises, no delays.",
    "why.f3.title": "Integrated Payments",
    "why.f3.text": "Simple, frictionless transactions. We accept multiple payment methods for your total convenience.",
    "why.pay.label": "Payment methods:",
    "why.pay.cash": "💵 Cash",
    "why.pay.credit": "💳 Credit Card",
    "why.pay.debit": "💳 Debit Card",
    "pricing.tag": "Rates",
    "pricing.title": "OUR<br>PRICING",
    "pricing.tab.res": "Residential",
    "pricing.tab.com": "Commercial",
    "pricing.res.unit": "per unit • Delivery included",
    "pricing.res.f1": "Delivery included in the price",
    "pricing.res.f2": "Siphon capacity: 1.5 L (50 oz)",
    "pricing.res.f3": "Minimum order: 8 siphons",
    "pricing.res.f4": "No long-term contracts",
    "pricing.res.f5": "Coverage Miami, Broward & Palm Beach",
    "pricing.res.cta": "Place an order",
    "pricing.com.note": "📌 Delivery included in all prices • Siphon capacity: 1.5 L (50 oz)",
    "pricing.com.p1.label": "Argen Seltzer siphon",
    "pricing.com.p1.desc": "Black — Standard brand",
    "pricing.com.p2.label": "Custom siphon",
    "pricing.com.p2.desc": "Black — Your brand",
    "pricing.com.p3.label": "Custom siphon",
    "pricing.com.p3.desc": "Alternate color — Your brand",
    "pricing.com.p4.label": "Large Argen Seltzer siphon",
    "pricing.com.p4.desc": "Green — Standard brand",
    "pricing.com.p5.label": "Large custom siphon",
    "pricing.com.p5.desc": "Green — Your brand",
    "pricing.com.p6.label": "Large custom siphon",
    "pricing.com.p6.desc": "Alternate color — Your brand",
    "pricing.com.cta": "Request a quote",
    "contact.tag": "Contact",
    "contact.title1": "JOIN",
    "contact.subtitle": "Ready for the authentic Argentine siphon? Contact us today.",
    "contact.phone.label": "Phone",
    "contact.coverage.label": "Coverage",
    "contact.coverage.text": "Delivery included across Miami & Broward",
    "pdf.button": "Company profile"
  }
};

let currentLang = 'es';

function setLang(lang, btn) {
  if (lang === currentLang) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = i18n[lang][key];
    if (!val) return;
    if (val.includes('<br>')) el.innerHTML = val;
    else el.textContent = val;
  });
}

// ── CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});

(function anim() {
  rx += (mx - rx) * .12; ry += (my - ry) * .12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(anim);
})();

document.querySelectorAll('a,button,.showcase-card,.about-card,.feature-card,.price-item,.contact-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.width = '20px'; cursor.style.height = '20px'; ring.style.width = '56px'; ring.style.height = '56px'; });
  el.addEventListener('mouseleave', () => { cursor.style.width = '12px'; cursor.style.height = '12px'; ring.style.width = '36px'; ring.style.height = '36px'; });
});

// ── SCROLL REVEAL ──
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── NAV SCROLL ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 80 ? 'rgba(13,13,13,0.97)' : 'linear-gradient(to bottom, rgba(13,13,13,0.95), transparent)';
});

// ── PRICING TABS ──
function switchTab(tab, btn) {
  document.querySelectorAll('.pricing-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
  btn.classList.add('active');
  document.querySelectorAll('#' + tab + ' .reveal').forEach(el => {
    el.classList.remove('visible');
    setTimeout(() => el.classList.add('visible'), 80);
  });
}

function openPDF() {
  const file = currentLang === 'es'
    ? 'docs/carta_presentacion.pdf'
    : 'docs/company_profile.pdf';

  const modal = document.getElementById("pdfModal");
  const viewer = document.getElementById("pdfViewer");

  viewer.src = file;
  modal.classList.add("active");
}

function closePDF() {
  const modal = document.getElementById("pdfModal");
  const viewer = document.getElementById("pdfViewer");

  viewer.src = "";
  modal.classList.remove("active");
}