import React from 'react';

const Button = (props) => (
  <button
    className={props.class}
    onClick={props.onClick}>
    {props.value}
  </button>
);

export default Button;