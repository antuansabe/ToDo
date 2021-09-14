import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider (props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    
    
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
    
    // Esta funcion es para añadit un todo
    
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
        completed: false,
        text,
    }); 
        saveTodos(newTodos);
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
        <TodoContext.provider value={ { 
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            saveTodos,
            
        }} >
        {props.childen}

        </TodoContext.provider>
    );
}

    export { TodoContext, TodoProvider };