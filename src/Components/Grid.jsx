import React, { useState } from "react";
import Card from "./Card";

import "../Styles/Grid.css";
import isWinner from "../Helpers/IsWinner";
const Grid = () => {
  const [turn, setTurn] = useState(true);
  const [winner, setwinner] = useState("");
  const [board, setboard] = useState(Array(9).fill(""));

  const play = (index) => {
    console.log(turn, index, board[index]);
    if (turn) {
      board[index] = "X";
    } else {
      board[index] = "O";
    }
    const win = isWinner(board, turn ? "X" : "O");
    console.log("winner is : ", win);
    if (win != -1) {
      setwinner(win);
    }
    setTurn(!turn);
    setboard([...board]);
  };
  const resetGame = () => {
    setTurn(true);
    setboard(Array(9).fill(""));
    setwinner("");
  };

  return (
    <div className="grid-wrapper">
      <h1 className="turn-highlight">Current Turn : {turn ? "X" : "O"}</h1>
      {winner && (
        <>
          <h1 className="turn-highlight">winner is {winner}</h1>
          <button onClick={() => resetGame()}>Reset Game</button>{" "}
        </>
      )}
      <div className="grid">
        {board.map((val, idx) => {
          return (
            <Card
              key={idx}
              gameEnd={winner ? true : false}
              index={idx}
              onPlay={play}
              player={val}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
