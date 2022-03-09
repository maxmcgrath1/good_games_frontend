import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
    const [squares, setSquares]=useState(Array(9).fill(null));
    const [player, setPlayer]=useState(true);
    const winner = checkWin(squares);
    
    return (
        <div class="gameContainer">
            <div className="gameBoard">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <h2 className="gameMessage">{gameStatus()} </h2>
        </div>    
    );

    function renderSquare(i) {
        return <Square value={squares[i]} 
                onClick={() => {
                    const newSquares = squares.slice();
                    newSquares[i] = player ? "X" : "O";
                    setSquares(newSquares);
                    setPlayer(!player);
                }} />;
    };

    function checkWin(squares) {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i=0; i < conditions.length; i++) {
            const [a, b, c] = conditions[i];
            if (squares[a] === squares[b] && squares[a] ===squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    function gameStatus() {
        if (winner) {
            return "Game over, the winner is player " + winner + "!";
        // } else if (checkDraw(squares)) {
            return "This round is a draw!";
        } else {
            return "Player " + (player ? "X" : "O") + " is up, pick your square!"
        }
    }
}



export default Board;

