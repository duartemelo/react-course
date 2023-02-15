import React from "react";
import "./TodoItem.css";

const ToDoItem = (props) => {
  const setAsDoneButtonHandler = () => {
    props.setTodoAsDone(props.id);
  };

  return (
    <div className="todo-item">
      <h3>{props.text}</h3>
      <button onClick={setAsDoneButtonHandler}>Set as done</button>
    </div>
  );
};

export default ToDoItem;
