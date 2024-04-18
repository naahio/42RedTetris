import { Request, Response } from 'express';

export const handleLogin = (req: Request, res: Response): void => {
    const { room, player_name } = req.params;

    if (room && player_name)
        res.json({ success: true, message: 'Login successful!' });
    else
        res.status(400).json({ success: false, message: 'Invalid room or player name.' });
};
