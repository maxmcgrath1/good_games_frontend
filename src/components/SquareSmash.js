import React from 'react'
import { useState, useEffect } from 'react'

const width = 8
const squareColors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple"
];

const SquareSmash = () => {
    const [currentColorGroup, setCurrentColorGroup] = useState([]);
    const [squareBeingMoved, setSquareBeingMoved] = useState(null);
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
    const [scoreDisplay, setScoreDisplay] = useState(0)

    const checkColumnFour = () => {
        for (let i = 0; i <= 39; i++) {
            const columnFour = [i, i + width, i + width * 2, i + width * 3]
            const chosenColor = currentColorGroup[i]

            if (columnFour.every(square => currentColorGroup[square] === chosenColor)) {
                setScoreDisplay((score) => score + 4)
                columnFour.forEach(square => currentColorGroup[square] = '')
                return true;
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
                return true;
            }
        }
    };

    const checkColumnThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnThree = [i, i + width, i + width * 2]
            const chosenColor = currentColorGroup[i]

            if (columnThree.every(square => currentColorGroup[square] === chosenColor)) {
                columnThree.forEach(square => currentColorGroup[square] = '')
                return true;
            }
        }
    };

    const checkRowThree = () => {
        for (let i = 0; i < 64; i++) {
            const rowThree = [i, i + 1, i + 2]
            const chosenColor = currentColorGroup[i]
            const noCheck = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]

            if (noCheck.includes(i)) continue

            if (rowThree.every(square => currentColorGroup[square] === chosenColor)) {
                rowThree.forEach(square => currentColorGroup[square] = '')
                return true;
            }
        }
    };
    
    const moveSquareDown = () => {
        for (let i = 0; i <= 55; i++) {
            const rowOne = [0, 1, 2, 3, 4, 5, 6, 7]
            const rowOneSquare = rowOne.includes(i)

            if (rowOneSquare && currentColorGroup[i] === '') {
                let randomNumber = Math.floor(Math.random() * squareColors.length)
                currentColorGroup[i] = squareColors[randomNumber]
            }

            if ((currentColorGroup[i + width]) === '') {
                currentColorGroup[i + width] = currentColorGroup[i]
                currentColorGroup[i] = ''
            }
        }
    };

    console.log(scoreDisplay);

    const dragStart = (event) => {
        setSquareBeingMoved(event.target)
    };
    const dragDrop = (event) => {
        setSquareBeingReplaced(event.target)
    };
    const dragEnd = (event) => {
        const movedId = parseInt(squareBeingMoved.getAttribute('data-id'))
        const replacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

        currentColorGroup[replacedId] = squareBeingMoved.style.backgroundColor
        currentColorGroup[movedId] = squareBeingReplaced.style.backgroundColor

        const validMoves = [
            movedId + 1,
            movedId - 1,
            movedId + width,
            movedId - width
        ];

        const validMove = validMoves.includes(replacedId)

        const columnOfFour = checkColumnFour
        const rowOfFour = checkRowFour
        const columnOfThree = checkColumnThree
        const rowOfThree = checkRowThree

        if (replacedId && validMove && (columnOfFour || rowOfFour || columnOfThree || rowOfThree)) {
            setSquareBeingMoved(null)
            setSquareBeingReplaced(null)
        } else {
            currentColorGroup[replacedId] = squareBeingReplaced.style.backgroundColor
            currentColorGroup[movedId] = squareBeingMoved.style.backgroundColor
            setCurrentColorGroup([...currentColorGroup])
        }
    };

    const createBoard = () => {
        const randomColorGroup = []
        for (let i=0; i< width * width; i++) {
            const randomColor = squareColors[Math.floor(Math.random() * squareColors.length)]
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

    return (
        <div className='smashGameContainer'>
            {/* <h1 className='gameTitle'>Square Smash!</h1> */}
            <div className='smashGameBoard'>
                {currentColorGroup.map((squareColor, index) => (
                    <img
                        key={index}
                        style={{backgroundColor: squareColor}}
                        alt={squareColor}
                        data-id={index}
                        draggable={true}
                        onDragStart={dragStart}
                        onDragOver={(event) => event.preventDefault()}
                        onDragEnter={(event) => event.preventDefault()}
                        onDragLeave={(event) => event.preventDefault()}
                        onDrop={dragDrop}
                        onDragEnd={dragEnd}
                    />
                ))}
            </div>
        </div>
    )
};

export default SquareSmash