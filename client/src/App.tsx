import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import Layout from './layout/Layout';
// import Game from './components/game/GameBoard'
import Queue from './pages/game/Queue';
import PracticeGame from './pages/game/PracticeGame';
import { AuthProvider } from './context/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Button from './components/ui/Button';
function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Button />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/game" element={<Queue />} />
              <Route path="/Queue" element={<Queue />} />
              <Route path="/PracticeGame" element={<PracticeGame />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
