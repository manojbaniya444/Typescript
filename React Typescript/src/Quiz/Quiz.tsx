import React, { useEffect } from "react";
import { useGlobalContext } from "./AppContext";
import Question from "./Question";

type answers = {
  id: string;
  answer: string;
};

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<answers>();
  const [isChecked, setIsChecked] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const { updateAnswers } = useGlobalContext();

  const { filteredQuestions } = useGlobalContext();

  const nextQuestionHandler = () => {
    if (selectedAnswer) {
      updateAnswers(selectedAnswer);
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsChecked(false);
      setSelectedAnswer(undefined);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex === filteredQuestions.length - 1) {
      setIsGameOver(true);
    }
  }, [currentQuestionIndex, filteredQuestions.length]);

  if (isGameOver) {
    return <div>Game Over</div>;
  }

  return (
    <div className="quiz">
      <Question
        ques={filteredQuestions[currentQuestionIndex]}
        setSelectedAnswer={setSelectedAnswer}
        setIsChecked={setIsChecked}
        isChecked={isChecked}
      />
      <button
        className="quiz__button"
        onClick={nextQuestionHandler}
        disabled={selectedAnswer === undefined}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
