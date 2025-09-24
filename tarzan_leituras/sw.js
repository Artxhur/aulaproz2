const CACHE = "tarzan-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/products.json",
  "/manifest.json",
  "/offline.html",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/books/pequeno-principe.pdf",
  "/books/dom-casmurro.pdf"
];


self.addEventListener("install", evt => {
  evt.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", evt => {
  evt.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE ? caches.delete(k) : null))));
  self.clients.claim();
});

self.addEventListener("fetch", evt => {
  const req = evt.request;
  if(req.mode === "navigate"){
    evt.respondWith(fetch(req).then(res => { caches.open(CACHE).then(cache => cache.put(req, res.clone())); return res; }).catch(()=> caches.match("/offline.html")));
    return;
  }
  evt.respondWith(caches.match(req).then(cached => cached || fetch(req).then(net => { if(req.method === "GET" && req.url.startsWith(self.location.origin)) caches.open(CACHE).then(c=>c.put(req, net.clone())); return net; })).catch(()=> caches.match("/offline.html")));
});
