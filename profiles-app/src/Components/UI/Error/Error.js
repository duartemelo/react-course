import React from "react";
import "./Error.css";
import Button from "../Button/Button";

const Error = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.closeError}></div>
      <div className="error-container">
        <div className="error-container__title-bar">
          <h3>{props.title}</h3>
        </div>
        <div className="error-container__message-bar">
          <p>{props.message}</p>
        </div>
        <Button onClick={props.closeError}>Close</Button>
      </div>
    </div>
  );
};

export default Error;
