
import GameBoard from '../../components/game/GameBoard'
import { useTetris } from '../../hooks/useTetris';
import UpcomingBlocks from '../../components/game/UpcomingBlocks';
import { Game } from "../../interfaces/Data";
import { useLocation } from 'react-router-dom';
import { GameInfo } from '../../components/game/GameInfo';
import HoldBlock from '../../components/game/HoldBlock';

function GamePlay() {

    const { state } = useLocation()
    const game: Game = state.game;
    const {board, startGame, isPlaying, score, upcomingBlocks} = useTetris();

  
    return (
        <div className="flex  flex-col text-white items-center justify-center border w-[100%] ">
            <div className='flex '>
                <GameBoard currentBoard={board} />
                {isPlaying ? 
                    ( 
                    <div className='flex flex-col '>
                        <HoldBlock />
                        <UpcomingBlocks upcomingBlocks={upcomingBlocks} /> 
                        <div className='border bg-darkBlue3'>
                            <h2>score : {score}</h2>
                            <h2>Line : </h2>
                        </div>
                    </div>
                    ) :
                    (  <button onClick={startGame} className='text-white hover:text-lightRed'>Start Game</button> )
                }
            </div>
        </div>
    )
}

export default GamePlay;

