import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import Button from "../Button";
import { typology as TypologyType, TypologyArray } from "../../types/typology";
import Typologies from "../Typologies"; // Используем компонент для массива данных
import selection2 from "../../assets/selection2.svg";
import ShareInfo from "../ShareInfo";
import CheckboxButton from "../checkbox";

const SelectionProducts: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typologyData, setTypologyData] = useState<TypologyArray>([]);
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
        const data: TypologyArray = await response.json();
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
  const sizes = [
    { var: "менее 36" },
    { var: "36-38" },
    { var: "39-41" },
    { var: "42-44" },
    { var: "45 и больше" },
  ];
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
                <Typologies />
              </div>
            </div>
          )}
          {currentSlide === 1 && (
            <div className={style.container}>
              <div className={style.block1}>
                <h2>Мы подберем идеальную пару для вас</h2>
                <p>
                  Ответьте на три вопроса и мы вышлем каталог с самыми
                  подходящими для вас моделями
                </p>
              </div>
              <div className={style.block2}>
                <h3>Какой размер вам подойдет?</h3>
                <div className={style.sizes}>
                  {sizes.map((item) => (
                    <div>
                      <CheckboxButton text={item.var} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={style.block3}>
                <img src={selection2} alt="sneakers" />
              </div>
            </div>
          )}
          {currentSlide === 2 && (
            <div className={style.container}>
              <div className={style.block1}>
                <h2>Мы подберем идеальную пару для вас</h2>
                <p>
                  Ответьте на три вопроса и мы вышлем каталог с самыми
                  подходящими для вас моделями
                </p>
              </div>
              <div className={style.block2}>
                <h3>Уточните какие-либо моменты</h3>
                <textarea
                  className={style.textarea}
                  name="text"
                  id="selectionProduct"
                  placeholder="Введите сообщение"
                ></textarea>
              </div>
            </div>
          )}
          {currentSlide === 3 && (
            <div className={style.container}>
              <div className={style.block1}>
                <h2>Ваша подборка готова!</h2>
                <p>
                  Оставьте свои контактные данные, чтобы бы мы могли отправить
                  подготовленный для вас каталог
                </p>
              </div>
              <div className={style.block2}>
                <ShareInfo />
              </div>
            </div>
          )}
        </div>

        <div className={style.controls}>
          <div className={style.controls_block}>
            <div className={style.pages}>
              <div>
                {currentSlide + 1} из {totalSlides}
              </div>
            </div>
            {currentSlide < totalSlides - 1 ? (
              <Button
                text="Следующий шаг"
                width="250px"
                backgroundColor="transparent"
                textColor="var(--dark-text-color)"
                onClick={handleNext}
                border="1px solid var(--button-grey-color)"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionProducts;
