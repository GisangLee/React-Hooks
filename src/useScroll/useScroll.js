import React, { useState, useEffect } from "react";
import "./useScroll.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScoll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScoll);
    return () => {
      window.removeEventListener("scroll", onScoll);
    };
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App">
      <h1 style={{ color: y > 100 ? "red" : "blue" }}>HIHELKSLKD</h1>
    </div>
  );
};

export default App;
