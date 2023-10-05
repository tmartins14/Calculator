import React from "react";
import { useSelector } from "react-redux";

const OutputScreen = () => {
  const input = useSelector((state) => {
    // console.log(state);
    return state.input.inputTerm;
  });

  return <div>{input}</div>;
};

export default OutputScreen;
