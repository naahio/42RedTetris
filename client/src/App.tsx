import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';
// import Game from './components/game/GameBoard'
import Queue from './pages/game/Queue'
import PracticeGame from './pages/game/PracticeGame'
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/about" Component={AboutPage}/>
          <Route path="/contact" Component={ContactPage}/>
          {/* <Route path="/game" Component={Game}/> */}
          <Route path="/Queue" Component={Queue}/>
          <Route path="/PracticeGame" Component={PracticeGame}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
