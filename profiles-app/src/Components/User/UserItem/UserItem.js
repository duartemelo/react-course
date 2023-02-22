import React from "react";
import "./UserItem.css";

const UserItem = props => {
  return (
    <div className="user-item">
      <p>{props.children}</p>
    </div>
  )
}

export default UserItem;