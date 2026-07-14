import React, { useState, useEffect } from "react";
import "./DiscountProduct.css";

// SVG Icons
const HeartIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "#ff4757" : "none"}
    stroke={filled ? "#ff4757" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dp-svg-icon"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dp-svg-icon"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dp-svg-icon"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "#ffbc00" : "none"}
    stroke={filled ? "#ffbc00" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dp-star-icon"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dp-svg-icon"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const FireIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#ff4757"
    stroke="#ff4757"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dp-fire-icon"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
  </svg>
);

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Smart Watch V8 Pro",
    category: "Elektronika",
    originalPrice: 1200000,
    discountedPrice: 799000,
    discountPercent: 33,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    description: "Zamonaviy aqlli soat. Qon bosimi, puls o'lchagich, Bluetooth qo'ng'iroqlar, sport rejimlari va 10 kunlik batareya quvvati.",
    sold: 45,
    total: 60,
    rating: 4.8,
    reviews: 124,
    specs: {
      "Ekran o'lchami": "1.78 IPS",
      "Bluetooth versiyasi": "5.2",
      "Namlikdan himoya": "IP68",
      "Kafolat": "6 oy"
    }
  },
  {
    id: 2,
    name: "Sony ANC Wireless Headphones",
    category: "Elektronika",
    originalPrice: 3500000,
    discountedPrice: 2450000,
    discountPercent: 30,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    description: "Yovvoyi shovqinni bosuvchi (ANC) simsiz quloqchinlar. Bass effekti, ergonomik dizayn va 30 soatgacha uzluksiz ishlash.",
    sold: 24,
    total: 30,
    rating: 4.9,
    reviews: 86,
    specs: {
      "Turi": "Simsiz (ANC)",
      "Ulanish masofasi": "10 metr",
      "Zaryadlash vaqti": "1.5 soat",
      "Ishlash vaqti": "30 soatgacha"
    }
  },
  {
    id: 3,
    name: "Nike Air Max Sports",
    category: "Kiyim-kechak",
    originalPrice: 1800000,
    discountedPrice: 1199000,
    discountPercent: 33,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
    description: "Original Nike Air Max krossovkalari. Kundalik kiyish va yugurish uchun juda qulay, nafas oluvchi material va yengil taglik.",
    sold: 89,
    total: 100,
    rating: 4.7,
    reviews: 215,
    specs: {
      "Material": "Tekstil / Sintetika",
      "Fasl": "Bahor / Yoz",
      "Ishlab chiqarilgan": "Vyetnam",
      "Kafolat": "1 oy"
    }
  },
  {
    id: 4,
    name: "Mechanical RGB Keyboard",
    category: "Elektronika",
    originalPrice: 950000,
    discountedPrice: 570000,
    discountPercent: 40,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60",
    description: "Mexanik o'yin klaviaturasi. RGB yoritgichli, ko'k kalitli (Blue switch) tezkor bosilish tezligi va metall korpus.",
    sold: 12,
    total: 20,
    rating: 4.6,
    reviews: 58,
    specs: {
      "Kalit turi": "Blue Switch (Mechanical)",
      "Ulanish": "USB Type-C",
      "Yoritish": "Custom RGB",
      "Kafolat": "3 oy"
    }
  },
  {
    id: 5,
    name: "Urban Leather Backpack",
    category: "Aksessuarlar",
    originalPrice: 650000,
    discountedPrice: 390000,
    discountPercent: 40,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
    description: "Chidamli va suv o'tkazmaydigan charm ryukzak. Noutbuk va boshqa aksessuarlar uchun maxsus himoyalangan bo'limlari mavjud.",
    sold: 37,
    total: 50,
    rating: 4.5,
    reviews: 42,
    specs: {
      "Material": "Ekologik charm",
      "Noutbuk o'lchami": "15.6 dyuym",
      "Suvga chidamlilik": "Ha",
      "Kafolat": "1 oy"
    }
  },
  {
    id: 6,
    name: "Smart Sound Bar Audio",
    category: "Elektronika",
    originalPrice: 2100000,
    discountedPrice: 1470000,
    discountPercent: 30,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60",
    description: "Uy kinoteatri uchun yuqori sifatli akustik dinamik. Bluetooth, HDMI va toza 3D atrof-muhit ovozi, chuqur bas tizimi.",
    sold: 8,
    total: 15,
    rating: 4.7,
    reviews: 31,
    specs: {
      "Quvvati": "80W RMS",
      "Ulanishlar": "HDMI ARC, Optical, Aux, BT",
      "Boshqaruv": "Pult va Sensor",
      "Kafolat": "1 yil"
    }
  }
];

