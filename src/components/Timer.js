import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(60);
    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000)
    }, [timer]);
    return (
        <h1 className='gameTimer'>Time left: {timer}</h1>
    )
}

export default Timer