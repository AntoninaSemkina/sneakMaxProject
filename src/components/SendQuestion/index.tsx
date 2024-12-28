import { FC } from "react";
import style from "./style.module.css";
import ShareInfo from "../ShareInfo";

const SendQuestion: FC = () => {
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          <div className={style.block1}>
            <ShareInfo />
          </div>
          <div className={style.block2}>
            <ShareInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendQuestion;
