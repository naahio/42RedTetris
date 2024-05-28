import { Game } from "../../interfaces/data";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface GameInfoProps {
    game: Game;
    setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const GameInfo: React.FC<GameInfoProps> = ({ game, setShowSignup }) => {
    return (
        <div className="border rounded-lg w-[30%] text-center slef-ends border-lightRed">
            <IoMdCloseCircleOutline onClick={() => setShowSignup(false)} className="cursor-pointer"/>
            <span>{game.mode} : {game.type}</span><br/>
            <span className='text-red-600	'>arrows left/right</span> : move<br/>
            <span className='text-red-600	'>arrow up</span> : rotate<br/>
            <span className='text-red-600	'>arrow down</span> : fast drop<br/>
            <span className='text-red-600	'>p</span>        key : pause game<br/>
            <span className='text-red-600	'>o</span> key : resume game<br/>
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