/* ID Card Print Layout — Service worker (online version only).
 *
 * Lets the GitHub Pages version keep working without internet after the
 * first visit, and lets it be installed like an app.
 *
 *   - On install, every file of this build is stored (list filled in by the
 *     build, see vite.config.js).
 *   - Requests go to the network first, so a new release is used as soon as
 *     it is published; the stored copy is the fallback when offline.
 *   - Stored files of older versions are removed on activation.
 *
 * The double-click (file://) version does not use this file at all.
 */
const VERSION = '2.16.3';
const FILES = [
  "./",
  "assets/app-CSaDStd0.js",
  "assets/jameel-noori-nastaleeq-Harg1W3e.woff2",
  "assets/style-DKr77fU_.css",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "manifest.webmanifest"
];
const PREFIX = 'id-card-print-layout-';
const CACHE = `${PREFIX}${VERSION}`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(FILES.map((file) => new Request(file, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith(PREFIX) && key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cache = await caches.open(CACHE);
        // "?lang=en" and similar: the page is the same file
        return (await cache.match(request, { ignoreSearch: true }))
          || (request.mode === 'navigate' ? cache.match('./') : undefined)
          || Response.error();
      }),
  );
});
