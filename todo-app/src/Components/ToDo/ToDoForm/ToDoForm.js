import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter task" value={todoText} onChange={onChangeText}/>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ToDoForm;
