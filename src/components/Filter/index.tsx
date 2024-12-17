import { FC } from "react";
import style from "./style.module.css";
import CheckboxButton from "../checkbox";
import Button from "../Button";
import Sizes from "../sizes";

const Filter: FC = () => {
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          <h3>Подбор по параметрам</h3>
          <div className={style.price}>
            <p>Цена, руб</p>
            <div></div>
          </div>
          <div className={style.gender}>
            <p>Пол</p>
            <div>
              <CheckboxButton text="мужcкой" />
              <CheckboxButton text="женский" />
            </div>
          </div>
          <div className={style.sizegrid}>
            <p>Размер</p>
            <div>
              <Sizes />
            </div>
          </div>
          <Button
            text="Применить"
            backgroundColor="var(--button-grey-color)"
            textColor="var(--light-text-color)"
            width="240px"
          />
          <Button
            text="сбросить"
            textColor="var(--dark-text-color)"
            width="240px"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
