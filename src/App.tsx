import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CardRed from './pages/card/red';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* card router */}
        <Route path='/card/red' element={<CardRed />} />
      </Routes>
    </Router>
  );
};

export default App;