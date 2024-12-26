import { FC } from "react";
import style from "./style.module.css";
import QuestionBlock from "../Questions";

const questions = [
  {
    question: "Сколько длится доставка?",
    answer: "В среднем время заказа составляет 3 дня.",
  },
  {
    question: "Вы продаете оригинальный товар?",
    answer: "Да, мы можем занимаемся поставками напрямую от брендов.",
  },
];

const QuestionAnswer: FC = () => {
  return (
    <div className={style.fullwidth}>
      <div className={style.container}>
        <div className={style.titleBlock}>
          <h1>Часто задаваемые вопросы</h1>
        </div>
        <div className={style.mainBlock}>
          <QuestionBlock questions={questions} />
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
