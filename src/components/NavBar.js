import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <nav className="navbar">
      <h1 className="logo">Sai DineshChandra Devisetti</h1>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/awards">Awards</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
