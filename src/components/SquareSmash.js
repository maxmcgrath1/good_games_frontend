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

    const checkColumnFour = () => {
        for (let i = 0; i< 39; i++) {
            const columnFour = [i, i + width, i + width * 2, i + width * 3]
            const chosenColor = currentColorGroup[i]

            if (columnFour.every(square => currentColorGroup[square] === chosenColor)) {
                columnFour.forEach(square => currentColorGroup[square] = '')
            }
        }
    };

    const checkRowFour = () => {
        for (let i = 0; i< 64; i++) {
            const rowFour = [i, i + 1, i + 2, i +3]
            const chosenColor = currentColorGroup[i]
            const noCheck = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]

            if (noCheck.includes(i)) continue

            if (rowFour.every(square => currentColorGroup[square] === chosenColor)) {
                rowFour.forEach(square => currentColorGroup[square] = '')
            }
        }
    };

    const checkColumnThree = () => {
        for (let i = 0; i< 47; i++) {
            const columnThree = [i, i + width, i + width * 2]
            const chosenColor = currentColorGroup[i]

            if (columnThree.every(square => currentColorGroup[square] === chosenColor)) {
                columnThree.forEach(square => currentColorGroup[square] = '')
            }
        }
    };

    const checkRowThree = () => {
        for (let i = 0; i< 64; i++) {
            const rowThree = [i, i + 1, i + 2]
            const chosenColor = currentColorGroup[i]
            const noCheck = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

            if (noCheck.includes(i)) continue

            if (rowThree.every(square => currentColorGroup[square] === chosenColor)) {
                rowThree.forEach(square => currentColorGroup[square] = '')
            }
        }
    };
    
const moveSquareDown = () => {
    for (let i=0; i < 64 - width; i++) {
        const rowOne = [0, 1, 2, 3, 4, 5, 6, 7]
        const rowOneSquare = rowOne.includes(i)

        if (rowOneSquare && currentColorGroup[i] === '') {
            let randomNumber = Math.floor(Math.random() * sqaureColors.length)
            currentColorGroup[i] = sqaureColors[randomNumber]
        }

        if ((currentColorGroup[i + width]) === '') {
            currentColorGroup[i + width] = currentColorGroup[i]
            currentColorGroup[i] = ''
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
    };

    useEffect(() => createBoard(), []);
    
    useEffect(() => {
        const timer = setInterval(() => {
            checkColumnFour();
            checkRowFour();
            checkColumnThree();
            checkRowThree();
            moveSquareDown();
            setCurrentColorGroup([...currentColorGroup])
        }, 100)
        return () => clearInterval(timer)
    }, [checkColumnFour, checkRowFour, checkColumnThree, checkRowThree, moveSquareDown, currentColorGroup]);

    console.log(currentColorGroup);

    return (
        <div className='smashGameContainer'>
            {/* <h1 className='gameTitle'>Square Smash!</h1> */}
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
};

export default SquareSmash