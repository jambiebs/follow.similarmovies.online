// Import Firebase libraries
importScripts('./firebase-app.js');
importScripts('./firebase-messaging.js');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvAshe0Yvqik3Y5roqdA0T4ZqwyYKhRCI",
  authDomain: "similarmovies-bb176.firebaseapp.com",
  projectId: "similarmovies-bb176",
  storageBucket: "similarmovies-bb176.appspot.com",
  messagingSenderId: "520740462999",
  appId: "1:520740462999:web:d8f419b7fc23b6166ca4d2",
  measurementId: "G-M9HC31VTFM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages and display notifications
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // No need to manually show a notification if the payload contains a notification
  // The FCM SDK will handle it
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  const notification = event.notification;
  const data = notification.data;
  const url = data && data.url ? data.url : 'https://www.bing.com'; // Default to Bing if URL is not specified

  notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
