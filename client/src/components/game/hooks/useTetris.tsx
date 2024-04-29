import { useCallback, useState } from 'react';
import { hasCollisions, TetrisMoves } from './TetrisMoves'
import { useInerval } from './UseInterval';
import { BoardShape } from '../interfaces/types';


enum TickSpeed {
    Normal = 800,
    Sliding = 100,
}

export function useTetris() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [tickSpeed, setTickSpeed] = useState<TickSpeed | null>(null);
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
        } else {
            dispatchBoardState({type: 'drop'});
        }
    }, [board]);

    const commitPosition = useCallback(() => {
        if (!hasCollisions(board, droppingShape, droppingRow + 1, droppingColum)) {
            setIsCommitting(false);
        }
    }, []);

    const startGame = useCallback(() => {
        setIsPlaying(true);
        setTickSpeed(TickSpeed.Normal);
        dispatchBoardState({type:'start'});
    },[dispatchBoardState]);

    const renderedBoard = structuredClone(board) as BoardShape;
    if (isPlaying) {
        droppingShape.filter((row)=>row.some((isSet) => isSet))
        .forEach((row: boolean[], rowIndex: number) => {
            row.forEach((isSet: boolean, columnIndex: number) => {
                if (isSet) {
                    renderedBoard[droppingRow + rowIndex][droppingColum + columnIndex] = droppingBlock;
                }
            });
        });
    }
    return{
        board: renderedBoard,
        startGame,
        isPlaying,
    }
}

