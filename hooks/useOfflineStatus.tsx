import { useState } from "react";

export default function useOfflineStatus() {
  const [isOffline, setIsOffline] = useState(false);

  //check that code is running in browser before adding listeners
  if (global?.window) {
    window.addEventListener("offline", function (e) {
      setIsOffline(true);
    });

    window.addEventListener("online", function (e) {
      setIsOffline(false);
    });
  }

  return {
    isOffline,
  };
}
