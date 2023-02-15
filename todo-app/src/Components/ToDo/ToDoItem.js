import React from "react";

const ToDoItem = (props) => {
  const setAsDoneButtonHandler = () => {
    props.setTodoAsDone(props.id);
  }

  return <div>
    <h3>{props.text}</h3>
    <button onClick={setAsDoneButtonHandler}>Set as done</button>
    </div>
}

export default ToDoItem;