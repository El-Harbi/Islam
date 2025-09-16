import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AiPage from './pages/AiPage';
import QuranPage from './pages/QuranPage';
import HadithPage from './pages/HadithPage';
import AdhkarPage from './pages/AdhkarPage';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="neon-loader">
          <div className="neon-text">الحربي</div>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai" element={<AiPage />} />
            <Route path="/quran" element={<QuranPage />} />
            <Route path="/hadith" element={<HadithPage />} />
            <Route path="/adhkar" element={<AdhkarPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;