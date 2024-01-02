import { createContext, useContext, useState } from "react";
import { getFilteredQuestions } from "./filterQuestions";

type ContextType = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  filterQuestions: () => void;
  filteredQuestions: question[];
};

type question = {
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
};

const AppContext = createContext<ContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<question[]>([]);

  const filterQuestions = () => {
    const filteredQuestions: question[] = getFilteredQuestions(categories);
    setFilteredQuestions(filteredQuestions);
  };

//   console.log(filteredQuestions);
  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        filterQuestions,
        filteredQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext) as ContextType;
};
