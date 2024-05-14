
import GameBoard from '../../components/game/GameBoard'
import { useTetris } from '../../hooks/useTetris';
import UpcomingBlocks from '../../components/game/UpcomingBlocks';
import { Game } from "../../interfaces/Data";
import { useLocation } from 'react-router-dom';
import { GameInfo } from '../../components/game/GameInfo';

function GamePlay() {

    const { state } = useLocation()
    const game: Game = state.game;
    const {board, startGame, isPlaying, score, upcomingBlocks} = useTetris();


    return (
        <div className="flex flex-col text-white items-center justify-around">
            <h2 className='text-xl'> Practice Game </h2>
            <div className='restart '>
                {!isPlaying ? null:(
                <button onClick={startGame} className='text-white hover:text-lightRed'>restart</button>
                )}
            </div>
            <GameInfo game={game} />
            <h2>score : {score}</h2>

            <GameBoard currentBoard={board} />
            <div className='controls '>
                {isPlaying ? 
                    ( <UpcomingBlocks upcomingBlocks={upcomingBlocks} /> ) :
                    (  <button onClick={startGame} className='text-white hover:text-lightRed'>Start Game</button> )
                }
            </div>
        </div>
    )
}

export default GamePlay;