const DiscountProduct = () => {
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [toast, setToast] = useState({ visible: false, message: "" });
  
  // Real-time Countdown Timer
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Count down to midnight tonight
      const diff = midnight.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      setTimeLeft({ hours, minutes, seconds });
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);
  
  // Toast Helper
  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };
  
  // Wishlist Action
  const toggleLike = (id, e) => {
    e.stopPropagation();
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter(item => item !== id));
      showToast("Mahsulot saralanganlardan olib tashlandi");
    } else {
      setLikedProducts([...likedProducts, id]);
      showToast("Mahsulot saralanganlarga qo'shildi! ❤️");
    }
  };
  
  // Add to Cart
  const addToCart = (product, e) => {
    if (e) e.stopPropagation();
    showToast(`${product.name} savatga muvaffaqiyatli qo'shildi! 🛒`);
  };

  // Filter Categories
  const categories = ["Barchasi", "Elektronika", "Kiyim-kechak", "Aksessuarlar"];
  
  const filteredProducts = activeCategory === "Barchasi" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  // Format price helper
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  };

  return (
    <section className="dp-discount-section">
      <div className="dp-container">
        
        {/* Header Block */}
        <div className="dp-header">
          <div className="dp-title-area">
            <span className="dp-badge-top">
              <FireIcon /> Mega Chegirmalar
            </span>
            <h2 className="dp-main-title">Kunlik Chegirmali Mahsulotlar</h2>
            <p className="dp-sub-title">Faqat bugun amalda bo'ladigan eng katta chegirmalar va super takliflar!</p>
          </div>
          
          {/* Countdown Widget */}
          <div className="dp-timer-widget">
            <span className="dp-timer-label">Aksiya yakunlanishiga qoldi:</span>
            <div className="dp-countdown">
              <div className="dp-time-block">
                <span className="dp-time-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="dp-time-unit">soat</span>
              </div>
              <span className="dp-time-sep">:</span>
              <div className="dp-time-block">
                <span className="dp-time-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="dp-time-unit">daqiqa</span>
              </div>
              <span className="dp-time-sep">:</span>
              <div className="dp-time-block">
                <span className="dp-time-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="dp-time-unit">soniya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="dp-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`dp-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="dp-grid">
          {filteredProducts.map((product) => {
            const isLiked = likedProducts.includes(product.id);
            const soldPercentage = Math.round((product.sold / product.total) * 100);
            
            return (
              <div 
                key={product.id} 
                className="dp-card"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image Area with badges & action buttons */}
                <div className="dp-image-container">
                  <div className="dp-discount-badge">-{product.discountPercent}%</div>
                  <img src={product.image} alt={product.name} className="dp-image" />
                  
                  {/* Floating Action Buttons */}
                  <div className="dp-card-actions">
                    <button 
                      className={`dp-action-btn ${isLiked ? 'liked' : ''}`}
                      onClick={(e) => toggleLike(product.id, e)}
                      title="Saralanganlarga qo'shish"
                    >
                      <HeartIcon filled={isLiked} />
                    </button>
                    <button 
                      className="dp-action-btn"
                      onClick={() => setSelectedProduct(product)}
                      title="Batafsil ko'rish"
                    >
                      <EyeIcon />
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="dp-info">
                  <span className="dp-card-category">{product.category}</span>
                  <h3 className="dp-card-title">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="dp-rating">
                    <div className="dp-stars">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < Math.floor(product.rating)} />
                      ))}
                    </div>
                    <span className="dp-rating-num">{product.rating} ({product.reviews})</span>
                  </div>

                  {/* Price Block */}
                  <div className="dp-price-block">
                    <span className="dp-old-price">{formatPrice(product.originalPrice)}</span>
                    <span className="dp-new-price">{formatPrice(product.discountedPrice)}</span>
                  </div>

                  {/* Stock Progress Bar */}
                  <div className="dp-progress-block">
                    <div className="dp-progress-text">
                      <span>Sotilgan: <strong>{product.sold}</strong></span>
                      <span>Omborda: <strong>{product.total - product.sold}</strong></span>
                    </div>
                    <div className="dp-progress-bar-bg">
                      <div 
                        className="dp-progress-bar-fill" 
                        style={{ width: `${soldPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    className="dp-add-btn"
                    onClick={(e) => addToCart(product, e)}
                  >
                    <CartIcon />
                    Savatga qo'shish
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="dp-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="dp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="dp-modal-close" onClick={() => setSelectedProduct(null)}>
              <CloseIcon />
            </button>
            
            <div className="dp-modal-body">
              {/* Modal Left - Image */}
              <div className="dp-modal-image-sec">
                <div className="dp-modal-discount-tag">-{selectedProduct.discountPercent}% CHEGIRMA</div>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="dp-modal-img" />
              </div>
              
              {/* Modal Right - Details */}
              <div className="dp-modal-details-sec">
                <span className="dp-modal-cat">{selectedProduct.category}</span>
                <h2 className="dp-modal-title">{selectedProduct.name}</h2>
                
                {/* Rating */}
                <div className="dp-modal-rating">
                  <div className="dp-stars">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < Math.floor(selectedProduct.rating)} />
                    ))}
                  </div>
                  <span>{selectedProduct.rating} ball • {selectedProduct.reviews} ta sharh</span>
                </div>

                <div className="dp-divider"></div>

                {/* Price */}
                <div className="dp-modal-prices">
                  <span className="dp-modal-old-price">{formatPrice(selectedProduct.originalPrice)}</span>
                  <div className="dp-modal-new-row">
                    <span className="dp-modal-new-price">{formatPrice(selectedProduct.discountedPrice)}</span>
                    <span className="dp-modal-save-tag">
                      Siz tejaysiz: {formatPrice(selectedProduct.originalPrice - selectedProduct.discountedPrice)}
                    </span>
                  </div>
                </div>

                <p className="dp-modal-desc">{selectedProduct.description}</p>

                {/* Specifications */}
                <div className="dp-modal-specs">
                  <h4>Xususiyatlari:</h4>
                  <ul>
                    {Object.entries(selectedProduct.specs).map(([key, val]) => (
                      <li key={key}>
                        <strong>{key}:</strong> {val}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stock Left */}
                <div className="dp-modal-stock-widget">
                  <div className="dp-modal-stock-info">
                    <span>Aksiya shoshiling! Qolgan dona: <strong>{selectedProduct.total - selectedProduct.sold} ta</strong></span>
                  </div>
                  <div className="dp-progress-bar-bg">
                    <div 
                      className="dp-progress-bar-fill" 
                      style={{ width: `${((selectedProduct.sold) / selectedProduct.total) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="dp-modal-actions-row">
                  <button 
                    className="dp-modal-add-btn"
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                  >
                    <CartIcon /> Savatga qo'shish
                  </button>
                  <button 
                    className={`dp-modal-fav-btn ${likedProducts.includes(selectedProduct.id) ? 'liked' : ''}`}
                    onClick={(e) => toggleLike(selectedProduct.id, e)}
                  >
                    <HeartIcon filled={likedProducts.includes(selectedProduct.id)} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <div className={`dp-toast ${toast.visible ? 'visible' : ''}`}>
        <div className="dp-toast-content">
          <div className="dp-toast-icon">✓</div>
          <span className="dp-toast-msg">{toast.message}</span>
        </div>
      </div>

    </section>
  );
};

export default DiscountProduct;
