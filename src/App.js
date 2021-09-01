import React from 'react';
import { TodoCounter } from './TodoCounter';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar', completed: false},
  
]

function App() {
  return (
  <>
    <TodoCounter />
      <h2> Has completado 2 de 3 ToDos</h2>
    <TodoSearch />
      <input placeholder="Cebolla" />
    <TodoList>
        { todos.map(todo => (
        <TodoItem />
        ) )}
    </TodoList>
    <CreateTodoButton />
      <button>
        +
      </button>
      
  </>
  );
}

export default App;
