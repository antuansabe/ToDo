import React from 'react';
import './list.css';

function TodoList(props) {
    return (
        <section className="section__list">
            {props.children}
        </section>
    );
}

export { TodoList } ;