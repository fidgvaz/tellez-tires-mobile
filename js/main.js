'use strict';

/**
 * TTM — Téllez Tires Mobile
 * Vanilla JS progressive enhancement: mobile nav toggle + current year.
 */
(function () {
  function initNavigation() {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('primary-navigation');

    if (!toggle || !nav) {
      return;
    }

    var desktopQuery = window.matchMedia('(min-width: 60em)');

    function setNavOpen(isOpen) {
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? 'Close Menu' : 'Menu';
      // Native "hidden" attribute avoids needing any CSS changes for this menu.
      nav.hidden = !isOpen;
    }

    // Keep the nav's open/closed state in sync with the desktop breakpoint so
    // it is never left hidden after the viewport crosses into desktop width.
    function syncWithBreakpoint(query) {
      setNavOpen(query.matches);
    }

    syncWithBreakpoint(desktopQuery);
    desktopQuery.addEventListener('change', syncWithBreakpoint);

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setNavOpen(!isOpen);
    });

    // Close the mobile menu once a nav link, including Call Now, is used.
    nav.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (link && !desktopQuery.matches) {
        setNavOpen(false);
      }
    });
  }

  function initCurrentYear() {
    var yearEl = document.getElementById('current-year');
    if (!yearEl) {
      return;
    }
    // The static year already in the HTML remains as a fallback if this
    // script fails to load or run.
    yearEl.textContent = String(new Date().getFullYear());
  }

  function init() {
    // Signals that JavaScript is active, enabling progressive-enhancement CSS.
    document.body.classList.add('js-enabled');
    initNavigation();
    initCurrentYear();
  }

  init();
})();
