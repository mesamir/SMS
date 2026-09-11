/* ═══════════════════════════════════════════════
   CHARTS — Chart.js init helpers
   Include Chart.js CDN before this file.
   ═══════════════════════════════════════════════ */

window.chartDefaults = {
  primary: '#C41FB8',
  primaryLight: '#FBE8F9',
  grid: '#E5E7EB',
  text: '#6B7280',
  font: "'Inter', sans-serif",
};

window.makeBarChart = function(canvasId, labels, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || !window.Chart) return;
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: chartDefaults.primary,
        borderRadius: 6,
        maxBarThickness: 40,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: chartDefaults.text, font: { family: chartDefaults.font } } },
        y: { grid: { color: chartDefaults.grid }, ticks: { color: chartDefaults.text, font: { family: chartDefaults.font } }, border: { display: false } },
      },
    },
  });
};

window.makeLineChart = function(canvasId, labels, data) {
  const ctx = document.getElementById(canvasId);
  if (!ctx || !window.Chart) return;
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data,
        borderColor: chartDefaults.primary,
        backgroundColor: chartDefaults.primaryLight,
        fill: true, tension: 0.4, borderWidth: 2,
        pointBackgroundColor: chartDefaults.primary,
        pointRadius: 4, pointHoverRadius: 6,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: chartDefaults.text } },
        y: { grid: { color: chartDefaults.grid }, ticks: { color: chartDefaults.text }, border: { display: false } },
      },
    },
  });
};