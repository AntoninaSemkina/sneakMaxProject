import React from "react";
import style from "./style.module.css";
import ContactInfo from "../ContactInfo";

const Contact: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.mainBlock}>
        <div className={style.mainBlock_el1}>
          <ContactInfo />
        </div>
        <div className={style.mainBlock_el2}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aea58754e3046b499b0cd55202219bd1d954f89f97c76bba4da5938d502a88f43&amp;source=constructor"
            frameBorder="0"
            sandbox="allow-scripts allow-same-origin allow-popups"
            className={style.mapFrame}
            onError={() => {
              alert(
                "Map could not load. Please check your connection or enable cookies."
              );
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
