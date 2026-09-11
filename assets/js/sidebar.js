/* ═══════════════════════════════════════════════
   SIDEBAR — Toggle, submenu, mobile
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.sidebar-overlay');

    // Toggle sidebar on mobile
    if (hamburger) {
      hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('open');
      });
    }

    // Close sidebar when overlay is clicked
    if (overlay) {
      overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
      });
    }

    // Submenu toggle
    document.querySelectorAll('.nav-item[data-toggle]').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('open');
      });
    });

    // Close sidebar when clicking a link (mobile)
    document.querySelectorAll('.sidebar a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth < 1024) sidebar.classList.remove('open');
      });
    });
  });
})();