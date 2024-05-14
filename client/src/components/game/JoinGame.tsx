import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { Game, Player } from "../../interfaces/data";

const JoinGame = () => {
  const master: Player ={
    id: 1,
    nickname: "Naahio",
    score: 0,
  }
  const [mode, setMode] = useState("Normal");
  const [type, setType] = useState("public");
  const navigate = useNavigate();

  const handleModeChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  const handleTypeChange = (e: RadioChangeEvent) => {
    setType(e.target.value);
  };

  const createGame = () => {
    const game: Game = {
    id: "RF78Fd",
    master: master,
    type: type,
    mode: mode,
    players: [master],
    };
    navigate("/GamePlay", { state: { game } });
  };

  return (
    <div className="flex flex-col m-2">
      <div className="flex flex-col m-2">
        <h2>Modes: </h2>
        <Flex vertical gap="middle" className="flex m-3">
          <Radio.Group
            defaultValue="Normal"
            buttonStyle="solid"
            className="space-x-2"
            onChange={handleModeChange}
            value={mode}
          >
            <Radio.Button value="Normal">Normal</Radio.Button>
            <Radio.Button value="Practice">Practice</Radio.Button>
            <Radio.Button value="Time Rush">Time Rush</Radio.Button>
            <Radio.Button value="Classic">Classic</Radio.Button>
          </Radio.Group>
        </Flex>
      </div>
      <div className="flex flex-col m-2">
        <h2>Type: </h2>
        <Radio.Group
          onChange={handleTypeChange}
          value={type}
          className="flex text-white m-3"
        >
          <Radio value="public" className="text-white">
            public
          </Radio>
          <Radio value="private" className="text-white">
            private
          </Radio>
        </Radio.Group>
      </div>
      <button
        className="rounded-md w-[30%] h-[40%] self-center bg-lightRed"
        onClick={createGame}
      >
        Start
      </button>
    </div>
  );
};

export default JoinGame;
