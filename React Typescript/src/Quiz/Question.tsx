import React, { SetStateAction, useState } from "react";
import { useGlobalContext } from "./AppContext";
import { questionType } from "./types";

type answers = {
  id: string;
  answer: string;
};

interface Props {
  ques: questionType;
  setSelectedAnswer: React.Dispatch<SetStateAction<answers | undefined>>;
  setIsChecked: React.Dispatch<SetStateAction<boolean>>;
  isChecked: boolean;
}

const Question: React.FC<Props> = ({
  ques,
  setSelectedAnswer,
  setIsChecked,
  isChecked,
}) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const { question, answers, correctAnswer, category, id } = ques;

  const answerSelectHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { value } = e.target;
    setSelectedAnswer({ id, answer: value });
    setIsChecked(true);
    setSelected(value);
  };

  return (
    <div className="single__question">
      <p>{question}</p>
      <div>
        {answers.map((answer: string, index: number) => {
          return (
            <div key={index} className="single__question__answers">
              <input
                type="radio"
                id={question}
                name={question}
                value={answer}
                onChange={(e) => answerSelectHandler(e, id)}
                checked={isChecked && selected === answer}
              />
              <label htmlFor={answer}>{answer}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
