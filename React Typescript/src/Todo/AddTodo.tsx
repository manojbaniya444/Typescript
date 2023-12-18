import React from "react";

// ?Type for todo
type Todo = {
  text: string;
  completed: boolean;
};

// ?interface props for this component
interface props {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AddTodo: React.FC<props> = ({ newTodo, setNewTodo, setTodos }) => {
  // ?Logic goes here for this component
  const submitTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent the default behaviour of the form submit
    e.preventDefault();
    setTodos((prevTodos: Todo[]) => [
      ...prevTodos,
      { text: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  // ?Logic ends here
  return (
    <div className="add-todo">
      <form onSubmit={submitTodoHandler}>
        <input
          className="todo-input"
          type="text"
          placeholder="Enter new Todo"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
