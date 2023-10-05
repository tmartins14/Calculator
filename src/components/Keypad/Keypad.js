import React from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setInput,
  clearInput,
  calculateResult,
  clearResult,
  applyNegative,
} from "../../store";

import style from "./Keypad.module.css";

const Keypad = () => {
  const dispatch = useDispatch();

  const { input } = useSelector(({ input }) => {
    return {
      input: input.inputTerm,
    };
  });

  const handleClick = (event) => {
    if (event.target.textContent === "=") {
      dispatch(calculateResult(input));
    } else if (event.target.textContent === "C") {
      dispatch(clearInput());
      dispatch(clearResult());
    } else if (event.target.textContent === "+/-") {
      dispatch(applyNegative());
    } else {
      dispatch(setInput(event.target.textContent));
    }
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
    let buttonType;

    if (!isNaN(key)) {
      buttonType = "number";
    } else {
      switch (key) {
        case "C":
          buttonType = "clear";
          break;

        case "=":
          buttonType = "equal";
          break;

        default:
          buttonType = "operator";
      }
    }

    return (
      <Button handleClick={handleClick} key={key} buttonType={buttonType}>
        {key}
      </Button>
    );
  });

  return <div className={style.keypad_grid}>{renderedItems}</div>;
};

export default Keypad;
