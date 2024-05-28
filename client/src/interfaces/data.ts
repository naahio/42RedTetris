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

export type SignUpForm ={
    firstName: string;
    lastName: string;
    nickName: string;
    email:  string;
    password: string;
}

export type OTPForm ={
    firstDegit: number;
    secondDegit: number;
    thirdDegit: number;
    fourthDegit:  number;
    fifthDegit: number;
    sixthDegit: number;
}

export type TimeDisplay ={
    hours: number;
    minutes: number;
    seconds: number;
}