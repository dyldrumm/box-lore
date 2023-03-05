import { Outlet, Link } from "react-router-dom";

import SideBar from '../Components/Sidebar/Sidebar.js';
import Navbar from "../Components/Navbar/NavBar.js";

const Layout = () => {
  return (
    <>
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="Sidebar">
        <SideBar />
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
