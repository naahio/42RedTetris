
import GameBoard from '../../components/game/GameBoard'
import { useTetris } from '../../hooks/useTetris';
import UpcomingBlocks from '../../components/game/UpcomingBlocks';
import { Game } from "../../interfaces/data";
import { useLocation } from 'react-router-dom';
import HoldBlock from '../../components/game/HoldBlock';
import TimeCounter from '../../components/game/TimeCounter';
import { useState } from 'react';
import { GameInfo } from '../../components/game/GameInfo';
import { FaCircleInfo } from "react-icons/fa6";

function GamePlay() {

    const { state } = useLocation()
    const [stopTimer, setStopTimer] = useState(false);
    const [showGameInfo, setShowGameInfo] = useState(false);
    const game: Game = state.game;
    const {board, startGame, isPlaying, score, upcomingBlocks, ClearedLines} = useTetris();

    {/* <div className='restart '>
        {!isPlaying ? null:(
        <button onClick={startGame} className='text-white hover:text-lightRed'>restart</button>
        )}
    </div> */}

    return (
        <div className="flex flex-col text-white rounded-lg items-center justify-around w-full  bg-darkBlue1">
            {
              showGameInfo ? (<GameInfo game={game} setShowSignup={setShowGameInfo} />)
              :( <FaCircleInfo onClick={() => {setShowGameInfo(true), setStopTimer(true)}} className='cursor-pointer'/>)
            }
            <div className={`controls flex w-[45%] min-w-[439px] border justify-around rounded-xl bg-darkBlue2 ${isPlaying ? "flex-row space-x-2" : "flex-col h-[70%]"}`}>
              <GameBoard currentBoard={board} />
                {isPlaying ? 
                    (
                      <div className='flex flex-col w-[40%] justify-around'>
                        {(game.mode == "Time Rush") && !stopTimer && <TimeCounter setStopTimer={setStopTimer}/>}
                        {(game.mode == "Classic") && <HoldBlock />}
                        <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
                        <div className='flex flex-col bg-darkBlue3 rounded-md items-center justify-center h-[20%]'>
                          <h2> score</h2>
                          <p className='border rounded-lg w-[80%] text-center'>{score}</p>
                          <h2> Lines</h2>
                          <p className='border rounded-lg w-[80%] text-center'>{ClearedLines}</p>
                        </div>
                      </div>
                  ) :
                    (  <button onClick={startGame} className='text-white border max-h-[10%] self-center border-lightRed rounded-md hover:bg-lightRed'>Start Game</button> )
                }
            </div>
        </div>
    )
}

export default GamePlay;