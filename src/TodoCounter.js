import React from 'react';
import './TodoCounter.css';


function TodoCounter() {
    return (
        <>
            <div className="wrap">  
                <h2 className="h2__counter">What's Up Today! ✌ </h2>
                <p className="p__counter"> Has completado 2 de 3 TODO's</p>
                <input className="input__counter" placeholder="Buscar Tareas" />
            </div>
        </>
    );
}

export { TodoCounter } ;