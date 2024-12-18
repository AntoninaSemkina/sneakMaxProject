import { FC, useState } from "react";
import style from "./style.module.css";
import Products from "../products";
import Filter from "../Filter";

type Filters = {
  gender: string[];
  size: number[];
  price: {
    min: number;
    max: number;
  };
};

const Catalog: FC = () => {
  const [filters, setFilters] = useState<Filters>({
    gender: [],
    size: [],
    price: {
      min: 0,
      max: Infinity,
    },
  });

  const applyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({
      gender: [],
      size: [],
      price: {
        min: 0,
        max: Infinity,
      },
    });
  };

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.titleBlock}>
          <h1>Каталог</h1>
        </div>
        <div className={style.mainBlock}>
          <Filter onApplyFilters={applyFilters} onResetFilters={resetFilters} />
          <Products filters={filters} onResetFilters={resetFilters} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
