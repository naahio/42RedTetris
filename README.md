# Red Tetris

Red Tetris is a networked multiplayer Tetris game built using a full stack JavaScript software stack. The game allows multiple players to compete in real-time, with each player having their own playing field. The game is over when there is only one player left, who is then declared the winner.

## Table of Contents
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Testing](#testing)

## Technologies
This project is created with:
- Frontend: React Vite
- Backend: NestJS, GraphQL, PostgreSQL, TypeORM

## Setup
To run this project, install it locally using npm:

```bash
cd client
yarn install
yarn dev
```

```bash
cd server
yarn install
npm  start:dev
```

## Usage
Each player connects to a game using the following type of URL:

`http://<server_name_or_ip>:<port>/<room>/<player_name>`  

Where:

- `room` is the name of the game to join  
- `player_name` is the name of the player

## Testing
Unit tests cover at least 70% of the statements, functions, lines and at least 50% of branches. To run the tests:


