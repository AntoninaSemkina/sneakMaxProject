import { FC, useEffect, useRef } from "react";
import noUiSlider, { API } from "nouislider";
import "../../../node_modules/nouislider/dist/nouislider.css";
import style from "./style.module.css";

interface PriceSliderProps {
  minPrice: number;
  maxPrice: number;
  currentMinPrice: number;
  currentMaxPrice: number;
  onChange: (min: number, max: number) => void;
}

const PriceSlider: FC<PriceSliderProps> = ({
  minPrice,
  maxPrice,
  currentMinPrice,
  currentMaxPrice,
  onChange,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      // Инициализация слайдера
      const slider = noUiSlider.create(sliderRef.current, {
        start: [currentMinPrice, currentMaxPrice],
        connect: true,
        range: {
          min: minPrice,
          max: maxPrice,
        },
        step: 1, // Шаг изменения
        format: {
          to: (value) => Math.round(value).toString(),
          from: (value) => Number(value),
        },
      }) as API;

      // Слушатель событий изменения значений
      slider.on("update", (values: (string | number)[]) => {
        const [min, max] = values.map((v) => Number(v));
        onChange(min, max);
      });

      // Уничтожение слайдера при размонтировании
      return () => {
        slider.destroy();
      };
    }
  }, [minPrice, maxPrice, currentMinPrice, currentMaxPrice, onChange]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.minPrice}>
          <p>{currentMinPrice}</p>
        </div>
        <div className={style.maxPrice}>
          <p>{currentMaxPrice}</p>
        </div>
      </div>
      <div className={style.priceSlider} ref={sliderRef}></div>
    </div>
  );
};

export default PriceSlider;
