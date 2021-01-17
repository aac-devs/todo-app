import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleComplete, handleRemove }) => {
  return (
    <div className="list-container">
      {todos &&
        todos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            handleComplete={handleComplete}
            handleRemove={handleRemove}
          />
        ))}
    </div>
  );
};

export default TodoList;
