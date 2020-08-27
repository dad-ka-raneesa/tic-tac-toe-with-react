import React from 'react';
import Button from './Button';

const Board = (props) => {
  return (
    <div className={props.class}>
      {props.tiles.map((value, id) => (
        <Button
          class='tile'
          disabled={props.status.winner || value}
          key={id}
          value={value}
          onClick={() => props.onClick(id)}
        />
      ))}
    </div>
  )
};

export default Board;