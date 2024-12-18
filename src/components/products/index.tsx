// import { FC, useState } from "react";
// import productData from "../../data/products.json";
// import { product } from "../../types/product";
// import style from "./style.module.css";
// import Product from "../product";
// import Button from "../Button";

// interface ProductsProps {
//   filters: {
//     gender: string[];
//     size: number[];
//     price: {
//       min: number;
//       max: number;
//     };
//   };
// }

// const Products: FC<ProductsProps> = ({ filters }) => {
//   const [visibleCount, setVisibleCount] = useState(6);

//   const loadMore = () => {
//     setVisibleCount((prevCount) => prevCount + 6);
//   };
//   const { gender, size, price } = filters;

//   const filteredProducts = productData.filter((product: product) => {
//     const matchesGender =
//       gender.length === 0 || gender.includes(product.gender);

//     const matchesSize =
//       size.length === 0 || size.some((s) => product.sizes.includes(s));

//     const matchesPrice =
//       product.price >= price.min && product.price <= price.max;

//     return matchesGender && matchesSize && matchesPrice;
//   });

//   return (
//     <div className={style.fullwidth}>
//       <div className={style.container}>
//         <div className={style.mainBlock}>
//           {filteredProducts.slice(0, visibleCount).map((member: product) => (
//             <Product key={member.id} data={member} />
//           ))}
//         </div>
//         <div className={style.btnBlock}>
//           {visibleCount < filteredProducts.length && (
//             <Button
//               text="Показать еще"
//               backgroundColor="var(--button-red-color)"
//               textColor="var(--light-text-color)"
//               onClick={loadMore}
//               width="200px"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import { FC, useState } from "react";
import productData from "../../data/products.json";
import { product } from "../../types/product";
import style from "./style.module.css";
import Product from "../product";
import Button from "../Button";

interface ProductsProps {
  filters: {
    gender: string[];
    size: number[];
    price: {
      min: number;
      max: number;
    };
  };
}

const Products: FC<ProductsProps> = ({ filters }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  // const { gender, size, price } = filters;

  const filteredProducts = productData.filter((product) => {
    const matchesGender =
      filters.gender.length === 0 || filters.gender.includes(product.gender);
    const matchesSize =
      filters.size.length === 0 ||
      product.sizes.some((size) => filters.size.includes(size));
    const matchesPrice =
      product.price >= filters.price.min && product.price <= filters.price.max;

    return matchesGender && matchesSize && matchesPrice;
  });

  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.mainBlock}>
          {/* {filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))} */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} data={product} />
            ))
          ) : (
            <p>Нет подходящих товаров</p> // Показываем сообщение, если ничего не найдено
          )}
        </div>
        <div className={style.btnBlock}>
          {visibleCount < filteredProducts.length && (
            <Button
              text="Показать еще"
              backgroundColor="var(--button-red-color)"
              textColor="var(--light-text-color)"
              onClick={loadMore}
              width="200px"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
