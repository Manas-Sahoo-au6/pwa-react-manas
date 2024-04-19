let cacheData = "pwaApp1";
// step1 to install service worker to the browser
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/static/css/main.chunk.css",
        "/index.html",
        "/",
        "/posts",
        "/about",
        "/contact",
        "/favicon.ico",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (!self.navigator.onLine) {
    if (event.request.url === "http://localhost:3000/static/js/bundle.js") {
      event.waitUntil(
        this.registration.showNotification("Internet Issue dont worry", {
          body: "Loading files from caches",
        })
      );
    }
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
