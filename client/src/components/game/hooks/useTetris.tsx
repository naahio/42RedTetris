import { useCallback, useEffect, useState } from 'react';
import { BOARD_HEIGHT, getEmptyBoard, getRandomBlock, hasCollisions, TetrisMoves } from './TetrisMoves'
import { useInterval } from './UseInterval';
import { Block, BlockShape, BoardShape, EmptyCell, SHAPES } from '../interfaces/types';


enum TickSpeed {
    Normal = 800,
    Sliding = 100,
    Fast = 50,
  }

export function useTetris() {
    const [score, setScore] = useState(0);
    const [upcomingBlocks, setUpcomingBlocks] = useState<Block[]>([]);
    const [isCommitting, setIsCommitting] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);
  
    const [
      { board, droppingRow, droppingColum, droppingBlock, droppingShape },
      dispatchBoardState,
    ] = TetrisMoves();
  
    const startGame = useCallback(() => {
      const startingBlocks = [
        getRandomBlock(),
        getRandomBlock(),
        getRandomBlock(),
      ];
      setScore(0);
      setUpcomingBlocks(startingBlocks);
      setIsCommitting(false);
      setIsPlaying(true);
      setTickSpeed(TickSpeed.Normal);
      dispatchBoardState({ type: 'start' });
    }, [dispatchBoardState]);
  
    const commitPosition = useCallback(() => {
      if (!hasCollisions(board, droppingShape, droppingRow + 1, droppingColum)) {
        setIsCommitting(false);
        setTickSpeed(TickSpeed.Normal);
        return;
      }
  
      const newBoard = structuredClone(board) as BoardShape;
      addShapeToBoard(
        newBoard,
        droppingBlock,
        droppingShape,
        droppingRow,
        droppingColum
      );
  
      let numCleared = 0;
      for (let row = BOARD_HEIGHT - 1; row >= 0; row--) {
        if (newBoard[row].every((entry) => entry !== EmptyCell.Empty)) {
          numCleared++;
          newBoard.splice(row, 1);
        }
      }
  
      const newUpcomingBlocks = structuredClone(upcomingBlocks) as Block[];
      const newBlock = newUpcomingBlocks.pop() as Block;
      newUpcomingBlocks.unshift(getRandomBlock());
  
      if (hasCollisions(board, SHAPES[newBlock].shape, 0, 3)) {
        setIsPlaying(false);
        setTickSpeed(null);
      } else {
        setTickSpeed(TickSpeed.Normal);
      }
      setUpcomingBlocks(newUpcomingBlocks);
      setScore((prevScore) => prevScore + getPoints(numCleared));
      dispatchBoardState({
        type: 'commit',
        newBoard: [...getEmptyBoard(BOARD_HEIGHT - newBoard.length), ...newBoard],
        newBlock,
      });
      setIsCommitting(false);
    }, [
      board,
      dispatchBoardState,
      droppingBlock,
      droppingColum,
      droppingRow,
      droppingShape,
      upcomingBlocks,
    ]);
  
    const gameTick = useCallback(() => {
      if (isCommitting) {
        commitPosition();
      } else if (
        hasCollisions(board, droppingShape, droppingRow + 1, droppingColum)
      ) {
        setTickSpeed(TickSpeed.Sliding);
        setIsCommitting(true);
      } else {
        dispatchBoardState({ type: 'drop' });
      }
    }, [
      board,
      commitPosition,
      dispatchBoardState,
      droppingColum,
      droppingRow,
      droppingShape,
      isCommitting,
    ]);
  
    useInterval(() => {
      if (!isPlaying) {
        return;
      }
      gameTick();
    }, tickSpeed);
  
    useEffect(() => {
      if (!isPlaying) {
        return;
      }
  
      let isPressingLeft = false;
      let isPressingRight = false;
      let moveIntervalID: NodeJS.Timeout | undefined;
  
      const updateMovementInterval = () => {
        clearInterval(moveIntervalID);
        dispatchBoardState({
          type: 'move',
          isPressingLeft,
          isPressingRight,
        });
        moveIntervalID = setInterval(() => {
          dispatchBoardState({
            type: 'move',
            isPressingLeft,
            isPressingRight,
          });
        }, 300);
      };
  
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.repeat) {
          return;
        }
  
        if (event.key === 'ArrowDown') {
          setTickSpeed(TickSpeed.Fast);
        }
  
        if (event.key === 'ArrowUp') {
          dispatchBoardState({
            type: 'move',
            isRotating: true,
          });
        }
  
        if (event.key === 'ArrowLeft') {
          isPressingLeft = true;
          updateMovementInterval();
        }
  
        if (event.key === 'ArrowRight') {
          isPressingRight = true;
          updateMovementInterval();
        }
      };
  
      const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
          setTickSpeed(TickSpeed.Normal);
        }
  
        if (event.key === 'ArrowLeft') {
          isPressingLeft = false;
          updateMovementInterval();
        }
  
        if (event.key === 'ArrowRight') {
          isPressingRight = false;
          updateMovementInterval();
        }
      };
  
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        clearInterval(moveIntervalID);
        setTickSpeed(TickSpeed.Normal);
      };
    }, [dispatchBoardState, isPlaying]);
  
    const renderedBoard = structuredClone(board) as BoardShape;
    if (isPlaying) {
      addShapeToBoard(
        renderedBoard,
        droppingBlock,
        droppingShape,
        droppingRow,
        droppingColum
      );
    }
  
    return {
      board: renderedBoard,
      startGame,
      isPlaying,
      score,
      upcomingBlocks,
    };
  }
  
  function getPoints(numCleared: number): number {
    switch (numCleared) {
      case 0:
        return 0;
      case 1:
        return 100;
      case 2:
        return 300;
      case 3:
        return 500;
      case 4:
        return 800;
      default:
        throw new Error('Unexpected number of rows cleared');
    }
  }
  
  function addShapeToBoard(
    board: BoardShape,
    droppingBlock: Block,
    droppingShape: BlockShape,
    droppingRow: number,
    droppingColum: number
  ) {
    droppingShape
      .filter((row) => row.some((isSet) => isSet))
      .forEach((row: boolean[], rowIndex: number) => {
        row.forEach((isSet: boolean, colIndex: number) => {
          if (isSet) {
            board[droppingRow + rowIndex][droppingColum + colIndex] =
              droppingBlock;
          }
        });
      });
  }