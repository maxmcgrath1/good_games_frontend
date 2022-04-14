import React from 'react'
import SquareSmashGame from './SquareSmashGame'
import Timer from './Timer'

const SquareSmash = () => {
    return (
        <div className="smashGameBack">
            <h1 className='gameTitle'>SquareSmash!</h1>
            <Timer />
            <SquareSmashGame />
        </div>
    )
}

export default SquareSmash