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
      winner: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  handleChange(id) {
    const board = this.state.board.slice();
    if (this.state.winner || board[id]) return;
    board[id] = this.state.currentPlayer.symbol;
    this.setState({
      board: board,
      currentPlayer: this.state.nextPlayer,
      nextPlayer: this.state.currentPlayer,
      winner: calculateWinner(board)
    });
  };

  restartGame() {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: { name: 'Player1', symbol: 'X' },
      nextPlayer: { name: 'Player2', symbol: 'O' },
      winner: null
    })
  }

  getStatus() {
    const isFilled = this.state.board.every((name) => name);
    if (isFilled) {
      return 'Game Draw';
    }
    if (this.state.winner) {
      return `Winner: ${this.state.nextPlayer.name}`;
    }
    return `${this.state.currentPlayer.name}'s Turn`
  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <h1> Tic Tac Toe </h1>
        <Board class='board' squares={this.state.board} onClick={this.handleChange} />
        <h3>{this.getStatus()}</h3>
        <Button value='Start New Game' onClick={this.restartGame} />
      </div>
    );
  }
}

export default Game;