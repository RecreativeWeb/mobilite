//self.addEventListener("fetch", () => {});

/* self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("my-pwa-cache").then(function (cache) {
      return cache.addAll(["/", "/index.html", "styl/style.css"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
}); */

self.addEventListener("install", function (event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function (event) {
  event.waitUntil(clients.claim());
});

