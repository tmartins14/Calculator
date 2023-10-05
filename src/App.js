import React from "react";
import { OutputScreen, Keypad } from "./components";
import "./styles/App.css";

const App = () => {
  return (
    <div className="calculator_container">
      <OutputScreen />
      <Keypad />
    </div>
  );
};

export default App;
