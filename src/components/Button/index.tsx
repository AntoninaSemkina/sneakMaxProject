import React from "react";
import style from "./style.module.css";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  onClick?: () => void;
  className?: string;
  border?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor,
  textColor,
  width,
  onClick,
  border,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || "initial",
    color: textColor || "initial",
    width: width || "auto",
    border: border || "none",
  };
  return (
    <button className={style.btn} style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
