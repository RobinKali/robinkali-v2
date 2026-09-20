export function initSecureLinks() {
  const elements = document.querySelectorAll<HTMLAnchorElement>('a[data-secure-contact]');
  
  elements.forEach((el) => {
    const unlock = () => {
      const encoded = el.getAttribute('data-secure-contact');
      if (encoded && !el.dataset.unlocked) {
        el.dataset.unlocked = 'true';
        try {
          el.href = atob(encoded);
        } catch {
          // fallback
        }
      }
    };

    el.addEventListener('pointerenter', unlock, { passive: true });
    el.addEventListener('focus', unlock, { passive: true });
    el.addEventListener('touchstart', unlock, { passive: true });
    el.addEventListener('mousedown', unlock, { passive: true });

    el.addEventListener('click', (e) => {
      unlock();
      const href = el.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('javascript:')) {
        if (el.getAttribute('target') === '_blank') {
          e.preventDefault();
          window.open(href, '_blank', 'noopener,noreferrer');
        } else if (href.startsWith('mailto:')) {
          // Allow normal mailto navigation or trigger explicitly
          window.location.href = href;
          e.preventDefault();
        }
      }
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSecureLinks);
  } else {
    initSecureLinks();
  }
}
