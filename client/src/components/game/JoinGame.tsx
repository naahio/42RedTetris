import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Game, Player } from "../../interfaces/Data";

const JoinGame = () => {
  const master: Player = {
    id: 1,
    nickname: "Naahio",
    score: 0,
  };
  const [mode, setMode] = useState("Normal");
  const [type, setType] = useState("public");
  const navigate = useNavigate();

  const handleModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="flex space-x-2">
          <label>
            <input
              type="radio"
              value="Normal"
              checked={mode === "Normal"}
              onChange={handleModeChange}
            />
            Normal
          </label>
          <label>
            <input
              type="radio"
              value="Practice"
              checked={mode === "Practice"}
              onChange={handleModeChange}
            />
            Practice
          </label>
          <label>
            <input
              type="radio"
              value="Time Rush"
              checked={mode === "Time Rush"}
              onChange={handleModeChange}
            />
            Time Rush
          </label>
          <label>
            <input
              type="radio"
              value="Classic"
              checked={mode === "Classic"}
              onChange={handleModeChange}
            />
            Classic
          </label>
        </div>
      </div>
      <div className="flex flex-col m-2">
        <h2>Type: </h2>
        <div className="flex space-x-2">
          <label>
            <input
              type="radio"
              value="public"
              checked={type === "public"}
              onChange={handleTypeChange}
            />
            public
          </label>
          <label>
            <input
              type="radio"
              value="private"
              checked={type === "private"}
              onChange={handleTypeChange}
            />
            private
          </label>
        </div>
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
