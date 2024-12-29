import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import {
  ABOUTCOMPANY_PAGE_ROUTE,
  CATALOG_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  SELECT_PAGE_ROUTE,
  TEAM_PAGE_ROUTE,
} from "../../../utils/ consts";

const BurgerMenu: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    setIsOpen(false); // Закрыть меню после перехода
  };

  const Close = (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z"
        fill="var(--button-red-color)"
      />
    </svg>
  );
  const burgerMenu = (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="31" fill="url(#pattern0_8313_875)" />
      <defs>
        <pattern
          id="pattern0_8313_875"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_8313_875"
            transform="matrix(0.01 0 0 0.00967742 0 0.016129)"
          />
        </pattern>
        <image
          id="image0_8313_875"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nO3aOwrCQBiF0QFXo+LafVTqpkTtbK4ErLRyTPAXz1lAEuZCpvlaAwAAAAAA+GNJlkl2Sc7hU8MZbpMsesdYJbl+/Bk8G8501TPI8eVRjOXw7hizJLfRXs+z4WxnBvnVQfyyJrd/7wJxqU/p0nWpP0ZZJNkkOU36if/hlGSdZN41BgAAAAAAAAAA9FG/j0r9XpT6vSD1ezHq92LU78Wo3wtRvxehfgcAAAAAAAAA4BvU76NSvxelfi9I/V6M+r0Y9Xsx6vdC1O9FqN8BAAAAAIBGa3dzrLjHogbwCQAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
  return (
    <div className={style.burger_input} id="burgerToggler">
      <div className={style.burger_menu}>
        <div className={style.burger_btns}>
          <button className={style.burger} onClick={toggleMenu}>
            {isOpen ? Close : burgerMenu}
          </button>
        </div>
        {isOpen && (
          <div className={style.burger_nav}>
            <nav className={style.container}>
              <button
                className={style.btn}
                onClick={() => handleNavigate(CATALOG_PAGE_ROUTE)}
              >
                Каталог
              </button>
              <button
                className={style.btn}
                onClick={() => handleNavigate(ABOUTCOMPANY_PAGE_ROUTE)}
              >
                О нас
              </button>
              <button
                className={style.btn}
                onClick={() => handleNavigate(SELECT_PAGE_ROUTE)}
              >
                Подбор товара
              </button>
              <button
                className={style.btn}
                onClick={() => handleNavigate(TEAM_PAGE_ROUTE)}
              >
                Наша команда
              </button>
              {/* <button
                className={style.btn}
                onClick={() => handleNavigate(MAIN_PAGE_ROUTE)}
              >
                Доставка и оплата
              </button> */}
              <button
                className={style.btn}
                onClick={() => handleNavigate(CONTACT_PAGE_ROUTE)}
              >
                Контакты
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
