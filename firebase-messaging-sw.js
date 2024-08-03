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

// Handle messages when the web app is in the foreground
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // Handle foreground messages if necessary
});

// Handle background messages and display notifications
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Directly use data from the payload
  const title = payload.data?.title || '';
  const body = payload.data?.body || '';
  const icon = payload.data?.icon || './hm-icon-192x192.png';
  const url = payload.data?.click_action || 'https://www.similarmovies.online';

  // Show the notification only if the title is present
  if (title) {
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      data: {
        url: url
      }
    });
  }
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  const url = event.notification.data.url;

  event.waitUntil(
    clients.openWindow(url)
  );
});
