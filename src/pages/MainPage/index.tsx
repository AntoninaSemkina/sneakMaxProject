import React from "react";
import style from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainContent from "../MainContent";
import WelcomeMessage from "../../components/WelcomeMessage";
import Catalog from "../../components/Catalog";

const MainPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <WelcomeMessage />
      <Catalog />
      <MainContent />
      <Footer />
    </div>
  );
};

export default MainPage;
