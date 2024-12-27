import React from "react";
import style from "./style.module.css";
import Button from "../Button";

const ShareInfo: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.mainBlock}>
        <h2>Получить предложение</h2>
        <p>Получите подборку подходящих для вас моделей на почту</p>
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="E-mail" />
        <Button
          text="Получить"
          width="220px"
          onClick={() => alert("Ваши данные отправлены!")}
          backgroundColor="var(--button-red-color)"
          textColor="var(--light-text-color)"
        />
      </div>
    </div>
  );
};

export default ShareInfo;
