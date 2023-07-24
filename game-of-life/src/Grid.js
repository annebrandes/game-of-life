import React, { useState, useEffect } from 'react';
import './Grid.css';

const Grid = ({ size = 20 }) => {
    const initialGridState = Array(size).fill().map(() => Array(size).fill('inactive'));
    const [gridState, setGridState] = useState(initialGridState);
    const [gameInterval, setGameInterval] = useState(null); 

    const handleCellClick = (i, j) => {
        const newGridState = [...gridState];
        newGridState[i][j] = newGridState[i][j] === 'active' ? 'inactive' : 'active';
        setGridState(newGridState);
    };

    const handleGame = () => {
        const newGridState = [...gridState];
    
        const countLiveNeighbors = (i, j) => {
            let count = 0;
            const neighbors = [
                [i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]
            ];
            for (const [x, y] of neighbors) {
                if (x >= 0 && x < size && y >= 0 && y < size && gridState[x][y] === 'active') {
                    count++;
                }
            }
            return count;
        };
    
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const liveNeighbors = countLiveNeighbors(i, j);
                if (gridState[i][j] === 'active') {
                    if (liveNeighbors < 2 || liveNeighbors > 3) {
                        newGridState[i][j] = 'inactive';
                    }
                } else {
                    if (liveNeighbors === 3) {
                        newGridState[i][j] = 'active';
                    }
                }
            }
        }
    
        setGridState(newGridState);
    };
    
    const handlePerpetualGame = () => {
        if (!gameInterval) {
            const interval = setInterval(() => {
                handleGame();
            }, 1000);
            setGameInterval(interval); 
        }
    };

    useEffect(() => {
        return () => {
            if (gameInterval) {
                clearInterval(gameInterval);
            }
        }
    }, [gameInterval]);

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
                <button className = "start" onClick = {() => handlePerpetualGame()}> Start </button>
                <br />
            </div>
        </>
    );
};

export default Grid;