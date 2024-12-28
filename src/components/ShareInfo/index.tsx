import React, { useState } from "react";
import style from "./style.module.css";
import Button from "../Button";

interface ShareInfoProps {
  title: string;
  text: string;
  backgroundColor?: string;
}

const ShareInfo: React.FC<ShareInfoProps> = ({
  title,
  text,
  backgroundColor,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError("Введите корректный email");
    } else {
      setError("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    validateEmail(value);
  };
  return (
    <div className={style.container}>
      <div
        className={style.mainBlock}
        style={{
          backgroundColor: backgroundColor || "var(--default-bg-color)",
        }}
      >
        <h2>{title}</h2>
        <p>{text}</p>
        <input className={style.name} type="text" placeholder="Ваше имя" />
        <input
          className={style.email}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />
        {error && <p className={style.error}>{error}</p>}
        <Button
          text="Получить"
          width="150px"
          onClick={() => alert("Ваши данные отправлены!")}
          backgroundColor="var(--button-red-color)"
          textColor="var(--light-text-color)"
        />
      </div>
    </div>
  );
};

export default ShareInfo;
