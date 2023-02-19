import React from "react";
import "./TodoItem.css";

const ToDoItem = (props) => {
  const setAsDoneClickHandler = () => {
    props.setTodoAsDone(props.id);
  };

  return (
    <div className="todo-item" onClick={setAsDoneClickHandler}>
      <h3>{props.text}</h3>
    </div>
  );
};

export default ToDoItem;
