import React from "react";
import { useGlobalContext } from "./AppContext";

const Quiz: React.FC = () => {
  const { filteredQuestions } = useGlobalContext();
  console.log("Filetered questions", filteredQuestions);
  return <div className="quiz"></div>;
};

export default Quiz;
