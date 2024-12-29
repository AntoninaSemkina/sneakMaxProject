import React from "react";
import style from "./style.module.css";
import { useBasket } from "../Basket/BasketContext";
import Button from "../Button";
import ButtonDelete from "../ButtonDelete";

type BasketProps = {
  onOpenOrderModal?: () => void;
};

const Basket: React.FC<BasketProps> = ({ onOpenOrderModal }) => {
  const { items, removeItem } = useBasket();

  if (!items.length) {
    return <p>Корзина пуста</p>;
  }

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  return (
    <div className={style.content}>
      <div className={style.card}>
        <div className={style.card1}>
          <div className={style.card1Block1}>
            <div>
              {items.map((item, index) => (
                <div className={style.sneaker} key={index}>
                  <div className={style.photo}>
                    <img src={item.imgUrl} alt="sneakers" />
                  </div>
                  <div className={style.info}>
                    <h3>{item.title}</h3>
                    <p>Размер: {item.selectedSize}</p>
                    <p>Цена: {formatPrice(item.price)}</p>
                  </div>
                  <div className={style.delete}>
                    <ButtonDelete
                      onClick={() => removeItem(item.id, item.selectedSize)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.card2}>
          <div className={style.card2Block1}>
            <h3>Итого сумма</h3>
            <div>{formatPrice(totalPrice)}</div>
          </div>
          <div className={style.card2Block2}>
            <div className={style.card1Block2_el1}>
              <Button
                text="Перейти в заказу"
                width="100%"
                backgroundColor="var(--button-red-color)"
                textColor="var(--light-text-color)"
                onClick={onOpenOrderModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
