import { FC, useState } from "react";
import productData from "../../data/products.json";
import { product } from "../../types/product";
import style from "./style.module.css";
import Product from "../product";
import Button from "../Button";

const Products: FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          {productData.slice(0, visibleCount).map((member: product) => (
            <Product key={member.id} data={member} />
          ))}
        </div>
        <div className={style.btnBlock}>
          {visibleCount < productData.length && (
            <Button
              text="Показать еще"
              backgroundColor="var(--button-red-color)"
              textColor="var(--light-text-color)"
              onClick={loadMore}
              width="200px"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
