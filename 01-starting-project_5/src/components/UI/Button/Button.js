import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button); // ele dá re-render igual porque o app volta a dar render
// o q quer dizer q a função é passada de novo nos props
