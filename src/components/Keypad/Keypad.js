import React from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setInput, clearInput } from "../../store";

const Keypad = () => {
  const dispatch = useDispatch();

  const input = useSelector((state) => {
    return state.input.inputTerm;
  });

  //   console.log(input);

  const handleClick = (event) => {
    // console.log("before", input);
    dispatch(setInput(event.target.textContent));
    console.log("after", input);
  };

  const keyList = [
    "C",
    "()",
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
    "+/-",
    "0",
    ".",
    "=",
  ];

  const renderedItems = keyList.map((key) => {
    return (
      <Button handleClick={handleClick} key={key}>
        {key}
      </Button>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Keypad;
