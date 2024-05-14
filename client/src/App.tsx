import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import Layout from './layout/Layout';
import Queue from './pages/game/Queue';
import GamePlay from './pages/game/GamePlay';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/about" Component={AboutPage}/>
          <Route path="/contact" Component={ContactPage}/>
          <Route path="/Queue" Component={Queue}/>
          <Route path="/GamePlay" Component={GamePlay}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
