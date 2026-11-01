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
  const ROUTES = ['lang', 'menu', 'drowning', 'flags', 'rip', 'health', 'kids', 'emergency'];
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
  // Texto com reserva: idioma atual → inglês → português (para chaves novas ainda não traduzidas)
  const tx = path => {
    for (const code of [lang, 'en', 'pt']) {
      let v = window.I18N[code];
      for (const k of path.split('.')) v = v && v[k];
      if (v != null) return v;
    }
    return '';
  };

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
    lifebuoy: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    siren: '<svg viewBox="0 0 24 24"><path d="M6 20V13a6 6 0 0 1 12 0v7"/><path d="M3 20h18"/><path d="M12 3v2M4.5 6.5l1.5 1.5M19.5 6.5L18 8"/></svg>'
  };

  function head(opts) {
    const u = t().ui;
    const meta = window.LANGS.find(l => l.code === lang) || {};
    return `
      <header class="screen-head">
        <button class="icon-btn" data-go="${opts.back || 'menu'}" aria-label="${esc(u.back)}">${ICONS.back}</button>
        <div class="cb-mini"><img src="assets/img/boia-rio-beach-safe.webp" alt="Rio Beach Safe"><span>CORPO DE<b>BOMBEIROS</b>MILITAR - RJ</span></div>
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
    const pt = window.LANGS.find(l => l.code === 'pt');
    const en = window.LANGS.find(l => l.code === 'en');
    const others = window.LANGS.filter(l => l.code !== 'pt' && l.code !== 'en');
    const btn = l => `<button class="lang-btn" data-lang="${l.code}" lang="${l.code}"><span class="flag">${l.flag}</span><span class="lname">${esc(l.name)}<small lang="pt">${esc(l.country || '')}</small></span></button>`;
    return `
      <section class="hero">
        <div class="cb-head">
          <img src="assets/img/brasao-cbmerj.webp" alt="Brasão do CBMERJ">
          <div><span class="l1">CORPO DE</span><span class="l2">BOMBEIROS</span><span class="l3">MILITAR - RJ</span></div>
        </div>
        <img class="boia-hero" src="assets/img/boia-rio-beach-safe-guarda-vidas.webp" alt="Rio Beach Safe – Corpo de Bombeiros Militar do Estado do Rio de Janeiro">
        <div class="lines-title"><span>APROVEITE A PRAIA</span><b>COM SEGURANÇA</b></div>
        <p class="tagline-qr">Acesso rápido às orientações de segurança na praia</p>
        <div class="lang-grid">
          <div class="pt-card">
            <button class="lang-btn pt-main" data-lang="pt" lang="pt"><span class="flag">${pt.flag}</span>${esc(pt.name)}</button>
            <button class="libras-pill" data-lang="libras" lang="pt"><span>🤟</span>Libras</button>
          </div>
          <button class="lang-btn wide en-main" data-lang="en" lang="en"><span class="flag">${en.flag}</span>${esc(en.name)}</button>
          <button class="lang-btn wide more choose-btn" id="more-langs" aria-expanded="false" lang="pt">
            <span class="flag">🌐</span>
            <span>Escolha o seu idioma ▾<small>Mais ${others.length} idiomas</small></span>
          </button>
        </div>
        <div class="lang-grid others" id="others" hidden>${others.map(btn).join('')}</div>
      </section>
      <footer class="footer" style="margin-top:28px">
        <img src="assets/img/brasao-cbmerj.webp" alt="Brasão do CBMERJ"><b>CBMERJ</b>${esc(u.cbmerj)}
      </footer>`;
  }

  function screenMenu() {
    const u = t().ui;
    const tile = (r, color, icon, title) => `
      <button class="tile ${color}" data-go="${r}">
        <span class="tile-ico">${icon}</span>
        <b>${esc(title)}</b>
      </button>`;
    return `
      ${head({ back: 'lang' })}
      <button class="hero-tile" data-go="drowning">
        <img src="assets/img/boia-rio-beach-safe.webp" alt="">
        <span class="hero-txt">
          <b>${esc(tx('menu.drowning.title'))}</b>
          <span>${esc(tx('menu.drowning.sub'))}</span>
        </span>
        <span class="hero-cta">${esc(tx('menu.drowning.cta'))} ›</span>
      </button>
      <div class="tile-grid">
        ${tile('health', 'orange', ICONS.sun, tx('menu.health.title'))}
        ${tile('kids', 'purple', ICONS.kids, tx('menu.kids.title'))}
      </div>
      <a class="call193" href="tel:193">
        <span class="call-ico">${ICONS.phone}</span>
        <span class="call-num">193</span>
        <span class="call-txt"><b>${esc(tx('menu.call193.title'))}</b><span>${esc(tx('menu.call193.sub'))}</span></span>
      </a>
      <a class="app193" href="${appStoreLink()}" target="_blank" rel="noopener">📲 ${esc(u.install193)}</a>
      ${footer()}`;
  }

  function appStoreLink() {
    const ua = navigator.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    return /Android/i.test(ua) ? LINKS.android : (isIOS ? LINKS.ios : LINKS.android);
  }

  /* Prevenção de afogamento = bandeiras + correntes de retorno numa tela só */
  function screenDrowning() {
    const f = t().flags, r = t().rip;
    const row = (file, color, d) => `
      <div class="flag-row">
        <img src="assets/img/bandeira-${file}.webp" alt="${esc(d.name)}">
        <div><h3>${esc(d.name)}</h3><ul class="bullets">${d.items.map(i => `<li><span class="dot ${color}"></span>${esc(i)}</li>`).join('')}</ul></div>
      </div>`;
    const img = ['pt', 'es', 'en'].includes(lang) ? lang : 'en';
    const emojis = ['🚩', '🏊', '🙋', '🌊'];
    return `
      ${head({})}
      <h1 class="title">${esc(tx('menu.drowning.title'))}</h1>
      <nav class="chips">
        <a href="#sec-flags" data-scroll="sec-flags">🚩 ${esc(f.title)}</a>
        <a href="#sec-rip" data-scroll="sec-rip">🌊 ${esc(r.title)}</a>
      </nav>
      <h2 class="sec-title" id="sec-flags">${esc(f.title)}</h2>
      <div class="panel">
        ${row('vermelha', 'red', f.red)}
        ${row('amarela', 'yellow', f.yellow)}
        ${row('verde', 'green', f.green)}
        ${row('roxa', 'purple', f.purple)}
      </div>
      <div class="panel attention">⚠️ <b>${esc(f.attention)}</b> ${esc(f.attentionText)}</div>
      <h2 class="sec-title" id="sec-rip">${esc(r.title)}</h2>
      <div class="rip-img"><img src="assets/img/corrente-de-retorno-${img}.jpg" alt="${esc(r.title)}"></div>
      <div class="panel"><ul class="bullets">${r.items.map((i, k) => `<li><span class="emoji">${emojis[k]}</span>${esc(i)}</li>`).join('')}</ul></div>
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
          <div class="panel-title">${esc(tx('kids.suggestTitle') || k.wristTitle)}</div>
          <p style="margin:0;font-size:15px;line-height:1.4">${esc(tx('kids.suggestText') || k.wristText)}</p>
          <ul class="wrist-fields">${k.wristFields.map(f => `<li>👤 ${esc(f)}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="panel notice">ℹ️ ${esc(tx('kids.notProvided'))}</div>
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
  let pendingScroll = null;
  function route() {
    let r = (location.hash.replace(/^#\/?/, '') || '').split('?')[0];
    // Entrada sem tela definida (leitura do QR Code): sempre a tela de idiomas.
    // Só vai direto ao menu quando o link já traz o idioma (?lang=en, QR de hotel).
    if (!ROUTES.includes(r)) r = langFromUrl() ? 'menu' : 'lang';
    if (!lang && r !== 'lang') r = 'lang';
    if (r === 'flags' || r === 'rip') { pendingScroll = r === 'flags' ? 'sec-flags' : 'sec-rip'; r = 'drowning'; }
    document.body.classList.toggle('on-emergency', r === 'emergency' || r === 'menu');
    document.body.classList.toggle('on-lang', r === 'lang');
    applyLangAttrs();
    const screens = { lang: screenLang, menu: screenMenu, drowning: screenDrowning, flags: screenFlags, rip: screenRip, health: screenHealth, kids: screenKids, emergency: screenEmergency };
    app.innerHTML = screens[r]();
    window.scrollTo(0, 0);
    if (pendingScroll) { const el = document.getElementById(pendingScroll); pendingScroll = null; if (el) el.scrollIntoView(); }
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
    const sc = ev.target.closest('[data-scroll]');
    if (sc) { ev.preventDefault(); const el = document.getElementById(sc.dataset.scroll); if (el) el.scrollIntoView({ behavior: 'smooth' }); return; }
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
  const PREVIEW = /\/previa\//.test(location.pathname);
  if (PREVIEW) {
    const tag = document.createElement('div'); tag.className = 'preview-tag';
    tag.textContent = 'PRÉVIA PARA APROVAÇÃO · não é a versão oficial'; document.body.prepend(tag);
  }
  if (!PREVIEW && 'serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
