import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gpt from './pages/gpt';
import FourOFour from './pages/404.pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gpt />} /> {/* Use Gpt component as the landing page */}
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
};

export default App;