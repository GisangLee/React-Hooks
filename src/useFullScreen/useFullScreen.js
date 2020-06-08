import React, { useState, useEffect, useRef } from "react";
import "./useFullScreen.css";

const useFullScreen = () => {
  const element = useRef();
  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFullScreen = () => {
    document.exitFullscreen();
  };
  return { element, triggerFullScreen };
};

const App = () => {
  const { element, triggerFullScreen } = useFullScreen();
  return (
    <div className="App">
      <img
        ref={element}
        src="https://user-images.githubusercontent.com/48057905/83986047-668d6900-a976-11ea-9f69-0638fb218c72.png"
      ></img>
      <button onClick={triggerFullScreen}>Make it Full Screen</button>
    </div>
  );
};

export default App;
