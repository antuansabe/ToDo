import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
    

    return(
        <button
        className="CreateTodoButton"
        onClick= {onClickButton}
        >
            Agregar Tarea 
        </button>
    );
}

export { CreateTodoButton }

//Cualquier evento recibe sí o sí una función
// Necesitamos envolver el evento en una funcion 
//para que cuando suceda el evento se ejecute y no antes.