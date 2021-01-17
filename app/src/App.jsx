import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialTodos = [
  {
    id: 1,
    title: "Task 1",
    description: "Description task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description task 2",
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleComplete = (todoId) => {
    const changedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(changedTodos);
  };

  const handleRemove = (todoId) => {
    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  return (
    <div className="app-container">
      <TodoForm />
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default App;
