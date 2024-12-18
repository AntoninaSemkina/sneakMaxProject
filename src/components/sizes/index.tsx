// import { FC, useState } from "react";
// import sizeData from "../../data/size.json";
// import style from "./style.module.css";
// import Size from "../size";
// import { size } from "../../types/size";

// const Sizes: FC = () => {
//   const [visibleCount] = useState(9);

//   return (
//     <div className={style.fullwidth}>
//       <div className={style.container}>
//         <div className={style.mainBlock}>
//           {sizeData.slice(0, visibleCount).map((member: size) => (
//             <Size key={member.id} data={member} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sizes;
import { FC } from "react";
import sizeData from "../../data/size.json";
import style from "./style.module.css";
import { size } from "../../types/size";
import Size from "../size";

interface SizesProps {
  selectedSizes: number[];
  onSelectSize: (size: number) => void;
}

const Sizes: FC<SizesProps> = ({ selectedSizes, onSelectSize }) => {
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          {sizeData.map((member: size) => (
            <Size
              key={member.id}
              data={member}
              isSelected={selectedSizes.includes(member.size)}
              onSelect={() => onSelectSize(member.size)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sizes;
