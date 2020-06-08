import React, { useState, useEffect } from "react";
import "./useTitle.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

console.log(useTitle);

const App = () => {
  const titleUpdater = useTitle("Loading");
  setTimeout(() => titleUpdater("home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
