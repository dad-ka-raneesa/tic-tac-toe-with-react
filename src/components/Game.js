import React from 'react';
import Button from './Button';
import Board from './Board';
import Status from './Status';

const WINNING_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

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

  getWinnerStatus(board) {
    const { currentPlayer } = this.state;
    const doesInclude = (index) => board[index] === currentPlayer.symbol;
    const isWin = WINNING_CONDITIONS.some((row) => row.every(doesInclude));
    return isWin ? currentPlayer : null;
  }

  handleChange(id) {
    this.setState(({ board, currentPlayer, nextPlayer }) => {
      const newBoard = board.slice();
      newBoard[id] = currentPlayer.symbol;
      return {
        board: newBoard,
        currentPlayer: nextPlayer,
        nextPlayer: currentPlayer,
        isDraw: board.every((value) => value),
        winner: this.getWinnerStatus(newBoard)
      }
    });
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

  render() {
    const { isDraw, winner, currentPlayer, board } = this.state;
    const status = { isDraw, winner };

    return (
      <div style={{ margin: '20px' }}>
        <h1> Tic Tac Toe </h1>
        <Board class='board' status={status} currentPlayer={currentPlayer} tiles={board} onClick={this.handleChange} />
        <Status currentPlayer={currentPlayer} status={status} />
        <Button value='Start New Game' onClick={this.restartGame} />
      </div>
    );
  }
}

export default Game;