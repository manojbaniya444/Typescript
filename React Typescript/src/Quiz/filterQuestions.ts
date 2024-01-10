import { questions } from "./questions";
type question = {
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
  id: string;
};

export const getFilteredQuestions = (categories: string[]): question[] => {
  const fileteredQuestions = questions.filter((question) =>
    categories.includes(question.category)
  );

  return fileteredQuestions;
};
