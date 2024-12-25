import React from "react";
import Navigation from "../Navigation/index";
import Logo from "../Logo/index";
import style from "./style.module.css";
import ButtonBasket from "../BasketButton";
// import BurgerMenu from "../Navigation/BurgerMenu/index";

const Header: React.FC = () => {
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.content}>
          <Logo />
          <div className={style.navContainer}>
            <Navigation />
            <ButtonBasket />
            {/* <BurgerMenu /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
