import React, { useState, Fragment } from "react";
import "./App.css";
import Card from "./Components/UI/Card/Card";
import UserForm from "./Components/User/UserForm/UserForm";
import UserList from "./Components/User/UserList/UserList";
import Error from "./Components/UI/ErrorModal/ErrorModal";

const DUMMY_USERS = [
  {
    id: 1,
    name: "Max",
    age: 31,
  },
  {
    id: 2,
    name: "Duarte",
    age: 21,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);
  const [error, setError] = useState({
    status: false,
    title: "",
    message: "",
  });

  const addUser = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  const setErrorHandler = (title, message) => {
    setError((prevError) => {
      const newError = { ...error };
      newError.status = true;
      newError.title = title;
      newError.message = message;
      return newError;
    });
  };

  const closeErrorHandler = () => {
    setError((prevError) => {
      const newError = { ...error };
      newError.status = false;
      newError.title = "";
      newError.message = "";
      return newError;
    });
  };

  return (
    <Fragment>
      <Card>
        <UserForm onAddUser={addUser} setError={setErrorHandler} />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
      {error.status && (
        <Error
          title={error.title}
          message={error.message}
          closeError={closeErrorHandler}
        />
      )}
    </Fragment>
  );
}

export default App;
