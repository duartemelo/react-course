import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const setTodoAsDone = (id) => {
    props.setSomeTodoAsDone(id);
  }

  const filteredTodos = props.todos.filter((todo) => {
    return todo.status === false;
  })

  return (
    <div>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} id={todo.id} text={todo.text} status={todo.status} setTodoAsDone={setTodoAsDone} />
      ))}
    </div>
  );
};

export default ToDoList;
