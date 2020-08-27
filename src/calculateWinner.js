export function calculateWinner(tiles, currentPlayer) {
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

  const doesInclude = (index) => tiles[index] === currentPlayer.symbol;
  const isWin = WINNING_CONDITIONS.some((row) => row.every(doesInclude));
  return isWin ? currentPlayer : null;
}