import React from "react";
import style from "./style.module.css";
import Teammates from "../../components/teammates";
import WelcomeMessage from "../../components/WelcomeMessage";
import Catalog from "../../components/Catalog";
import AboutUs from "../../components/AboutUs";
import QuestionAnswer from "../../components/QuestionAnswer";
import SelectionProducts from "../../components/SelectionProduct";
import SendQuestion from "../../components/SendQuestion";
import ContactPage from "../../components/Contact";

const MainContent: React.FC = () => {
  return (
    <div className={style.container}>
      <WelcomeMessage />
      <Catalog />
      <AboutUs />
      <SelectionProducts />
      <Teammates />
      <QuestionAnswer />
      <ContactPage />
      <SendQuestion />
    </div>
  );
};

export default MainContent;
