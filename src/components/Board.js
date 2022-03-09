import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
    const [squares, setSquares]=useState(Array(9).fill(null));
    const [player, setPlayer]=useState(true);
    const nextPlayer = player ? "X" : "O";
    const winner = checkWin(squares);
    
    return (
        <div className="gameContainer">
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
            <div className="restart">{renderRestart()}</div>
        </div>    
    );

    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => {
                    if (squares[i] != null || winner != null) {
                        return;
                    }
                    const newSquares = squares.slice();
                    newSquares[i] = nextPlayer
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
    };

    function checkDraw(squares) {
        for (let i=0; i<squares.length; i++) {
            if (squares[i] == null) {
                return false;
            }
        }
        return true;
    };

    function gameStatus() {
        if (winner) {
            return "Game over, the winner is player " + winner + "!";
        } else if (checkDraw(squares)) {
            return "This round is a draw!";
        } else {
            return "Player " + nextPlayer + " is up, pick your square!"
        }
    };

    function renderRestart() {
        return (
            <Restart onClick={() => {
                setSquares(Array(9).fill(null));
                setPlayer(true);
            }}
            />
        );
    };
};

function Restart({onClick}) {
    return (
        <button className="resetGame" onClick={onClick}>Play Again</button>
    );
};




export default Board;

