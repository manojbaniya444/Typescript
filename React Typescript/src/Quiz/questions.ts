type question = {
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
};

export const questions: question[] = [
  // ?tech category
  {
    question: "What is the most popular programming language in 2020?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2019?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2018?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2017?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2016?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2015?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2014?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2013?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2012?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "Java",
    category: "tech",
  },
  {
    question: "What is the most popular programming language in 2011?",
    answers: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "Java",
    category: "tech",
  },
  // ?Geography
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    category: "geography",
  },
  {
    question: "How many countries are there in the world?",
    answers: ["201", "191", "187", "196"],
    correctAnswer: "196",
    category: "geography",
  },
  {
    question: "How many states are there in the United States?",
    answers: ["51", "50", "49", "48"],
    correctAnswer: "50",
    category: "geography",
  },
  {
    question: "What is the largest country in the world?",
    answers: ["Russia", "Canada", "China", "United States"],
    correctAnswer: "Russia",
    category: "geography",
  },
  {
    question: "What is the largest ocean in the world?",
    answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correctAnswer: "Pacific",
    category: "geography",
  },
  {
    question: "What is the largest planet in the solar system?",
    answers: ["Jupiter", "Saturn", "Earth", "Mars"],
    correctAnswer: "Jupiter",
    category: "geography",
  },
  {
    question: "What is the largest animal in the world?",
    answers: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
    category: "geography",
  },
  {
    question: "What is the largest animal on land?",
    answers: ["Elephant", "Giraffe", "Hippopotamus", "Blue Whale"],
    correctAnswer: "Elephant",
    category: "geography",
  },
  {
    question: "What is the capital of the United States?",
    answers: ["Washington D.C.", "New York", "Los Angeles", "Chicago"],
    correctAnswer: "Washington D.C.",
    category: "geography",
  },
  {
    question: "What is the capital of the United Kingdom?",
    answers: ["London", "Manchester", "Liverpool", "Birmingham"],
    correctAnswer: "London",
    category: "geography",
  },
  {
    // sports category
    question: "What is the most popular sport in the world?",
    answers: ["Soccer", "Basketball", "Baseball", "Football"],
    correctAnswer: "Soccer",
    category: "sports",
  },
  {
    question: "What is the most popular sport in the United States?",
    answers: ["Football", "Basketball", "Baseball", "Soccer"],
    correctAnswer: "Football",
    category: "sports",
  },
  {
    question: "What is the most popular sport in China?",
    answers: ["Basketball", "Soccer", "Table Tennis", "Badminton"],
    correctAnswer: "Table Tennis",
    category: "sports",
  },
  {
    question: "What is the most popular sport in Japan?",
    answers: ["Baseball", "Soccer", "Basketball", "Tennis"],
    correctAnswer: "Baseball",
    category: "sports",
  },
  {
    question: "What is the most popular sport in India?",
    answers: ["Cricket", "Soccer", "Basketball", "Tennis"],
    correctAnswer: "Cricket",
    category: "sports",
  },
  {
    question: "What is the most popular sport in Brazil?",
    answers: ["Soccer", "Basketball", "Volleyball", "Tennis"],
    correctAnswer: "Soccer",
    category: "sports",
  },
  {
    question: "What is the most popular sport in the UK?",
    answers: ["Soccer", "Basketball", "Cricket", "Tennis"],
    correctAnswer: "Soccer",
    category: "sports",
  },
  {
    question: "What is the most popular sport in Germany?",
    answers: ["Soccer", "Basketball", "Handball", "Tennis"],
    correctAnswer: "Soccer",
    category: "sports",
  },
  {
    question: "What is the most popular sport in France?",
    answers: ["Soccer", "Basketball", "Handball", "Tennis"],
    correctAnswer: "Soccer",
    category: "sports",
  },
  {
    question: "What is the most popular sport in Spain?",
    answers: ["Soccer", "Basketball", "Tennis", "Handball"],
    correctAnswer: "Soccer",
    category: "sports",
  },
  // history category
  {
    question: "What year was the first iPhone released?",
    answers: ["2005", "2006", "2007", "2008"],
    correctAnswer: "2007",
    category: "history",
  },
  {
    question: "What year was the first iPad released?",
    answers: ["2009", "2010", "2011", "2012"],
    correctAnswer: "2010",
    category: "history",
  },
  {
    question: "What year was the first MacBook released?",
    answers: ["2005", "2006", "2007", "2008"],
    correctAnswer: "2006",
    category: "history",
  },
  {
    question: "What year was the first Apple Watch released?",
    answers: ["2013", "2014", "2015", "2016"],
    correctAnswer: "2015",
    category: "history",
  },
  {
    question: "What year was the first Tesla car released?",
    answers: ["2005", "2006", "2007", "2008"],
    correctAnswer: "2008",
    category: "history",
  },
  {
    question: "What year was the first Tesla Model S released?",
    answers: ["2010", "2011", "2012", "2013"],
    correctAnswer: "2012",
    category: "history",
  },
  {
    question: "What year was the first Tesla Model 3 released?",
    answers: ["2015", "2016", "2017", "2018"],
    correctAnswer: "2017",
    category: "history",
  },
  {
    question: "What year was the first Tesla Model X released?",
    answers: ["2013", "2014", "2015", "2016"],
    correctAnswer: "2015",
    category: "history",
  },
  {
    question: "What year was the first Tesla Model Y released?",
    answers: ["2018", "2019", "2020", "2021"],
    correctAnswer: "2020",
    category: "history",
  },
  {
    question: "What year was the first Tesla Roadster released?",
    answers: ["2005", "2006", "2007", "2008"],
    correctAnswer: "2008",
    category: "history",
  },
];
