import React from 'react'
import "../Components/css/Navbar.css"
import { Link } from "react-router-dom";
import logo from '../images/LOGO.png'

const Navbar = () => {
  return (
    <>
      <div className="Nav_wrapper">
        <div className="Nav_logo">
          <img  src={logo} alt='logo'/>
        </div>
        <form>
          <input className="search_bar" type="text" placeholder="Search" />
          <input className="search_btn" type="submit" value="Search" />
        </form>
       <div className='signin'> <Link to='/Signin' >SignIn</Link></div>
      </div>
    </>


  )
}

export default Navbar



