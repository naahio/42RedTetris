import express, { Express } from 'express';
import { handleLogin } from './controller/controller.ts';
import path from 'path';

class Server {
    port: number;
    app: Express;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.setupMiddlewares();
        this.setupRoutes();
    }

    setupMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, 'client', 'build')));
    }

    setupRoutes(): void {
        this.app.get('/:room/:player_name', handleLogin);

        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
        });
    }

    start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;