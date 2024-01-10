import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./AppContext";
import CategorySelect from "./CategorySelect";
import { categoryData } from "./categoryData";

type categoryType = {
  id: string;
  name: string;
  value: string;
  label: string;
};

const Categories: React.FC = () => {
  const { categories, filterQuestions } = useGlobalContext();

  return (
    <div className="category">
      <p className="category__title">Select categories</p>
      <div className="category__checkbox">
        {categoryData.map((category: categoryType) => {
          return (
            <CategorySelect
              key={category.id}
              id={category.id}
              name={category.name}
              value={category.value}
              label={category.label}
            />
          );
        })}
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
