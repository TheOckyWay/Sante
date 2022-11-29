// CACHE_NAME is the storage of our browser
const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

// "self" refers to the service worker
const self = this;

// install service worker
self.addEventListener("install", (event) => {
  // open the cache and add to our urlsToCache to it
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    // storing all of our pages requests
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// activate the service worker
self.addEventListener("activate", (event) => {
  // remove all previous caches and just keep the new ones
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
