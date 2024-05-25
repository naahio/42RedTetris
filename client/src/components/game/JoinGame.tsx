import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Game, Player } from "../../interfaces/data";

const JoinGame = () => {
  const master: Player = {
    id: 1,
    nickname: "Naahio",
    score: 0,
  };
  const [mode, setMode] = useState("Normal");
  const [type, setType] = useState("public");
  const navigate = useNavigate();

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
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
        <div className="flex flex-col tx:flex-row space-y-2 tx:space-x-2 items-center">
          <button
            className={`py-2 px-4 border text-[10px] md:text-[14px] max-w-[40%] rounded ${mode === "Normal" ? "bg-lightRed border-lightRed text-white" : "bg-darkBlue2 border-lightRed"}`}
            onClick={() => handleModeChange("Normal")}
          >
            Normal
          </button>
          <button
            className={`py-2 px-4 border text-[10px] md:text-[14px] max-w-[40%] rounded ${mode === "Practice" ? "bg-lightRed border-lightRed text-white" : "bg-darkBlue2 border-lightRed"}`}
            onClick={() => handleModeChange("Practice")}
          >
            Practice
          </button>
          <button
            className={`py-2 px-4 border text-[10px] md:text-[14px] max-w-[40%] rounded ${mode === "Time Rush" ? "bg-lightRed border-lightRed text-white" : "bg-darkBlue2 border-lightRed"}`}
            onClick={() => handleModeChange("Time Rush")}
          >
            Time Rush
          </button>
          <button
            className={`py-2 px-4 border text-[10px] md:text-[14px] max-w-[40%] rounded ${mode === "Classic" ? "bg-lightRed border-lightRed text-white" : "bg-darkBlue2 border-lightRed"}`}
            onClick={() => handleModeChange("Classic")}
          >
            Classic
          </button>
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
