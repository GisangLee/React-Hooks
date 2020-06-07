import React, { useState } from "react";
import "./useInput.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};

export default App;
