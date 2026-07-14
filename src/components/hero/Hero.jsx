import { useState } from "react";
import "./Hero.css";
import heroImg from "../../assets/hero_banner.jpg";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Qidirilmoqda: ${searchTerm}`);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      
      <div className="hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Yangi Mavsum Kolleksiyasi 2026</span>
          </div>
          
          <h1 className="hero-title">
            Siz Qidirgan <span className="highlight-text">Hamma Narsa</span> Shu Yerde!
          </h1>
          
          <p className="hero-description">
            Raxmatulla Market - eng so'nggi gadjetlar, zamonaviy kiyim-kechaklar va kundalik ehtiyojlar uchun sifatli mahsulotlarni hamyonbop narxlarda taklif etadi.
          </p>

          {/* Search Form */}
          <form className="hero-search-form" onSubmit={handleSearchSubmit}>
            <div className="search-input-wrapper">
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Mahsulot yoki brendni qidirish..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <button type="submit" className="search-btn">
              <span>Qidirish</span>
            </button>
          </form>

          {/* Quick Categories */}
          <div className="hero-categories">
            <span className="category-title">Ommabop:</span>
            <div className="category-tags">
              <span className="category-tag">Telefonlar</span>
              <span className="category-tag">Noutbuklar</span>
              <span className="category-tag">Aksessuarlar</span>
              <span className="category-tag">Kiyimlar</span>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <h3 className="stat-number">50K+</h3>
              <p className="stat-label">Mahsulotlar</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">15K+</h3>
              <p className="stat-label">Mijozlarimiz</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number">99%</h3>
              <p className="stat-label">Mamnuniyat</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Image / Banner */}
        <div className="hero-media">
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <img src={heroImg} alt="Raxmatulla Market Premium Banner" className="hero-image" />
            
            {/* Overlay card 1: Discount */}
            <div className="overlay-card discount-card">
              <div className="discount-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </div>
              <div className="discount-info">
                <span className="discount-title">Haftalik chegirmalar</span>
                <span className="discount-value">-30% gacha</span>
              </div>
            </div>

            {/* Overlay card 2: Reviews */}
            <div className="overlay-card reviews-card">
              <div className="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="review-text">10K+ ijobiy fikrlar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;