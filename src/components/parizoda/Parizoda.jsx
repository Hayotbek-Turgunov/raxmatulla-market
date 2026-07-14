import React from "react";
import "./Parizoda.css";

const productsData = [
  {
    id: 1,
    name: "Rose Dew Glow Serum",
    description: "Hydrating facial serum with pure rose extract for a natural glow.",
    price: 29.99,
    oldPrice: 39.99,
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=500&auto=format&fit=crop&q=60",
    rating: 4.8
  },
  {
    id: 2,
    name: "Midnight Repair Eye Cream",
    description: "Anti-aging overnight formula to rejuvenate and brighten tired eyes.",
    price: 34.99,
    oldPrice: 45.00,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60",
    rating: 4.9
  },
  {
    id: 3,
    name: "Hydra-Boost Gel Moisturizer",
    description: "Lightweight daily hydration boost with intense hyaluronic acid.",
    price: 24.99,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=500&auto=format&fit=crop&q=60",
    rating: 4.7
  },
  {
    id: 4,
    name: "Chamomile Cleansing Balm",
    description: "Gentle melt-away makeup remover balm that calms irritated skin.",
    price: 19.99,
    oldPrice: 25.00,
    image: "https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  },
  {
    id: 5,
    name: "Vitamin C Brightening Mask",
    description: "Revitalizing skin treatment for ultimate radiance and even skin tone.",
    price: 27.99,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60",
    rating: 4.8
  },
  {
    id: 6,
    name: "Lavender Soothing Toner",
    description: "Calms and balances skin pH with organic lavender water.",
    price: 18.99,
    oldPrice: 22.50,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=60",
    rating: 4.5
  }
];

const Parizoda = () => {
  return (
    <div className="parizoda-section">
      <div className="parizoda-grid">
        {productsData.map((product) => (
          <div key={product.id} className="parizoda-card">
            <div className="parizoda-img-container">
              <img src={product.image} alt={product.name} className="parizoda-img" />
              {product.oldPrice && (
                <span className="parizoda-badge">Sale</span>
              )}
            </div>
            <div className="parizoda-info">
              <div className="parizoda-header">
                <h3 className="parizoda-title">{product.name}</h3>
                <span className="parizoda-rating">★ {product.rating}</span>
              </div>
              <p className="parizoda-desc">{product.description}</p>
              <div className="parizoda-footer">
                <div className="parizoda-price-box">
                  {product.oldPrice && (
                    <span className="parizoda-old-price">${product.oldPrice.toFixed(2)}</span>
                  )}
                  <span className="parizoda-price">${product.price.toFixed(2)}</span>
                </div>
                <button className="parizoda-btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parizoda;

