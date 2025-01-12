import React, { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isNextX, setIsNextX] = useState(true);
  const x = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    console.log("Button clicked", index);
    if (board[index] == "") {
      const newBoard = [...board];
      newBoard[index] = isNextX ? "O" : "X";
      setBoard(newBoard);
      setIsNextX(!isNextX);
    }
  };

  const calcWinner = () => {
    for (let i = 0; i < x.length; i++) {
      let [a, b, c] = x[i];
      if (board && board[a] == board[b] && board[b] == board[c]) {
        return board[a];
      }
    }
  };

  const reset = () => {
    setBoard(Array(9).fill(""));
  };
  const calcDraw = () => {
    if (board.every((item) => item !== "")) {
      return true;
    }
  };
  const winner = calcWinner();
  const draw = calcDraw();
  if (winner || draw) {
    setTimeout(() => reset(), 2000);
  }
  return (
    <div className="App">
      <h1>Tic Toc Toe</h1>
      <div className="container">
        {board.map((square, index) => (
          <button key={index} value={square} onClick={() => handleClick(index)}>
            {square}
          </button>
        ))}
      </div>
      <div className="btn">
        <button onClick={() => reset()}>Reset</button>
      </div>
      {winner && <h2>Player {winner} Wins</h2>}
      {draw && <h2>It's a Draw</h2>}
    </div>
  );
}

export default App;
