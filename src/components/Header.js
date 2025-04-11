import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // <-- Image logo
import '../css/Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Plynnova Logo" className="logo-image" />
            <div className="logo-text">
              <span className="company-name">Plynnova</span>
              <span className="company-tagline">Crafting Spaces, Innovating with Wood</span>
            </div>
          </Link>
        </div>

        <nav className={`main-nav ${isNavOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li className="contact-btn">
              <Link to="/contact">Get Quote</Link>
            </li>
          </ul>
        </nav>

        <button 
          className={`hamburger ${isNavOpen ? 'open' : ''}`} 
          onClick={toggleNav}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
