import React from 'react'
import "../css/Navbar.css"
import { Link } from "react-router-dom";
import logo from '../images/LOGO.png'
import {FaBars, FaSearch}  from "react-icons/fa";
import {MdAccountCircle}  from "react-icons/md";
const Navbar = () => {
  return (
    <>


      <Link to='#' className='menu-bar'>
        <FaBars/>
      </Link>

      <div className="Nav_wrapper">
      <Link to='#' className='menu-bar'>
        <FaBars/>
      </Link>
        <div className="Nav_logo">
          <img  src={logo} alt='logo'/> 
        </div>
        <form>
          <input className="search_bar" type="text" placeholder="Search" />
          <button className='search_btn'><FaSearch/></button>
        </form>
       <div className='signin'> <Link to='/Signin' ><MdAccountCircle/></Link></div>
      </div>
    </>


  )
}

export default Navbar



