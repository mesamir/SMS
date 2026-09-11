/* ═══════════════════════════════════════════════
   DROPDOWN — Menu open/close
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  document.addEventListener('click', function(e) {
    const trigger = e.target.closest('[data-dropdown]');
    const insideMenu = e.target.closest('.dropdown-menu');

    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      const dropdown = trigger.closest('.dropdown');
      // Close others
      document.querySelectorAll('.dropdown.open').forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
      dropdown.classList.toggle('open');
      return;
    }

    if (!insideMenu) {
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });
})();