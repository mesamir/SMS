/* ═══════════════════════════════════════════════
   TABLE — Select all, row actions
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    // Select-all checkbox
    document.querySelectorAll('[data-select-all]').forEach(master => {
      master.addEventListener('change', function() {
        const table = this.closest('table');
        table.querySelectorAll('tbody input[type="checkbox"]').forEach(cb => {
          cb.checked = this.checked;
        });
      });
    });

    // Row click → navigate (optional)
    document.querySelectorAll('[data-row-href]').forEach(row => {
      row.style.cursor = 'pointer';
      row.addEventListener('click', function(e) {
        if (e.target.closest('button, a, input, label')) return;
        window.location.href = this.getAttribute('data-row-href');
      });
    });
  });
})();