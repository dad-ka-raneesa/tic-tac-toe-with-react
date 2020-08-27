import React from 'react';

const Status = (props) => {
  const { currentPlayer, status } = props;
  let gameStatus = `${currentPlayer.name}'s Turn`;
  status.isDraw && (gameStatus = 'Game Draw!');
  status.winner && (gameStatus = `${status.winner.name} won!`)
  return <h3>{gameStatus}</h3>
}

export default Status;