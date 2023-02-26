import './App.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import StandingsTable from './Components/StandingsTable';
//import NavBar from './Components/Navbar.js';

//<Standings />
function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Main App Component</h1>
      </div>
        <StandingsTable />
    </div>
  );
}


export default App;

