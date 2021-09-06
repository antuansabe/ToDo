import React from 'react';
import './TodoCounter.css';


function TodoCounter( {total, completed} ) {
   
    return (
        <>
            <div className="wrap">  
                <h2 className="h2__counter">What's Up Today! ✌ </h2>
                <p className="p__counter"> Has completado { completed } de {total} TODO's</p>
                
            </div>
        </>
    );
}

export { TodoCounter } ;