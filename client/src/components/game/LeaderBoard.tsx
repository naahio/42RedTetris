import { useEffect, useState } from "react";
import { Player } from "../../interfaces/Data";
import axios from "axios";
import profile from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";


function LeaderBoard() {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:3004/Players');
                if (response.status === 200) {
                    setPlayers(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchPlayers();

        return () => {
        };
    }, [])

    return (
        <div className="flex flex-col items-center text-base h-full overflow-hidden">
            {
                players.map((player: Player) => (
                    <Link to="" className="flex flex-row bg-darkBlue3 hover:bg-lightRed w-[90%] rounded-xl justify-around items-center mt-2 h-[5%]">
                    {/* <div key={player.id} className="flex flex-row w-[100%] border rounded-xl"> */}
                        <h2>{player.id}</h2>
                        <img src={profile} className=" border border-lightRed rounded-full w-[42px] h-[42px] "/>
                        <h2>#{player.nickname}</h2>
                        <p className="text-gray text-sm">score : {player.score}</p>
                    {/* </div> */}
                    </Link>
                ))
            }
        </div>
    )
}

export default LeaderBoard;