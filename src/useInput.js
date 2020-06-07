import React, { useState } from "react";
import "./useInput.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};

export default App;
