import React from "react";
import style from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Catalog from "../../components/Catalog";

const CatalogPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
};

export default CatalogPage;
