import React, { useState, useEffect } from "react";
import "./useEffect.css";

const App = () => {
  const sayHello = () => console.log("Hello");
  useEffect(() => {
    sayHello();
  });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(number + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;