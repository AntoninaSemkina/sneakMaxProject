import { FC, useState, useEffect } from "react";
import style from "./style.module.css";
import CheckboxButton from "../checkbox";
import Button from "../Button";
import Sizes from "../sizes";
import Price from "../price";
import PriceSlider from "../PriceSlider";
import productData from "../../data/products.json";

interface FilterProps {
  onApplyFilters: (filters: {
    gender: string[];
    size: number[];
    price: { min: number; max: number };
  }) => void;
  onResetFilters: () => void;
}

const Filter: FC<FilterProps> = ({ onApplyFilters, onResetFilters }) => {
  const prices = productData.map((product) => product.price);
  const globalMinPrice = Math.min(...prices);
  const globalMaxPrice = Math.max(...prices);

  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState(globalMinPrice);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(globalMaxPrice);

  const toggleSize = (size: number) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleGender = (gender: string) => {
    setSelectedGender((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  const applyFilters = () => {
    onApplyFilters({
      gender: selectedGender,
      size: selectedSizes,
      price: {
        min: selectedMinPrice,
        max: selectedMaxPrice,
      },
    });
  };

  const resetFilters = () => {
    setSelectedGender([]);
    setSelectedSizes([]);
    setSelectedMinPrice(globalMinPrice);
    setSelectedMaxPrice(globalMaxPrice);
    onResetFilters();
  };

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          <h3>Подбор по параметрам</h3>
          <div className={style.price}>
            <p>Цена, руб</p>
            <Price />
            <PriceSlider
              minPrice={globalMinPrice}
              maxPrice={globalMaxPrice}
              currentMinPrice={selectedMinPrice}
              currentMaxPrice={selectedMaxPrice}
              onChange={(min, max) => {
                setSelectedMinPrice(min);
                setSelectedMaxPrice(max);
              }}
            />
          </div>
          <div className={style.gender}>
            <p>Пол</p>
            <div>
              <CheckboxButton
                text="мужcкой"
                isChecked={selectedGender.includes("Мужской")} // Проверяем, выбран ли "мужской"
                onChange={() => toggleGender("Мужской")}
              />
              <CheckboxButton
                text="женский"
                isChecked={selectedGender.includes("Женский")} // Проверяем, выбран ли "женский"
                onChange={() => toggleGender("Женский")}
              />
            </div>
          </div>
          <div className={style.sizegrid}>
            <p>Размер</p>
            <Sizes selectedSizes={selectedSizes} onSelectSize={toggleSize} />
          </div>
          <Button
            text="Применить"
            backgroundColor="var(--button-grey-color)"
            textColor="var(--light-text-color)"
            onClick={applyFilters}
          />
          <Button
            text="Сбросить"
            textColor="var(--dark-text-color)"
            onClick={resetFilters}
          />
        </div>
      </div>
    </div>
  );
};
export default Filter;
