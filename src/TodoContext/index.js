import React from "react";
import { useLocalStorage } from "./useLocalStorage";
//Aqui hay dos componentes, todoContext.provider (para envolver la app) y .consumer (cuando necesitemos la info)
const TodoContext = React.createContext();

//Creamos un puente para compartir la info
function TodoProvider(props) {
  const {
    item: todos, //Para renombrar
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos_v1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  // Cada vez que cambien los todos se realizará la cuenta "!!" si es true
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //TODO state

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      completed: false,
      text: text,
    });

    saveTodos(newTodos);
    // todos[todoIndex] = {text: todos[todoIndex].text, completed:true}
  };
  const completeTodo = (text) => {
    //Recibe el identificador del todo
    const todoIndex = todos.findIndex((todo) => todo.text === text); //Compara los todos con el texto que recibimos

    //Creamos una nueva lista con los cambios hechos para que se actualice
    const newTodos = [...todos]; //Primero se le ponen todos los que tenia antes
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    // todos[todoIndex] = {text: todos[todoIndex].text, completed:true}
  };

  const unCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = false;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    //Recibe el identificador del todo
    const todoIndex = todos.findIndex((todo) => todo.text === text); //Compara los todos con el texto que recibimos

    //Creamos una nueva lista con los cambios hechos para que se actualice
    const newTodos = [...todos]; //Primero se le ponen todos los que tenia antes
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    // todos[todoIndex] = {text: todos[todoIndex].text, completed:true}
  };

  return (
    //envuelve toda la app, tiene por dentro cualquier componente donde llamemos al consumer
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        unCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
