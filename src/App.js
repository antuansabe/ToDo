import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';



const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de intro a React', completed: false},
  { text: 'Llorar', completed: false},
  
]

function App() {
  return (
  <>
    <TodoCounter />
    <TodoSearch />
    
      
    <TodoList>
        { todos.map(todo => (
        <TodoItem 
        key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
    </TodoList>
    <CreateTodoButton />
      
      
  </>
  );
}

export default App;
