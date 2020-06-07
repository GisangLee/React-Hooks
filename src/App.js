import React, { useState } from "react";
import "./App.css";

// useState Example

const App = () => {
  const [item, setItem] = useState(0);
  const increase = () => setItem(item + 1);
  const decrease = () => setItem(item - 1);
  return (
    <div>
      <h1>Hello World {item}</h1>
      <h3>Fuck you</h3>
      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1,
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Hello World {item}</h1>
        <h3>Fuck you</h3>
        <button onClick={this.increase}>Plus</button>
        <button onClick={this.decrease}>Minus</button>
      </div>
    );
  }
  increase = () => {
    this.setState((current) => {
      return {
        item: this.state.item + 1,
      };
    });
  };
  decrease = () => {
    this.setState((current) => {
      return {
        item: this.state.item - 1,
      };
    });
  };
}

export default App;
