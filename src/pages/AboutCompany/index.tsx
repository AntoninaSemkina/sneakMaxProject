import React from "react";
import style from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutUs from "../../components/AboutUs";

const AboutCompanyPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutCompanyPage;
