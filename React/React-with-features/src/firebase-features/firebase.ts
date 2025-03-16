// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ6X0zu9kbaSwNmDfxk4z6xDXJPPfzcQ0",
  authDomain: "notify-06-01-24.firebaseapp.com",
  projectId: "notify-06-01-24",
  storageBucket: "notify-06-01-24.appspot.com",
  messagingSenderId: "124521540767",
  appId: "1:124521540767:web:d17f58f1c939800ed106aa",
  measurementId: "G-0KWGPZ1ZZR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(firebaseApp);

export const setupNotifications = async () => {
  try {
    // Request permission for notifications
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted.");
      // Get the FCM token
      const token = await getToken(messaging);
      console.log("FCM Token:", token);
    } else {
      console.log("Notification permission denied.");
    }
    // Handle foreground notifications
    onMessage(messaging, (payload) => {
      console.log("Foreground Message:", payload);
      // Handle the notification or update your UI
    });
  } catch (error) {
    console.error("Error setting up notifications:", error);
  }
};

export default firebaseApp;
