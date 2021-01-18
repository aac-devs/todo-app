import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, handleButtonRemove, handleButtonComplete, handleButtonEdit }) => {
  return (
    <div className="list">
      <h2 className='list__title'>To do list</h2>
      {todos &&
        todos.map((todo, index) => (
          <TodoCard
            key={index}
            todo={todo}
            handleButtonComplete={handleButtonComplete}
            handleButtonRemove={handleButtonRemove}
            handleButtonEdit={handleButtonEdit}
          />
        ))}
    </div>
  );
};

export default TodoList;
