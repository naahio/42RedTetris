import Server from './server.ts';

const port = 3004;
const server = new Server(port);

server.start();