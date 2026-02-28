// =====================================================
// AVStack — main.js
// Vanilla JS puro. Sin dependencias. Privacidad by design.
// =====================================================

// ---- Scroll progress bar ----
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
progressBar.setAttribute('role', 'progressbar');
progressBar.setAttribute('aria-hidden', 'true');
Object.assign(progressBar.style, {
  position: 'fixed', top: '0', left: '0', height: '3px', width: '0%',
  background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
  zIndex: '9999', transition: 'width 0.1s linear', pointerEvents: 'none'
});
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
}, { passive: true });

// ---- Header: añadir clase scrolled ----
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('mainNav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('active');
  });
}

// Close nav when clicking a link (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('active');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll animations (Intersection Observer)
const animateOnScroll = () => {
  // data-animate: fade-in individual elements
  const elements = document.querySelectorAll('[data-animate]');
  if (elements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(el => observer.observe(el));
  }

  // data-stagger: stagger children with sequential delays
  const staggerGroups = document.querySelectorAll('[data-stagger]');
  if (staggerGroups.length) {
    const staggerObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply per-child transition-delay then mark parent visible
          [...entry.target.children].forEach((child, i) => {
            child.style.transitionDelay = `${i * 80}ms`;
          });
          entry.target.classList.add('visible');
          staggerObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    staggerGroups.forEach(group => staggerObs.observe(group));
  }
};

// Active nav link tracking
const trackActiveSection = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' });

  sections.forEach(sec => sectionObs.observe(sec));
};

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (nav) nav.classList.remove('active');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  trackActiveSection();
  // Trigger initial check for elements already in view
  setTimeout(() => {
    document.querySelectorAll('[data-animate]').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add('visible');
      }
    });
  }, 100);
});

// PWA: Register service worker if exists
if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// ---- Cursor glow (solo desktop con puntero fino) ----
if (window.matchMedia('(pointer: fine)').matches) {
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);
  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });
  const animGlow = () => {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animGlow);
  };
  animGlow();
}

// ---- Button ripple ----
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(btn.offsetWidth, btn.offsetHeight);
    const rect = btn.getBoundingClientRect();
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;position:absolute;`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// ---- 3D tilt en hero card ----
const tiltCard = document.querySelector('.hero__card-visual');
if (tiltCard && window.matchMedia('(pointer: fine)').matches) {
  tiltCard.addEventListener('mousemove', e => {
    const r = tiltCard.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tiltCard.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`;
  });
  tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
  });
}

// ---- Parallax suave en gradientes del hero ----
const heroGrads = document.querySelectorAll('.hero__gradient');
if (heroGrads.length && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    heroGrads.forEach((g, i) => {
      const f = i === 0 ? 1 : -0.65;
      g.style.transform = `translate(${x * f}px, ${y * f}px)`;
    });
  }, { passive: true });
}

// ---- Counter animation en stats ----
const animateCounter = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const statsEl = document.querySelector('.stats');
if (statsEl) {
  const cntObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-count]').forEach(animateCounter);
        cntObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.35 });
  cntObs.observe(statsEl);
}

// ---- FAQ accordion ----
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq__item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq__item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Console message (privacy-focused)
console.log('%c🛡️ AVStack - Privacidad por Diseño', 'color: #8b5cf6; font-size: 14px; font-weight: bold;');
console.log('%cSin tracking. Sin analytics. Solo código limpio.', 'color: #a0a0b0; font-size: 12px;');
