import React from "react";
import style from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SelectionProducts from "../../components/SelectionProduct";

const SelectPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <SelectionProducts />
      <Footer />
    </div>
  );
};

export default SelectPage;
