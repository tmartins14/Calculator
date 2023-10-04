import React from "react";

const Button = ({ handleClick, buttonType, children }) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
