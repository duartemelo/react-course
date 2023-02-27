import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={props.classNames.map(rcvdClass => classes[rcvdClass]).join(" ")}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
