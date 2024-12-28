import { FC, useState, useEffect } from "react";
import style from "./style.module.css";
import Product from "../product";
import Button from "../Button";
import { product } from "../../types/product";

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

  const [productData, setProductData] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          "https://c6de376cf2e227cc.mokky.dev/sneakers"
        );
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data: product[] = await response.json();
        setProductData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  const isFilterApplied =
    filters.gender.length > 0 ||
    filters.size.length > 0 ||
    (filters.price.min > 0 && filters.price.max < Infinity);

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

  const productsToDisplay = isFilterApplied
    ? filteredProducts.slice(0, visibleCount)
    : productData.slice(0, visibleCount);

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((member) => (
              <Product key={member.id} data={member} />
            ))
          ) : (
            <p>Нет подходящих товаров</p>
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
