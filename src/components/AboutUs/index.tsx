import { FC } from "react";
import style from "./style.module.css";
import AboutUsImage from "../../assets/AboutUsImage.svg";
const AboutUs: FC = () => {
  return (
    <div className={style.fullwidth}>
      <div className={style.bgImage1}>
        <svg
          width="550"
          height="424"
          viewBox="0 0 550 424"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_43_1020)">
            <circle
              cx="-14"
              cy="102"
              r="321.5"
              stroke="white"
              stroke-opacity="0.5"
            />
            <circle
              cx="401.5"
              cy="-33.5"
              r="148"
              stroke="white"
              stroke-opacity="0.5"
            />
            <circle cx="511.5" cy="65.5" r="7.5" fill="#F14F4F" />
          </g>
          <defs>
            <clipPath id="clip0_43_1020">
              <rect width="550" height="424" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={style.container}>
        <div className={style.bgImage2}>
          <img src={AboutUsImage} alt="Наша компания" />
        </div>
        <div className={style.mainBlock}>
          <h1>Пара слов о нас</h1>
          <p>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.
          </p>
          <div className={style.mainBlock_logo}>
            <div className={style.mainBlock_logo_content}>
              <svg
                width="30"
                height="3"
                viewBox="0 0 30 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.31134e-07"
                  y1="1.5"
                  x2="30"
                  y2="1.5"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
              <h3>SneakMax</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
