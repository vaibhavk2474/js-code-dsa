// App.js
import { useEffect } from "react";
import { setupNotifications } from "./firebase";

import {
  toastNotification,
  sendNativeNotification,
} from "./helpers/notificationHelpers";

import useVisibilityChange from "./hooks/useVisibilityChange";
import { register } from "./serviceWorker";

function AppFirebase() {
  const isForeground = useVisibilityChange();
  useEffect(() => {
    console.log("loggin...");
    setupNotifications((message) => {
      if (isForeground) {
        // App is in the foreground, show toast notification
        toastNotification({
          title: message.title,
          description: message.description,
          status: "info",
        });
      } else {
        // App is in the background, show native notification
        sendNativeNotification({
          title: "hello",
          body: "hi",
        });
      }
    });
  }, []);
  return <div className="App">{/* Your app content */}</div>;
}
export default AppFirebase;

register();
