// filepath: src/components/Services.js
import React from 'react';
import '../css/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Custom Furniture',
      description: 'Bespoke furniture pieces crafted to your exact specifications and style preferences.',
      icon: 'fas fa-couch',
      features: ['Unique Design', 'Quality Materials', 'Perfect Fit']
    },
    {
      id: 2,
      title: 'Kitchen Remodeling',
      description: 'Complete kitchen renovations including custom cabinets, islands, and storage solutions.',
      icon: 'fas fa-utensils',
      features: ['Modern Designs', 'Efficient Storage', 'Premium Finishes']
    },
    {
      id: 3,
      title: 'Built-in Wardrobes',
      description: 'Custom-built wardrobes designed to maximize your space and match your interior.',
      icon: 'fas fa-door-closed',
      features: ['Space Optimization', 'Custom Shelving', 'Integrated Lighting']
    },
    {
      id: 4,
      title: 'Commercial Projects',
      description: 'Professional carpentry solutions for offices, shops, and commercial spaces.',
      icon: 'fas fa-building',
      features: ['Timely Delivery', 'Commercial Grade', 'Professional Finish']
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Expert Carpentry Solutions for Your Space</p>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul className="features-list">
              {service.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <i className="fas fa-star"></i>
            <h3>Quality Craftsmanship</h3>
            <p>Exceptional attention to detail in every project</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-clock"></i>
            <h3>Timely Delivery</h3>
            <p>Projects completed on schedule and within budget</p>
          </div>
          <div className="benefit-item">
            <i className="fas fa-tools"></i>
            <h3>Expert Team</h3>
            <p>Skilled carpenters with years of experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;