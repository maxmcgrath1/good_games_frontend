import React from 'react'
import { useState, useEffect } from 'react'

const width = 8
const sqaureColors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple"
]

const SquareSmash = () => {
    const [currentColorGroup, setCurrentColorGroup] = useState([]);

    const createBoard = () => {
        const randomColorGroup = []
        for (let i=0; i< width * width; i++) {
            const randomColor = sqaureColors[Math.floor(Math.random() * sqaureColors.length)]
            randomColorGroup.push(randomColor)
        }
        setCurrentColorGroup(randomColorGroup)
    }

    useEffect(() => createBoard(), []);
    console.log(currentColorGroup)

    return (
        <div>SquareSmash</div>
    )
}

export default SquareSmash