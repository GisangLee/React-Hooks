import React, { useState, useRef, useEffect } from "react";
import "./useFadeIn.css";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  console.log(element);
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 0.3);
  return (
    <div className="App">
      <h1 {...fadeInH1}>공부하자</h1>
      <p {...fadeInP}>리액트 공부 개꿀잼</p>
    </div>
  );
};

export default App;
