import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'

function Show(props) {
    const {id} = useParams();
    const [game, setGame] = useState([]);

    const getGamesData = async () => {
        const response = await fetch(props.URL + "games");
        const data = await response.json();
        const match = data.find(p => p._id === id);
        setGame(match);   
    };
    
    useEffect(() => getGamesData(), []);
    
    const loaded = () => {
        return (
            <div>
                <h1>HELLO CAN YOU SEE THIS</h1>
                <h1>{game.name}</h1>
                <img src={game.image} alt={game.name} />
                <h2>{game.description}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return game ? loaded(): loading();
}

export default Show