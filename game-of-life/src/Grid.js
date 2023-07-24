import React, { useState } from 'react';
import './Grid.css';

const Grid = ({ size = 20 }) => {
    const initialGridState = Array(size).fill().map(() => Array(size).fill('inactive'));
    const [gridState, setGridState] = useState(initialGridState);

    const handleCellClick = (i, j) => {
        const newGridState = [...gridState];
        newGridState[i][j] = newGridState[i][j] === 'active' ? 'inactive' : 'active';
        setGridState(newGridState);
    };

    const handleGame = () => {
        const newGridState = [...gridState];
        setGridState(newGridState);
    }

    return (
        <>
            <div className="grid">
                {gridState.map((row, i) => (
                    <div key={i} className="grid-row">
                        {row.map((cell, j) => (
                            <div
                                key={`${i}-${j}`}
                                className={`grid-cell ${cell}`} 
                                onClick={() => handleCellClick(i, j)}
                            />
                        ))}
                    </div>
                ))}
                <br />
                <button className = "start" onClick = {() => handleGame()}> Start </button>
                <br />
            </div>
        </>
    );
};

export default Grid;