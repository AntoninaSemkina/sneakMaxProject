import React, { useState } from "react";
import style from "./style.module.css";
import Button from "../Button";
import ButtonDelete from "../ButtonDelete";
import { useBasket } from "../Basket/BasketContext";

type ModalOrderProps = {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{
    id: number;
    title: string;
    price: number;
    selectedSize: number;
    imgUrl: string;
  }>;
};

const ModalOrder: React.FC<ModalOrderProps> = ({ isOpen, onClose, items }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleOrderSubmit = async () => {
    if (!name || !phone || !email) {
      alert("Заполните все поля.");
      return;
    }

    try {
      const existingOrdersResponse = await fetch(
        "https://c6de376cf2e227cc.mokky.dev/orders",
        {
          method: "GET",
        }
      );

      if (!existingOrdersResponse.ok) {
        throw new Error("Не удалось получить существующие заказы.");
      }

      const existingOrders = await existingOrdersResponse.json();
      const newOrderNumber = existingOrders.length + 1; //  номер нового заказа:  заказ по апи в базе+1

      const orderData = {
        orderNumber: newOrderNumber,
        user: {
          name,
          phone,
          email,
        },
        order: {
          items,
          total: totalPrice,
        },
      };

      const response = await fetch(
        "https://c6de376cf2e227cc.mokky.dev/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Не удалось отправить заказ.");
      }

      alert(`Заказ №${newOrderNumber} оформлен!`);
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        alert(`Ошибка: ${error.message}`);
      } else {
        alert("Произошла неизвестная ошибка.");
      }
    }
  };

  if (!isOpen) return null;
  const { removeItem } = useBasket();
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  const isOrderDisabled = items.length === 0;

  return (
    <div
      className={style.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={style.modal}>
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

        <div className={style.title}>
          <h2>Оформление заказа</h2>
        </div>
        <div className={style.container}>
          <div className={style.container_block1}>
            <div className={style.container_block1_el1}>
              <p>Товаров в заказе:</p> <span>{items.length} шт</span>
            </div>
            <div className={style.container_block1_el2}>
              <p>Общая сумма заказа:</p> <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className={style.basket}>
              {items.map((item) => (
                <div key={item.id} className={style.sneaker}>
                  <div className={style.photo}>
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <div className={style.info}>
                    <h3>{item.title}</h3>
                    <p>Размер: {item.selectedSize}</p>
                    <p>Цена: {formatPrice(item.price)} </p>
                  </div>
                  <div className={style.delete}>
                    <ButtonDelete
                      onClick={() => removeItem(item.id, item.selectedSize)}
                    />
                  </div>
                </div>
              ))}
            </div>
            {isOrderDisabled && (
              <p className={style.errorMessage}>
                Для оформления заказа необходимо добавить товар в корзину.
              </p>
            )}
          </div>

          <div className={style.container_block2}>
            <input
              type="text"
              placeholder="Ваше имя"
              minLength={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              minLength={11}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={style.container_block3}>
          <Button
            text="Оформить заказ"
            width="50%"
            backgroundColor="var(--button-red-color)"
            textColor="var(--light-text-color)"
            onClick={isOrderDisabled ? undefined : handleOrderSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalOrder;
