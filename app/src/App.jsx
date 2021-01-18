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
  {
    id: 3,
    title: "Task 3",
    description: "Description task 3",
    completed: true,
  },
  {
    id: 4,
    title: "Task 4",
    description: "Description task 4",
    completed: true,
  },
  {
    id: 5,
    title: "Task 5",
    description: "Description task 5",
    completed: true,
  },
];

const initialFields = {
  title: "",
  description: "",
};

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [todoFields, setTodoFields] = useState(initialFields);

  // Card buttons:
  const handleButtonComplete = (todoId) => {
    const changeComplete = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(changeComplete);
  };

  const handleButtonRemove = (todoId) => {
    const changeTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changeTodos);
  };

  const handleButtonEdit = (todoId) => {
    const changeFields = todos.filter((todo) => todo.id === todoId);
    setTodoFields(changeFields[0]);
  };

  // Form buttons:
  const handleAddEdit = (e) => {
    e.preventDefault();
    if (todoFields.id) {
      const changeTodos = todos.map((todo) =>
        todo.id === todoFields.id ? todoFields : todo
      );
      setTodos(changeTodos);
    } else {
      const newTodo = { ...todoFields, id: Date.now(), completed: false };
      setTodos([newTodo, ...todos]);
    }
    setTodoFields(initialFields);
  };

  const cancelEditTodo = () => {
    setTodoFields(initialFields);
  };

  // Form inputs:
  const changeTodoForm = (e) => {
    setTodoFields({ ...todoFields, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-container">
      <TodoForm
        todo={todoFields}
        changeTodoForm={changeTodoForm}
        handleAddEdit={handleAddEdit}
        cancelEditTodo={cancelEditTodo}
      />
      <TodoList
        todos={todos}
        handleButtonComplete={handleButtonComplete}
        handleButtonRemove={handleButtonRemove}
        handleButtonEdit={handleButtonEdit}
      />
    </div>
  );
};

export default App;
