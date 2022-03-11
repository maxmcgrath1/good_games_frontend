import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

export default function Counter() {
    const [counter, setCounter] = useState(73);
    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    return (
        <div>
            <span>This game has been played {counter} times!</span>
            <section>
                <Button variant="outline-info" href="/games/tictactoe" onClick={handleIncrement}>Play Game</Button>
            </section>
        </div>
    );
}
