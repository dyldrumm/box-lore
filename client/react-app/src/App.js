import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './Components/Sidebar/Sidebar.js';
import StandingsTable from './Components/StandingsTable/StandingsTable.js'

function App() {
  return (
    <div className="App">
      <div className="content">
        <p></p>
      </div>
      <div className="StandingsTable">
        <StandingsTable />
      </div>
      <div className="Sidebar">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
