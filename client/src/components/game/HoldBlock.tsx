import { useState } from "react";
import { Block } from "../../interfaces/types";


function HoldBlock() {
    //@ts-ignore
    const [savedBlock, setSavedblok] = useState(Block);
    // setSavedblok()
    return (
        <div className="flex flex-col rounded-md bg-darkBlue3 items-center w-full h-[20%]">
                Hold
                <div className="row ">
                  {/* {row.map((isSet, cellIndex) => {
                    const cellClass = isSet ? block : 'hiddenCells';
                    return (
                      <div
                        key={`${blockIndex}-${rowIndex}-${cellIndex}`}
                        className={`cell ${cellClass}`}
                      ></div>
                    );
                  })} */}
                  {savedBlock.Z}
                </div>
        </div>
    );
}

export default HoldBlock;