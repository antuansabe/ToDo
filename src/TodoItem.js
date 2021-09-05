import React from 'react';
import './item.css';
function TodoItem(props) {

    const onComplete = () => {
        alert('Ya completaste ' + props.text);
    };

    const onDelete = () => {
        alert('Borraste el ' + props.text);
    };


    return(
        <> 
        <div> 
            <li>
                <span 
                className="okey"
                onClick= {onComplete}
                >
                    ✅ 
                </span>
                <p>{props.text}</p>
                <span
                className="basura"
                onDelete= {onDelete}
                >
                    🗑️
                </span>
            </li>
            </div>    
        </>
    );
}

export { TodoItem }