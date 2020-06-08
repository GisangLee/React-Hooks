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
  const treiggerNotification = useNotification(
    "새로운 여성을 만나보시겠어요?",
    {
      body: "그녀들이 기다리고있어요",
    }
  );
  return (
    <div className="App">
      <button onClick={treiggerNotification}>Hello</button>
    </div>
  );
};

export default App;
