import React, { FC } from "react";
import style from "./style.module.css";
import { Typology } from "../../types/typology";
import CheckboxButton from "../checkbox";

type Props = {
  data: Typology[]; // Ожидаем массив объектов Typology
};

const ProductTypology: React.FC<Props> = ({ data }) => {
  return (
    <div className={style.container}>
      <CheckboxButton text="" />
      {data.map((item) => (
        <div key={item.id} className={style.card}>
          <p>{item.typology}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductTypology;
