import React, { useState, useEffect, useRef } from "react";
import "./useClick.css";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("Say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Fcyk</h1>
    </div>
  );
};

export default App;
