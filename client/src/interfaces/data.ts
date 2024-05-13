export type Room = {
    id: number;
    uuID: string;
    master: string;
    members: number;
}

export type Player ={
    id:number;
    nickname:string;
    score?:number;
}