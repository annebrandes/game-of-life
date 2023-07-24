import React, { useState } from 'react';
import './Grid.css';

const Grid = ({ size = 20 }) => {
    // Initialize a size x size grid with all cells set to "inactive"
    const initialGridState = Array(size).fill().map(() => Array(size).fill('inactive'));
    const [gridState, setGridState] = useState(initialGridState);

    // Function to handle cell click
    const handleCellClick = (i, j) => {
        // Copy the current grid state
        const newGridState = [...gridState];
        // Toggle the state of the cell at (i, j)
        newGridState[i][j] = newGridState[i][j] === 'active' ? 'inactive' : 'active';
        // Update the grid state
        setGridState(newGridState);
    };

    return (
        <div className="grid">
            {gridState.map((row, i) => (
                <div key={i} className="grid-row">
                    {row.map((cell, j) => (
                        <div
                            key={`${i}-${j}`}
                            className={`grid-cell ${cell}`} // This will apply either "grid-cell active" or "grid-cell inactive"
                            onClick={() => handleCellClick(i, j)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;