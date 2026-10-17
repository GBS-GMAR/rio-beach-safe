/* Service worker – deixa o app disponível offline após o primeiro acesso.
   Ao publicar uma nova versão, mude o número de CACHE abaixo. */
const CACHE = 'rio-beach-safe-v1';
const ASSETS = [
  './', 'index.html', 'css/style.css', 'js/app.js', 'js/i18n.js', 'manifest.webmanifest',
  'assets/img/logo-projeto-rio-beach-safe.webp', 'assets/img/boia-rio-beach-safe-guarda-vidas.webp',
  'assets/img/boia-rio-beach-safe.webp', 'assets/img/brasao-cbmerj.webp',
  'assets/img/bandeira-vermelha.webp', 'assets/img/bandeira-amarela.webp', 'assets/img/bandeira-verde.webp', 'assets/img/bandeira-roxa.webp',
  'assets/img/corrente-de-retorno-pt.jpg', 'assets/img/corrente-de-retorno-es.jpg', 'assets/img/corrente-de-retorno-en.jpg',
  'assets/img/icone-agua.webp', 'assets/img/icone-alcool.webp', 'assets/img/icone-sol.webp', 'assets/img/icone-protecao.webp',
  'assets/img/pulseira-identificacao.webp', 'assets/img/icon-192.png', 'assets/img/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // fontes, VLibras: direto da rede
  // HTML/JS/CSS: rede primeiro (pega atualizações), cache como reserva
  if (e.request.mode === 'navigate' || /\.(js|css|html)$/.test(url.pathname) || url.pathname.endsWith('/')) {
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./'))));
    return;
  }
  // Imagens: cache primeiro
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })));
});
