import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList = (props) => {
  const setTodoAsDone = (id) => {
    props.setSomeTodoAsDone(id);
  };

  const filteredTodos = props.todos.filter((todo) => {
    return todo.status === false;
  });

  const conditionalRenderedTodos = () => {
    if (filteredTodos.length === 0) {
      return <p>All your tasks are done!</p>;
    }
    return (
      filteredTodos.length > 0 &&
      filteredTodos.map((todo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          status={todo.status}
          setTodoAsDone={setTodoAsDone}
        />
      ))
    );
  };

  return (
    <div className="todo-list-container">{conditionalRenderedTodos()}</div>
  );
};

export default ToDoList;
