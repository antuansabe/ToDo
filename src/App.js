import React, { useState } from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';



const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar', completed: true},
]

function App() {

  const [todos, setTodos] = useState(defaultTodos)
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

  //Esta funcion buscara que texto coincide con el texto buscado 
  const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
  };

  //Esta funcion replica la anterior pero borrando todos
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
