import { FC } from "react";
import { typology as TypologyType } from "../../types/typology";
import style from "./style.module.css";
import CheckboxButton from "../checkbox";

type Props = {
  data: TypologyType;
};

const Typology: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.block1}>
        <img src={data.imgUrl} alt="typology" />
      </div>
      <div className={style.block2}>
        <CheckboxButton text={data.typology} />
      </div>
    </div>
  );
};

export default Typology;
