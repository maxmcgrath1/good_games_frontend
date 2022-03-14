import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import Button from 'react-bootstrap/esm/Button';

function Show(props) {
    const {id} = useParams();
    const [game, setGame] = useState([]);

    const getGamesData = async () => {
        const response = await fetch(props.URL + "games");
        const data = await response.json();
        const match = data.find(p => p._id === id);
        setGame(match);   
    };

    const updateGame = async (game, id) => {
        await fetch(props.URL + "games/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(game),
        })
        getGamesData();
    };

    const deleteGame = async id => {
        await fetch(props.URL + "games/" + id, {
            method: "delete",
            })
        getGamesData()
    };

    
    useEffect(() => getGamesData(), []);

    const [editGame, setEditGame]=useState(game)    

    const handleChange = event => {
        setEditGame({ ...editGame, [event.target.name]: event.target.value })
    };

    const handleSubmit = event => {
        event.preventDefault()
        updateGame(editGame, game._id)
    //     props.history.push("/")
    }

    const removeGame = () => {
        deleteGame(game._id)
        // props.history.push("/")
    }

    const loaded = () => {
        return (
            <div>
                <h1>{game.name}</h1>
                <img src={game.image} alt={game.name} />
                <h2>{game.description}</h2>
                <Button variant="danger" id="delete" onClick={removeGame}> DELETE GAME</Button>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editGame.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editGame.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editGame.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Game" />
            </form>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return game ? loaded(): loading();
}

export default Show