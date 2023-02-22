import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import Button from "../Button/Button";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.closeError}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="error-container">
      <div className="error-container__title-bar">
        <h3>{props.title}</h3>
      </div>
      <div className="error-container__message-bar">
        <p>{props.message}</p>
      </div>
      <Button onClick={props.closeError}>Close</Button>
    </div>
  );
};

const Error = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeError={props.closeError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          closeError={props.closeError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Error;
