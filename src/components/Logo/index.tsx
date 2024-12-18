import React from "react";
import style from "./style.module.css";
import { Link } from "react-router";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={style.link}>
      <h2 className={style.logo}>SneakMax</h2>
    </Link>
  );
};

export default Logo;
