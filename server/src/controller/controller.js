"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogin = void 0;
var handleLogin = function (req, res) {
    var _a = req.params, room = _a.room, player_name = _a.player_name;
    if (room && player_name)
        res.json({ success: true, message: 'Login successful!' });
    else
        res.status(400).json({ success: false, message: 'Invalid room or player name.' });
};
exports.handleLogin = handleLogin;
