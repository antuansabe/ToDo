import React, { useState,useContext } from 'react';
import { TodoContext } from '../TodoContext/index';

function TodoForm() {
    
    const [ newTodoValue, setNewTodoValue ] = useState('');

    const {
        addTodo,
    } = useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    };

    const onCancel = () => {
        //TODO
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }


return (
    <form onSubmit={ onSubmit }>
        <label>
            ...
        </label>
        <textarea
            value={newTodoValue}
            onChange={ onChange }
            placeholder="Cortar cortar cortar"
        />
        <div>
            <button
                type="submit"
                onClick={onSubmit}
            >
                Añadir
            </button>

            <button
            type="button"
            onClick={onCancel}
            >
                Cancelar
            </button>
        </div>
        
    </form>
);

}

export { TodoForm };