import { FC, useState } from "react";
import sizeData from "../../data/size.json";
import style from "./style.module.css";
import Size from "../size";
import { size } from "../../types/size";

const Sizes: FC = () => {
  const [visibleCount] = useState(9);

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          {sizeData.slice(0, visibleCount).map((member: size) => (
            <Size key={member.id} data={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sizes;
