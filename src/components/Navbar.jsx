import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import userIcon from '../images/userIcon.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="linkContainer">
        <h1>Bookstore CMS</h1>
        <ul className="navLinks">
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <img className="user-icon" src={userIcon} alt="user icon" />
    </nav>
  );
}

export default Navbar;
