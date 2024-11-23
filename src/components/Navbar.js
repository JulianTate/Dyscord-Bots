import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onContactClick }) => {
  return (
    <div className="section-1__nav-bar-container">
      <div className="section-1__nav-bar">
        <p className="section-1__nav-link" id="section-1__contact" onClick={onContactClick}>
          Contact
        </p>
        <Link to="/" className="section-1__nav-link">
          Home
        </Link>
        <Link to="/products" className="section-1__nav-link">
          Products
        </Link>
        <a href="https://discord.gg/W8mHGcxsNs">
          <p className="section-1__nav-link" id="section-1__discord" >
            Join the discord
          </p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
