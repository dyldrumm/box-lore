import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import AboutPage from './Pages/AboutPage.js';
import HomePage from './Pages/HomePage.js';
import Layout from './Pages/Layout.js';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <div className="Navbar">
        <Navbar/>
      </div>
      <div className="Sidebar">
        <SideBar />
      </div>
      <div className="StandingsTable">
        <StandingsTable />
      </div> */}

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="aboutpage" element={<AboutPage />} />
          <Route path="homepage" element={<HomePage />} />
      </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
