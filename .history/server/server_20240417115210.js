const express = require('express');

function Server(port) {
    this.port = port;
    this.app = express();
    this.setupMiddlewares();
    this.setupRoutes();
}

Server.prototype.setupMiddlewares = function() {
    // Add necessary middlewares, e.g., CORS
    this.app.use(express.json());
};

Server.prototype.setupRoutes = function() {
    // Define a route to handle requests to the specified URL format
    this.app.get('/#/:room/:player_name', (req, res) => {
        const room = req.params.room;
        const player_name = req.params.player_name;

        // Handle the room and player name as needed
        res.json({ room, player_name });
    });

    // Define other routes as needed
};

Server.prototype.start = function() {
    this.app.listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
    });
};

module.exports = Server;