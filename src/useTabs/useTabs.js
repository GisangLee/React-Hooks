import React, { useState } from "react";
import "./useTabs.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content fo the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content fo the Section 2",
  },
];

const useTabs = (initialTab, allSections) => {
  if (!allSections || !Array.isArray(allSections)) {
    return;
  }
  const [currentIndex, setIndex] = useState(initialTab);
  return {
    currentItem: allSections[currentIndex],
    changeItem: setIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
