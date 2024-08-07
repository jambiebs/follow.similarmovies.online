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

  // Extract data from the payload
  const data = payload.data;
  const title = data.title;
  const options = {
    body: data.body,
    icon: './hm-icon-192x192.png',
    data: {
      url: data.click_action
    }
  };

  self.registration.showNotification(title, options);
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  const url = event.notification.data.url;
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
