
import GameBoard from '../../components/game/GameBoard'
import { useTetris } from '../../components/game/hooks/useTetris';

function PracticeGame() {

    const {board, startGame, isPlaying} = useTetris();


    return (
        <div className="flex flex-col text-white items-center justify-around">
            <h2> Practice Game </h2>
            <div className='restart '>
                {!isPlaying ? null:(
                <button onClick={startGame} className='text-white hover:text-lightRed'>restart</button>
                )}
            </div>
            <GameBoard currentBoard={board} />
            <div className='controls '>
                {isPlaying ? null:(
                    <button onClick={startGame} className='text-white hover:text-lightRed'>Start Game</button>
                )}
            </div>
        </div>
    )
}

export default PracticeGame;

