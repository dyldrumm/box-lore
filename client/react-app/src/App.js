import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import AboutPage from './Pages/AboutPage.js';
import HomePage from './Pages/HomePage.js';

import SideBar from './Components/Sidebar/Sidebar.js';
import StandingsTable from './Components/StandingsTable/StandingsTable.js'
import Navbar from "./Components/Navbar/NavBar.js";

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
          <Route index element={<HomePage />} />
          <Route path="./Pages/AboutPage.js" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
