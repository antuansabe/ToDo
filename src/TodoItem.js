import React from 'react';
import './item.css';
function TodoItem(props) {
    return(
        <>
        <div> 
            <li>
                <span> Completado </span>
                <p>{props.text}</p>
                <span>Nariz</span>
            </li>
            </div>    
        </>
    );
}

export { TodoItem }