const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (finePointer && !reduceMotion) {
  const follower = document.createElement('div');
  follower.className = 'mouse-follower';
  follower.setAttribute('aria-hidden', 'true');
  document.body.append(follower);

  const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const target = { ...position };
  const velocity = { x: 0, y: 0 };
  let followerVisible = false;
  let followerFrame = 0;

  const renderFollower = () => {
    velocity.x = (velocity.x + (target.x - position.x) * 0.095) * 0.72;
    velocity.y = (velocity.y + (target.y - position.y) * 0.095) * 0.72;
    position.x += velocity.x;
    position.y += velocity.y;
    follower.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`;
    const moving = Math.abs(target.x - position.x) + Math.abs(target.y - position.y) + Math.abs(velocity.x) + Math.abs(velocity.y) > 0.1;
    followerFrame = moving ? requestAnimationFrame(renderFollower) : 0;
  };

  const setFollowerContext = (element) => {
    if (!(element instanceof Element)) return;
    const interactive = element.closest('a, button, input, label');
    follower.classList.toggle('is-interactive', Boolean(interactive));
    follower.classList.toggle('on-orange', Boolean(element.closest('.contact-section')));
    follower.classList.toggle('on-dark', Boolean(element.closest('[data-nav-contrast]')));
  };

  window.addEventListener('pointermove', (event) => {
    target.x = event.clientX;
    target.y = event.clientY;
    if (!followerFrame) followerFrame = requestAnimationFrame(renderFollower);
    setFollowerContext(event.target);
    if (!followerVisible) {
      followerVisible = true;
      position.x = event.clientX;
      position.y = event.clientY;
      follower.classList.add('is-visible');
    }
  }, { passive: true });

  document.addEventListener('pointerdown', () => follower.classList.add('is-pressed'), { passive: true });
  document.addEventListener('pointerup', () => follower.classList.remove('is-pressed'), { passive: true });
  document.documentElement.addEventListener('mouseleave', () => follower.classList.remove('is-visible'));
  document.documentElement.addEventListener('mouseenter', () => {
    if (followerVisible) follower.classList.add('is-visible');
  });

  followerFrame = requestAnimationFrame(renderFollower);
  window.addEventListener('pagehide', () => cancelAnimationFrame(followerFrame), { once: true });
}

const contrastSections = [...document.querySelectorAll('[data-nav-contrast]')];
let contrastBounds = [];
let headerTicking = false;
let headerIsScrolled = window.scrollY > 24;

const refreshContrastBounds = () => {
  contrastBounds = contrastSections.map((section) => {
    const rect = section.getBoundingClientRect();
    return { top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY };
  });
};

const setHeader = () => {
  if (!headerIsScrolled && window.scrollY > 32) headerIsScrolled = true;
  if (headerIsScrolled && window.scrollY < 8) headerIsScrolled = false;
  header.classList.toggle('scrolled', headerIsScrolled);
  const sampleY = window.scrollY + (headerIsScrolled ? 42 : 39);
  const overDarkSection = contrastBounds.some(({ top, bottom }) => top <= sampleY && bottom >= sampleY);
  header.classList.toggle('on-dark', overDarkSection);
  headerTicking = false;
};
const requestHeaderUpdate = () => {
  if (!headerTicking) {
    requestAnimationFrame(setHeader);
    headerTicking = true;
  }
};
refreshContrastBounds();
setHeader();
window.addEventListener('scroll', requestHeaderUpdate, { passive: true });

const menuBackground = [...document.querySelectorAll('main, footer, .site-header .wordmark, .skip-link')];
const setMenuOpen = (open, returnFocus = false) => {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  mobileNav.classList.toggle('is-open', open);
  mobileNav.setAttribute('aria-hidden', String(!open));
  mobileNav.inert = !open;
  menuBackground.forEach((element) => { element.inert = open; });
  document.body.classList.toggle('menu-open', open);
  if (open) mobileNav.querySelector('a')?.focus({ preventScroll: true });
  else if (returnFocus) menuButton.focus({ preventScroll: true });
};
menuButton?.addEventListener('click', () => setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true', true));

mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  setMenuOpen(false);
  const destination = document.querySelector(link.hash);
  destination?.setAttribute('tabindex', '-1');
  destination?.focus({ preventScroll: true });
}));
document.addEventListener('keydown', (event) => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') { event.preventDefault(); setMenuOpen(false, true); }
  if (event.key === 'Tab') {
    const links = [...mobileNav.querySelectorAll('a')];
    const focusable = [menuButton, ...links];
    const index = focusable.indexOf(document.activeElement);
    event.preventDefault();
    focusable[(index + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length].focus();
  }
});
window.matchMedia('(max-width: 900px)').addEventListener('change', (event) => {
  if (!event.matches) setMenuOpen(false);
});

const desktopNav = document.querySelector('.desktop-nav');
const navIndicator = desktopNav?.querySelector('.nav-indicator');
const navLinks = [...(desktopNav?.querySelectorAll('a[href^="#"]') || [])];
let navSections = [];
let activeNavLink = null;
let navTicking = false;

const refreshNavSections = () => {
  navSections = navLinks.map((link) => {
    const section = document.querySelector(link.hash);
    if (!section) return null;
    const rect = section.getBoundingClientRect();
    return { link, top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY };
  }).filter(Boolean);
};

const positionNavIndicator = (link, immediate = false) => {
  if (!desktopNav || !navIndicator || !link) {
    desktopNav?.classList.remove('has-indicator');
    return;
  }
  const navRect = desktopNav.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  if (immediate) desktopNav.classList.add('indicator-instant');
  desktopNav.style.setProperty('--nav-pill-x', `${linkRect.left - navRect.left - 12}px`);
  desktopNav.style.setProperty('--nav-pill-width', `${linkRect.width + 24}px`);
  desktopNav.classList.add('has-indicator');
  if (immediate) requestAnimationFrame(() => desktopNav.classList.remove('indicator-instant'));
};

const syncActiveNav = () => {
  const marker = window.scrollY + window.innerHeight * 0.38;
  let nextActive = null;
  navSections.forEach(({ link, top, bottom }) => {
    if (top <= marker && bottom > marker) nextActive = link;
  });

  if (nextActive !== activeNavLink) {
    activeNavLink = nextActive;
    navLinks.forEach((link) => {
      link.classList.toggle('is-current', link === activeNavLink);
      if (link === activeNavLink) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  if (!desktopNav?.matches(':hover') && !desktopNav?.contains(document.activeElement)) {
    positionNavIndicator(activeNavLink);
  }
  navTicking = false;
};

navLinks.forEach((link) => {
  link.addEventListener('pointerenter', () => positionNavIndicator(link));
  link.addEventListener('focus', () => positionNavIndicator(link));
  link.addEventListener('click', () => {
    activeNavLink = link;
    positionNavIndicator(link);
  });
});

desktopNav?.addEventListener('pointerleave', () => positionNavIndicator(activeNavLink));
desktopNav?.addEventListener('focusout', () => {
  requestAnimationFrame(() => {
    if (!desktopNav.contains(document.activeElement)) positionNavIndicator(activeNavLink);
  });
});
window.addEventListener('scroll', () => {
  if (!navTicking) {
    requestAnimationFrame(syncActiveNav);
    navTicking = true;
  }
}, { passive: true });
window.addEventListener('resize', () => {
  refreshContrastBounds();
  refreshNavSections();
  requestHeaderUpdate();
  positionNavIndicator(activeNavLink, true);
}, { passive: true });
window.addEventListener('load', () => {
  refreshContrastBounds();
  refreshNavSections();
  requestHeaderUpdate();
  syncActiveNav();
}, { once: true });
refreshNavSections();
syncActiveNav();

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
      entry.target.classList.add('reveal-ready');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  // Keyboard navigation must never land in an invisible scroll-reveal container.
  document.addEventListener('focusin', (event) => event.target.closest('.reveal')?.classList.add('visible'));
}

if (!reduceMotion && finePointer) {
  const parallaxItems = [...document.querySelectorAll('.parallax')];
  let ticking = false;
  const updateParallax = () => {
    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) {
        const progress = (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight;
        item.style.setProperty('--photo-offset', `${Math.max(-12, Math.min(12, progress * -16))}px`);
      }
    });
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });
  updateParallax();
}

const scrollVideo = document.querySelector('[data-scroll-video]');
const hero = document.querySelector('.hero');
const videoMedia = window.matchMedia('(min-width: 901px) and (prefers-reduced-motion: no-preference)');

if (scrollVideo && hero) {
  let videoSyncFrame = 0;
  let videoRenderFrame = 0;
  let targetTime = 2.35;
  let renderedTime = 2.35;
  let lastSeekAt = 0;
  let videoReady = false;
  let heroTop = 0;
  let heroTravel = 1;

  const measureHero = () => {
    const rect = hero.getBoundingClientRect();
    heroTop = rect.top + window.scrollY;
    heroTravel = Math.max(rect.height - window.innerHeight * 0.15, window.innerHeight * 0.6);
  };

  const renderVideoTime = (timestamp) => {
    if (!videoReady || !videoMedia.matches) {
      videoRenderFrame = 0;
      return;
    }
    const difference = targetTime - renderedTime;
    renderedTime += difference * 0.24;

    if (!scrollVideo.seeking && timestamp - lastSeekAt >= 32 && Math.abs(scrollVideo.currentTime - renderedTime) > 0.035) {
      scrollVideo.currentTime = renderedTime;
      lastSeekAt = timestamp;
    }

    if (Math.abs(difference) > 0.008 || scrollVideo.seeking) {
      videoRenderFrame = requestAnimationFrame(renderVideoTime);
    } else {
      renderedTime = targetTime;
      if (!scrollVideo.seeking) scrollVideo.currentTime = targetTime;
      videoRenderFrame = 0;
    }
  };

  const syncVideoToScroll = () => {
    if (!videoMedia.matches || !scrollVideo.duration || !Number.isFinite(scrollVideo.duration)) {
      videoSyncFrame = 0;
      return;
    }

    const progress = Math.min(1, Math.max(0, (window.scrollY - heroTop) / heroTravel));
    const clipStart = Math.min(2.35, Math.max(scrollVideo.duration - 0.1, 0));
    const clipDuration = Math.max(scrollVideo.duration - clipStart - 0.04, 0);
    targetTime = reduceMotion ? clipStart : clipStart + progress * clipDuration;

    if (!videoReady) {
      renderedTime = targetTime;
      scrollVideo.currentTime = targetTime;
      videoReady = true;
    }
    if (!videoRenderFrame) videoRenderFrame = requestAnimationFrame(renderVideoTime);
    videoSyncFrame = 0;
  };

  const requestVideoSync = () => {
    if (!videoSyncFrame) {
      videoSyncFrame = requestAnimationFrame(syncVideoToScroll);
    }
  };

  scrollVideo.pause();
  scrollVideo.addEventListener('loadedmetadata', () => {
    measureHero();
    requestVideoSync();
  });
  scrollVideo.addEventListener('seeked', () => scrollVideo.classList.add('is-ready'));
  const updateVideoSource = () => {
    const source = scrollVideo.querySelector('source');
    videoReady = false;
    scrollVideo.classList.remove('is-ready');
    if (videoMedia.matches) source.src = source.dataset.src;
    else source.removeAttribute('src');
    scrollVideo.load();
  };
  videoMedia.addEventListener('change', updateVideoSource);
  updateVideoSource();
  window.addEventListener('scroll', requestVideoSync, { passive: true });
  window.addEventListener('resize', () => {
    measureHero();
    requestVideoSync();
  }, { passive: true });
  measureHero();
  requestVideoSync();
}

const contactForm = document.querySelector('.contact-form');
const planSelect = contactForm.querySelector('[name="plano"]');
const requestPreview = contactForm.querySelector('.request-preview');
const planActions = [...document.querySelectorAll('[data-plan]')];
const resetRequestPreview = () => {
  requestPreview.hidden = true;
  contactForm.querySelector('.form-status').textContent = '';
};
const syncPlanSelection = () => {
  planActions.forEach((link) => link.closest('.plan').classList.toggle('is-selected', link.dataset.plan === planSelect.value));
};
planActions.forEach((link) => link.addEventListener('click', () => {
  planSelect.value = link.dataset.plan;
  syncPlanSelection();
  resetRequestPreview();
  planSelect.focus({ preventScroll: true });
}));
planSelect.addEventListener('change', syncPlanSelection);
contactForm.addEventListener('input', (event) => {
  resetRequestPreview();
  if (event.target.matches('input')) {
    event.target.removeAttribute('aria-invalid');
    document.getElementById(`${event.target.id}-error`).textContent = '';
  }
});
contactForm.querySelector('[data-edit-request]').addEventListener('click', () => {
  resetRequestPreview();
  planSelect.focus();
});
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('.form-status');
  const name = form.elements.nome;
  name.value = name.value.trim();
  form.querySelectorAll('input').forEach((input) => {
    const invalid = !input.validity.valid;
    input.setAttribute('aria-invalid', String(invalid));
    document.getElementById(`${input.id}-error`).textContent = invalid
      ? (input.id === 'nome' ? 'Como podemos chamar você? Preencha seu nome.' : 'Informe um e-mail no formato nome@exemplo.com.') : '';
  });
  if (!form.checkValidity()) {
    requestPreview.hidden = true;
    status.textContent = 'Revise os campos indicados para continuar.';
    form.querySelector(':invalid')?.focus();
    return;
  }
  requestPreview.querySelector('.request-text').textContent = `Nome: ${name.value}\nE-mail: ${form.elements.email.value}\nInteresse: ${planSelect.value || 'Conhecer o cardápio primeiro'}`;
  requestPreview.hidden = false;
  status.textContent = 'Solicitação pronta para revisão. Nenhum dado foi enviado.';
  requestPreview.focus({ preventScroll: true });
});
