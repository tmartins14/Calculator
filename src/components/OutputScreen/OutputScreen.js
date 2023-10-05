import React from "react";
import { useSelector } from "react-redux";
import "./OutputScreen.css";

const OutputScreen = () => {
  const input = useSelector((state) => {
    // console.log(state);
    return state.input.inputTerm;
  });

  return (
    <div className="output_container">
      <div className="output_value">{input}</div>
    </div>
  );
};

export default OutputScreen;
