import axios, { AxiosResponse } from "axios";
import { Room } from "./interfaces/Data";
import { useEffect, useState } from "react";

function PublicRoom() {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response: AxiosResponse = await axios.get('http://localhost:3004/Room');
                if (response.status === 200) {
                    setRooms(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchRooms();

        return () => {
        };
    }, []);

    return (
        <div className="w-full text-base">

            {
                rooms.map((room: Room) => (
                    <div key={room.id} className="flex flex-row justify-between border m-5 rounded-lg w-[80%]">
                        <div className="flex flex-col w-[80%]">
                            <h2>id : {room.uuID}</h2>
                            <h2>master : #{room.master}</h2>
                            <p className="text-gray text-sm">waiting : {room.members}</p>
                        </div>
                        <button className="border w-[30%] bg-joinBlue h-[99%] self-center m-2 rounded-lg">join</button>
                    </div>
                ))
            }
        </div>
    );
}

export default PublicRoom;
