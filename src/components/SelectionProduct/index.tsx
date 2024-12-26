import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import Button from "../Button";
import ProductsTypology from "../productTypology";
import { Typology } from "../../types/typology";

const SelectionProducts: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typologyData, setTypologyData] = useState<Typology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const totalSlides = 4;

  useEffect(() => {
    const fetchTypologyData = async () => {
      try {
        const response = await fetch(
          "https://c6de376cf2e227cc.mokky.dev/typology"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data: Typology[] = await response.json();
        setTypologyData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTypologyData();
  }, []);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  if (loading) {
    return <p>Loading typologies...</p>;
  }

  if (error) {
    return <p>Error loading typologies: {error}</p>;
  }

  return (
    <div className={style.fullwidth}>
      <div className={style.slider}>
        <div className={style.slide}>
          {currentSlide === 0 && (
            <div className={style.container}>
              <div className={style.block1}>
                <h2>Мы подберем идеальную пару для вас</h2>
                <p>
                  Ответьте на три вопроса и мы вышлем каталог с самыми
                  подходящими для вас моделями
                </p>
              </div>
              <div className={style.block2}>
                <h3>Какой тип кроссовок рассматриваете?</h3>
                <div></div>
                <ProductsTypology data={typologyData} />
              </div>
            </div>
          )}
          {currentSlide === 1 && (
            <div>
              <h2>Шаг 2: Вопрос</h2>
              <p>Какой размер вы предпочитаете?</p>
              <input type="text" placeholder="Введите размер" />
            </div>
          )}
          {currentSlide === 2 && (
            <div>
              <h2>Шаг 3: Вопрос</h2>
              <p>Какой цвет вы предпочитаете?</p>
              <input type="text" placeholder="Введите цвет" />
            </div>
          )}
          {currentSlide === 3 && (
            <div>
              <h2>Готово</h2>
              <p>Мы подберем для вас лучшие модели и отправим их на почту!</p>
            </div>
          )}
        </div>

        <div className={style.controls}>
          <div className={style.pages}>
            <div>
              {currentSlide + 1} из {totalSlides}
            </div>
          </div>
          {currentSlide < totalSlides - 1 ? (
            <Button
              text="Следующий шаг"
              width="50%"
              backgroundColor="transparent"
              textColor="var(--dark-text-color)"
              onClick={handleNext}
            />
          ) : (
            <button
              className={style.button}
              onClick={() => alert("Ваши данные отправлены!")}
            >
              Завершить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectionProducts;
