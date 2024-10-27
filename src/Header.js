import React from 'react';
import { NavLink } from 'react-router-dom'; 
import classes from './Header.module.css';
import logo from './domainera-color.png'; // Adjust this path if needed

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="Domainera Logo" className={classes.logoImage} />
      </div>
      <nav className={classes.navmenu}>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? classes.activeLink : '')}
            >
              Domain News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blockchain"
              className={({ isActive }) => (isActive ? classes.activeLink : '')}
            >
              Blockchain
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/disputes"
              className={({ isActive }) => (isActive ? classes.activeLink : '')}
            >
              Disputes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aisection2"
              className={({ isActive }) => (isActive ? classes.activeLink : '')}
            >
              AI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/startup" 
              className={({ isActive }) => (isActive ? classes.activeLink : '')}
            >
              Startups
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/security"
              className={({ isActive }) => (isActive ? classes.activeLink : '')}
            >
              Security
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
