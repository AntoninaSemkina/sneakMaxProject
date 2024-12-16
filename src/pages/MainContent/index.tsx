import React from "react";
import style from "./style.module.css";
import Teammates from "../../components/teammates";

const MainContent: React.FC = () => {
  return (
    <div className={style.container}>
      <Teammates />
    </div>
  );
};

export default MainContent;
