// без использования noUiSlider
// import { FC, useRef } from "react";
// import style from "./style.module.css";

// interface PriceSliderProps {
//   minPrice: number;
//   maxPrice: number;
//   currentMinPrice: number;
//   currentMaxPrice: number;
//   onChange: (min: number, max: number) => void;
// }

// const PriceSlider: FC<PriceSliderProps> = ({
//   minPrice,
//   maxPrice,
//   currentMinPrice,
//   currentMaxPrice,
//   onChange,
// }) => {
//   const sliderRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (event: MouseEvent | TouchEvent, isMin: boolean) => {
//     if (!sliderRef.current) return;

//     const slider = sliderRef.current.getBoundingClientRect();
//     const clientX =
//       event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
//     const sliderWidth = slider.width;
//     const offsetX = Math.min(Math.max(clientX - slider.left, 0), sliderWidth);

//     const newValue = Math.round(
//       minPrice + (offsetX / sliderWidth) * (maxPrice - minPrice)
//     );

//     if (isMin) {
//       if (newValue < currentMaxPrice) {
//         onChange(newValue, currentMaxPrice);
//       }
//     } else {
//       if (newValue > currentMinPrice) {
//         onChange(currentMinPrice, newValue);
//       }
//     }
//   };

//   const attachMoveEvents = (
//     event: React.MouseEvent | React.TouchEvent,
//     isMin: boolean
//   ) => {
//     const handleMove = (e: MouseEvent | TouchEvent) =>
//       handleMouseMove(e, isMin);
//     const handleEnd = () => {
//       document.removeEventListener("mousemove", handleMove);
//       document.removeEventListener("mouseup", handleEnd);
//       document.removeEventListener("touchmove", handleMove);
//       document.removeEventListener("touchend", handleEnd);
//     };

//     document.addEventListener("mousemove", handleMove);
//     document.addEventListener("mouseup", handleEnd);
//     document.addEventListener("touchmove", handleMove);
//     document.addEventListener("touchend", handleEnd);
//   };

//   const minLeft = ((currentMinPrice - minPrice) / (maxPrice - minPrice)) * 100;
//   const maxLeft = ((currentMaxPrice - minPrice) / (maxPrice - minPrice)) * 100;

//   return (
//     <div className={style.container}>
//       <div className={style.card}>
//         <div className={style.minPrice}>
//           <p>{currentMinPrice}</p>
//         </div>
//         <div className={style.maxPrice}>
//           <p>{currentMaxPrice}</p>
//         </div>
//       </div>
//       <div ref={sliderRef} className={style.priceSlider}>
//         {/* Цветовая зона между ползунками */}
//         <div
//           className={style.colorRange}
//           style={{
//             left: `${minLeft}%`,
//             width: `${maxLeft - minLeft}%`,
//           }}
//         />
//         {/* Ползунок минимума */}
//         <div
//           className={style.blockMin}
//           style={{ left: `${minLeft}%` }}
//           onMouseDown={(e) => attachMoveEvents(e, true)}
//           onTouchStart={(e) => attachMoveEvents(e, true)}
//         />
//         {/* Ползунок максимума */}
//         <div
//           className={style.blockMax}
//           style={{ left: `${maxLeft}%` }}
//           onMouseDown={(e) => attachMoveEvents(e, false)}
//           onTouchStart={(e) => attachMoveEvents(e, false)}
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceSlider;
// с использованием noUiSlider
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
