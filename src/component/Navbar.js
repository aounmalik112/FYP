import React, { useState } from 'react'; // Import useState for managing dropdown state
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState); // Toggle dropdown visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" /> {/* Logo image */}
        <span>Secure Hub</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li className="dropdown">
          <a href="#modules" onClick={toggleDropdown}>Modules</a> {/* Toggle dropdown on click */}
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}> {/* Conditional class based on state */}
            <li><Link to="/integrity">Integrity in Filing System</Link></li>
            <li><Link to="/fractional">Fractional Ownership</Link></li>
            <li><Link to="/voting">Voting/Tokenization</Link></li>
            <li><Link to="/liquidity">Liquidity</Link></li>
            <li><Link to="/passport">Digital Passport</Link></li>
            <li><Link to="/transparency">Transparency</Link></li>
            <li><Link to="/transparency">construction</Link></li>
            <li><Link to="/transparency">ploting</Link></li>
          </ul>
        </li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li>
          <Link to="/signuppage" className="signup-button">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
