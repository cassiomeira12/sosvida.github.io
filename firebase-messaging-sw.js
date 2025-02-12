importScripts("firebase-config.js");

importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp(config);

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle = 'Background Message from html';
//    const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };
 
//   return self.registration.showNotification(notificationTitle,notificationOptions);
//  });

// messaging.setBackgroundMessageHandler((payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = payload.title;
//   const notificationOptions = {
//     body: payload.body,
//     icon: '/icon.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

// self.addEventListener('notificationclick', (event) => {
//   const clickedNotification = event.notification;
//   clickedNotification.close();
//   const promiseChain = clients
//       .matchAll({
//           type: 'window',
//           includeUncontrolled: true
//        })
//       .then(windowClients => {
//           let matchingClient = null;
//           for (let i = 0; i < windowClients.length; i++) {
//               const windowClient = windowClients[i];
//               if (windowClient.url === feClickAction) {
//                   matchingClient = windowClient;
//                   break;
//               }
//           }
//           if (matchingClient) {
//               return matchingClient.focus();
//           } else {
//               return clients.openWindow(feClickAction);
//           }
//       });
//       event.waitUntil(promiseChain);
// });