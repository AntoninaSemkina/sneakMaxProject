import { FC, useState } from "react";
import style from "./style.module.css";
import { product } from "../../types/product";
import { useBasket } from "../Basket/BasketContext";

type ChooseSizeProps = {
  data: product;
  isOpen: boolean;
  onClose: () => void;
};

const ChooseSize: FC<ChooseSizeProps> = ({ data, isOpen, onClose }) => {
  const { addItem } = useBasket();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSelectSize = (size: number) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleOrder = () => {
    if (selectedSize) {
      addItem({ ...data, selectedSize });
      alert("Товар добавлен в корзину!");
      onClose();
    } else {
      alert("Выберите размер!");
    }
  };

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeButton} onClick={onClose}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z"
              fill="var(--button-red-color)"
            />
          </svg>
        </button>
        <div className={style.content}>
          <h3>Выберите размер</h3>
          <div className={style.sizes}>
            {data.sizes.map((size) => (
              <button
                key={size}
                className={`${style.sizeButton} ${
                  selectedSize === size ? style.selected : ""
                }`}
                onClick={() => handleSelectSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button className={style.addButton} onClick={handleOrder}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseSize;