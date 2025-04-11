import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      const headerHeight = scrolled ? '60px' : '80px';
      document.documentElement.style.setProperty('--header-height-dynamic', headerHeight);
    };

    handleScroll(); // Set initial value
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
