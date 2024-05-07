
import { useState } from "react";
import { Link } from "react-router-dom";
import LeaderBoard from "../../components/game/LeaderBoard";
import PublicRoom from "../../components/game/PublicRoom";

export const RadioInput = ({
    id,
    label,
    onChange,
    className,
  }: {
    id: string;
    label: string;
    onChange: (e: any) => void;
    className?: string;
  }) => {
    return (
      <div className={
          'mr-6 min-w-[130px] items-center justify-start whitespace-nowrap sm:inline-flex ' +
          className
        } >
        <input
          type="radio"
          id={id}
          name="type"
          onChange={onChange}
        />
        <label htmlFor={id}
          className="ml-2 cursor-pointer whitespace-nowrap text-left" >
          {label}
        </label>
      </div>
    );
  };

function Queue() {

    const [normal, setNormalGame] = useState(false);
    const [NormalType, setNormalTypeGame] = useState("");
    //@ts-ignore
    const [ModeType, setModeTypeGame] = useState("");
    const [modes, setModeGame] = useState(false);
    
    const changeNormalType = (type: string) => {
        console.log(type);
        setNormalTypeGame(type);
    }
        //@ts-ignore

    const changeModeType = (type: string) => {
        setModeTypeGame(type);
    }

    const changeView = (pick : string) => {
        if (pick === "normal") {
            setNormalTypeGame("")
            setNormalGame(true);
            setModeGame(false);
        } else {
            setModeGame(true);
            setNormalGame(false);
        }
    }

    return (
        <div className="flex flex-row w-[90%] text-white h-[90%] bg-darkBlue2 mt-9 rounded-xl">
            <div className="flex flex-col w-[45%]">
                <div className="flex flex-col h-[60%] p-5">
                    <h2>Join public games : </h2>
                    <PublicRoom />
                </div>
                <div className="border-[0.2px] border-sidebar w-[75%] self-center"></div>
                <div className="flex p-5 flex-col ">
                    <h2 className="text-white">Start game : </h2>
                    <div className="flex flex-row justify-around  m-2">
                        <div className="flex flex-col  w-[50%]">
                            <button className="border border-lightRed active:bg-lightRed self-center text-white p-2 rounded-md max-w-[160px] mt-2 "
                                onClick={() => changeView("normal")}>Normal</button>
                             {normal && (<div className=" flex flex-col m-2">
                                {(NormalType != "private") && (<RadioInput
                                    id="public"
                                    label = "pubic"
                                    onChange = {changeNormalType} 
                                    />)}
                                {(NormalType != "public") && (<RadioInput
                                    id="private"
                                    label = "private"
                                    onChange = {changeNormalType} 
                                    />)}
                                  { 
                       NormalType &&  
                        (<Link to="/PracticeGame"> <button className=" border  border-lightRed 
                        active:bg-lightRed text-white p-2  rounded-md max-w-[160px] mt-2" 
                            >Start Game</button></Link>)}  
                            </div>)}
                        </div> 
                        <div className="flex flex-col  w-[50%]">
                            <button className=" border border-lightRed active:bg-lightRed text-white p-2 self-center rounded-md max-w-[160px] mt-2" 
                                onClick={() => changeView("mode")}>Modes</button>
                               
                            </div>
                        </div>
                    { 
                       modes &&  
                        (
                        <div>
                            <Link to="/PracticeGame"> <button className=" border  border-lightRed 
                            active:bg-lightRed text-white p-2  rounded-md max-w-[160px] mt-2" 
                            >Practice Game</button></Link>
                            <Link to="/PracticeGame"> <button className=" border  border-lightRed 
                            active:bg-lightRed text-white p-2  rounded-md max-w-[160px] mt-2" 
                            >Time Rush</button></Link>
                            <Link to="/PracticeGame"> <button className=" border  border-lightRed 
                            active:bg-lightRed text-white p-2  rounded-md max-w-[160px] mt-2" 
                            >Classic</button></Link>
                        </div>
                        )
                    
                    }
                    </div>
            </div>
                <div className="flex flex-col border-[0.2px] border-sidebar h-[75%] self-center"></div>
                    <h2>Score Board : </h2>
                    <LeaderBoard />
            </div>
    )
}

export default Queue;