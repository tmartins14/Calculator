import React from "react";
import "./Button.css";

const Button = ({ handleClick, buttonType, children }) => {
  return (
    <div className="button_container">
      <button onClick={handleClick} className={`${buttonType}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
