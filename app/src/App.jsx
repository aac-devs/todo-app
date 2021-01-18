import React, { useEffect, useState } from "react";
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

const initialFields = {
  title: "",
  description: "",
};

const localTodos = JSON.parse(localStorage.getItem("todos"));

const App = () => {
  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoFields, setTodoFields] = useState(initialFields);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    if (todoFields.id === todoId) {
      setTodoFields(initialFields);
    }
  };

  const handleButtonEdit = (todoId) => {
    const changeFields = todos.filter((todo) => todo.id === todoId);
    setTodoFields(changeFields[0]);
  };

  // Form buttons:
  const handleAddEdit = (e) => {
    e.preventDefault();

    if (todoFields.title.trim() === "") {
      setError(`Title can't be null`);
      setTimeout(() => {
        setError(null);
      }, 1500);
      return;
    }
    if (todoFields.description.trim() === "") {
      setError(`Description can't be null`);
      setTimeout(() => {
        setError(null);
      }, 1500);
      return;
    }

    if (todoFields.id) {
      const changeTodos = todos.map((todo) =>
        todo.id === todoFields.id ? todoFields : todo
      );
      setSuccess("Todo updated successfully.");
      setTodos(changeTodos);
    } else {
      const newTodo = { ...todoFields, id: Date.now(), completed: false };
      setSuccess("Todo add successfully.");
      setTodos([newTodo, ...todos]);
    }
    setTodoFields(initialFields);
    setTimeout(() => {
      setSuccess(null);
    }, 1500);
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
        error={error}
        success={success}
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
