/* Service worker : le carnet reste consultable hors ligne (réseau d'abord, cache en secours) */
const C = 'carnet-v1';
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'index.html', 'icon.svg', 'apple-touch-icon.png'])).catch(() => {})); });
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if(r.method !== 'GET' || u.hostname === 'api.github.com') return;
  const same = u.origin === location.origin, key = same ? u.origin + u.pathname : r;
  e.respondWith(fetch(r).then(res => {
    if(res.ok && res.status === 200 && (same || u.hostname.startsWith('fonts.g'))){ const cp = res.clone(); caches.open(C).then(c => c.put(key, cp)); }
    return res;
  }).catch(() => caches.match(key).then(m => m || (r.mode === 'navigate' ? caches.match(new URL('index.html', self.registration.scope).href) : Response.error()))));
});
