import { useEffect, useRef } from "react";


export function useInerval(callback: ()=> void, delay: number | null): void{
    const callbackRef = useRef(callback);

    useEffect(()=>{
        callbackRef.current = callback;
    }, [callback]);

    useEffect(()=>{
        if (delay === null) return;

        const intervalID = setInterval(()=> callbackRef.current(), delay);
        return () => clearInterval(intervalID);
    }, [delay]);
}