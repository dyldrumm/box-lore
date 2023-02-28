import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {MenuData} from "./MenuData.js";
import { FaBeer } from 'react-icons/fa';
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