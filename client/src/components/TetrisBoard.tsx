import React, { useState, useEffect } from 'react';


const Square: React.FC = () => {
  return <div className={`w-[33px] h-[33px] border border-lightGray border-opacity-20 `}></div>;
};

function TetrisBoard () {
  const [grid, setGrid] = useState<Array<Array<JSX.Element>>>([]);

  useEffect(() => {
    const generateGrid = () => {
      const newGrid: JSX.Element[][] = [];
      for (let i = 0; i < 19; i++) {
        const row: JSX.Element[] = [];
        for (let j = 0; j < 33; j++) {
          row.push(<Square key={`${i}-${j}`} />);
        }
        newGrid.push(row);
      }
      setGrid(newGrid);
    };
    generateGrid();
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((square, colIndex) => (
            <div key={colIndex} className="w-8 h-8">
              {square}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};


export default TetrisBoard;
