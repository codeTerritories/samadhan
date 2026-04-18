/* ============================================================
   SAMADHAN — script.js
   ============================================================ */

/* ── STATE ──────────────────────────────────────────────────── */
let currentLang = localStorage.getItem('samadhan_lang') || 'en';
let currentCat  = 'all';

/* ── INIT ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  updateSearchPlaceholder();
  initScrollWatcher();
  initHeaderScroll();
});

/* ── LANGUAGE TOGGLE ────────────────────────────────────────── */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  localStorage.setItem('samadhan_lang', currentLang);
  applyLanguage(currentLang);
  updateSearchPlaceholder();
}

function applyLanguage(lang) {
  const attr = `data-${lang}`;

  // Apply to all elements with data-en / data-hi
  document.querySelectorAll(`[${attr}]`).forEach(el => {
    if (el.tagName === 'INPUT') return; // handled separately
    el.textContent = el.getAttribute(attr);
  });

  // Update page title
  document.title = lang === 'hi'
    ? 'समाधान | आपका एकमात्र समाधान'
    : 'Samadhan - समाधान | Your One-Stop Solution';

  // Update html lang attribute
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';

  // Highlight active language in toggle
  const toggle = document.getElementById('langToggle');
  toggle.classList.toggle('active-hi', lang === 'hi');
  toggle.classList.toggle('active-en', lang === 'en');

  // Style active lang option
  document.getElementById('langEN').style.color = lang === 'en' ? 'var(--orange)' : '';
  document.getElementById('langHI').style.color = lang === 'hi' ? 'var(--orange)' : '';
}

function updateSearchPlaceholder() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  const key = currentLang === 'hi' ? 'data-placeholder-hi' : 'data-placeholder-en';
  input.placeholder = input.getAttribute(key) || 'Search...';
}

/* ── SEARCH / FILTER ────────────────────────────────────────── */
function filterCards() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  applyFilters(currentCat, query);
}

function filterCategory(btn, cat) {
  // Update active state
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = cat;
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  applyFilters(cat, query);
}

function applyFilters(cat, query) {
  const cards = document.querySelectorAll('.service-card');
  let visible = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-cat');
    const cardEn  = (card.getAttribute('data-en')  || '').toLowerCase();
    const cardHi  = (card.getAttribute('data-hi')  || '').toLowerCase();
    const cardText = card.textContent.toLowerCase();

    const catMatch   = cat === 'all' || cardCat === cat;
    const queryMatch = !query ||
      cardEn.includes(query) ||
      cardHi.includes(query) ||
      cardText.includes(query);

    if (catMatch && queryMatch) {
      card.classList.remove('hidden');
      visible++;
    } else {
      card.classList.add('hidden');
    }
  });

  document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
}

/* ── MOBILE MENU ────────────────────────────────────────────── */
function toggleMenu() {
  const nav       = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  const isOpen    = nav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
}

/* ── SCROLL WATCHERS ────────────────────────────────────────── */
function initScrollWatcher() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 24px rgba(0,0,0,.12)';
    } else {
      header.style.boxShadow = '0 2px 12px rgba(0,0,0,.06)';
    }
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── KEYBOARD: Enter on search ──────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const input = document.getElementById('searchInput');
    if (input && document.activeElement === input) {
      input.value = '';
      filterCards();
    }
  }
});
