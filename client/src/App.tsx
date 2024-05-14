import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import Layout from './layout/Layout';
import Queue from './pages/game/Queue';;
import GamePlay from './pages/game/GamePlay';;
import { AuthProvider } from './context/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" Component={AboutPage} />
              <Route path="/contact" Component={ContactPage} />
              <Route path="/Queue" Component={Queue} />
              <Route path="/GamePlay" Component={GamePlay} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
