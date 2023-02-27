import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {MenuData} from "./MenuData.js";
import "./SidebarStyles.css";

class Sidebar extends Component {
    render() {
        return (
            <nav className="Sidebar">
                <ul className = "SidebarItems">
                    {MenuData.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a href = {item.url} className = {item.cName}>
                                    {item.title}
                                    <i className={item.icon}></i>
                                </a>
                            </li>
                        )
                    })}
            </ul>
            </nav>
        );
      }
}

export default Sidebar;