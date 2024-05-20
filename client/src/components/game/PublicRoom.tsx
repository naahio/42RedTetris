import axios, { AxiosResponse } from 'axios';
import { Room } from '../../interfaces/data';
import { useEffect, useState } from 'react';

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

    return () => {};
  }, []);

    return (
        <div id="style-5" className="flex flex-col scrollbar items-center overflow-hidden overflow-y-auto scroll-hidden scrollbar-hide">
            {
                rooms.map((room: Room) => (
                    <div key={room.id} className="flex flex-row justify-around bg-darkBlue3 m-2 rounded-lg w-[80%]">
                        <div className="flex flex-col w-[80%] text-[15px] m-1">
                            <h2>MODE : {room.mode}</h2>
                            <h2>Master : #{room.master}</h2>
                            <p className="text-lightGray text-opacity-20 text-sm">ID: {room.uuID} | waiting : {room.members}</p>
                        </div>
                        <button className="border w-[30%] bg-joinBlue self-center m-2 rounded-lg">join</button>
                    </div>
                ))
            }
        </div>
    );
}

export default PublicRoom;
