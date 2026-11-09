/* ===== DYNAMIC YEAR ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== SIDEBAR TOGGLE (mobile) ===== */
const sidebar  = document.getElementById('sidebar');
const overlay  = document.getElementById('sidebar-overlay');
const hamburger = document.getElementById('hamburger');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

overlay.addEventListener('click', closeSidebar);

/* Close on nav link click (mobile) */
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) closeSidebar();
  });
});

/* ===== ACTIVE NAV HIGHLIGHTING ===== */
const sections   = Array.from(document.querySelectorAll('section[id]'));
const sidebarLinks = Array.from(document.querySelectorAll('.sidebar-link'));

function highlightActiveSection() {
  const mid = window.scrollY + window.innerHeight / 3;
  let current = sections[0]?.id;
  for (const sec of sections) {
    if (sec.offsetTop <= mid) current = sec.id;
  }
  sidebarLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', highlightActiveSection, { passive: true });

/* ===== EXPERIENCE — hover on desktop, click on mobile ===== */
const expItems = Array.from(document.querySelectorAll('.exp-item'));
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

expItems.forEach(item => {
  const summary = item.querySelector('.exp-summary');

  summary.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    expItems.forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });

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

/* ===== PROJECT FILTERS ===== */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.projects-grid .project-card').forEach(card => {
      const cat = card.dataset.category;
      const show = filter === 'all' || cat === filter || (filter === 'all' && cat === 'coming-soon');
      card.classList.toggle('hidden', !show);
    });
  });
});

/* ===== DYNAMIC YEAR ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== INIT ===== */
highlightActiveSection();
