import React from "react";

const TodoForm = ({
  todo,
  changeTodoForm,
  handleAddEdit,
  cancelEditTodo,
  error,
  success,
}) => {
  return (
    <div className="form__container">
      <h2 className="form__title">{todo.id ? "Edit to do" : "New to do"}</h2>
      {todo.id && (
        <button className="button form__button-cancel" onClick={cancelEditTodo}>
          Cancel edit
        </button>
      )}
      <form className="form" onSubmit={handleAddEdit}>
        <input
          className="form__todo-title"
          name="title"
          onChange={changeTodoForm}
          placeholder="Title"
          type="text"
          value={todo.title}
        />
        <textarea
          className="form__todo-description"
          name="description"
          onChange={changeTodoForm}
          placeholder="Description"
          type="text"
          value={todo.description}
        />
        <input
          className="button form__submit"
          type="submit"
          value={todo.id ? "Update to do" : "New to do"}
        />
      </form>
      {error && <p className='form__error'>{error}</p>}
      {success && <p className='form__success'>{success}</p>}
    </div>
  );
};

export default TodoForm;
