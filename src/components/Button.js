import React from 'react';

const Button = (props) => (
  <button
    className={props.class}
    disabled={props.disabled}
    onClick={props.onClick}>
    {props.value}
  </button>
);

export default Button;