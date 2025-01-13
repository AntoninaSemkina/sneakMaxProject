// import { FC, useState, useEffect } from "react";
// import style from "./stylefilter.module.css";
// import Button from "../Button";
// import FilterContent from "./index";

// type Filters = {
//   gender: string[];
//   size: number[];
//   price: {
//     min: number;
//     max: number;
//   };
// };

// const Filter: FC = () => {
//   const [filters, setFilters] = useState<Filters>({
//     gender: [],
//     size: [],
//     price: {
//       min: 0,
//       max: Infinity,
//     },
//   });
//   useEffect(() => {
//     console.log("Current filters:", filters);
//   }, [filters]);
//   const applyFilters = (newFilters: Filters) => {
//     setFilters(newFilters);
//   };

//   const resetFilters = () => {
//     setFilters({
//       gender: [],
//       size: [],
//       price: {
//         min: 0,
//         max: Infinity,
//       },
//     });
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const toggleFilter = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={style.fullwidth}>
//       <div className={style.container}>
//         <div className={style.container_block1}>
//           <div className={style.mainBlock}>
//             <FilterContent
//               onApplyFilters={applyFilters}
//               onResetFilters={resetFilters}
//             />
//           </div>
//         </div>
//         <div className={style.container_block2}>
//           <div className={style.titleBlock}>
//             <Button
//               text="Фильтр параметров"
//               backgroundColor="var(--button-grey-color)"
//               textColor="var(--light-text-color)"
//               width="90%"
//               onClick={toggleFilter}
//             />
//           </div>
//           {isOpen && (
//             <div className={style.mainBlock}>
//               <FilterContent
//                 onApplyFilters={applyFilters}
//                 onResetFilters={resetFilters}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filter;
import { FC, useState } from "react";
import style from "./stylefilter.module.css";
import Button from "../Button";
import FilterContent from "./index";

type Filters = {
  gender: string[];
  size: number[];
  price: {
    min: number;
    max: number;
  };
};

interface FilterProps {
  onApplyFilters: (filters: Filters) => void;
  onResetFilters: () => void;
}

const Filter: FC<FilterProps> = ({ onApplyFilters, onResetFilters }) => {
  const [filters, setFilters] = useState<Filters>({
    gender: [],
    size: [],
    price: {
      min: 0,
      max: Infinity,
    },
  });

  const applyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
    onApplyFilters(newFilters); // Передаем данные выше
  };

  const resetFilters = () => {
    setFilters({
      gender: [],
      size: [],
      price: {
        min: 0,
        max: Infinity,
      },
    });
    onResetFilters(); // Вызываем сброс выше
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.container_block1}>
          <div className={style.mainBlock}>
            <FilterContent
              onApplyFilters={applyFilters}
              onResetFilters={resetFilters}
            />
          </div>
        </div>
        <div className={style.container_block2}>
          <div className={style.titleBlock}>
            <Button
              text="Фильтр параметров"
              backgroundColor="var(--button-grey-color)"
              textColor="var(--light-text-color)"
              width="90%"
              onClick={toggleFilter}
            />
          </div>
          {isOpen && (
            <div className={style.mainBlock}>
              <FilterContent
                onApplyFilters={applyFilters}
                onResetFilters={resetFilters}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
