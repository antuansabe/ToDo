import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';


/*
const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar', completed: true},
  ] */

function App() {

  const  localStorageTodos = localStorage.getItem('ÅTODOS_V1');
  
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse( localStorageTodos );
  }


  const [todos, setTodos] = useState(parsedTodos)
  const [search, setSearch] = useState('');
  const completedTodos = todos.filter( todo => !!todo.completed).length;
  const totalTodos = todos.length;


  

//Con esto filtraremos nuestros todos
  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);

    })
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };



  //Esta funcion buscara que texto coincide con el texto buscado 
  const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
  };

  //Esta funcion replica la anterior pero borrando todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
};
  return (
  <>
    <TodoCounter 
      total={ totalTodos}
      completed={ completedTodos }
    />
    <TodoSearch
      search={search}
      setSearch={setSearch}
    />
    
      
    <TodoList>
        { searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete= { () => completeTodo(todo.text)}
          onDelete= { () => deleteTodo(todo.text)}
          />
        ))}
    </TodoList>
    <CreateTodoButton />
      
      
  </>
  );
}

export default App;
