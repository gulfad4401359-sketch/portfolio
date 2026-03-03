/* ═══════════════════════════════════════════════════════════════
   ANTIGRAVITY — Navbar JavaScript
   Handles: Active link detection, mobile hamburger overlay,
            page transition fade, scroll-based behavior
   PRD §6.1 + Design Doc §13.2
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── DOM References ───────────────────────────────────────────
  const hamburgerBtn   = document.querySelector('.navbar__hamburger');
  const mobileOverlay  = document.querySelector('.mobile-nav-overlay');
  const closeBtn       = document.querySelector('.mobile-nav-overlay__close');
  const navLinks       = document.querySelectorAll('.navbar__link');
  const mobileLinks    = document.querySelectorAll('.mobile-nav-overlay__link');
  const allPageLinks   = document.querySelectorAll('a[href]');

  // ── Active Link Detection ────────────────────────────────────
  // Determines the current page and marks the corresponding nav link active
  function setActiveLink() {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';

    // Map nav link hrefs to page files for matching
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      const linkFile = href.split('/').pop() || 'index.html';

      link.classList.remove('is-active');

      // Exact match or index.html for Home
      if (linkFile === currentFile) {
        link.classList.add('is-active');
      }
      // Handle root path → index.html
      if (currentFile === '' && linkFile === 'index.html') {
        link.classList.add('is-active');
      }
    });

    // Also mark mobile overlay links
    mobileLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      const linkFile = href.split('/').pop() || 'index.html';

      link.classList.remove('is-active');

      if (linkFile === currentFile) {
        link.classList.add('is-active');
      }
      if (currentFile === '' && linkFile === 'index.html') {
        link.classList.add('is-active');
      }
    });
  }

  // ── Mobile Hamburger Toggle ──────────────────────────────────
  function openMobileNav() {
    if (!mobileOverlay || !hamburgerBtn) return;
    mobileOverlay.classList.add('is-open');
    hamburgerBtn.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Trap focus inside overlay for accessibility
    if (closeBtn) closeBtn.focus();
  }

  function closeMobileNav() {
    if (!mobileOverlay || !hamburgerBtn) return;
    mobileOverlay.classList.remove('is-open');
    hamburgerBtn.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
      const isOpen = mobileOverlay.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileNav);
  }

  // Close mobile nav when a link inside overlay is clicked
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileNav();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileOverlay &&
        mobileOverlay.classList.contains('is-open')) {
      closeMobileNav();
    }
  });

  // ── Page Transition Fade ─────────────────────────────────────
  // On link click: fade out current page, then navigate
  // Design Doc §8.5 — body.page-leaving { opacity: 0; transition: 200ms }
  function handlePageTransition(e) {
    const link = e.currentTarget;
    const href = link.getAttribute('href');

    // Skip if: external link, anchor link, same page, new tab, or no href
    if (!href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('https://wa.me') ||
        href.startsWith('http') ||
        link.target === '_blank' ||
        e.ctrlKey || e.metaKey) {
      return;
    }

    e.preventDefault();
    document.body.classList.add('page-leaving');

    setTimeout(function () {
      window.location.href = href;
    }, 200); // matches transition duration in global.css
  }

  // Attach page transition to all internal links
  allPageLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('mailto:') &&
        !href.startsWith('tel:') && !href.startsWith('http') &&
        link.target !== '_blank') {
      link.addEventListener('click', handlePageTransition);
    }
  });

  // ── Initialize ───────────────────────────────────────────────
  setActiveLink();

})();
