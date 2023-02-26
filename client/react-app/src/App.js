import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './Components/Sidebar/Sidebar.js';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Main App Component</h1>
      </div>
      <SideBar />
    </div>
  );
}

export default App;
