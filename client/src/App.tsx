import './App.css';
import  React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage.tsx';
import AboutPage from './components/AboutPage.tsx';
import HomePage from './components/HomePage.tsx';
import Layout from './Layout/Layout.tsx';
function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/about" Component={AboutPage}/>
          <Route path="/contact" Component={ContactPage}/>
        </Routes>
      </Layout>
  );
}

export default App;
