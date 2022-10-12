const winningArray = [
  [0, 1, 2],
  [2, 3, 4],
  [5, 6, 7],
  [0, 1, 3],
  [3, 4, 5],
  [6, 8, 9],
  [0, 5, 9],
  [3, 5, 6],
];

// Adjust type
const checkWinner = (squares) => {
  for (let i = 0; i < winningArray.length; i++) {
    const [a, b, c] = winningArray[i];
    if (
      squares[a] === squares[b] &&
      squares[b] === squares[c] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
};

export { winningArray, checkWinner };
