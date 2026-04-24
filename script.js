/* Luqman Asri — site script */
(function () {
  'use strict';

  // ---- Year ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Theme toggle ----
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      var next = current === 'light' ? 'dark' : 'light';
      if (next === 'light') root.setAttribute('data-theme', 'light');
      else root.removeAttribute('data-theme');
      try { localStorage.setItem('luqman-theme', next); } catch (e) {}
    });
  }

  // ---- Filter chips ----
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('[data-cat]');
  if (chips.length && cards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var filter = chip.getAttribute('data-filter');
        cards.forEach(function (card) {
          var cat = card.getAttribute('data-cat');
          if (filter === 'all' || cat === filter) card.classList.remove('hidden');
          else card.classList.add('hidden');
        });
      });
    });
  }

  // ---- Stat counters (home) ----
  var stats = document.querySelectorAll('.stat-num[data-count]');
  if (stats.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var start = 0;
        var duration = 900;
        var t0 = performance.now();
        function tick(now) {
          var p = Math.min(1, (now - t0) / duration);
          el.textContent = Math.round(start + (target - start) * p);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.3 });
    stats.forEach(function (s) { io.observe(s); });
  }
})();
