document.addEventListener("DOMContentLoaded", () => {
  setLang('es', document.querySelector('.lang-btn.active'));
  document.getElementById("pdfModal").addEventListener("click", (e) => {
    if (e.target.id === "pdfModal") {
      closePDF();
    }
  });

  document.getElementById("instagram-card").addEventListener("click", () => {
    window.open("https://instagram.com/argenseltzer", "_blank");
  });

  document.getElementById("whatsapp-card").addEventListener("click", () => {

    const mensaje = currentLang === 'es'
        ? 'Hola! Vengo de la página web, me gustaría más información sobre los sifones.'
        : "Hi! I'm coming from the website, I'd like more information about the siphons.";

    const url = `https://wa.me/17869825969?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  });

  // Lightbox: make images open in a popup modal
  document.querySelectorAll('.lightbox-img').forEach(img => {
    img.addEventListener('click', (e) => {
      const src = img.getAttribute('src');
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('imageModalImg');
      if (!modal || !modalImg) return;
      modalImg.src = src;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const imageModal = document.getElementById('imageModal');
  const imageModalClose = imageModal ? imageModal.querySelector('.image-modal-close') : null;
  if (imageModalClose) imageModalClose.addEventListener('click', () => {
    imageModal.classList.remove('active');
    const im = document.getElementById('imageModalImg'); if (im) im.src = '';
    imageModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
  if (imageModal) imageModal.addEventListener('click', (e) => {
    if (e.target.id === 'imageModal') {
      imageModal.classList.remove('active');
      const im = document.getElementById('imageModalImg'); if (im) im.src = '';
      imageModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  // Video thumbnail -> open video modal
  document.querySelectorAll('.video-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.getAttribute('data-video-src');
      const vmodal = document.getElementById('videoModal');
      const vplayer = document.getElementById('videoModalPlayer');
      if (!vmodal || !vplayer) return;
      vplayer.src = src;
      vmodal.classList.add('active');
      vmodal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // try to play (will require user gesture on some browsers if not muted)
      vplayer.play().catch(()=>{});
    });
  });

  const videoModal = document.getElementById('videoModal');
  const videoModalClose = videoModal ? videoModal.querySelector('.video-modal-close') : null;
  if (videoModalClose) videoModalClose.addEventListener('click', () => {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    const v = document.getElementById('videoModalPlayer'); if (v) { v.pause(); v.src = ''; }
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
  if (videoModal) videoModal.addEventListener('click', (e) => {
    if (e.target.id === 'videoModal') {
      videoModal.classList.remove('active');
      const v = document.getElementById('videoModalPlayer'); if (v) { v.pause(); v.src = ''; }
      videoModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
});

let currentLang = 'es';

function setLang(lang, btn) {
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

  // Placeholders for inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = i18n[lang][key];
    if (!val) return;
    el.placeholder = val;
  });

  if (typeof updateTotal === 'function') updateTotal();
}

// ── CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});

// Close image modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const imageModal = document.getElementById('imageModal');
    if (imageModal && imageModal.classList.contains('active')) {
      imageModal.classList.remove('active');
      const im = document.getElementById('imageModalImg'); if (im) im.src = '';
      imageModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    const videoModal = document.getElementById('videoModal');
    if (videoModal && videoModal.classList.contains('active')) {
      videoModal.classList.remove('active');
      const v = document.getElementById('videoModalPlayer'); if (v) { v.pause(); v.src = ''; }
      videoModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }
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

const PRICE = 28.00;

// Update displayed total when quantity changes
const quantityInput = document.getElementById("quantity");
const orderTotalEl = document.getElementById("orderTotal");
const zoneInput = document.getElementById("zone");
function updateTotal() {
  if (!quantityInput || !orderTotalEl) return;
  const isStandardDeliveryZone = zoneInput && zoneInput.value !== (i18n[currentLang]["form.zone.other"] || 'Other');
  if (!isStandardDeliveryZone) {
    orderTotalEl.textContent = i18n[currentLang]["order.priceToBeAgreed"] || 'Price to be agreed';
    return;
  }
  const q = Number(quantityInput.value) || 0;
  orderTotalEl.textContent = `$${(q * PRICE).toFixed(2)}`;
}
if (quantityInput) quantityInput.addEventListener('input', updateTotal);
if (zoneInput) zoneInput.addEventListener('change', updateTotal);
// initialize
updateTotal();

const housingTypeInput = document.getElementById("housingType");
const housingQuestionGroups = {
  apartment: ["apartmentQuestions", "shadeQuestion"],
  house: ["shadeQuestion"],
  "private-neighborhood": ["privateNeighborhoodQuestions"]
};

function updateHousingQuestions() {
  const activeGroups = housingQuestionGroups[housingTypeInput.value] || [];
  document.querySelectorAll(".housing-questions").forEach(group => {
    const isActive = activeGroups.includes(group.id);
    group.hidden = !isActive;
    group.querySelectorAll("select").forEach(select => {
      select.disabled = !isActive;
      select.required = isActive;
      if (!isActive) select.value = "";
    });
  });
}

if (housingTypeInput) {
  housingTypeInput.addEventListener("change", updateHousingQuestions);
  updateHousingQuestions();
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const housingType = document.getElementById("housingType");
    const buildingAccess = document.getElementById("buildingAccess");
    const apartmentDelivery = document.getElementById("apartmentDelivery");
    const shadeLocation = document.getElementById("shadeLocation");
    const neighborhoodAccess = document.getElementById("neighborhoodAccess");
    const zone = document.getElementById("zone").value;
    const quantity = Number(document.getElementById("quantity").value);

    // Build localized message
    const msgHeading = i18n[currentLang]["order.message.heading"] || 'New order';
    const nameLabel = i18n[currentLang]["order.message.nameLabel"] || 'Name:';
    const emailLabel = i18n[currentLang]["order.message.emailLabel"] || 'Email:';
    const phoneLabel = i18n[currentLang]["order.message.phoneLabel"] || 'Phone:';
    const addressLabel = i18n[currentLang]["order.message.addressLabel"] || 'Address:';
    const zoneLabel = i18n[currentLang]["order.message.zoneLabel"] || 'Zone:';
    const quantityLabel = i18n[currentLang]["order.message.quantityLabel"] || 'Quantity:';
    const shippingRequest = i18n[currentLang]["order.message.shippingRequest"] || 'Customer requests shipping quote.';
    const totalLabel = i18n[currentLang]["order.message.totalLabel"] || 'Total:';

    const optionText = select => select.options[select.selectedIndex].text;

    let message = `${msgHeading}\n\n` +
      `${nameLabel} ${firstName} ${lastName}\n\n` +
      `${emailLabel} ${email}\n` +
      `${phoneLabel} ${phone}\n\n` +
      `${addressLabel}\n${address}\n\n` +
      `${i18n[currentLang]["order.message.housingTypeLabel"]} ${optionText(housingType)}\n\n` +
      `${zoneLabel} ${zone}\n\n` +
      `${quantityLabel} ${quantity} ${i18n[currentLang]["order.quantity.unit"] || 'sifones'}\n`;

    if (housingType.value === "apartment") {
      message += `\n${i18n[currentLang]["order.message.buildingAccessLabel"]} ${optionText(buildingAccess)}\n`;
      message += `${i18n[currentLang]["order.message.apartmentDeliveryLabel"]} ${optionText(apartmentDelivery)}\n`;
    }
    if (housingType.value === "apartment" || housingType.value === "house") {
      message += `\n${i18n[currentLang]["order.message.shadeLocationLabel"]} ${optionText(shadeLocation)}\n`;
    }
    if (housingType.value === "private-neighborhood") {
      message += `\n${i18n[currentLang]["order.message.neighborhoodAccessLabel"]} ${optionText(neighborhoodAccess)}\n`;
    }

    if (zone === (i18n[currentLang]["form.zone.other"] || 'Other')) {
      message += `\n${shippingRequest}`;
    } else {
      const total = (quantity * PRICE).toFixed(2);
      message += `\n${totalLabel} $${total}`;
    }

    window.open(
        `https://wa.me/17869825969?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});
