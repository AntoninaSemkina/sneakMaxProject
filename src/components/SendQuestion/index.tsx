import { FC } from "react";
import style from "./style.module.css";
import ShareInfo from "../ShareInfo";
import picture1 from "../../assets/picture1.webp";
import picture2 from "../../assets/picture2.webp";
import picture3 from "../../assets/picture3.webp";
import picture4 from "../../assets/picture4.webp";
import picture5 from "../../assets/picture5.webp";
import picture6 from "../../assets/picture6.webp";
import Instagram from "../../assets/Instagram.svg";

const SendQuestion: FC = () => {
  const pictures = [picture1, picture2, picture3, picture4, picture5, picture6];

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          <div className={style.block1}>
            <ShareInfo
              title="Есть вопросы?"
              text="Заполните форму и наш менеджер свяжется с вами"
              backgroundColor="var(--dark-bg-color)"
            />
          </div>
          <div className={style.block2}>
            <div className={style.content}>
              <div className={style.title}>
                <img src={Instagram} alt="instagram" />
              </div>
              <div className={style.img}>
                {pictures.map((picture, index) => (
                  <img key={index} src={picture} alt="instagramPic" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendQuestion;
