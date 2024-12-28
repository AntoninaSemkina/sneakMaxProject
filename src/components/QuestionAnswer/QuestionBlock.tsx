import React, { useState } from "react";
import style from "./style.module.css";
import Open from "../../assets/Open.svg";
import Close from "../../assets/Close.svg";

interface Question {
  question: string;
  answer: string;
}

interface MainBlockProps {
  questions: Question[];
}

const QuestionBlock: React.FC<MainBlockProps> = ({ questions }) => {
  const [visibleDescriptions, setVisibleDescriptions] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );
  const [imageSources, setImageSources] = useState<string[]>(
    Array(questions.length).fill(Open)
  );

  const toggleDescription = (index: number) => {
    setVisibleDescriptions((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });

    setImageSources((prev) => {
      const newState = [...prev];
      newState[index] = prev[index] === Open ? Close : Open;
      return newState;
    });
  };

  return (
    <div className={style.container}>
      {questions.map((item, index) => (
        <div key={index} className={style.block}>
          <div className={style.info}>
            <span>{item.question}</span>
            <button
              className={style.btn}
              onClick={() => toggleDescription(index)}
            >
              <img
                className={style.icon}
                src={imageSources[index]}
                alt="icon"
              />
            </button>
          </div>
          {visibleDescriptions[index] && (
            <div className={style.description}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionBlock;
