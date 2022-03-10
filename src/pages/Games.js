import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const Games = (props) => {

    const [games, setGames] = useState([]);

    const getGamesData = async () => {
        const response = await fetch(props.URL + "games");
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setGames(data);
    };

    useEffect(() => getGamesData(), []);

    
    const loaded = () => {
        return games.map((game) => (
            <div key={game._id} className="game">
                <Link to="/games/tictactoe">
                    <h1>{game.name}</h1>
                    <img src={game.image} alt={game.name} />
                </Link>
                <h3>{game.description}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

        return (
            <div>
            <h3>This is the games page. Click on a game's name or image to play!</h3>
            {games ? loaded() : loading()}
        </div>
    )
};

export default Games