import React from "react";
import "./Error.css";
import Button from "../Button/Button";

const Error = (props) => {
  return (
    <div className="error-container">
      <div className="error-container__title-bar">
        <h3>{props.title}</h3>
      </div>
      <div className="error-container__message-bar"><p>{props.message}</p></div>
      <Button onClickFunction={props.closeError}>Close</Button>
    </div>
  )
};

export default Error;
