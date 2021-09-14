import React from "react";
import "./TodoItem.css";
import { TiDelete } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className={"TodoItem"}>
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} //Si recibe una propiedad llamada completed y es true entonces se agrega --active
        onClick={!props.completed ? props.onComplete : props.unComplete}
      >
        <FaCheckCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <TiDelete />
      </span>
    </li>
  );
}

export { TodoItem };
