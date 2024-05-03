import { Dispatch, useReducer } from "react";
import { Block, BlockShape, BoardShape, EmptyCell, SHAPES } from "../interfaces/types"
//@ts-ignore
import { isSet } from "util/types";

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export type BoardState = {
    board: BoardShape;
    droppingRow: number;
    droppingColum: number;
    droppingBlock: Block;
    droppingShape: BlockShape;
};

export function TetrisMoves(): [BoardState, Dispatch<Action>] {
        const [boardState, dispathBoardState] = useReducer( 
            boardReducer,
            {
                board: [],
                droppingRow: 0,
                droppingColum: 0,
                droppingBlock: Block.I,
                droppingShape: SHAPES.I.shape,
            },
            (emptyState) => {
                const state = {
                    ...emptyState,
                    board: getEmptyBoard(),
                };
                return state;
            }
        );
        return [boardState, dispathBoardState];
}

export function getEmptyBoard(height = BOARD_HEIGHT): BoardShape {
    return Array(height).fill(null)
                        .map(()=>Array(BOARD_WIDTH).fill(EmptyCell.Empty));
}

export function getRandomBlock(): Block {
    const blockValues = Object.values(Block);
    return blockValues[Math.floor(Math.random() * blockValues.length)] as Block;
}

type Action = {
    type: 'start' | 'drop' | 'commit' | 'move';
    newBoard?: BoardShape,
    newBlock?: Block,
    isPressingLeft?: boolean;
    isPressingRight?: boolean;
    isRotating?: boolean;
};

function rotateBlock(shape: BlockShape): BlockShape {
   const rows = shape.length;
   const columns = shape[0].length;

   const rotated = Array(rows).fill(null).map(()=> Array(columns).fill(false));

   for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
        rotated[column][rows - 1 - row] = shape[row][column];
    }
   }
   return rotated;
}

function boardReducer(state: BoardState, action: Action): BoardState {
    let newState = {...state};

   switch (action.type) {
        case 'start':
            const firstBlock = getRandomBlock();
            return {
                board: getEmptyBoard(),
                droppingRow: 0,
                droppingColum: Math.floor((10 - SHAPES[firstBlock].sz) / 2),
                droppingBlock: firstBlock,
                droppingShape: SHAPES[firstBlock].shape,
            }
        case 'drop':
            newState.droppingRow++;
            break;
        case 'commit':
            return {
                board: action.newBoard!,
                droppingRow: 0,
                droppingColum: 3,
                droppingBlock: state.droppingBlock,
                droppingShape: state.droppingShape,
            }
        case 'move':
            const rotatedShape = action.isRotating ? rotateBlock(newState.droppingShape) : newState.droppingShape;
            let columnOffset = action.isPressingLeft ? -1 : 0;
            columnOffset = action.isPressingRight ? 1 : columnOffset;
            if (
                !hasCollisions(
                    newState.board,
                    rotatedShape,
                    newState.droppingRow,
                    newState.droppingColum + columnOffset,
                )
            ) {
                newState.droppingColum += columnOffset;
                newState.droppingShape = rotatedShape;
            }
            break;
        default:
            const unhandledType: string = action.type;
            throw new Error(`Unhandled action type: ${unhandledType}`);
    }
    return newState;
}

export function hasCollisions(
                board: BoardShape,
                currentShape: BlockShape,
                row: number,
                colum: number
            ): boolean {

        let hasCollisions = false;
        currentShape.filter((shapeRow) => shapeRow.some((isSet) => isSet))
        .forEach((shapeRow: boolean[], rowIndex: number) => {
            shapeRow.forEach((isSet: boolean, colIndex: number) => {
                if (
                    isSet && 
                    (   row + rowIndex >= board.length || 
                        colum + colIndex >= board[0].length ||
                        colum + colIndex < 0 || 
                        board[row + rowIndex][colum + colIndex] !== EmptyCell.Empty)
                    )
                        { hasCollisions = true; }
            });
        });
        return hasCollisions;
}