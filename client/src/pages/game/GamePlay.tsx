
import GameBoard from '../../components/game/GameBoard'
import { useTetris } from '../../hooks/useTetris';
import UpcomingBlocks from '../../components/game/UpcomingBlocks';
import { Game } from "../../interfaces/data";
import { useLocation } from 'react-router-dom';
// import { GameInfo } from '../../components/game/GameInfo';

function GamePlay() {

    const { state } = useLocation()
    const game: Game = state.game;
    const {board, startGame, isPlaying, score, upcomingBlocks, ClearedLines} = useTetris();
    {/* <div className='restart '>
        {!isPlaying ? null:(
        <button onClick={startGame} className='text-white hover:text-lightRed'>restart</button>
        )}
    </div> */}


    return (
        <div className="flex flex-col text-white items-center justify-center w-full rounded-lg bg-darkBlue1">
            <h2 className='text-xl'> {game.mode} Game </h2>

            <div className={`controls flex w-[45%] min-w-[439px]rounded-lg justify-center bg-darkBlue2 ${isPlaying ? "flex-row space-x-2" : "flex-col h-[60%]"}`}>
              <GameBoard currentBoard={board} />
                {isPlaying ? 
                    (
                      <div className='flex flex-col w-[40%] justify-around'>
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