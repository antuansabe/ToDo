import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {

    const onClickButton = (msg) => {
        alert(msg);
    }


    return(
        <button
        onClick= {() => onClickButton('OH SHIT!')}
        >
            Agregar Tarea 
        </button>
    );
}

export { CreateTodoButton }

//Cualquier evento recibe sí o sí una función
// Necesitamos envolver el evento en una funcion 
//para que cuando suceda el evento se ejecute y no antes.