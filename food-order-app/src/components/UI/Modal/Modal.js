import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
        {props.children}
    </div>
   
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          children={props.children}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Error;
