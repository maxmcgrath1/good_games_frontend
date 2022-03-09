import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
    const [squares, setSquares]=useState(Array(9).fill(null));
    const [player, setPlayer]=useState(true);

    function renderSquare(i) {
        return <Square value={squares[i]} 
                onClick={() => {
                    const newSquares = squares.slice();
                    newSquares[i] = player ? "X" : "O";
                    setSquares(newSquares);
                    setPlayer(!player);
                }} />;
    };
    return (
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
    )
}

export default Board;

