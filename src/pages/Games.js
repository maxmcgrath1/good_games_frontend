import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Games = (props) => {

    const [games, setGames] = useState([]);

    const getGamesData = async () => {
        const response = await fetch(props.URL);
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setGames(data);
    };

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getGamesData(), []);

    
    console.log(games)
    const loaded = () => {
        return games.map((game) => (
            <div key={game._id} className="game">
                <h1>{game.name}</h1>
                <img src={game.image} alt={game.name} />
                <h3>{game.description}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

        return (
            <div>
            <h3>This is the games page</h3>
            <Link to="/games/tictactoe">
                    <div>Tic-Tac-Toe</div>
            </Link>
            {games ? loaded() : loading()}
        </div>
    )
};

export default Games