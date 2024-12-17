import { FC } from "react";
import style from "./style.module.css";
import { product } from "../../types/product";

type Props = {
  data: product;
};

const Product: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={data.imgUrl} alt="sneakers" />
      </div>
      <h3>{data.title}</h3>
      <p>{data.price}</p>
    </div>
  );
};

export default Product;
