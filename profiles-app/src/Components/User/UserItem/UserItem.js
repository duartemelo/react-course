import React from "react";
import "./UserItem.css";

const UserItem = props => {
  return (
    <div className="user-item">
      <p>{props.name} ({props.age} years old)</p>
    </div>
  )
}

export default UserItem;