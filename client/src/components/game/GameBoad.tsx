
function GameBoard() {
    return (
        <div className="flex flex-row justify-around items-center w-full ">
            <div className="border w-[30%] h-[60%] text-center rounded-md border-darkBlue3 text-lightRed">
                <span className="border-b">spectate player 1</span>
            </div>
            <div className="border w-[30%] h-[60%] text-center rounded-md border-darkBlue3 text-lightRed">
                <span className="border-b">Game</span>
            </div>
            <div className="border w-[30%] h-[60%] text-center rounded-md border-darkBlue3 text-lightRed">
                <span className="border-b">spectate player 2</span>
            </div>
        </div>
    );
}

export default GameBoard;