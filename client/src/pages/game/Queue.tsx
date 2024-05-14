import LeaderBoard from "../../components/game/LeaderBoard";
import PublicRoom from "../../components/game/PublicRoom";
import JoinGame from "../../components/game/JoinGame";


function Queue() {

    return (
        <div className="flex flex-row w-[90%] text-white h-[90%] bg-darkBlue2 mt-9 rounded-xl">
            <div className="flex flex-col w-[50%]">
                <div className="flex flex-col h-[60%] p-5">
                    <h2>Join public games : </h2>
                    <PublicRoom />
                </div>
                <div className="border-[0.2px] border-sidebar w-[75%] self-center"></div>
                <div className="flex p-5 flex-col h-[45%]">
                    <h2 className="text-white">Start game : </h2>
                    <JoinGame />
                </div>
            </div>
                <div className="flex flex-col border-[0.2px] border-sidebar h-[75%] self-center"></div>
                <div className="flex flex-col w-[50%] p-5">
                    <h2 className="">Score Board : </h2>
                    <LeaderBoard />
                </div>
            </div>
    )
}

export default Queue;
