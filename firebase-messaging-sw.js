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

// Custom event class for managing notifications
class CustomPushEvent extends Event {
  constructor(data) {
    super('push');
    Object.assign(this, data);
    this.custom = true;
  }
}

// Override push event to handle notifications manually
self.addEventListener('push', (e) => {
  // Skip if event is our own custom event
  if (e.custom) return;

  // Preserve old event data
  const oldData = e.data;

  // Create a new event to dispatch, pulling values from notification key into data key
  const newEvent = new CustomPushEvent({
    data: {
      ehheh: oldData.json(),
      json() {
        const newData = oldData.json();
        newData.data = {
          ...newData.data,
          ...newData.notification
        };
        delete newData.notification;
        return newData;
      }
    },
    waitUntil: e.waitUntil.bind(e)
  });

  // Stop event propagation
  e.stopImmediatePropagation();

  // Dispatch the new wrapped event
  dispatchEvent(newEvent);
});

// Handle custom push events
self.addEventListener('push', (e) => {
  const data = e.data.json();
  const notificationTitle = data.notification?.title || 'Default Title';
  const notificationOptions = {
    body: data.notification?.body || 'Default body',
    icon: '/firebase-logo.png',
    tag: data.messageId || 'default-tag',
    data: {
      url: data.data?.url || '/' // Ensure URL is in data
    }
  };

  // Show the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification

  const url = event.notification.data.url || '/'; // Default URL
  event.waitUntil(
    clients.openWindow(url) // Open the URL
  );
});