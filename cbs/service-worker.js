
const CACHE_NAME = 'thinking-exam-v1';
const OFFLINE_URL = 'index.html';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(self.__FILES_TO_CACHE || ['/','/index.html','/manifest.json']);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      if (cacheRes) return cacheRes;
      return fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          // Put a copy in cache (optional)
          try { cache.put(event.request, response.clone()); } catch(e){}
          return response;
        });
      }).catch(err => {
        // If request for navigation, show offline page if provided
        if (event.request.mode === 'navigate') {
          return caches.match(OFFLINE_URL);
        }
        throw err;
      });
    })
  );
});

// Listen for messages to update files list
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SET_FILES') {
    self.__FILES_TO_CACHE = event.data.files;
  }
});
