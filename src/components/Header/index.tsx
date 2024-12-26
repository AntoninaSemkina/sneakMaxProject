import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/index";
import Logo from "../Logo/index";
import style from "./style.module.css";
import ButtonBasket from "../BasketButton";
import BurgerMenu from "../Navigation/BurgerMenu/index";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.content}>
          <Logo />
          <div className={style.navContainer}>
            {!isMobile && (
              <>
                <Navigation />
              </>
            )}
            <ButtonBasket />
          </div>
          {isMobile && <BurgerMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
