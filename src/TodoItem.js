import React from 'react';
import './item.css';
function TodoItem(props) {
    return(
        <>
        <div> 
            <li>
                <span className="okey" > ✅ </span>
                <p>{props.text}</p>
                <span className="basura">🗑️</span>
            </li>
            </div>    
        </>
    );
}

export { TodoItem }