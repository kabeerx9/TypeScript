import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prev) => {
      return [newTodo, ...prev];
    });
  };

  const removeTodoHandler = (todoId: string) => {
    console.log(todoId);
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
