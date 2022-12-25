import { Sky } from '@react-three/drei';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bsmboo from './pages/card/Bsmboo';
import Justhis from './pages/card/Justhis';
import Mine from './pages/card/Mine';
import MonumentValley from './pages/card/MonumentValley';
import Museum from './pages/card/Museum';
import Note from './pages/card/Note';
import PlusEx from './pages/card/PlusEx';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        {/* my card router */}
        <Route path='/card/justhis' element={<Justhis />} />
        <Route path='/card/monument-valley' element={<MonumentValley />} />
        <Route path='/card/note' element={<Note />} />
        <Route path='/card/mine' element={<Mine />} />
        <Route path='/card/plus-ex' element={<PlusEx />} />
        <Route path='/card/museum' element={<Museum />} />
        <Route path='/card/bsmboo' element={<Bsmboo />} />
        <Route path='/card/sky' element={<Sky />} />
        {/* career card router */}
      </Routes>
    </Router>
  );
};

export default App;