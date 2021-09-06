import React from 'react';
import './item.css';


function TodoItem(props) {

    return(
        <> 
        <div> 
            <li>
                <span 
                className="okey"
                onClick= {props.onComplete}
                >
                    ✅ 
                </span>
                <p>{props.text}</p>
                <span
                className="basura"
                onClick= {props.onDelete}
                >
                    🗑️
                </span>
            </li>
            </div>    
        </>
    );
}

export { TodoItem }