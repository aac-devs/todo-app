import React from "react";

const TodoCard = ({
  todo,
  handleButtonEdit,
  handleButtonComplete,
  handleButtonRemove,
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <h2>{todo.title}</h2>
        <button
          className={`button card__button-${
            todo.completed ? "uncomplete" : "complete"
          }`}
          onClick={() => handleButtonComplete(todo.id)}
        >
          {todo.completed ? "completed" : "uncomplete"}
        </button>
      </div>
      <p>{todo.description}</p>
      <hr></hr>
      <div className="card__buttons">
        <button
          className="button card__button-edit"
          onClick={() => handleButtonEdit(todo.id)}
        >
          Edit
        </button>
        <button
          className="button card__button-remove"
          onClick={() => handleButtonRemove(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
