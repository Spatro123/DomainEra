import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from './domainera-color.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        <img src={logo} alt="Domainera Logo" className={classes.logoImage} />
      </NavLink>

      <button className={classes.hamburger} onClick={toggleMenu}>
        <span className={menuOpen ? classes.barOpen : classes.bar}></span>
        <span className={menuOpen ? classes.barOpen : classes.bar}></span>
        <span className={menuOpen ? classes.barOpen : classes.bar}></span>
      </button>

      <nav className={`${classes.navmenu} ${menuOpen ? classes.navmenuOpen : ''}`}>
        <ul>
          <li>
            <NavLink exact to="/" className={({ isActive }) => (isActive ? classes.activeLink : '')} onClick={closeMenu}>
              Domain News
            </NavLink>
          </li>
          <li>
            <NavLink to="/blockchain" className={({ isActive }) => (isActive ? classes.activeLink : '')} onClick={closeMenu}>
              Blockchain
            </NavLink>
          </li>
          <li>
            <NavLink to="/disputes" className={({ isActive }) => (isActive ? classes.activeLink : '')} onClick={closeMenu}>
              Disputes
            </NavLink>
          </li>
          <li>
            <NavLink to="/aisection2" className={({ isActive }) => (isActive ? classes.activeLink : '')} onClick={closeMenu}>
              AI
            </NavLink>
          </li>
          <li>
            <NavLink to="/security" className={({ isActive }) => (isActive ? classes.activeLink : '')} onClick={closeMenu}>
              Security
            </NavLink>
          </li>
          <li>
            <NavLink to="/startup" className={({ isActive }) => (isActive ? classes.activeLink : '')} onClick={closeMenu}>
              Glossary
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" className={({ isActive }) => (isActive ? classes.activeLink : '')} onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
