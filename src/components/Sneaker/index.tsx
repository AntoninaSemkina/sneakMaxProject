import { FC, useState } from "react";
import style from "./style.module.css";
import { product } from "../../types/product";
import Button from "../Button";
import StarsRepeater from "../StarsRepeater";
import { useBasket } from "../Basket/BasketContext";

type SneakerProps = {
  data: product;
  count?: number;
  selectedSize?: number | null;
  onSelect?: (size: number) => void;
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

const Sneaker: FC<SneakerProps> = ({ data }) => {
  const { addItem } = useBasket(); // Получаем функцию добавления товара в корзину
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSelectSize = (size: number) => {
    setSelectedSize(size === selectedSize ? null : size); // Выбор/снятие выбора размера
  };

  const handleOrder = () => {
    if (selectedSize) {
      addItem({ ...data, selectedSize });
      alert("Товар добавлен в корзину!");
    } else {
      alert("Выберите размер перед заказом!");
    }
  };

  const MySvg = (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
        fill="#F14F4F"
      />
    </svg>
  );
  return (
    <div className={style.content}>
      <div className={style.card}>
        <div className={style.card1}>
          <div className={style.card1Block1}>
            <img src={data.imgUrl} alt="Sneaker" />
          </div>
          <div className={style.card1Block2}>
            <div className={style.card1Block2_el1}>
              <span>Артикул: {data.vendorCode}</span>
              <span>В наличии: {data.inStock} шт</span>
            </div>
            <div className={style.card1Block2_el2}>
              <h3>{data.title}</h3>
            </div>
            <div className={style.card1Block2_el3}>
              <StarsRepeater count={data.stars} svgContent={MySvg} />
            </div>
            <div className={style.card1Block2_el4}>
              <p>Выберите размер</p>
              <div className={style.card1Block2_el4}>
                {data.sizes.map((size) => (
                  <button
                    key={size}
                    className={`${style.card1Block2_el4_sizes} ${
                      selectedSize === size ? style.selected : ""
                    }`}
                    onClick={() => handleSelectSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className={style.card1Block2_el5}>
              <h2>{formatPrice(data.price)}</h2>
              {data.oldPrice && <h3>{formatPrice(data.oldPrice)}</h3>}
            </div>
            <div className={style.card1Block2_el6}>
              <Button
                text="Заказать"
                width="430px"
                backgroundColor="var(--button-red-color)"
                textColor="var(--light-text-color)"
                onClick={handleOrder}
              />
            </div>

            <div className={style.card1Block2_el7}>
              <div className={style.card1Block2_el7_info}>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.93427 11.8713C5.7891 12.0174 5.59114 12.0991 5.38542 12.0991C5.1797 12.0991 4.98174 12.0174 4.83657 11.8713L0.453495 7.48135C-0.00142535 7.0258 -0.00142535 6.28728 0.453495 5.8325L1.00235 5.28288C1.45727 4.82733 2.19399 4.82733 2.64891 5.28288L5.38542 8.0232L12.7798 0.61852C13.2347 0.162967 13.9722 0.162967 14.4264 0.61852L14.9752 1.16814C15.4301 1.62369 15.4301 2.36222 14.9752 2.81699L5.93427 11.8713Z"
                    fill="#B2B5BB"
                  />
                </svg>
                <p>Бесплатная доставка до двери</p>
              </div>
              <div className={style.card1Block2_el7_info}>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.93427 11.8713C5.7891 12.0174 5.59114 12.0991 5.38542 12.0991C5.1797 12.0991 4.98174 12.0174 4.83657 11.8713L0.453495 7.48135C-0.00142535 7.0258 -0.00142535 6.28728 0.453495 5.8325L1.00235 5.28288C1.45727 4.82733 2.19399 4.82733 2.64891 5.28288L5.38542 8.0232L12.7798 0.61852C13.2347 0.162967 13.9722 0.162967 14.4264 0.61852L14.9752 1.16814C15.4301 1.62369 15.4301 2.36222 14.9752 2.81699L5.93427 11.8713Z"
                    fill="#B2B5BB"
                  />
                </svg>
                <p>Оплата заказа при получении</p>
              </div>
              <div className={style.card1Block2_el7_info}>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.93427 11.8713C5.7891 12.0174 5.59114 12.0991 5.38542 12.0991C5.1797 12.0991 4.98174 12.0174 4.83657 11.8713L0.453495 7.48135C-0.00142535 7.0258 -0.00142535 6.28728 0.453495 5.8325L1.00235 5.28288C1.45727 4.82733 2.19399 4.82733 2.64891 5.28288L5.38542 8.0232L12.7798 0.61852C13.2347 0.162967 13.9722 0.162967 14.4264 0.61852L14.9752 1.16814C15.4301 1.62369 15.4301 2.36222 14.9752 2.81699L5.93427 11.8713Z"
                    fill="#B2B5BB"
                  />
                </svg>
                <p>Обмен в течении двух недель</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.card2}>
          <div className={style.card2Block1}>
            <h3>Описание:</h3>
            <p>{data.description}</p>
          </div>
          <div className={style.card2Block2}>
            <h3>Характеристики</h3>
            <p>Пол: {data.gender}</p>
            <p>Цвета: {data.color}</p>
            <p>Состав: {data.compound}</p>
            <p>Страна: {data.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sneaker;
