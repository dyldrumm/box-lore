import './App.css';
<<<<<<< Updated upstream
=======
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './Components/Sidebar/Sidebar.js';
import UpcomingGames from './Components/UpcomingGames/UpcomingGames.js'
import StandingsTable from './Components/StandingsTable/StandingsTable.js'
import Navbar from "./Components/Navbar/NavBar.js";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Main App Component</h1>
<<<<<<< Updated upstream
=======
        <Navbar/>
      </div>
      <div className="Sidebar">
        <SideBar />
      </div>
      
      <div className="UpcomingGames">
        <UpcomingGames />
      </div>

      <div className="StandingsTable">
        <StandingsTable />
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default App;
