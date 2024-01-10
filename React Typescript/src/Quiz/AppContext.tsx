import { createContext, useContext, useState } from "react";
import { getFilteredQuestions } from "./filterQuestions";

type answers = {
  id: string;
  answer: string;
};

type ContextType = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  filterQuestions: () => void;
  filteredQuestions: question[];
  checkHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedAnswers: React.Dispatch<React.SetStateAction<answers[]>>;
  selectedAnswers: answers[];
  updateAnswers: (answer: answers) => void;
};

type question = {
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
  id: string;
};

const AppContext = createContext<ContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<answers[]>([]);

  const filterQuestions = () => {
    const filteredQuestions: question[] = getFilteredQuestions(categories);
    setFilteredQuestions(filteredQuestions);
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(
        categories.filter((category: string) => category !== value)
      );
    }
  };

  const updateAnswers = (answer: answers) => {
    setSelectedAnswers([...selectedAnswers, answer]);
  };

  // console.log(filteredQuestions);
  console.log(selectedAnswers)
  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        filterQuestions,
        filteredQuestions,
        checkHandler,
        setSelectedAnswers,
        selectedAnswers,
        updateAnswers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext) as ContextType;
};
