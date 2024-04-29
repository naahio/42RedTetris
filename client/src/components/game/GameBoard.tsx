import Cell from "./Cell";
import { BoardShape } from "./interfaces/types";

interface Props {
    currentBoard: BoardShape;
}

function GameBoard({currentBoard}: Props) {
    return (
        <div className="board">
            {currentBoard.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <Cell key={`${rowIndex}-${colIndex}`} type={cell} />
                        ))}
                    </div>
                ))}
        </div>
    );
}

export default GameBoard;