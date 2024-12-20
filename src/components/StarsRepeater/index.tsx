import React from "react";
import style from "./style.module.css";

type Props = {
  count: number; // Количество изображений
  svgContent: React.ReactNode; // SVG-контент
};

const SvgRepeater: React.FC<Props> = ({ count, svgContent }) => {
  return (
    <div className={style.container}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={style.svgWrapper}>
          {svgContent}
        </div>
      ))}
    </div>
  );
};

export default SvgRepeater;
