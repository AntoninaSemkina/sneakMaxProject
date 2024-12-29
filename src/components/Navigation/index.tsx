import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ABOUTCOMPANY_PAGE_ROUTE,
  CATALOG_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  SELECT_PAGE_ROUTE,
  TEAM_PAGE_ROUTE,
} from "../../utils/ consts";
import style from "./style.module.css";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={style.container}>
      <button
        className={style.btn}
        onClick={() => navigate(CATALOG_PAGE_ROUTE)}
      >
        Каталог
      </button>
      <button
        className={style.btn}
        onClick={() => navigate(ABOUTCOMPANY_PAGE_ROUTE)}
      >
        О нас
      </button>
      <button className={style.btn} onClick={() => navigate(SELECT_PAGE_ROUTE)}>
        Подбор товара
      </button>
      <button className={style.btn} onClick={() => navigate(TEAM_PAGE_ROUTE)}>
        Наша команда
      </button>
      {/* <button className={style.btn} onClick={() => navigate(MAIN_PAGE_ROUTE)}>
        Доставка и оплата
      </button> */}
      <button
        className={style.btn}
        onClick={() => navigate(CONTACT_PAGE_ROUTE)}
      >
        Контакты
      </button>
    </nav>
  );
};

export default Navigation;
