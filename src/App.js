import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TodaysPhoto from './components/TodaysPhoto';
import Search from './components/Search';
import NavBar from './components/NavBar';



function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
          {/* exact ensures our home route is not affected by our other routes. no other / will be confused with our home route. */}
          <Route element={<Home />} path='/' exact />
          <Route element={<TodaysPhoto />} path='/today' />
          <Route element={<Search />} path='/search' />
      </Routes>
    </div>
  );
}

export default App;
