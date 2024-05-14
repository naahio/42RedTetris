import { Game } from "../../interfaces/data";

interface GameInfoProps {
    game: Game;
  }

export const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
    return (
        <div>
            <h3>Mode : {game.mode}</h3>
            <h3>type : {game.type}</h3>
            <h3>master : {game.master.nickname}</h3>
        </div>
    )
}


export function nextBlock () {
    return(
        <div>

        </div>
    )
}

export function savedBlock() {
    return(
        <div>

        </div>
    )
}

export function spectatedPlayer() {
    return(
        <div>

        </div>
    )
}