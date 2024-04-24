import React, { useState, useEffect } from 'react';
// import {O} from './TetrisBlocks.tsx';

const Square: React.FC = () => {
  return <div className={`w-[33px] h-[33px] border border-lightGray border-opacity-20 `}></div>;
};

function  TetrisBoard() {
  const [grid, setGrid] = useState<Array<Array<JSX.Element>>>([]);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
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

    generateGrid();

    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      // absolute top-0 left-0 w-full h-full z-10
    <div className="flex flex-wrap relative border-4 border-green-800 justify-around w-[100%] h-[100%]">
      {/* <O /> */}
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex ">
          {row.map((square, colIndex) => (
            <div 
            key={colIndex} 
            style={{ 
              height: `${windowDimensions.height <= 568 ? (Math.ceil(windowDimensions.height * 1.68 / 100) + Math.ceil(windowDimensions.width * 2.65 / 100))/2 : 32}px`, 
              width: `${windowDimensions.width <= 1120 ?(Math.ceil(windowDimensions.height * 1.68 / 100) + Math.ceil(windowDimensions.width * 2.65 / 100))/2 : 32}px` 
            }}
          >
            {square}
          </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TetrisBoard;
