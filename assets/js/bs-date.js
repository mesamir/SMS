/* ═══════════════════════════════════════════════
   BS DATE — Bikram Sambat picker (simplified)
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  // Simplified BS months
  window.BS_MONTHS = ['Baisakh','Jestha','Ashadh','Shrawan','Bhadra','Ashoj','Kartik','Mangsir','Poush','Magh','Falgun','Chaitra'];

  // Convert AD → BS (approximate — use nepali-date-converter in production)
  window.adToBs = function(adDate) {
    const yearOffset = 56.7;
    const bsYear = adDate.getFullYear() + Math.floor(yearOffset);
    const month = adDate.getMonth();
    const bsMonth = month >= 3 ? month - 3 : month + 9;
    const bsDay = adDate.getDate();
    return { year: bsYear, month: bsMonth, day: bsDay };
  };

  window.formatBs = function(adDate) {
    const bs = adToBs(new Date(adDate));
    return `${bs.day} ${BS_MONTHS[bs.month]} ${bs.year}`;
  };
})();