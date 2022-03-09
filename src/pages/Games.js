import React from 'react'
import { Link } from "react-router-dom";

const Games = () => {
    return (
        <div>
            <h3>This is the games page</h3>
            <Link to="/games/tictactoe">
                    <div>Tic-Tac-Toe</div>
            </Link>
        </div>
    
    )
}

export default Games