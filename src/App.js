// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import Search from './components/Search';



function App() {
  return (
    <main className='App'>
      <Routes>
          {/* exact ensures our home route is not affected by our other routes. no other / will be confused with our home route. */}
          <Route element={<Home />} path='/' exact />
          <Route element={<NasaPhoto />} path='/nasaphoto' />
          <Route element={<Search />} path='/search' />
      </Routes>
    </main>
  );
}

export default App;
