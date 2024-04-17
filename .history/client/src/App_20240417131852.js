import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                {
                    /* routes */
                }
                <Route path="/:room/:player_name" component={GamePage} />
            </div>
        </Router>
    );
}

function GamePage({ match }) {
    const { room, player_name } = match.params;
    
    // Use room and player_name as needed in your component
    return (
        <div>
            <h1>Welcome to {room}!</h1>
            <p>Player: {player_name}</p>
            {
                    /* game logic */
            }
        </div>
    );
}

export default App;
