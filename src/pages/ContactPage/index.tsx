import React from "react";
import style from "./style.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

const ContactPage: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
