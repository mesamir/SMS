/* ═══════════════════════════════════════════════
   APP — Global utilities
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  // ─── Toast system ───
  window.toast = function(message, type = 'info', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        ${type === 'success' ? '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>' :
          type === 'error' ? '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>' :
          '<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>'}
      </svg>
      <span style="flex:1;font-size:14px;">${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), duration);
  };

  // ─── Modal system ───
  window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('open');
  };
  window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('open');
  };

  // Close modal on backdrop click
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.classList.remove('open');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  // ─── Confirm dialog ───
  window.confirmAction = function(message, onConfirm) {
    if (window.confirm(message)) {
      if (typeof onConfirm === 'function') onConfirm();
    }
  };

  // ─── Format helpers ───
  window.formatNPR = function(amount) {
    return 'NPR ' + Number(amount).toLocaleString('en-IN', { maximumFractionDigits: 2 });
  };
  window.formatNumber = function(n) {
    return Number(n).toLocaleString('en-IN');
  };
  window.formatDate = function(date) {
    return new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  // ─── Initialize ───
  document.addEventListener('DOMContentLoaded', function() {
    // Auto-detect active nav based on current path
    const current = window.location.pathname.split('/').slice(-2).join('/');
    document.querySelectorAll('.nav-item').forEach(item => {
      const href = item.getAttribute('href');
      if (href && href.endsWith(current)) item.classList.add('active');
    });
  });
})();