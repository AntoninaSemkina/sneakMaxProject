import React from "react";
import style from "./style.module.css";
import Teammates from "../../components/teammates";
import WelcomeMessage from "../../components/WelcomeMessage";
import Catalog from "../../components/Catalog";

const MainContent: React.FC = () => {
  return (
    <div className={style.container}>
      <WelcomeMessage />
      <Catalog />
      <Teammates />
    </div>
  );
};

export default MainContent;
