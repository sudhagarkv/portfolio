import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import MouseFollower from './components/MouseFollower';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <MouseFollower />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;