import { FC } from "react";
import style from "./style.module.css";
import productData from "../../data/products.json";

const Price: FC = () => {
  const prices = productData.map((product) => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return (
    <div className={style.card}>
      <div className={style.minPrice}>
        <p>{minPrice}</p>
      </div>
      <div className={style.maxPrice}>
        <p>{maxPrice}</p>
      </div>
    </div>
  );
};

export default Price;
