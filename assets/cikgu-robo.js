// "Cikgu Robo" study-helper chat widget. Talks to the Cloudflare Worker in
// chat-worker/, which tutors with Claude and links to this site's study pages.
(function () {
  'use strict';

  var ENDPOINT = /^(localhost|127\.0\.0\.1)$/.test(location.hostname)
    ? 'http://localhost:8787/chat' // `npm run dev` in chat-worker/
    : 'https://luqman-study-chat.azan-sapardi.workers.dev/chat';
  var STORE_KEY = 'cikgu-robo-chat-v1';
  var OPEN_KEY = 'cikgu-robo-open';
  var MAX_HISTORY = 12;
  var MAX_CHARS = 1500;

  var script = document.currentScript;
  var siteRoot = new URL('../', script ? script.src : location.href);

  var SUGGESTIONS = [
    'Macam mana nak tambah pecahan 1/2 + 1/3?',
    'Apakah fotosintesis?',
    'Beza kata nama am dan kata nama khas?',
    'Help me practise English past tense'
  ];

  // A friendly round robot face: antenna, big shiny eyes, smile and rosy cheeks.
  function robot(cls) {
    return '<svg class="' + cls + '" viewBox="0 0 64 64" aria-hidden="true" focusable="false">' +
      '<line x1="32" y1="5" x2="32" y2="14" stroke="#c9c2ff" stroke-width="3" stroke-linecap="round"/>' +
      '<circle class="cr-bulb" cx="32" cy="6" r="4.2" fill="#facc15"/>' +
      '<rect x="5" y="27" width="7" height="14" rx="3.5" fill="#a78bfa"/>' +
      '<rect x="52" y="27" width="7" height="14" rx="3.5" fill="#a78bfa"/>' +
      '<rect x="10" y="13" width="44" height="40" rx="16" fill="#f4f1ff"/>' +
      '<rect x="15.5" y="19.5" width="33" height="25" rx="11" fill="#1e1b4b"/>' +
      '<g class="cr-eyes">' +
        '<ellipse cx="25" cy="30" rx="4.2" ry="4.8" fill="#5eead4"/>' +
        '<ellipse cx="39" cy="30" rx="4.2" ry="4.8" fill="#5eead4"/>' +
        '<circle cx="26.6" cy="28.2" r="1.5" fill="#fff"/>' +
        '<circle cx="40.6" cy="28.2" r="1.5" fill="#fff"/>' +
      '</g>' +
      '<path d="M27.5 37.2 Q32 40.8 36.5 37.2" fill="none" stroke="#5eead4" stroke-width="2.4" stroke-linecap="round"/>' +
      '<circle cx="19.5" cy="38" r="2.6" fill="#f472b6" opacity=".75"/>' +
      '<circle cx="44.5" cy="38" r="2.6" fill="#f472b6" opacity=".75"/>' +
    '</svg>';
  }
  var ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var ICON_RESET = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>';
  var ICON_SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  // Stylesheet and font load relative to this script, so it works from any page depth.
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = new URL('assets/cikgu-robo.css?v=1', siteRoot).href;
  document.head.appendChild(css);
  var font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@500;700;800&display=swap';
  document.head.appendChild(font);

  var root = document.createElement('div');
  root.id = 'cikgu-robo';
  root.innerHTML =
    '<button type="button" class="cr-launcher" aria-haspopup="dialog" aria-controls="cr-panel" aria-expanded="false">' +
      '<span class="cr-launcher-bot">' + robot('cr-bot') + '</span>' +
      '<span class="cr-launcher-label">Tanya Cikgu Robo</span>' +
    '</button>' +
    '<div class="cr-panel" id="cr-panel" role="dialog" aria-modal="false" aria-labelledby="cr-title">' +
      '<div class="cr-head">' +
        '<span class="cr-avatar">' + robot('cr-bot') + '</span>' +
        '<div class="cr-head-text">' +
          '<p class="cr-title" id="cr-title">Cikgu Robo</p>' +
          '<p class="cr-sub">Kawan belajar kamu · Matematik, Sains, BM, English &amp; more</p>' +
        '</div>' +
        '<button type="button" class="cr-icon-btn cr-reset" aria-label="Start a new conversation" title="Mula semula">' + ICON_RESET + '</button>' +
        '<button type="button" class="cr-icon-btn cr-close" aria-label="Close chat" title="Tutup">' + ICON_CLOSE + '</button>' +
      '</div>' +
      '<div class="cr-log" aria-live="polite" aria-relevant="additions"></div>' +
      '<form class="cr-form">' +
        '<label class="cr-sr" for="cr-input">Your question</label>' +
        '<textarea class="cr-input" id="cr-input" rows="1" maxlength="' + MAX_CHARS + '" placeholder="Tanya apa-apa soalan pelajaran…" autocomplete="off"></textarea>' +
        '<button type="submit" class="cr-send" aria-label="Send" disabled>' + ICON_SEND + '</button>' +
      '</form>' +
      '<p class="cr-foot">Robot AI · boleh tersilap, semak dengan cikgu atau buku teks.</p>' +
    '</div>';
  document.body.appendChild(root);

  var launcher = root.querySelector('.cr-launcher');
  var panel = root.querySelector('.cr-panel');
  var log = root.querySelector('.cr-log');
  var form = root.querySelector('.cr-form');
  var input = root.querySelector('.cr-input');
  var send = root.querySelector('.cr-send');
  var resetBtn = root.querySelector('.cr-reset');
  var mobile = window.matchMedia('(max-width: 520px)');

  var history = load();
  var busy = false;

  function load() {
    try {
      var data = JSON.parse(sessionStorage.getItem(STORE_KEY) || '[]');
      if (!Array.isArray(data)) return [];
      data = data.filter(function (m) {
        return m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string';
      });
      // Only complete exchanges are stored, but guard against an older/corrupt entry.
      while (data.length && data[data.length - 1].role !== 'assistant') data.pop();
      return data;
    } catch (e) { return []; }
  }
  function save() {
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(history.slice(-MAX_HISTORY * 2))); } catch (e) { /* storage unavailable */ }
  }
  function remember(key, value) {
    try { sessionStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
  }
  function recall(key) {
    try { return sessionStorage.getItem(key); } catch (e) { return null; }
  }

  // --- Minimal, safe Markdown: escape everything, then allow links, bold, italics, lists.
  function esc(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function safeHref(raw) {
    var href = raw.trim();
    if (/^(javascript|data|vbscript):/i.test(href)) return null;
    try {
      var url = new URL(href, siteRoot);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
      return url;
    } catch (e) { return null; }
  }
  // noLinks: inside a link label, so don't nest another <a>.
  // Italics need a word boundary on both sides so maths like 2*3*4 stays as typed.
  function inline(text, noLinks) {
    var out = '';
    var re = /\[([^\]\n]+)\]\(([^)\s]+)\)|\*\*([^*\n]+)\*\*|(https?:\/\/[^\s<)]+[^\s<).,;:!?'"])|(?:^|(?<=[\s(]))[*_]([^*_\s][^*_\n]*?)[*_](?=[\s).,;:!?]|$)/g;
    var last = 0, m;
    while ((m = re.exec(text))) {
      out += esc(text.slice(last, m.index));
      if (m[1]) {
        var url = noLinks ? null : safeHref(m[2]);
        out += url ? link(url, inline(m[1], true)) : inline(m[1], noLinks);
      } else if (m[3]) {
        out += '<strong>' + inline(m[3], noLinks) + '</strong>';
      } else if (m[5]) {
        out += '<em>' + inline(m[5], noLinks) + '</em>';
      } else {
        var bare = noLinks ? null : safeHref(m[4]);
        out += bare ? link(bare, esc(m[4])) : esc(m[4]);
      }
      last = re.lastIndex;
    }
    return out + esc(text.slice(last));
  }
  // Site pages open in place (the chat reopens there); other sites open in a new tab.
  function link(url, label) {
    var newTab = url.origin !== siteRoot.origin;
    return '<a href="' + esc(url.href) + '"' + (newTab ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + label + '</a>';
  }
  function render(md) {
    var html = '', list = null, para = [];
    function flush() {
      if (para.length) { html += '<p>' + para.map(function (l) { return inline(l); }).join('<br>') + '</p>'; para = []; }
    }
    function closeList() { if (list) { html += '</' + list + '>'; list = null; } }
    md.split('\n').forEach(function (line) {
      var item = line.match(/^\s*([-*•]|\d+[.)])\s+(.*)$/);
      if (item) {
        flush();
        var type = /\d/.test(item[1]) ? 'ol' : 'ul';
        if (list !== type) {
          closeList();
          // Keep the model's own numbering if a list restarts after a paragraph.
          var start = type === 'ol' ? parseInt(item[1], 10) : 1;
          html += '<' + type + (start > 1 ? ' start="' + start + '"' : '') + '>';
          list = type;
        }
        html += '<li>' + inline(item[2]) + '</li>';
      } else {
        closeList();
        if (line.trim()) para.push(line.replace(/^#+\s*/, '').trim()); else flush();
      }
    });
    flush();
    closeList();
    return html;
  }

  // --- View
  function addMessage(role, content) {
    var el = document.createElement('div');
    el.className = 'cr-row ' + (role === 'user' ? 'cr-row-user' : 'cr-row-bot');
    var bubble = document.createElement('div');
    bubble.className = 'cr-msg ' + (role === 'user' ? 'cr-msg-user' : 'cr-msg-bot');
    if (role === 'user') {
      bubble.innerHTML = '<span class="cr-sr">You said: </span>' + esc(content);
    } else {
      el.innerHTML = '<span class="cr-mini">' + robot('cr-bot') + '</span>';
      setBotContent(bubble, render(content));
    }
    el.appendChild(bubble);
    log.appendChild(el);
    scrollDown(true);
    return bubble;
  }
  function setBotContent(el, html) {
    el.innerHTML = '<span class="cr-sr">Cikgu Robo: </span>' + html;
  }
  // Follow the stream only if the student hasn't scrolled up to read.
  function scrollDown(force) {
    if (force || log.scrollHeight - log.scrollTop - log.clientHeight < 80) log.scrollTop = log.scrollHeight;
  }

  function renderAll() {
    log.innerHTML = '';
    if (!history.length) {
      var hello = document.createElement('div');
      hello.className = 'cr-hello';
      hello.innerHTML = robot('cr-bot cr-hello-bot') +
        '<p class="cr-intro"><strong>Hai! Saya Cikgu Robo 🤖</strong><br>' +
        'Tanya saya apa-apa tentang pelajaran — Matematik, Sains, Bahasa Melayu, English, Sejarah dan lain-lain. ' +
        'Saya terangkan langkah demi langkah! <span class="cr-en">Ask in English or BM.</span></p>';
      var chips = document.createElement('div');
      chips.className = 'cr-chips';
      SUGGESTIONS.forEach(function (q) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'cr-chip';
        b.textContent = q;
        b.addEventListener('click', function () { input.focus(); ask(q); });
        chips.appendChild(b);
      });
      log.appendChild(hello);
      log.appendChild(chips);
      return;
    }
    history.forEach(function (m) { addMessage(m.role, m.content); });
  }

  function setOpen(open, restoring) {
    root.classList.toggle('cr-open', open);
    launcher.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-modal', String(open && mobile.matches));
    remember(OPEN_KEY, open ? '1' : '0');
    if (open) {
      if (!log.childElementCount) renderAll();
      scrollDown(true);
      // Don't grab focus (or pop the mobile keyboard) when reopening after navigation.
      if (!restoring) setTimeout(function () { input.focus(); }, 60);
    } else if (!restoring) {
      launcher.focus();
    }
  }

  function syncControls() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    send.disabled = busy || !input.value.trim();
    resetBtn.disabled = busy;
  }

  // --- Network
  async function ask(question) {
    question = question.trim().slice(0, MAX_CHARS);
    if (!question || busy) return;
    busy = true;
    input.value = '';
    syncControls();
    if (!history.length) log.innerHTML = '';

    var turn = history.concat({ role: 'user', content: question });
    addMessage('user', question);

    var bubble = addMessage('assistant', '');
    bubble.innerHTML = '<span class="cr-typing" role="status"><span class="cr-sr">Cikgu Robo is thinking…</span><span></span><span></span><span></span></span>';
    root.classList.add('cr-busy');
    // Screen readers announce the finished reply once, not every streamed chunk.
    log.setAttribute('aria-busy', 'true');
    var answer = '';
    var streamError = null;

    try {
      var res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: turn.slice(-MAX_HISTORY) })
      });
      if (!res.ok || !res.body) {
        var info = await res.json().catch(function () { return {}; });
        throw new Error(info.error || 'Cikgu Robo tak dapat dihubungi sekarang. (The assistant is unavailable right now.)');
      }
      var reader = res.body.getReader();
      var decoder = new TextDecoder();
      var buffer = '';
      for (;;) {
        var chunk = await reader.read();
        if (chunk.done) break;
        buffer += decoder.decode(chunk.value, { stream: true });
        var events = buffer.split('\n\n');
        buffer = events.pop();
        events.forEach(function (evt) {
          var line = evt.trim();
          if (line.indexOf('data: ') !== 0) return;
          var data;
          try { data = JSON.parse(line.slice(6)); } catch (e) { return; }
          if (data.reset) answer = '';
          if (data.t) answer += data.t;
          if (data.error) streamError = data.error;
        });
        if (answer) { setBotContent(bubble, render(answer)); scrollDown(); }
      }
      if (streamError) throw new Error(streamError);
      if (!answer) throw new Error('Tiada jawapan. Cuba lagi. (No answer came back — please try again.)');
      // Store only complete exchanges so the history always alternates.
      history = turn.concat({ role: 'assistant', content: answer });
      save();
    } catch (err) {
      var msg = (err && err.message && !/fetch|network/i.test(err.message))
        ? err.message
        : 'Tak dapat sambung. Semak internet dan cuba lagi. (Couldn’t connect — check your internet and try again.)';
      if (answer) {
        // Keep what arrived visible, but flag it as cut short and leave it out of history.
        setBotContent(bubble, render(answer) + '<span class="cr-note">' + esc('Jawapan terputus. ' + msg) + '</span>');
      } else {
        bubble.classList.add('cr-error');
        setBotContent(bubble, esc(msg));
      }
    } finally {
      busy = false;
      root.classList.remove('cr-busy');
      log.setAttribute('aria-busy', 'false');
      syncControls();
      if (root.classList.contains('cr-open')) input.focus();
    }
  }

  // --- Events
  launcher.addEventListener('click', function () { setOpen(true); });
  root.querySelector('.cr-close').addEventListener('click', function () { setOpen(false); });
  resetBtn.addEventListener('click', function () {
    if (busy) return;
    history = [];
    save();
    renderAll();
    input.focus();
  });
  form.addEventListener('submit', function (e) { e.preventDefault(); ask(input.value); });
  input.addEventListener('input', syncControls);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); ask(input.value); }
  });
  mobile.addEventListener('change', function () {
    panel.setAttribute('aria-modal', String(root.classList.contains('cr-open') && mobile.matches));
  });
  root.addEventListener('keydown', function (e) {
    if (root.classList.contains('cr-open')) {
      if (e.key === 'Escape') { setOpen(false); }
      // Full-screen on phones: keep Tab inside the chat.
      else if (e.key === 'Tab' && mobile.matches) {
        var items = [].slice.call(panel.querySelectorAll('button:not([disabled]), textarea, a[href]'));
        var first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    // The flash-card and game pages have keyboard shortcuts (Space, arrows, Enter);
    // keep typing in the chat from triggering them.
    e.stopPropagation();
  });
  root.addEventListener('keyup', function (e) { e.stopPropagation(); });
  root.addEventListener('keypress', function (e) { e.stopPropagation(); });

  // Reopen after moving to another page if the chat was open.
  if (recall(OPEN_KEY) === '1') setOpen(true, true);
})();
