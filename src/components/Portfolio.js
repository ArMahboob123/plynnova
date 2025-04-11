import React, { useState, useEffect } from 'react';
import kitchen from '../assets/portfolioImages/portfolio1.jpg';
import livingroom from '../assets/portfolioImages/portfolio2.jpg';
import bedroom from '../assets/portfolioImages/portfolio3.jpg';
import commercial from '../assets/portfolioImages/commercial.jpg';
import outdoor from '../assets/portfolioImages/outdoor.jpg';
import bathroom from '../assets/portfolioImages/bathroom.jpg';
import '../css/Portfolio.css';

function Portfolio() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const portfolioImages = [
    kitchen,
    bedroom,
    commercial,
    livingroom,
    outdoor,
    bathroom,
  ];

  return (
    <main className={`portfolio-page ${animate ? 'fade-in' : ''}`}>
      <div className="page-hero">
        <h1>Our Portfolio</h1>
        <p>Visual showcase of our work</p>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-grid only-images">
          {portfolioImages.map((image, index) => (
            <div key={index} className="portfolio-item simple">
              <img src={image} alt={`Project ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
