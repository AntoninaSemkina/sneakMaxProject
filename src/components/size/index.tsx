import { FC } from "react";
import style from "./style.module.css";
import { size } from "../../types/size";

type Props = {
  data: size;
};

const Size: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <button className={style.btn}>{data.size}</button>
    </div>
  );
};

export default Size;
