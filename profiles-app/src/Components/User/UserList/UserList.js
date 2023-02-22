import React from "react";
import UserItem from "../UserItem/UserItem";

const UserList = props => {
  const users = props.users;

  const renderedUsers = users.map((user) => 
  <UserItem key={user.id} id={user.id}>
    {user.name} ({user.age} years old).
  </UserItem>
  );

  return (
    <div>
      {renderedUsers}
    </div>
    
  )
}

export default UserList;