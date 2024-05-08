import { Block, SHAPES } from "../../interfaces/types";

interface Props {
    upcomingBlocks: Block[];
}

function UpcomingBlocks({upcomingBlocks}: Props) {
    return (
        <div className="upcoming">
            {
                upcomingBlocks.map((block, blockIndex) => {
                    const shape = SHAPES[block].shape.filter((row) => 
                        row.some((cell) => cell)
                    );
                    return (
                        <div key={blockIndex}>
                            {shape.map((row, rowIndex) => {
                                return (
                                    <div key ={rowIndex} className="row">
                                        {row.map((isSet, cellIndex) => {
                                            const cellClass = isSet ? block : 'hidden';
                                            const key = `${blockIndex}-${rowIndex}-${cellIndex}`;
                                            return (<div key={key} className={`cell ${cellClass}`}></div>)
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    );
                })
            }
        </div>
    );
}


export default UpcomingBlocks;