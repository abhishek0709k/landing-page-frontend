import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router';
import { NavLink } from "react-router-dom"
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toggleSlider, setToggleSlider] = useState(false);
  const handleToggleSlider = ()=>{
    setToggleSlider(!toggleSlider)
  }
  return (
    <nav className="navbar">
      <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")}>Home</NavLink>
        
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")}>About</NavLink>
        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "notActive")}>Contact</NavLink>
        <NavLink to='/api/signup' className={({ isActive }) => (isActive ? "active" : "notActive")}>Signup</NavLink>
        <div className="dropdown">
          <button className="dropbtn" onClick={handleToggleSlider}>Gigs</button>
          { toggleSlider &&
            <div className="dropdown-content">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")}>Design</NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")}>Development</NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")}>Marketing</NavLink>
          </div>}
        </div>
      </div>
      
      <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;