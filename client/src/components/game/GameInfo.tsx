import { useState } from "react";
import { Game } from "../../interfaces/data";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface GameInfoProps {
    game: Game;
    setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const GameInfo: React.FC<GameInfoProps> = ({ game, setShowSignup }) => {
    return (
        <div className="justify-around border rounded-lg w-[30%] m-2 slef-ends border-lightRed">
            <IoMdCloseCircleOutline onClick={() => setShowSignup(false)} className="cursor-pointer"/>
            <span className="items-center">{game.mode} : {game.type}<br/></span>
            <span className=''>arrows left/right: move<br/></span>
            <span className=''>arrow up: rotate<br/></span>
            <span className=''>arrow down: fast drop<br/></span>
            <span className=''>p       key : pause game<br/></span>
            <span className=''>okey : resume game<br/></span>
      </div>
    )
}

// export function nextBlock () {
//     return(
//         <div>

//         </div>
//     )
// }

// export function savedBlock() {
//     return(
//         <div>

//         </div>
//     )
// }

// export function spectatedPlayer() {
//     return(
//         <div>

//         </div>
//     )
// }