import { FC } from "react";
import style from "./style.module.css";
import { teammate } from "../../types/teammate";

type Props = {
  data: teammate;
};

const Teammate: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={data.imgUrl} alt="photo" />
      </div>
      <h3>{data.name}</h3>
      <p>{data.role}</p>
    </div>
  );
};

export default Teammate;
