import React, { useState } from 'react'
import "../css/Navbar.css"
import "../css/Sidebar.css"
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from './SidebarData';
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      {/* Navbar */}
      <div className="Nav_wrapper nav_fix">
        <Link to='#' className='menu-bar'>
          <FaBars onClick={showSidebar} />
        </Link>
        <div className="Nav_logo">
          <Link to='/MainApp'>
            <img src='./images/LOGO.png' alt='logo' />
          </Link>
        </div>
        <form>
          <input className="search_bar" type="text" placeholder="Search" />
          <button className='search_btn'><FaSearch /></button>
        </form>
        <div className='signin'> <Link to='/Signup' ><MdAccountCircle /></Link></div>
      </div>

      {/* sidebar */}
      <nav className={sidebar ? 'side_bar_wrapper active' : 'side_bar_wrapper'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='bottom_content'>
          <p>About  Press  Copyright  Contact us  Creators  Advertise  Developers
            Terms  Privacy  Policy & Safety
            How Pro-Entertainment works
            Test new features
            © 2022 Google LLC</p>
        </div>
      </nav>
    </>
  )
}

export default Navbar



