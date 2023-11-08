import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gpt from './pages/gpt';
import FourOFour from './pages/404.pages';
import HomePage from './pages/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Gpt />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
};

export default App;
