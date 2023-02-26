import './App.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import StandingsTable from './Components/Components.js';
import NavBar from './Components/Navbar.js';
=======

import React from "react";
//<Standings />
function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Main App Component</h1>
          <Standings />
      </div>
      <StandingsTable />
    </div>
  );
}


export default App;

