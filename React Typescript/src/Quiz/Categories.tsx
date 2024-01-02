import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./AppContext";

const Categories: React.FC = () => {
  const { categories, setCategories, filterQuestions } = useGlobalContext();

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      // Update the type of the context variable
      setCategories([...categories, value]);
    } else {
      // Update the type of the context variable
      setCategories(
        categories.filter((category: string) => category !== value)
      );
    }
  };

  return (
    <div className="category">
      <p className="category__title">Select categories</p>
      <div className="category__checkbox">
        <div className="category__checkbox__item">
          <input
            type="checkbox"
            id="tech"
            name="tech"
            value="tech"
            onChange={checkHandler}
            checked={categories.includes("tech")}
          />
          <label htmlFor="tech">Technology and Science</label>
        </div>
        <div className="category__checkbox__item">
          <input
            type="checkbox"
            id="history"
            name="history"
            value="history"
            onChange={checkHandler}
            checked={categories.includes("history")}
          />
          <label htmlFor="history">History</label>
        </div>
        <div className="category__checkbox__item">
          <input
            type="checkbox"
            id="geography"
            name="geography"
            value="geography"
            onChange={checkHandler}
            checked={categories.includes("geography")}
          />
          <label htmlFor="geography">Geography</label>
        </div>
        <div className="category__checkbox__item">
          <input
            type="checkbox"
            id="sports"
            name="sports"
            value="sports"
            onChange={checkHandler}
            checked={categories.includes("sports")}
          />
          <label htmlFor="sports">Sports</label>
        </div>
      </div>

      <Link to="/quiz">
        <button onClick={filterQuestions} disabled={categories.length === 0}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default Categories;
