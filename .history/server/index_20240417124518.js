const Server = require('./Server');

const port = 3004;
const server = new Server(port);

// Start the server
server.start();