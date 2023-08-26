import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../images/userIcon.svg';

function Navbar() {
  return (
    <nav className="navbar montsFont backgroundWhite borderBottomWhite">
      <div className="linkContainer">
        <h1 className="blueText">Bookstore CMS</h1>
        <ul className="navLinks">
          <li>
            <Link to="/" className="blackText montsFont">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories" className="blackText montsFont">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <img className="user-icon" src={userIcon} alt="user icon" />
    </nav>
  );
}

export default Navbar;
