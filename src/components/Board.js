import React from 'react';
import Button from './Button';

const Board = (props) => {
  return (
    <div className={props.class}>
      {props.squares.map((square, id) => (
        <Button
          class='square'
          key={id}
          value={square}
          onClick={() => props.onClick(id)}
        />
      ))}
    </div>
  )
};

export default Board;