import React from "react";
import Categories from "./Categories";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Quiz from "./Quiz";

const App: React.FC = () => {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <h1 className="title">Quiz app</h1>
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default App;
