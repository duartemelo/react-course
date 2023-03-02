import React from "react";
import "./TodoItem.css";

const ToDoItem = (props) => {
  const setAsDoneClickHandler = () => {
    props.setTodoAsDone(props.id);
  };

  return (
    <div className="todo-item" onClick={setAsDoneClickHandler}>
      <p>{props.text}</p>
    </div>
  );
};

export default ToDoItem;
