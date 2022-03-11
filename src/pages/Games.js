import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Counter from '../components/Counter';


const Games = (props) => {

    const [games, setGames] = useState([]);

    const getGamesData = async () => {
        const response = await fetch(props.URL + "games");
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setGames(data);
    };

    const createGame = async (game) => {
        await fetch(props.URL + "games", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(game),
        });
        getGamesData();
    };

    useEffect(() => getGamesData(), []);

    const [newGame, setNewGame] = useState({
        name: "",
        image: "",
        description: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewGame({ ...newGame, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        createGame(newGame);
        setNewGame({
            name: "",
            image: "",
            description: "",
        });
    };

    const loaded = () => {
        return games.map((game) => (
            <div key={game._id} className="game">
                <h1>{game.name}</h1>
                <img src={game.image} alt={game.name} />
                <h3 className="gameDescription">{game.description}</h3>
                <Counter />
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newGame.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newGame.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newGame.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                />
                <input type="submit" value="Add Game" />
            </form>
        </section>
            <h3 className="gamesMessage">This is the games page, it's good!</h3>
            {games ? loaded() : loading()}
        </div>
    )

};
export default Games