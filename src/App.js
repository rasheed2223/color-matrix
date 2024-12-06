import React, { useState } from "react";
import "./App.css"; 

const App = () => {
  const matrixSize = 3; 
  const [grid, setGrid] = useState(
    Array(matrixSize)
      .fill(null)
      .map(() => Array(matrixSize).fill("white"))
  );
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (row, col) => {
    
    if (row === matrixSize - 1 && col === matrixSize - 1) {
      
      const updatedGrid = grid.map((r) => [...r]); 
      clickOrder.forEach(([r, c]) => {
        updatedGrid[r][c] = "orange";
      });
      setGrid(updatedGrid);
    } else {
      
      if (grid[row][col] === "white") {
        const updatedGrid = grid.map((r) => [...r]); 
        updatedGrid[row][col] = "green";
        setGrid(updatedGrid);

        
        setClickOrder([...clickOrder, [row, col]]);
      }
    }
  };

  return (
    <div className="matrix">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="box"
              style={{ backgroundColor: color }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
