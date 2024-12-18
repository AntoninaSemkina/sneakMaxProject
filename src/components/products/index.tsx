import { FC, useState, useEffect } from "react";
import productData from "../../data/products.json";
import style from "./style.module.css";
import Product from "../product";
import Button from "../Button";

interface ProductsProps {
  filters: {
    gender: string[];
    size: number[];
    price: {
      min: number;
      max: number;
    };
  };
  onResetFilters: () => void;
}

const Products: FC<ProductsProps> = ({ filters, onResetFilters }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [onResetFilters]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const isFilterApplied =
    filters.gender.length > 0 ||
    filters.size.length > 0 ||
    (filters.price.min > 0 && filters.price.max < Infinity);

  // Фильтруем товары
  const filteredProducts = productData.filter((product) => {
    const matchesGender =
      filters.gender.length === 0 || filters.gender.includes(product.gender);
    const matchesSize =
      filters.size.length === 0 ||
      product.sizes.some((size) => filters.size.includes(size));
    const matchesPrice =
      product.price >= filters.price.min && product.price <= filters.price.max;

    return matchesGender && matchesSize && matchesPrice;
  });

  // Если фильтры не применены, показываем весь каталог
  const productsToDisplay = isFilterApplied
    ? filteredProducts.slice(0, visibleCount)
    : productData.slice(0, visibleCount);

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((product) => (
              <Product key={product.id} data={product} />
            ))
          ) : (
            <p>Нет подходящих товаров</p> // Показываем сообщение, если ничего не найдено
          )}
        </div>
        <div className={style.btnBlock}>
          {visibleCount <
            (isFilterApplied
              ? filteredProducts.length
              : productData.length) && (
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
