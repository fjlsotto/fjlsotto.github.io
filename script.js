/* ===== NAVBAR scroll shadow ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  highlightActiveSection();
}, { passive: true });

/* ===== HAMBURGER ===== */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ===== ACTIVE NAV ===== */
const sections   = Array.from(document.querySelectorAll('section[id]'));
const navAnchors = Array.from(navLinks.querySelectorAll('a'));

function highlightActiveSection() {
  const mid = window.scrollY + window.innerHeight / 3;
  let current = sections[0]?.id;
  for (const sec of sections) {
    if (sec.offsetTop <= mid) current = sec.id;
  }
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

/* ===== EXPERIENCE — hover on desktop, click on mobile ===== */
const expItems = Array.from(document.querySelectorAll('.exp-item'));
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

expItems.forEach(item => {
  const summary = item.querySelector('.exp-summary');

  // Click always toggles .open (for mobile & keyboard users)
  summary.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    expItems.forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });

  // On non-touch: hover also opens
  item.addEventListener('mouseenter', () => {
    if (!isTouchDevice()) item.classList.add('open');
  });
  item.addEventListener('mouseleave', () => {
    if (!isTouchDevice()) item.classList.remove('open');
  });
});

/* ===== SCROLL REVEAL ===== */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ===== STAGGER grid children ===== */
document.querySelectorAll('.skills-grid, .projects-grid').forEach(grid => {
  Array.from(grid.children).forEach((card, i) => {
    card.style.transitionDelay = `${i * 70}ms`;
  });
});

/* ===== DYNAMIC YEAR ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== INIT ===== */
highlightActiveSection();
