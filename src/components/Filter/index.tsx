import { FC, useEffect, useState } from "react";
import style from "./style.module.css";
import CheckboxButton from "../checkbox";
import Button from "../Button";
import Sizes from "../sizes";
import PriceSlider from "../PriceSlider";

interface FilterProps {
  onApplyFilters: (filters: {
    gender: string[];
    size: number[];
    price: { min: number; max: number };
  }) => void;
  onResetFilters: () => void;
}

const FilterContent: FC<FilterProps> = ({ onApplyFilters, onResetFilters }) => {
  const [globalMinPrice, setGlobalMinPrice] = useState<number>(0);
  const [globalMaxPrice, setGlobalMaxPrice] = useState<number>(100);

  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState(globalMinPrice);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(globalMaxPrice);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://c6de376cf2e227cc.mokky.dev/sneakers"
        );
        const data = await response.json();

        const productPrices = data.map(
          (product: { price: number }) => product.price
        );
        const minPrice = Math.min(...productPrices);
        const maxPrice = Math.max(...productPrices);

        setGlobalMinPrice(minPrice);
        setGlobalMaxPrice(maxPrice);
        setSelectedMinPrice(minPrice);
        setSelectedMaxPrice(maxPrice);
      } catch (error) {
        console.error("Ошибка загрузки цен:", error);
      }
    };

    fetchPrices();
  }, []);

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
                isChecked={selectedGender.includes("Мужской")}
                onChange={() => toggleGender("Мужской")}
              />
              <CheckboxButton
                text="женский"
                isChecked={selectedGender.includes("Женский")}
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

export default FilterContent;
