import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
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
    <>
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
              <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
              <li><Link to="/services" onClick={() => setIsNavOpen(false)}>Services</Link></li>
              <li><Link to="/portfolio" onClick={() => setIsNavOpen(false)}>Portfolio</Link></li>
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

      {isNavOpen && <div className="overlay" onClick={toggleNav}></div>}
    </>
  );
}

export default Header;
