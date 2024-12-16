import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_PAGE_ROUTE } from "../../../utils/ consts";
import style from "./style.module.css";
import burgerMenu from "../../../../images/burgerMenu.png";
import Close from "../../../../images/Close.png";

const BurgerMenu: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.burger_input} id="burgerToggler">
      <div className={style.burger_menu}>
        <div className={style.burger_btns}>
          <button className={style.burger} onClick={toggleMenu}>
            <img src={isOpen ? Close : burgerMenu} alt="Menu" />
          </button>
        </div>
        {isOpen && (
          <div className={style.burger_nav}>
            <nav className={style.container}>
              <button
                className={style.btn}
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
              >
                Каталог
              </button>
              <button
                className={style.btn}
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
              >
                О нас
              </button>
              <button
                className={style.btn}
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
              >
                Подбор товара
              </button>
              <button
                className={style.btn}
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
              >
                Наша команда
              </button>
              <button
                className={style.btn}
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
              >
                Доставка и оплата
              </button>
              <button
                className={style.btn}
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
              >
                Контакты
              </button>
              <button
                className={style.btn}
                onClick={() => navigate(MAIN_PAGE_ROUTE)}
              >
                Корзина
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
