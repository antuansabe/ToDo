import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      You have completed {completedTodos} out of {totalTodos} tasks
    </h2>
  );
}

export { TodoCounter };
// Para evitar usar nombres que no son al momento de exportar usamos ⬆
