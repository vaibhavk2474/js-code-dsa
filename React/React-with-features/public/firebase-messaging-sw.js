/* eslint-disable no-undef */

// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCZ6X0zu9kbaSwNmDfxk4z6xDXJPPfzcQ0",
  authDomain: "notify-06-01-24.firebaseapp.com",
  projectId: "notify-06-01-24",
  storageBucket: "notify-06-01-24.appspot.com",
  messagingSenderId: "124521540767",
  appId: "1:124521540767:web:d17f58f1c939800ed106aa",
  measurementId: "G-0KWGPZ1ZZR",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  console.log("Background Message:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
