import { FC } from "react";
import { typology as TypologyType } from "../../types/typology";
import style from "./style.module.css";
import CheckboxButton from "../checkbox";
import typology from "../../assets/typology.svg";
type Props = {
  data: TypologyType;
};
// const [selectedTypology, setSelectedTypology] = useState<string[]>([]);

// const toggleTypology = (typology: string) => {
//   setSelectedTypology((prev) =>
//     prev.includes(typology)
//       ? prev.filter((g) => g !== typology)
//       : [...prev, typology]
//   );
// };

const Typology: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.block1}>
        <img src={typology} alt="" />
      </div>
      <div className={style.block2}>
        <CheckboxButton
          text={data.typology}
          // isChecked={selectedTypology.includes("{data.typology}")}
          // onChange={() => toggleTypology("{data.typology}")}
        />
      </div>
    </div>
  );
};

export default Typology;
