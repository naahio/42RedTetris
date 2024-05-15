import { Block, SHAPES } from "../../interfaces/types";

interface Props {
  upcomingBlocks: Block[];
} 

function UpcomingBlocks({ upcomingBlocks }: Props) {
  return (
    <div className="upcoming border bg-darkBlue3 ">
      next
      {upcomingBlocks.map((block, blockIndex) => {
        const shape = SHAPES[block].shape.filter((row) =>
          row.some((cell) => cell)
        );
        return (
          <div key={blockIndex} className="bg-darkBlue2">
            {shape.map((row, rowIndex) => {
              return (
                <div key={rowIndex} className="row">
                  {row.map((isSet, cellIndex) => {
                    const cellClass = isSet ? block : 'hiddenCells';
                    return (
                      <div
                        key={`${blockIndex}-${rowIndex}-${cellIndex}`}
                        className={`cell ${cellClass}`}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default UpcomingBlocks;
