import React, { useEffect, useState } from "react";
import Square from "../components/Square";
import { checkWinner } from "../utils/checkGame";

// Set Types
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random()) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState("");

  const setSquareValue = (index: number) => {
    const updatedSquares = squares.map((value, i) => {
      if (i === index) return currentPlayer;
      return value;
    });
    setSquares(updatedSquares);

    if (currentPlayer === "X") setCurrentPlayer("O");
    else if (currentPlayer === "O") setCurrentPlayer("X");
  };

  useEffect(() => {
    const winner = checkWinner(squares);
    setWinner(winner);
  }, [squares]);

  return (
    <div>
      {!winner ? <p>Current {currentPlayer}</p> : <p>Winner {winner}</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "space-evenly",
        }}
      >
        {Array(9)
          .fill(null)
          .map((square, index) => (
            <Square
              key={index}
              onClick={() => setSquareValue(index)}
              value={squares[index]}
            />
          ))}
      </div>
    </div>
  );
};

export default Board;
