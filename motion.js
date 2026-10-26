/* Luqman Asri — "Arcade sparkle" motion layer (pairs with motion.css)
   · floating sky of stars & shapes with depth parallax
   · letter-by-letter bouncy titles that hop when pointed at
   · springy staggered card reveals (below the fold only)
   · 3D tilt + glare on cards, cursor-leaning hero orbs
   · click sparkle bursts, rainbow scroll bar with a star
   · cards re-pop after a filter / tab change
   · a pixel critter patrolling the footer
   No dependencies. Reduced motion → nothing hidden, nothing moving. */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasIO = 'IntersectionObserver' in window;
  var root = document.documentElement;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var COLORS = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-4)', 'var(--success)'];
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); };
  var rand = function (a, b) { return a + Math.random() * (b - a); };
  var pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

  // ---------- Shared rainbow gradient for drawn strokes ----------
  var defs = document.createElementNS(SVGNS, 'svg');
  defs.setAttribute('aria-hidden', 'true');
  defs.setAttribute('width', '0'); defs.setAttribute('height', '0');
  defs.style.position = 'absolute';
  defs.innerHTML = '<defs><linearGradient id="m-rainbow-grad" x1="0" x2="1" y1="0" y2="0">' +
    ['var(--accent)', 'var(--accent-2)', 'var(--success)', 'var(--accent-4)', 'var(--accent-3)'].map(function (c, i) {
      return '<stop offset="' + (i / 4) + '" style="stop-color:' + c + '"/>';
    }).join('') + '</linearGradient></defs>';
  document.body.appendChild(defs);

  // ---------- Floating sky ----------
  (function sky() {
    var el = document.createElement('div');
    el.className = 'm-sky';
    el.setAttribute('aria-hidden', 'true');
    var count = window.innerWidth < 640 ? 9 : 18;
    var kinds = ['star', 'star', 'spark', 'ring', 'plus', 'tri', 'dot'];
    var layers = [0.04, 0.12, 0.22].map(function (depth) {
      var l = document.createElement('div');
      l.className = 'm-layer';
      l.style.setProperty('--depth', depth);
      el.appendChild(l);
      return l;
    });
    for (var i = 0; i < count; i++) {
      var s = document.createElement('i');
      var li = i % 3;
      s.className = 'm-s ' + pick(kinds);
      s.style.setProperty('--x', rand(2, 95).toFixed(1) + '%');
      s.style.setProperty('--y', rand(4, 94).toFixed(1) + '%');
      s.style.setProperty('--size', Math.round(rand(8, 14) + li * 5) + 'px');
      s.style.setProperty('--c', pick(COLORS));
      s.style.setProperty('--dur', rand(10, 20).toFixed(1) + 's');
      s.style.setProperty('--delay', (-rand(0, 20)).toFixed(1) + 's');
      layers[li].appendChild(s);
    }
    document.body.insertBefore(el, document.body.firstChild);

    if (reduce) return;
    var tick = false;
    window.addEventListener('scroll', function () {
      if (tick) return;
      tick = true;
      requestAnimationFrame(function () { tick = false; el.style.setProperty('--sy', Math.round(window.scrollY)); });
    }, { passive: true });
  })();

  // ---------- Rainbow scroll bar ----------
  (function progress() {
    var bar = document.createElement('div');
    bar.className = 'm-progress';
    bar.setAttribute('aria-hidden', 'true');
    bar.innerHTML = '<i></i><b></b>';
    document.body.appendChild(bar);
    var tick = false;
    var update = function () {
      tick = false;
      var max = root.scrollHeight - root.clientHeight;
      bar.style.setProperty('--p', max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : 0);
    };
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  })();

  // ---------- Letter-by-letter titles ----------
  function splitTitle(h1) {
    if (!h1 || h1.classList.contains('m-split') || h1.children.length) return;
    var text = h1.textContent.trim();
    if (!text || text.length > 40) return;
    h1.setAttribute('aria-label', text);
    h1.textContent = '';
    var n = 0;
    text.split(/\s+/).forEach(function (word, wi) {
      if (wi) h1.appendChild(document.createTextNode(' '));
      var w = document.createElement('span');
      w.className = 'm-word';
      w.setAttribute('aria-hidden', 'true');
      Array.prototype.forEach.call(word, function (ch) {
        var c = document.createElement('span');
        c.className = 'm-ch';
        c.textContent = ch;
        c.style.setProperty('--i', n++);
        w.appendChild(c);
      });
      h1.appendChild(w);
    });
    h1.classList.add('m-split');

    // Each letter paints its own slice of the title gradient, so the colours line up
    var chars = $$('.m-ch', h1);
    var place = function () {
      h1.style.setProperty('--w', h1.clientWidth + 'px');
      h1.style.setProperty('--h', h1.clientHeight + 'px');
      chars.forEach(function (c) {
        c.style.setProperty('--x', c.offsetLeft + 'px');
        c.style.setProperty('--y', c.offsetTop + 'px');
      });
    };
    place();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(place, 100); }, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);

    // After the drop-in, letters hop when the pointer touches them
    setTimeout(function () { h1.classList.add('m-done'); }, 900 + chars.length * 55 + 200);
    h1.addEventListener('pointerover', function (e) {
      var c = e.target.closest && e.target.closest('.m-ch');
      if (!c || !h1.classList.contains('m-done') || c.classList.contains('m-hop')) return;
      c.classList.add('m-hop');
      c.addEventListener('animationend', function done() { c.classList.remove('m-hop'); c.removeEventListener('animationend', done); });
    });
  }
  if (!reduce) $$('.hero h1, .page-hero h1').forEach(splitTitle);

  // ---------- Hero art: twinkles + cursor-leaning orbs ----------
  var art = document.querySelector('.hero-art');
  if (art && !reduce) {
    for (var t = 0; t < 9; t++) {
      var tw = document.createElement('span');
      tw.className = 'm-twinkle';
      tw.style.setProperty('--x', rand(6, 92).toFixed(1) + '%');
      tw.style.setProperty('--y', rand(6, 90).toFixed(1) + '%');
      tw.style.setProperty('--delay', (-rand(0, 2.6)).toFixed(2) + 's');
      art.appendChild(tw);
    }
    if (fine) {
      var hero = document.querySelector('.hero') || art;
      hero.addEventListener('pointermove', function (e) {
        art.style.setProperty('--px', (e.clientX / window.innerWidth - 0.5).toFixed(3));
        art.style.setProperty('--py', (e.clientY / window.innerHeight - 0.5).toFixed(3));
      }, { passive: true });
      hero.addEventListener('pointerleave', function () { art.style.setProperty('--px', 0); art.style.setProperty('--py', 0); });
    }
  }

  // ---------- Pixel-art blocks get a wave index ----------
  $$('.pixel-art').forEach(function (pa) {
    $$('span', pa).forEach(function (s, i) { s.style.setProperty('--n', (i % 4) + Math.floor(i / 4)); });
  });

  // ---------- Card enhancements ----------
  var TILT = '.card, .subject';
  function enhance(el) {
    if (!fine || reduce) return;
    if (el.matches('.card')) el.classList.add('m-tilt', 'm-glare');
    else if (el.matches('.subject')) el.classList.add('m-glare');   // no tilt: no perspective on study panels
  }

  // ---------- Springy scroll reveals (only for what starts below the fold) ----------
  var REVEAL = '.section-head, .card, .stat-row, .subject, .contents-head, .hint, .filter-row, .formtabs';
  var below = function (el) { return el.getBoundingClientRect().top > window.innerHeight * 0.96; };
  function done(el) {
    el.classList.remove('m-rv', 'm-in');
    el.style.removeProperty('--m-d');
    el.style.removeProperty('--rr');
    enhance(el);
  }
  if (!reduce && hasIO) {
    var pending = [];
    var obs = new IntersectionObserver(function (entries) {
      var hits = entries.filter(function (e) { return e.isIntersecting; }).map(function (e) { return e.target; });
      hits.sort(function (a, b) { return a.compareDocumentPosition(b) & 4 ? -1 : 1; });
      hits.forEach(function (el, i) {
        obs.unobserve(el);
        var d = Math.min(i, 6) * 90;
        el.style.setProperty('--m-d', d + 'ms');
        el.classList.add('m-in');
        setTimeout(function () { done(el); }, d + 1000);
      });
    }, { threshold: 0.05 });
    $$(REVEAL).forEach(function (el, i) {
      if (!el.getClientRects().length || !below(el)) { enhance(el); return; }
      el.classList.add('m-rv');
      el.style.setProperty('--rr', (i % 2 ? 2.5 : -2.5) + 'deg');
      pending.push(el);
      obs.observe(el);
    });
    window.addEventListener('beforeprint', function () { pending.forEach(done); });
  } else {
    $$(TILT).forEach(enhance);
  }

  // ---------- Re-pop cards after a filter chip or study tab ----------
  function repop(scope) {
    if (reduce) return;
    var items = $$('.card:not(.hidden), .subject', scope).filter(function (c) { return c.getClientRects().length && !c.classList.contains('m-rv'); });
    items.forEach(function (c, i) {
      c.classList.remove('m-pop-in');
      void c.offsetWidth;                       // restart the animation
      c.style.setProperty('--i', Math.min(i, 10));
      c.classList.add('m-pop-in');
    });
  }
  document.addEventListener('animationend', function (e) {
    if (e.animationName === 'm-pop-card') e.target.classList.remove('m-pop-in');
  });
  $$('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () { setTimeout(function () { repop(document); }, 0); });
  });
  $$('.formtabs button').forEach(function (tab) {
    tab.addEventListener('click', function () {
      setTimeout(function () {
        var panel = document.getElementById(tab.getAttribute('aria-controls'));
        if (panel && !panel.hidden) { $$('.subject', panel).forEach(enhance); repop(panel); }
      }, 0);
    });
  });

  // ---------- Doodled underline under section headings ----------
  var drawObs = hasIO && !reduce ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      drawObs.unobserve(e.target);
      e.target.classList.add('m-in');
    });
  }, { threshold: 0.2 }) : null;
  $$('.section-head h2').forEach(function (h) {
    var svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('class', 'm-doodle');
    svg.setAttribute('viewBox', '0 0 140 14');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.innerHTML = '<path d="M3 8 C 14 2, 22 2, 30 8 S 46 13, 56 7 S 74 1, 84 7 S 102 13, 112 7 S 128 3, 137 6"/>';
    h.appendChild(svg);
    if (drawObs) { svg.classList.add('m-armed'); drawObs.observe(svg); }
  });

  // ---------- Pointer: tilt + glare ----------
  if (fine && !reduce) {
    var cur = null, px = 0, py = 0, raf = 0;
    var paint = function () {
      raf = 0;
      if (!cur) return;
      var r = cur.getBoundingClientRect();
      var x = px - r.left, y = py - r.top;
      var nx = x / r.width - 0.5, ny = y / r.height - 0.5;
      cur.style.setProperty('--mx', x.toFixed(0) + 'px');
      cur.style.setProperty('--my', y.toFixed(0) + 'px');
      cur.style.setProperty('--tx', (-ny).toFixed(3));
      cur.style.setProperty('--ty', nx.toFixed(3));
      cur.style.setProperty('--ta', (Math.min(1, Math.hypot(nx, ny) * 2) * (cur.classList.contains('subject') ? 2 : 7)).toFixed(2) + 'deg');
      cur.classList.add('m-tracking');
    };
    var release = function (el) {
      if (!el) return;
      el.classList.remove('m-tracking');
      ['--tx', '--ty', '--ta'].forEach(function (p) { el.style.removeProperty(p); });
    };
    document.addEventListener('pointermove', function (e) {
      var t = e.target.closest ? e.target.closest('.m-tilt') : null;
      if (t !== cur) { release(cur); cur = t; }
      if (!cur) return;
      px = e.clientX; py = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', function () { release(cur); cur = null; });
  }

  // ---------- Click sparkles ----------
  if (!reduce && Element.prototype.animate) {
    var layer = document.createElement('div');
    layer.className = 'm-burst-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
    var live = 0;
    document.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 || live > 70) return;
      var t = e.target;
      if (t.closest && t.closest('input, textarea, select, #cikgu-robo, [contenteditable]')) return;
      var big = !!(t.closest && t.closest('a, button'));
      var n = big ? 14 : 8;
      for (var i = 0; i < n; i++) {
        var p = document.createElement('i');
        p.className = 'm-p ' + pick(['star', 'star', 'dot', 'bar']);
        p.style.setProperty('--c', pick(COLORS));
        p.style.setProperty('--sz', Math.round(rand(8, big ? 16 : 12)) + 'px');
        layer.appendChild(p);
        live++;
        var ang = (i / n) * Math.PI * 2 + rand(-0.3, 0.3);
        var dist = rand(big ? 40 : 26, big ? 90 : 60);
        var dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist;
        var x0 = e.clientX, y0 = e.clientY;
        var anim = p.animate([
          { translate: x0 + 'px ' + y0 + 'px', scale: 0.2, rotate: '0deg', opacity: 1 },
          { translate: (x0 + dx * 0.8) + 'px ' + (y0 + dy * 0.8) + 'px', scale: 1, opacity: 1, offset: 0.45 },
          { translate: (x0 + dx) + 'px ' + (y0 + dy + 34) + 'px', scale: 0.3, rotate: rand(-300, 300).toFixed(0) + 'deg', opacity: 0 }
        ], { duration: rand(650, 950), easing: 'cubic-bezier(.22,1,.36,1)' });
        (function (el, a) {
          var gone = false;
          var kill = function () { if (gone) return; gone = true; live--; el.remove(); };
          a.onfinish = kill; a.oncancel = kill;
          setTimeout(kill, 1200);
        })(p, anim);
      }
    }, { passive: true });
  }

  // ---------- Stats: pop when the count lands ----------
  if (!reduce && hasIO) {
    var statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        statObs.unobserve(e.target);
        setTimeout(function () { e.target.classList.add('m-landed'); }, 900);
      });
    }, { threshold: 0.3 });
    $$('.stat-num').forEach(function (s) { statObs.observe(s); });
  }

  // ---------- Theme toggle: spin the icon, burst the new colours out in a circle ----------
  var toggle = document.getElementById('themeToggle');
  if (toggle && !reduce) {
    toggle.addEventListener('click', function () {
      toggle.classList.remove('m-spin'); void toggle.offsetWidth; toggle.classList.add('m-spin');
    });
  }

  // ---------- Footer pixel critter ----------
  var footer = document.querySelector('.site-footer');
  if (footer) {
    // 11×8 sprite, two leg frames ("#" = pixel)
    var A = ['  #     #  ', '   #   #   ', '  #######  ', ' ## ### ## ', '###########', '# ####### #', '# #     # #', '   ## ##   '];
    var B = ['  #     #  ', '#  #   #  #', '# ####### #', '### ### ###', '###########', ' ######### ', '  #     #  ', ' #       # '];
    var shadow = function (rows) {
      var out = [];
      rows.forEach(function (row, y) {
        for (var x = 0; x < row.length; x++) if (row[x] === '#') out.push((x * 3) + 'px ' + (y * 3) + 'px currentColor');
      });
      return out.join(',');
    };
    var style = document.createElement('style');
    style.textContent = '@keyframes m-legs{0%,49.99%{box-shadow:' + shadow(A) + '}50%,100%{box-shadow:' + shadow(B) + '}}' +
                        '.m-critter i{box-shadow:' + shadow(A) + '}';
    document.head.appendChild(style);
    var track = document.createElement('div');
    track.className = 'm-critter-track';
    track.setAttribute('aria-hidden', 'true');
    track.innerHTML = '<div class="m-critter"><i></i></div>';
    footer.insertBefore(track, footer.firstChild);
    // say "yay" (a little jump) whenever someone clicks the footer
    if (!reduce) {
      var critter = track.firstChild;
      footer.addEventListener('pointerdown', function () {
        critter.classList.remove('m-yay'); void critter.offsetWidth; critter.classList.add('m-yay');
        setTimeout(function () { critter.classList.remove('m-yay'); }, 650);
      });
    }
  }
})();
