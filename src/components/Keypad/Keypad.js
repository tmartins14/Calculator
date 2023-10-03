import React from "react";
import KeypadItem from "../KeypadItem/KeypadItem";

const Keypad = () => {
  const keyList = [
    "AC",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const renderedItems = keyList.map((key) => {
    return <KeypadItem key={key}>{key}</KeypadItem>;
  });

  return <div>{renderedItems}</div>;
};

export default Keypad;
