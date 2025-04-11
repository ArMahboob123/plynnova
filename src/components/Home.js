import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import portfolio1 from "../assets/homePageImages/portfolio1.jpg";
import portfolio2 from "../assets/homePageImages/portfolio2.jpg";
import portfolio3 from "../assets/homePageImages/portfolio3.jpg";
import "../css/Home.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if ("paintWorklet" in CSS) {
      CSS.paintWorklet.addModule("/gridPattern.js");
      CSS.paintWorklet.addModule("/roughBorder.js");
    }
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Luxurious Kitchen Design",
      description:
        "Premium custom cabinetry with marble countertops and modern fixtures",
      image: portfolio1,
      category: "Kitchen",
      route: "/portfolio",
    },
    {
      id: 2,
      title: "Contemporary Living Space",
      description:
        "Elegant built-in shelving with integrated smart lighting system",
      image: portfolio2,
      category: "Living Room",
      route: "/portfolio",
    },
    {
      id: 3,
      title: "Serene Master Suite",
      description:
        "Handcrafted wardrobe and floating bed frame with ambient lighting",
      image: portfolio3,
      category: "Bedroom",
      route: "/portfolio",
    },
  ];

  const handlePortfolioClick = (route) => {
    navigate(route);
  };

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Plynnova</h1>
            <p>Your trusted partner for all carpentry needs.</p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-overview">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Discover our comprehensive range of carpentry solutions</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chair"></i>
              </div>
              <h3>Custom Furniture</h3>
              <p>Bespoke furniture crafted to your specifications</p>
              <button
                className="service-btn"
                onClick={() => navigate("/services")}
              >
                Learn More
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Cabinetry</h3>
              <p>Custom cabinets and storage solutions</p>
              <button
                className="service-btn"
                onClick={() => navigate("/services")}
              >
                Learn More
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Renovations</h3>
              <p>Complete home renovation services</p>
              <button
                className="service-btn"
                onClick={() => navigate("/services")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Works</h2>
            <p>Explore our latest carpentry projects and craftsmanship</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item"
                onClick={() => handlePortfolioClick(item.route)}
                role="button"
                tabIndex={0}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <span className="category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="call-to-action">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Get in touch for a free consultation and quote</p>
            <button className="cta-button" onClick={() => navigate("/contact")}>
              Contact Us Today <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
