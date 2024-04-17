const express = require('express');

function Server(port) {
    this.port = port;
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
}

Server.prototype.setupMiddlewares = function() {
    this.app.use(express.json());
};

Server.prototype.setupRoutes = function() {

    this.app.get('/#/:room/:player_name', (req, res) => {
        const room = req.params.room;
        const player_name = req.params.player_name;


        res.json({ room, player_name });
    });

};

Server.prototype.start = function() {
    this.app.listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
    });
};

module.exports = Server;