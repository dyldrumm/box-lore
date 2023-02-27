import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './Components/Sidebar/Sidebar.js';
import StandingsTable from './Components/StandingsTable/StandingsTable.js'
import Navbar from "./Components/Navbar/NavBar.js";

function App() {
  return (
    <div className="App">
    
      <div className="content">
        <h1>Main App Component</h1>
        <Navbar/>
      </div>
      <div className="Sidebar">
        <SideBar />
      </div>
      <div className="StandingsTable">
        <StandingsTable />
      </div>
    </div>
  );
}

export default App;
