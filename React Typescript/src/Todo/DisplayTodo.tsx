import React from "react";

// ?Type of Todo
type Todo = {
  text: string;
  completed: boolean;
};

// ?Defining the interface prop
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const DisplayTodo = ({ todos, setTodos }: props) => {
  // ?Delete todo handler
  const deleteTodoHandler = (index: number): void => {
    const filteredTodos = todos.filter(
      (_item: Todo, id: number) => index !== id
    );
    setTodos(filteredTodos);
  };

  // ?Mark completed todo handler
  const markCompletedHandler = (index: number): void => {
    const updatedTodos = todos.map((item: Todo, id: number): Todo => {
      if (index === id) {
        return {
          ...item,
          completed: true,
        };
      } else {
        return item;
      }
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h2 className="title">Your Todos</h2>
      <div className="display-todo">
        {todos.map((item: Todo, index: number): any => {
          return (
            <div className="single-todo" key={index}>
              <p className={`${item.completed ? "completed-todo" : ""}`}>
                {item.text}
              </p>
              <div className="btns">
                <button onClick={() => deleteTodoHandler(index)}>Delete</button>
                <button onClick={() => markCompletedHandler(index)}>
                  Mark Completed
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayTodo;
