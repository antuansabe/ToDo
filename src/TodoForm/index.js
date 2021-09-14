import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //Nos permite enviar el formulario sin recargar la página
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new task</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Write here the task you want to complete"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
          disabled={!newTodoValue}
        >
          Add
        </button>
      </div>
    </form>
  );
}
//textArea para que el espacio no sea tan pequeño, y si se pasan que aumente
export { TodoForm };
