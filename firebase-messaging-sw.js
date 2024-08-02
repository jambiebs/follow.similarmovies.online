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

// Handle background messages from FCM
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/hm-icon-192x192.png',
    data: {
      notifURL: payload.data.url || '/' // Use payload.data.url for the URL
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle push events (when the service worker is active)
self.addEventListener('push', (event) => {
  const notification = event.data.json();
  const title = notification.title;
  const options = {
    body: notification.body,
    icon: './hm-icon-192x192.png',
    data: {
      notifURL: notification.url || '/' // Use notification.url from data
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification
  const url = event.notification.data.notifURL;
  event.waitUntil(
    clients.openWindow(url) // Open the URL when the notification is clicked
  );
});
