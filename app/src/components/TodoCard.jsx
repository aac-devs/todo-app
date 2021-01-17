import React from "react";

const TodoCard = ({ todo, handleComplete, handleRemove }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h2>{todo.title}</h2>
        <button
          className={`button card__button-${
            todo.completed ? "uncomplete" : "complete"
          }`}
          onClick={() => handleComplete(todo.id)}
        >
          {todo.completed ? "completed" : "uncomplete"}
        </button>
      </div>
      <p>{todo.description}</p>
      <hr></hr>
      <div className="card__buttons">
        <button className="button card__button-edit">Edit</button>
        <button
          className="button card__button-remove"
          onClick={() => handleRemove(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
