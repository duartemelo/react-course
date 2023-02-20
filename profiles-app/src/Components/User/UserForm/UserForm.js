import React, {useState} from "react";
import "./UserForm.css";
import Button from "../../UI/Button/Button";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onChangeName = event => {
    setName(event.target.value);
  }

  const onChangeAge = event => {
    setAge(event.target.value);
  }

  const setError = (errorTitle, errorMessage) => {
    props.setError(errorTitle, errorMessage);
  }

  const userAddHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0){
      // Enviar erro para ecrã a dizer que os campos têm de estar preenchidos
      setError("Invalid fields", "Please insert non-null fields.");
      return;
    }

    if (parseInt(age) < 0){
      setError("Invalid age", "Please insert a valid age.");
      return;
    }

    
    const user = {
      name: name,
      age: age
    }
    //console.log(user);
    props.onAddUser(user);
    setName("");
    setAge("");
  }


  return (
    <form className="user-form" onSubmit={userAddHandler}>
      <label>Name</label>
      <input type="text" onChange={onChangeName} value={name} />
      <label className="mt-10">Age</label>
      <input type="number" onChange={onChangeAge} value={age}/>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
