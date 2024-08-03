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

// Handle messages when the web app is in the foreground.
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

// Handle background messages and display notifications.
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification
  const notificationTitle = payload.notification?.title;
  const notificationOptions = {
    body: payload.notification?.body,
    icon: payload.notification?.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});