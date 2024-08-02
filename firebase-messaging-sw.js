messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const hasNotification = payload.notification && Object.keys(payload.notification).length > 0;
  const hasData = payload.data && Object.keys(payload.data).length > 0;

  const notificationTitle = hasNotification ? payload.notification.title : 'Default Title';
  const notificationOptions = {
    body: hasNotification ? payload.notification.body : 'Default body',
    icon: '/firebase-logo.png',
    tag: payload.messageId || 'default-tag', // Use messageId or another unique identifier
    data: {
      url: payload.data?.url || '/'
    }
  };

  if (hasNotification || hasData) {
    self.registration.showNotification(notificationTitle, notificationOptions);
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification

  const url = event.notification.data.url || '/'; // Default URL
  event.waitUntil(
    clients.openWindow(url) // Open the URL
  );
});
