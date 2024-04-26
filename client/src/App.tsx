import './App.css';
//@ts-ignore
import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage.tsx';
import AboutPage from './components/AboutPage.tsx';
import HomePage from './components/HomePage.tsx';
import Layout from './Layout/Layout.tsx';
import Game from './components/game/GameBoad.tsx'
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/about" Component={AboutPage}/>
          <Route path="/contact" Component={ContactPage}/>
          <Route path="/game" Component={Game}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
