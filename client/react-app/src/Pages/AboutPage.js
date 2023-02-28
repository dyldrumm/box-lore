import './AboutPage.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import SideBar from '../Components/Sidebar/Sidebar.js';
import About from '../Components/About/About.js'
import Navbar from "../Components/Navbar/NavBar.js";

function AboutPage() {
    return (
    <div className="AboutPage">
      <div className="About">
        <About />
      </div>
    </div>
    );
}

export default AboutPage;