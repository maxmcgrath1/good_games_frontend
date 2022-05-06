import React from "react";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(37);
    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    return (
        <div>
            <span>This game has been played {counter} times!</span>
        </div>
    );
}
