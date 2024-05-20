export type Room = {
    mode: string;
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

export type Game ={
    id: string;
    master: Player;
    type: string;
    mode: string;
    players: Array<Player>;
}