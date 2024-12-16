import React from "react";
import style from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Teammates from "../../components/teammates";

const TeamPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <Teammates />
      <Footer />
    </div>
  );
};

export default TeamPage;
