
import { TimeDisplay } from "../../interfaces/data";

interface StopTimer {
    setStopTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

function TimeCounter({setStopTimer}: StopTimer) {
    
    let Timer: TimeDisplay ={
        hours:0,
        minutes: 0,
        seconds: 45,
    }
    if (Timer.seconds == 0) {
        setStopTimer(true);
    }
    return (
        <div className="flex border rounded-md border-lightRed space-x-1  max-w-[200px] items-center justify-center">
            <div className="items-center ">{Timer.hours} : </div>
            <div className="items-center "> {Timer.minutes} : </div>
            <div className="items-center ">{Timer.seconds}</div>
        </div>
    )
}


export default TimeCounter;