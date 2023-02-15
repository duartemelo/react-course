import React, {useState} from "react";

const ToDoForm = (props) => {
  const [todoText, setTodoText] = useState('');



  const onSubmitHandler = (event) => {
    event.preventDefault();
    const todo = {
      id: props.maxId+1,
      text: todoText,
      status: false
    };
    props.onAddTodo(todo);
    console.log(todo);
  }

  const onChangeText = (event) => {
    setTodoText(event.target.value);
  }


  return (
    <form onSubmit={onSubmitHandler}>
      <label>Text</label>
      <input type="text" value={todoText} onChange={onChangeText}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ToDoForm;
