/* Rio Beach Safe · CBMERJ – lógica do web app
   Sem dependências. Navegação por hash (#/menu, #/flags, ...).
   Idioma salvo em localStorage; também aceita ?lang=en na URL
   (útil para QR Codes já em um idioma, ex.: hotéis). */
(function () {
  'use strict';

  const LINKS = {
    android: 'https://play.google.com/store/apps/details?id=br.gov.rj.cbmerj.rj193android&hl=pt_BR',
    ios: 'https://apps.apple.com/br/app/193rj/id6742510233'
  };
  const ROUTES = ['lang', 'menu', 'flags', 'rip', 'health', 'kids', 'emergency'];
  const app = document.getElementById('app');

  /* ── idioma ─────────────────────────────────────────────── */
  function langFromUrl() {
    const q = new URLSearchParams(location.search).get('lang');
    return q && window.I18N[q] ? q : null;
  }
  function storedLang() {
    try { return localStorage.getItem('rbs-lang'); } catch (e) { return null; }
  }
  let lang = langFromUrl() || storedLang();
  if (!window.I18N[lang]) lang = null;

  function setLang(code) {
    lang = code;
    try { localStorage.setItem('rbs-lang', code); } catch (e) { /* modo privado */ }
    applyLangAttrs();
  }
  function applyLangAttrs() {
    const meta = window.LANGS.find(l => l.code === lang) || {};
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : (lang || 'pt-BR');
    document.documentElement.dir = meta.rtl ? 'rtl' : 'ltr';
    document.body.className = document.body.className.replace(/\blang-\w+\b/g, '').trim();
    document.body.classList.add('lang-' + (lang || 'pt'));
    syncVLibras();
  }
  // VLibras só traduz português: mostra o botão do widget apenas nesse idioma
  // (e nunca na tela de escolha de idioma, que já tem o botão "Libras").
  function syncVLibras() {
    const w = document.getElementById('vlibras-access-wrapper');
    if (!w) return;
    const show = lang === 'pt' && !document.body.classList.contains('on-lang');
    w.style.display = show ? '' : 'none';
  }
  // O plugin injeta o botão depois do carregamento: observa o body até ele aparecer
  new MutationObserver((muts, obs) => {
    if (document.getElementById('vlibras-access-wrapper')) { syncVLibras(); obs.disconnect(); }
  }).observe(document.body, { childList: true });
  const t = () => window.I18N[lang] || window.I18N.pt;

  /* ── helpers ────────────────────────────────────────────── */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const go = r => { location.hash = '#/' + r; };

  const ICONS = {
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    flag: '<svg viewBox="0 0 24 24"><path d="M5 21V4"/><path d="M5 4h13l-3 4 3 4H5"/></svg>',
    wave: '<svg viewBox="0 0 24 24"><path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M2 17c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M2 7c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    kids: '<svg viewBox="0 0 24 24"><circle cx="8" cy="6" r="3"/><circle cx="17" cy="8" r="2.4"/><path d="M3 21v-5a5 5 0 0 1 10 0v5"/><path d="M14 21v-4a3.5 3.5 0 0 1 7 0v4"/></svg>',
    siren: '<svg viewBox="0 0 24 24"><path d="M6 20V13a6 6 0 0 1 12 0v7"/><path d="M3 20h18"/><path d="M12 3v2M4.5 6.5l1.5 1.5M19.5 6.5L18 8"/></svg>'
  };

  function head(opts) {
    const u = t().ui;
    const meta = window.LANGS.find(l => l.code === lang) || {};
    return `
      <header class="screen-head">
        <button class="icon-btn" data-go="${opts.back || 'menu'}" aria-label="${esc(u.back)}">${ICONS.back}</button>
        <img class="logo-sm" src="assets/img/logo-projeto-rio-beach-safe.webp" alt="Projeto Rio Beach Safe">
        <button class="icon-btn lang-chip" data-go="lang" aria-label="${esc(u.changeLang)}" title="${esc(u.changeLang)}">${meta.flag || '🌐'}</button>
      </header>`;
  }
  function footer() {
    const u = t().ui;
    return `
      <div class="slogan">${esc(u.slogan)}</div>
      <footer class="footer">
        <img src="assets/img/brasao-cbmerj.webp" alt="Brasão do CBMERJ">
        <b>CBMERJ</b>${esc(u.cbmerj)}<br>Projeto Rio Beach Safe
      </footer>`;
  }

  /* ── telas ──────────────────────────────────────────────── */
  function screenLang() {
    const u = (window.I18N[lang] || window.I18N.pt).ui;
    const main = window.LANGS.filter(l => l.main);
    const others = window.LANGS.filter(l => !l.main);
    const btn = l => `<button class="lang-btn" data-lang="${l.code}" lang="${l.code}"><span class="flag">${l.flag}</span>${esc(l.name)}</button>`;
    return `
      <section class="hero">
        <img class="logo" src="assets/img/logo-projeto-rio-beach-safe.webp" alt="Projeto Rio Beach Safe">
        <img class="boia" src="assets/img/boia-rio-beach-safe-guarda-vidas.webp" alt="">
        <p class="tagline">${esc(u.tagline)}</p>
        <p class="choose">${esc(u.chooseLang)}</p>
        <div class="lang-grid">
          ${main.map(btn).join('')}
          <button class="lang-btn wide libras" data-lang="libras"><span class="flag">🤟</span><span>${esc(u.libras)}<small>${esc(u.librasHint)}</small></span></button>
          <button class="lang-btn wide more" id="more-langs" aria-expanded="false"><span class="flag">🌐</span>${esc(u.otherLangs)} ▾</button>
        </div>
        <div class="lang-grid others" id="others" hidden>${others.map(btn).join('')}</div>
      </section>
      <footer class="footer" style="margin-top:28px">
        <img src="assets/img/brasao-cbmerj.webp" alt="Brasão do CBMERJ"><b>CBMERJ</b>${esc(u.cbmerj)}
      </footer>`;
  }

  function screenMenu() {
    const m = t().menu, u = t().ui;
    const item = (r, color, icon, d) => `
      <button class="menu-item" data-go="${r}">
        <span class="ico ${color}">${icon}</span>
        <span class="txt"><b>${esc(d.title)}</b><span>${esc(d.sub)}</span></span>
        <span class="chev">›</span>
      </button>`;
    return `
      ${head({ back: 'lang' })}
      <h1 class="title">${esc(u.menuTitle)}</h1>
      <nav class="menu">
        ${item('flags', 'red', ICONS.flag, m.flags)}
        ${item('rip', 'blue', ICONS.wave, m.rip)}
        ${item('health', 'orange', ICONS.sun, m.health)}
        ${item('kids', 'purple', ICONS.kids, m.kids)}
        ${item('emergency', 'dark', ICONS.siren, m.emergency)}
      </nav>
      ${footer()}`;
  }

  function screenFlags() {
    const f = t().flags;
    const row = (file, color, d) => `
      <div class="flag-row">
        <img src="assets/img/bandeira-${file}.webp" alt="${esc(d.name)}">
        <div><h3>${esc(d.name)}</h3><ul class="bullets">${d.items.map(i => `<li><span class="dot ${color}"></span>${esc(i)}</li>`).join('')}</ul></div>
      </div>`;
    return `
      ${head({})}
      <h1 class="title">${esc(f.title)}</h1>
      <div class="panel">
        ${row('vermelha', 'red', f.red)}
        ${row('amarela', 'yellow', f.yellow)}
        ${row('verde', 'green', f.green)}
        ${row('roxa', 'purple', f.purple)}
      </div>
      <div class="panel attention">⚠️ <b>${esc(f.attention)}</b> ${esc(f.attentionText)}</div>
      ${footer()}`;
  }

  function screenRip() {
    const r = t().rip;
    const img = ['pt', 'es', 'en'].includes(lang) ? lang : 'en';
    const emojis = ['🚩', '🏊', '🙋', '🌊'];
    return `
      ${head({})}
      <h1 class="title">${esc(r.title)}</h1>
      <div class="rip-img"><img src="assets/img/corrente-de-retorno-${img}.jpg" alt="${esc(r.title)}"></div>
      <div class="panel"><ul class="bullets">${r.items.map((i, k) => `<li><span class="emoji">${emojis[k]}</span>${esc(i)}</li>`).join('')}</ul></div>
      ${footer()}`;
  }

  function screenHealth() {
    const h = t().health;
    const card = (file, d) => `
      <div class="panel health-card">
        <img src="assets/img/icone-${file}.webp" alt="">
        <div><div class="panel-title">${esc(d.title)}</div><p>${esc(d.text)}${d.strong ? ` <b>${esc(d.strong)}</b> ${esc(d.after || '')}` : ''}</p></div>
      </div>`;
    return `
      ${head({})}
      <h1 class="title">${esc(h.title)}<small>${esc(h.sub)}</small></h1>
      ${card('agua', h.water)}${card('alcool', h.alcohol)}${card('sol', h.sun)}${card('protecao', h.gear)}
      ${footer()}`;
  }

  function screenKids() {
    const k = t().kids;
    return `
      ${head({})}
      <h1 class="title">${esc(k.title)}</h1>
      <div class="panel wrist">
        <img src="assets/img/pulseira-identificacao.webp" alt="${esc(k.wristTitle)}">
        <div>
          <div class="panel-title">${esc(k.wristTitle)}</div>
          <p style="margin:0;font-size:15px;line-height:1.4">${esc(k.wristText)}</p>
          <ul class="wrist-fields">${k.wristFields.map(f => `<li>👤 ${esc(f)}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="panel"><ul class="bullets">${k.items.map(i => `<li><span class="dot blue"></span>${esc(i)}</li>`).join('')}</ul></div>
      ${footer()}`;
  }

  function screenEmergency() {
    const e = t().emergency, u = t().ui;
    const ua = navigator.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);
    const storeBtn = (href, label) => `
      <a class="store" href="${href}" target="_blank" rel="noopener">
        <img src="assets/img/icon-192.png" alt="">
        <div><b>${esc(u.install193)}</b><span>${esc(u.install193Sub)}</span></div>
        <span class="badge">${label}</span>
      </a>`;
    let stores;
    if (isIOS) stores = storeBtn(LINKS.ios, 'App Store');
    else if (isAndroid) stores = storeBtn(LINKS.android, 'Google Play');
    else stores = `<div class="store-row">${storeBtn(LINKS.ios, 'App Store')}${storeBtn(LINKS.android, 'Google Play')}</div>`;
    const num = n => `<a class="num" href="tel:${n}"><b>${n}</b><span>${esc(e.numbers[n])}</span><small>📞 ${esc(u.tapToCall)}</small></a>`;
    return `
      ${head({})}
      <h1 class="title">${esc(e.title)}</h1>
      <div class="numbers">${num('193')}${num('192')}${num('190')}${num('199')}</div>
      <div class="panel note">${esc(e.note1)}<br><span class="y">${esc(e.note2)}</span><br>${esc(e.note3)}</div>
      ${stores}
      ${footer()}`;
  }

  /* ── router ─────────────────────────────────────────────── */
  function route() {
    let r = (location.hash.replace(/^#\/?/, '') || '').split('?')[0];
    if (!ROUTES.includes(r)) r = lang ? 'menu' : 'lang';
    if (!lang && r !== 'lang') r = 'lang';
    document.body.classList.toggle('on-emergency', r === 'emergency');
    document.body.classList.toggle('on-lang', r === 'lang');
    applyLangAttrs();
    const screens = { lang: screenLang, menu: screenMenu, flags: screenFlags, rip: screenRip, health: screenHealth, kids: screenKids, emergency: screenEmergency };
    app.innerHTML = screens[r]();
    window.scrollTo(0, 0);
    if (r === 'lang') {
      const more = document.getElementById('more-langs'), others = document.getElementById('others');
      const toggle = () => { const open = others.hidden; others.hidden = !open; more.setAttribute('aria-expanded', String(open)); };
      more.addEventListener('click', toggle);
      if (query.get('more') === '1') toggle();
    }
  }
  // Parâmetros opcionais na URL: ?lang=xx (idioma), ?libras=1 (abre o VLibras), ?more=1 (expande outros idiomas)
  const query = new URLSearchParams(location.search);

  app.addEventListener('click', ev => {
    const el = ev.target.closest('[data-lang], [data-go]');
    if (!el) return;
    if (el.dataset.lang) {
      if (el.dataset.lang === 'libras') { setLang('pt'); go('menu'); setTimeout(openVLibras, 600); }
      else { setLang(el.dataset.lang); go('menu'); }
    } else if (el.dataset.go) {
      go(el.dataset.go);
    }
  });

  function openVLibras() {
    const w = window.VLibrasWidget;
    if (w && typeof w.open === 'function') w.open();
    else if (w && w.initBtn) w.initBtn.click();
  }

  /* Barra "Fechar Libras": o painel do VLibras cobre parte da tela no celular e
     seu próprio X fica difícil de achar. Quando o painel abre, mostramos uma barra
     fixa no topo com um X grande que fecha o painel e devolve a leitura normal. */
  function closeVLibras() {
    const root = document.getElementById('vlibras-app-root');
    if (root) root.dataset.active = 'false';
  }
  function librasBar(show) {
    let bar = document.getElementById('libras-bar');
    if (show && !bar) {
      bar = document.createElement('div');
      bar.id = 'libras-bar';
      bar.className = 'libras-bar';
      bar.innerHTML = `<span>🤟 Libras</span><button type="button" aria-label="Fechar Libras">✕ Fechar</button>`;
      bar.querySelector('button').addEventListener('click', closeVLibras);
      document.body.appendChild(bar);
    }
    document.body.classList.toggle('libras-on', !!show);
    if (bar) bar.hidden = !show;
  }
  function watchLibrasRoot(root) {
    const sync = () => {
      const active = root.dataset.active === 'true';
      // O VLibras lembra que estava aberto e reabre sozinho na próxima visita;
      // fora do português (ou na tela de idiomas) isso não faz sentido: fecha.
      if (active && (lang !== 'pt' || document.body.classList.contains('on-lang'))) { closeVLibras(); return; }
      librasBar(active);
    };
    new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ['data-active'] });
    sync();
  }
  new MutationObserver(() => {
    const root = document.getElementById('vlibras-app-root');
    if (root && !root.dataset.rbsWatched) { root.dataset.rbsWatched = '1'; watchLibrasRoot(root); }
  }).observe(document.body, { childList: true });

  window.addEventListener('hashchange', route);
  route();
  if (query.get('libras') === '1' && lang === 'pt') {
    const tryOpen = (n) => { if (window.VLibrasWidget && window.VLibrasWidget.open) openVLibras(); else if (n > 0) setTimeout(() => tryOpen(n - 1), 300); };
    window.addEventListener('load', () => tryOpen(20));
  }

  /* ── PWA ────────────────────────────────────────────────── */
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
