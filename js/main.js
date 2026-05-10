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
});

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