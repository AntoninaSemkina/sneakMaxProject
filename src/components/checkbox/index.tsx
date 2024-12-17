import { useState } from "react";
import style from "./style.module.css";

interface CheckBoxProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}
const CustomCheckbox: React.FC<CheckBoxProps> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        className={style.customCheckbox}
        checked={isChecked}
        onChange={handleChange}
      />
      <p>{text}</p>
    </label>
  );
};

export default CustomCheckbox;
