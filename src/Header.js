import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import classes from './Header.module.css';
import logo from './domainera-color.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="Domainera Logo" className={classes.logoImage} />
      </div>
      <button className={classes.hamburger} onClick={toggleMenu}>
        <span className={menuOpen ? classes.barOpen : classes.bar}></span>
        <span className={menuOpen ? classes.barOpen : classes.bar}></span>
        <span className={menuOpen ? classes.barOpen : classes.bar}></span>
      </button>
      <nav className={`${classes.navmenu} ${menuOpen ? classes.navmenuOpen : ''}`}>
        <ul>
          <li><NavLink exact to="/" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Domain News</NavLink></li>
          <li><NavLink to="/blockchain" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Blockchain</NavLink></li>
          <li><NavLink to="/disputes" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Disputes</NavLink></li>
          <li><NavLink to="/aisection2" className={({ isActive }) => (isActive ? classes.activeLink : '')}>AI</NavLink></li>
          <li><NavLink to="/startup" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Startups</NavLink></li>
          <li><NavLink to="/security" className={({ isActive }) => (isActive ? classes.activeLink : '')}>Security</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
