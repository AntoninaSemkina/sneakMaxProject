import { FC } from "react";
import style from "./style.module.css";
import { size } from "../../types/size";

type Props = {
  data: size;
  isSelected: boolean;
  onSelect: () => void;
};

const Size: FC<Props> = ({ data, isSelected, onSelect }) => {
  return (
    <button
      className={`${style.card} ${isSelected ? style.selected : ""}`}
      onClick={onSelect}
    >
      {data.size}
    </button>
  );
};

export default Size;
