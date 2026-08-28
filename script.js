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
    followerFrame = requestAnimationFrame(renderFollower);
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

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
  mobileNav.classList.toggle('is-open', !open);
  mobileNav.setAttribute('aria-hidden', String(open));
  mobileNav.inert = open;
  document.body.classList.toggle('menu-open', !open);
});

mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  mobileNav.classList.remove('is-open');
  mobileNav.setAttribute('aria-hidden', 'true');
  mobileNav.inert = true;
  document.body.classList.remove('menu-open');
}));

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('visible', entry.isIntersecting);
  });
}, { threshold: 0.08, rootMargin: '-4% 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

if (!reduceMotion) {
  const parallaxItems = [...document.querySelectorAll('.parallax')];
  let ticking = false;
  const updateParallax = () => {
    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) {
        const progress = (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight;
        item.style.backgroundPositionY = `calc(50% + ${progress * -44}px)`;
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
const mobileHero = window.matchMedia('(max-width: 900px)').matches;

if (scrollVideo && hero && !mobileHero) {
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
    if (!videoReady) {
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
    if (!scrollVideo.duration || !Number.isFinite(scrollVideo.duration)) {
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
  }, { once: true });
  window.addEventListener('scroll', requestVideoSync, { passive: true });
  window.addEventListener('resize', () => {
    measureHero();
    requestVideoSync();
  }, { passive: true });
  measureHero();
  requestVideoSync();
}

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('.form-status');
  if (!form.checkValidity()) {
    status.textContent = 'Preencha seu nome e um e-mail válido para continuar.';
    form.querySelector(':invalid')?.focus();
    return;
  }
  status.textContent = 'Contato registrado nesta demonstração. Em breve, o cardápio chegaria ao seu e-mail.';
  form.reset();
});
