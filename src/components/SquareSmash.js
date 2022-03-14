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

    const checkColumnThree = () => {
        for (let i = 0; i< 47; i++) {
            const columnThree = [i, i + width, i + width * 2]
            const chosenColor = currentColorGroup[i]

            if (columnThree.every(square => currentColorGroup[square] === chosenColor)) {
                columnThree.forEach(square => currentColorGroup[square] = '')
            }
        }
    }

    const createBoard = () => {
        const randomColorGroup = []
        for (let i=0; i< width * width; i++) {
            const randomColor = sqaureColors[Math.floor(Math.random() * sqaureColors.length)]
            randomColorGroup.push(randomColor)
        }
        setCurrentColorGroup(randomColorGroup)
    }

    useEffect(() => createBoard(), []);
    
    useEffect(() => {
        const timer = setInterval(() => {
            checkColumnThree()
            setCurrentColorGroup([...currentColorGroup])
        }, 100)
        return () => clearInterval(timer)
    }, [checkColumnThree])

    console.log(currentColorGroup)

    return (
        <div className='smashGameContainer'>
            <div className='smashGameBoard'>
                {currentColorGroup.map((squareColor, index) => (
                    <img
                        key={index}
                        style={{backgroundColor: squareColor}}
                        alt={squareColor}
                    />
                ))}
            </div>
        </div>
    )
}

export default SquareSmash