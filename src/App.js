// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto'


function App() {
  return (
    <div>
      <Routes>
          {/* exact ensures our home route is not affected by our other routes. no other / will be confused with our home route. */}
          <Route element={<Home />} path='/' exact />
          <Route element={<NasaPhoto />} path='/nasaphoto' exact />
      </Routes>
    </div>
  );
}

export default App;
