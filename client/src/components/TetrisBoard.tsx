import React, { useState, useEffect } from 'react';
// import {O} from './TetrisBlocks.tsx';

const Square: React.FC = () => {
  return <div className={`w-[32px] h-[32px]`}></div>;
};

function  TetrisBoard() {
  
  const [grid, setGrid] = useState<Array<Array<JSX.Element>>>([]);
  const generateGrid = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    let rowHeight = windowHeight * 1.5 / 100;
    let colWidth = windowWidth * 2.4 / 100;
    
    let numRows = 19;
    let numCols = 33;
    
    if (windowHeight <= 568 ) {
      numRows = Math.ceil(rowHeight);
    }
    if (windowWidth <= 1120){
      numCols = Math.ceil(colWidth);
    }
    
    const newGrid: JSX.Element[][] = [];
    for (let i = 0; i < numRows; i++) {
      const row: JSX.Element[] = [];
      for (let j = 0; j < numCols; j++) {
        row.push(<Square key={`${i}-${j}`} />);
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };
  useEffect(() => {
    const handleResize = () => {
      generateGrid();
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div className="flex flex-wrap relative justify-around">
      {/* <O /> */}
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((square, colIndex) => (
            <div  className='border border-lightGray border-opacity-20'
            key={colIndex}>
            {square}
          </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TetrisBoard;
