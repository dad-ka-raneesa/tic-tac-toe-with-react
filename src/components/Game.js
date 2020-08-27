import React from 'react';
import { calculateWinner } from '../calculateWinner';
import Board from './Board';
import Button from './Button';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: { name: 'Player1', symbol: 'X' },
      nextPlayer: { name: 'Player2', symbol: 'O' },
      isDraw: false,
      winner: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  handleChange(id) {
    const board = this.state.board.slice();
    board[id] = this.state.currentPlayer.symbol;

    this.setState(({ currentPlayer, nextPlayer }) => ({
      board: board,
      currentPlayer: nextPlayer,
      nextPlayer: currentPlayer,
      isDraw: board.every((value) => value),
      winner: calculateWinner(board, currentPlayer)
    }));
  };

  restartGame() {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: { name: 'Player1', symbol: 'X' },
      nextPlayer: { name: 'Player2', symbol: 'O' },
      isDraw: false,
      winner: null
    })
  }

  getStatus() {
    const { currentPlayer, isDraw, winner } = this.state;
    let gameStatus = `${currentPlayer.name}'s Turn`;
    isDraw && (gameStatus = 'Game Draw!');
    winner && (gameStatus = `${winner.name} won!`)
    return gameStatus;
  }

  render() {
    const { isDraw, winner, currentPlayer, board } = this.state;
    const status = { isDraw, winner };

    return (
      <div style={{ margin: '20px' }}>
        <h1> Tic Tac Toe </h1>
        <Board class='board' status={status} currentPlayer={currentPlayer} tiles={board} onClick={this.handleChange} />
        <h3>{this.getStatus()}</h3>
        <Button value='Start New Game' onClick={this.restartGame} />
      </div>
    );
  }
}

export default Game;