import React from "react";
import style from "./Button.module.css";

const Button = ({ handleClick, buttonType, children }) => {
  let buttonStyle;
  switch (buttonType) {
    case "number":
      buttonStyle = style.number;
      break;

    case "equal":
      buttonStyle = style.equal;
      break;

    case "clear":
      buttonStyle = style.clear;
      break;

    default:
      buttonStyle = style.operator;
  }

  return (
    <div className={style.button_container}>
      <button onClick={handleClick} className={buttonStyle}>
        {children}
      </button>
    </div>
  );
};

export default Button;
