import React from "react";
import { useState } from "react";
import style from "./style.module.css";
import ModalBasket from "../ModalBasket";
import { useBasket } from "../Basket/BasketContext";

const ButtonBasket: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { items } = useBasket();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={style.container}>
      <button onClick={handleOpenModal} className={style.btn}>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 6.57893H16.6038L13.0359 0.319309C12.8589 0.00836581 12.475 -0.093156 12.1784 0.0938088C11.8823 0.280774 11.7865 0.684867 11.9641 0.996475L15.1461 6.57893H4.85388L8.03587 0.996431C8.21349 0.684823 8.11767 0.280729 7.82164 0.0937645C7.5244 -0.0932003 7.14173 0.00832152 6.96411 0.319265L3.39617 6.57888H0V7.89468H1.35651L2.94432 16.8103C3.11033 17.7438 3.88547 18.421 4.78761 18.421H15.2124C16.1145 18.421 16.8896 17.7438 17.055 16.811L18.6434 7.89468H20L20 6.57893ZM15.8264 16.5688C15.7715 16.8797 15.5133 17.1053 15.2124 17.1053H4.78761C4.4867 17.1053 4.22854 16.8798 4.173 16.5681L2.62789 7.89468H17.3721L15.8264 16.5688Z"
            fill="white"
          />
        </svg>
        {items.length > 0 && (
          <div className={style.basketContent}>
            <p>{items.length}</p>
          </div>
        )}
      </button>

      {isModalOpen && (
        <ModalBasket isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ButtonBasket;
