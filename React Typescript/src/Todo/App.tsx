import { useState } from "react";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
import "./todo.css";

// types for todo
type Todo = {
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  // ?States and logic goes here
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  // ?States and logic ends here
  return (
    <main>
      <h1 className="title">Todo App</h1>
      <AddTodo setNewTodo={setNewTodo} setTodos={setTodos} newTodo={newTodo} />
      <DisplayTodo todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default App;
