import React from "react";
import style from "./style.module.css";

interface CheckBoxProps {
  text: string;
  isChecked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<CheckBoxProps> = ({
  text,
  isChecked,
  onChange,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        className={style.customCheckbox}
        checked={isChecked}
        onChange={onChange}
      />
      <p>{text}</p>
    </label>
  );
};

export default CustomCheckbox;
