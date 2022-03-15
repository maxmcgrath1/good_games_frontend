import React from 'react'

const SmashScoreBoard = ({score}) => {
    return (
        <div className='smashScoreBoard'>
            <h1>Your current score is: <br /> {score}</h1>
        </div>
    )
}

export default SmashScoreBoard