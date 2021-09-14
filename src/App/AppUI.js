import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { TodoEmpty } from "../TodoEmpty";


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    unCompleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <h1>TODO list 📗</h1>
      {!loading && !searchedTodos.length ? <TodoEmpty /> : <TodoCounter />}
      <TodoSearch />

      <TodoList>
        {error && <TodoError error={error} />}
        {loading && <TodoLoading />}

        {/*Si no estamos cargando y la info es vacía que haga el primer todo*/}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text);
            }}
            unComplete={() => {
              unCompleteTodo(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
      {/* //Abre el modal para hacer nuevos todos en un futuro */}

      <footer>
        <h2> Made by antuansabe </h2>
        <p className="contact">Contact</p>
        <div className="links">
          <a href="https://github.com/antuansabe" target="_blank" rel="noreferrer">
            <FaGithub size={40} />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export { AppUI };
