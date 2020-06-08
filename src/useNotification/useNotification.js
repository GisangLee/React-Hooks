import React, { useState, useEffect, useRef } from "react";
import "./useNotification.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotification;
};

const App = () => {
  const treiggerNotification = useNotification("Can I steal your Kimchi?", {
    body: "I love Kimchi don't you",
  });
  return (
    <div className="App">
      <button onClick={treiggerNotification}>Hello</button>
    </div>
  );
};

export default App;
