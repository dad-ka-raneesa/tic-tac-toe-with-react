import React from 'react';
import { calculateWinner } from '../calculateWinner';
import Board from './Board';
import Button from './Button';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player1IsNext: true,
      winner: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  handleChange(id) {
    const board = [...this.state.board];
    if (this.state.winner || board[id]) return;
    board[id] = this.state.player1IsNext ? 'X' : 'O';
    this.setState({
      board: board,
      player1IsNext: !this.state.player1IsNext,
      winner: calculateWinner(board)
    });
  };

  restartGame() {
    this.setState({
      board: Array(9).fill(null),
      player1IsNext: true,
      winner: null
    })
  }

  getStatus() {
    const isFilled = this.state.board.every((name) => name);
    if (isFilled) {
      return 'Game Draw';
    }
    if (this.state.winner) {
      return `Winner: ${this.state.winner}`;
    }
    return `Next player: ${this.state.player1IsNext ? 'X' : 'O'}`
  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <h1> Tic Tac Toe </h1>
        <Board class='board' squares={this.state.board} onClick={this.handleChange} />
        <p>{this.getStatus()}</p>
        <Button value='Start Game' onClick={this.restartGame} />
      </div>
    );
  }
}

export default Game;