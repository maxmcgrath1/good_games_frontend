import React from 'react';
import '../App.css'

const squareStyle = {
	// background: "blue",
	border: "2px solid orange",
	fontSize: "50px",
	cursor: "pointer",
	color: "purple"
};

const Square = ({value, onClick}) => {
	return (
		<button style={squareStyle} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;