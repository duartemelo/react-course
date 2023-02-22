import React, { useRef } from "react";
import "./UserForm.css";
import Button from "../../UI/Button/Button";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const setError = (errorTitle, errorMessage) => {
    props.setError(errorTitle, errorMessage);
  };

  const userAddHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      // Enviar erro para ecrã a dizer que os campos têm de estar preenchidos
      setError("Invalid fields", "Please insert non-null fields.");
      return;
    }

    if (+enteredAge < 0) {
      // o + força q seja convertido para numero, ou parseInt(age)
      setError("Invalid age", "Please insert a valid age.");
      return;
    }

    const user = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    //console.log(user);
    props.onAddUser(user);
    nameInputRef.current.value = ""; // rarely do this!
    ageInputRef.current.value = ""; // rarely do this!
  };

  return (
    <form className="user-form" onSubmit={userAddHandler}>
      <label>Name</label>
      <input
        type="text"
        ref={nameInputRef}
      />
      <label className="mt-10">Age</label>
      <input
        type="number"
        ref={ageInputRef}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
