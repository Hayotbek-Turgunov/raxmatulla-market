import React from 'react';
import './Banner.css';

const phones = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "$1,199",
    originalPrice: "$1,299",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800",
    features: ["A17 Pro chip", "Titanium design", "48MP camera"],
    badge: "New Arrival",
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: "$1,299",
    originalPrice: "$1,399",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
    features: ["Galaxy AI", "Titanium frame", "200MP camera"],
    badge: "Bestseller",
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    brand: "Google",
    price: "$999",
    originalPrice: "$1,099",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=800",
    features: ["Tensor G3", "Pro controls", "7 years updates"],
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: "$799",
    originalPrice: "$899",
    image: "https://images.unsplash.com/photo-1598327105854-c9431c94d0c9?auto=format&fit=crop&q=80&w=800",
    features: ["Snapdragon 8 Gen 3", "Hasselblad", "100W charge"],
    badge: "Value Pick",
  }
];

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-background">
        <div className="glow-circle circle-1"></div>
        <div className="glow-circle circle-2"></div>
        <div className="glow-circle circle-3"></div>
      </div>
      
      <div className="banner-container">
        <div className="banner-header">
          <h1 className="banner-title">
            <span className="text-gradient">Next-Gen</span> Smartphones
          </h1>
          <p className="banner-subtitle">
            Experience the future in the palm of your hand. Discover our premium collection with unbeatable prices.
          </p>
        </div>

        <div className="phone-grid">
          {phones.map((phone) => (
            <div key={phone.id} className="phone-card">
              <div className="card-glow"></div>
              
              {phone.badge && (
                <div className="card-badge">
                  <span>{phone.badge}</span>
                </div>
              )}
              
              <div className="card-image-wrapper">
                <img src={phone.image} alt={phone.name} className="card-image" />
                <div className="image-overlay"></div>
              </div>
              
              <div className="card-content">
                <div className="brand-label">{phone.brand}</div>
                <h3 className="phone-name">{phone.name}</h3>
                
                <div className="price-container">
                  <span className="current-price">{phone.price}</span>
                  {phone.originalPrice && (
                    <span className="original-price">{phone.originalPrice}</span>
                  )}
                </div>
                
                <ul className="feature-list">
                  {phone.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="buy-button">
                  <span>Add to Cart</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
