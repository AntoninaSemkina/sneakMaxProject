import { FC } from "react";
import style from "./style.module.css";
import CheckboxButton from "../checkbox";
import Products from "../products";
import Filter from "../Filter";

const Catalog: FC = () => {
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.titleBlock}>
          <h1>Каталог</h1>
        </div>
        <div className={style.mainBlock}>
          <Filter />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
