import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'; // Ensure the SCSS file is linked
import { FaHome, FaInfoCircle, FaPlus, FaSearch, FaPhone } from 'react-icons/fa'; // Import FontAwesome icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">MultiMian</Link>
        </div>

        {/* Desktop Navbar Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/about"><FaInfoCircle /> About</Link></li>
          <li><Link to="/create"><FaPlus /> Create Story</Link></li>
          <li><Link to="/browse"><FaSearch /> Browse Stories</Link></li>
          <li><Link to="/contact"><FaPhone /> Contact Us</Link></li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
