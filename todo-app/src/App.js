import React, {useState} from 'react';
import './App.css';
import ToDoList from './Components/ToDo/ToDoList';

const DUMMY_TODOS = [
  {
    id: 1,
    text: 'Some To-Do',
    status: false
  },
  {
    id: 2,
    text: 'Another To-Do',
    status: false
  },
  {
    id: 3,
    text: 'And a third one',
    status: false
  },
]

function App() {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const setSomeTodoAsDone = (id) => {
    const newTodos = todos.map(todo => { // copying the original state to a new one
      if (todo.id === id){ 
        return {...todo, status: true}; // if the id is same as received as param
      }
      return todo; // if not, just return it how it was
    });

    setTodos(newTodos); // set the Todos to the "new"/update TodoList
  }

  return (
    <div className="App">
      <h1>My To-do List</h1>
      <ToDoList todos={todos} setSomeTodoAsDone={setSomeTodoAsDone}/>
    </div>
  );
}

export default App;
