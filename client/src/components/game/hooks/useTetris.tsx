import { useCallback, useEffect, useState } from 'react';
import { getRandomBlock, hasCollisions, TetrisMoves } from './TetrisMoves'
import { useInterval } from './UseInterval';
import { Block, BlockShape, BoardShape } from '../interfaces/types';


enum TickSpeed {
    Normal = 800,
    Sliding = 100,
    Fast = 50,
}

export function useTetris() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);
    const [upcomingBlocks, setUpcomingBlocks] = useState<Block[]>([]);
    const [isCommitting, setIsCommitting] = useState(false);
    const [
        { board, droppingRow, droppingColum,  droppingBlock,  droppingShape },
        dispatchBoardState,
    ] = TetrisMoves();

    const gameTick = useCallback(() => {
        if (isCommitting){
            commitPosition();
        } else if (
            hasCollisions(board, droppingShape, droppingRow + 1, droppingColum)
        ) {
            setTickSpeed(TickSpeed.Sliding);
            setIsCommitting(true);
        } else {
            dispatchBoardState({type: 'drop'});
        }
    }, [board]);

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
            droppingColum,
        );

        const newUpcomingBlocks = structuredClone(upcomingBlocks) as Block[];
        const newBlock = newUpcomingBlocks.pop() as Block;
        newUpcomingBlocks.unshift(getRandomBlock());

        setTickSpeed(TickSpeed.Normal);
        setUpcomingBlocks(newUpcomingBlocks);
        dispatchBoardState({type: 'commit', newBoard, newBlock});
        setIsCommitting(false);
    }, [board, dispatchBoardState, droppingBlock, droppingColum, droppingRow, droppingShape]);

    const startGame = useCallback(() => {
        const startingBlocks = [
            getRandomBlock(),
            getRandomBlock(),
            getRandomBlock(),
        ];
        setUpcomingBlocks(startingBlocks);
        setIsPlaying(true);
        setTickSpeed(TickSpeed.Normal);
        dispatchBoardState({type:'start'});
    },[dispatchBoardState]);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key == 'ArrowDown') {
                setTickSpeed(TickSpeed.Fast);
            }
            if (event.key == 'ArrowUp') {
                dispatchBoardState({
                    type: 'move',
                    isRotating: true,
                });
            }
            if (event.key == 'ArrowLeft') {
                dispatchBoardState({
                    type: 'move',
                    isPressingLeft: true,
                });
            }
            if (event.key == 'ArrowRight') {
                dispatchBoardState({
                    type: 'move',
                    isPressingRight: true,
                });
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key == 'ArrowDown') {
                setTickSpeed(TickSpeed.Normal);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            setTickSpeed(TickSpeed.Normal);
        };
    })

    const renderedBoard = structuredClone(board) as BoardShape;
    if (isPlaying) {
        addShapeToBoard(
            renderedBoard,
            droppingBlock,
            droppingShape,
            droppingRow,
            droppingColum,
        );
    }

    function addShapeToBoard(
        board: BoardShape,
        droppingBlock: Block,
        droppingShape: BlockShape,
        droppingRow: number,
        droppingColum: number,
    ) {
        droppingShape.filter((row) => row.some((isSet) => isSet))
        .forEach((row: boolean[], rowIndex: number) => {
            row.forEach((isSet: boolean, columnIndex: number) => {
                if (isSet) {
                    board[droppingRow + rowIndex][droppingColum + columnIndex] = droppingBlock;
                }
            });
        });
    }

    useInterval(()=>{
        if (!isPlaying) {
            return;
        }
        gameTick();
    }, tickSpeed);
    return{
        board: renderedBoard,
        startGame,
        isPlaying,
    }
}
