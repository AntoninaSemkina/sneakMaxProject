import React from "react";
import style from "./style.module.css";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor,
  textColor,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || "initial",
    color: textColor || "initial",
  };
  return (
    <button className={style.btn} style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
