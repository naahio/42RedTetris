const Server = require('./Server');

const port = 3004; // Specify the port for the server
const server = new Server(port);

// Start the server
server.start();