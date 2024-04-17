import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return ( <
        Router >
        <
        div > { /* Define routes */ } <
        Route path = "/:room/:player_name"
        component = { GamePage }
        /> { / * Define other routes as needed * / } < /
        div > <
        /Router>
    );
}

function GamePage({ match }) {
    const { room, player_name } = match.params;

    return ( <
        div >
        <
        h1 > Welcome to { room }! < /h1> <
        p > Player: { player_name } < /p> { / * Add game logic here * / } < /
        div >
    );
}

export default App;