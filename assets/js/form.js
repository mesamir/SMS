/* ═══════════════════════════════════════════════
   FORM — Basic validation
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Attach validation
    document.querySelectorAll('form[data-validate]').forEach(form => {
      form.addEventListener('submit', function(e) {
        let valid = true;
        form.querySelectorAll('[required]').forEach(field => {
          if (!field.value.trim()) {
            field.classList.add('input-error');
            valid = false;
          } else {
            field.classList.remove('input-error');
          }
        });
        if (!valid) {
          e.preventDefault();
          if (window.toast) window.toast('Please fill in all required fields', 'error');
        }
      });
    });

    // Dirty check
    let dirty = false;
    document.querySelectorAll('form input, form select, form textarea').forEach(f => {
      f.addEventListener('change', () => dirty = true);
    });
    window.addEventListener('beforeunload', function(e) {
      if (dirty) { e.preventDefault(); e.returnValue = ''; }
    });
  });
})();