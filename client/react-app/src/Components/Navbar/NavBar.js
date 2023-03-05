import {Component} from "react";
import { MenuData } from "./MenuData";
import "./NavBar.css";


class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1>
                    Box-Lore <i className=" fab fa-table"></i>
                    </h1>
                    <ul className="nav-menu">
                        {MenuData.map((item, index) => {
                            return(
                        <li key={index}>
                            <a href={item.url}
                            className={item.cName}>
                            <i className={item.icon}>
                           </i>{item.title}
                           </a>
                           </li>
                           );
                        })}
                    </ul>
            </nav>
        );
    }
}

export default Navbar