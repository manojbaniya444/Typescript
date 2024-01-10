import { useGlobalContext } from "./AppContext";

interface Props {
  id: string;
  name: string;
  value: string;
  label: string;
}

const CategorySelect = ({ id, name, value, label }: Props) => {
  const { categories, checkHandler } = useGlobalContext();
  return (
    <div className="category__checkbox__item">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={checkHandler}
        checked={categories.includes(id)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CategorySelect;
