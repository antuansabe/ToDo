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
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
        <h2> Made by Jπ </h2>
        <p className="contact">Contact</p>
        <div className="links">
          <a href="https://github.com/PabloJL" target="_blank" rel="noreferrer">
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-pablo-jim%C3%A9nez-l%C3%B3pez-2590a1165/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.instagram.com/juan_pablo78/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={40} />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export { AppUI };
