import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.tsx';
import AboutPage from './components/AboutPage.tsx';
import ContactPage from './components/ContactPage.tsx';
import Layout from './layout/Layout.tsx'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/about" Component={AboutPage} />
                    <Route path="/contact" Component={ContactPage} />
                </Routes>
            </Layout>
        </Router> 
    );
}

function GamePage({ match }: {match: any}) {
    const { room, player_name } = match.params;

    return (
        <div>
            <h1>Welcome to {room}!</h1>
            <p>Player: {player_name}</p>
        </div>
    );
}

export default App;
