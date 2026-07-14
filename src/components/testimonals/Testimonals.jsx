import { useState, useEffect } from "react";
import "./Testimonals.css";

const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: "Asadbek Jo'rayev",
    role: "Doimiy Mijoz",
    rating: 5,
    comment: "Raxmatulla Market - haqiqiy qulaylik! Buyurtma berganimdan so'ng 2 soat ichida eshigim tagigacha bepul yetkazib berishdi. Mahsulot sifati esa shunchaki ajoyib, hammasi yangi va sarxil.",
    date: "Bugun",
    tag: "Yetkazib berish",
    initials: "AJ",
    color: "#ff4b2b",
  },
  {
    id: 2,
    name: "Dilnoza Rustamova",
    role: "Xaridor",
    rating: 5,
    comment: "Do'kondagi narxlar boshqa joylarga qaraganda ancha arzon va qulay. Ayniqsa haftalik chegirmalar va aksiyalar hamyonbop bo'lyapti. Do'stlarimga ham tavsiya qildim!",
    date: "2 kun avval",
    tag: "Narxlar",
    initials: "DR",
    color: "#3f51b5",
  },
  {
    id: 3,
    name: "Sardor Umrzoqov",
    role: "Tadbirkor",
    rating: 4,
    comment: "Mijozlarga xizmat ko'rsatish va qo'llab-quvvatlash jamoasi juda yuqori darajada. Savollarimga tez va tushunarli javob olishga muvaffaq bo'ldim. Mahsulot turlari juda ko'p.",
    date: "1 hafta avval",
    tag: "Xizmat",
    initials: "SU",
    color: "#00bcd4",
  },
  {
    id: 4,
    name: "Kamola Aliyeva",
    role: "Doimiy Mijoz",
    rating: 5,
    comment: "Mevalar, sabzavotlar va sut mahsulotlari har doim juda toza va yangi. Qadoqlash sifati ham yuqori. Raxmatulla-marketdan har doim ko'nglim to'q holda xarid qilaman.",
    date: "3 kun avval",
    tag: "Sifat",
    initials: "KA",
    color: "#4caf50",
  },
];

const Testimonals = () => {
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem("raxmatulla_testimonials");
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [activeTag, setActiveTag] = useState("Barchasi");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    role: "Xaridor",
    rating: 5,
    comment: "",
    tag: "Sifat",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("raxmatulla_testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  // Get Initials and Random Color for new testimonial
  const getRandomColor = () => {
    const colors = ["#ff4b2b", "#3f51b5", "#00bcd4", "#4caf50", "#9c27b0", "#ff9800", "#e91e63"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name.trim()) {
      setFormError("Iltimos, ismingizni kiriting.");
      return;
    }
    if (newReview.name.trim().length < 3) {
      setFormError("Ism kamida 3 ta harfdan iborat bo'lishi kerak.");
      return;
    }
    if (!newReview.comment.trim()) {
      setFormError("Iltimos, fikringizni yozib qoldiring.");
      return;
    }
    if (newReview.comment.trim().length < 10) {
      setFormError("Fikringiz kamida 10 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    const createdReview = {
      id: Date.now(),
      name: newReview.name.trim(),
      role: newReview.role,
      rating: Number(newReview.rating),
      comment: newReview.comment.trim(),
      date: "Hozirgina",
      tag: newReview.tag,
      initials: getInitials(newReview.name.trim()) || "M",
      color: getRandomColor(),
    };

    setTestimonials((prev) => [createdReview, ...prev]);
    setSuccessMsg("Fikringiz muvaffaqiyatli qo'shildi!");
    setFormError("");

    // Reset Form
    setTimeout(() => {
      setIsModalOpen(false);
      setNewReview({
        name: "",
        role: "Xaridor",
        rating: 5,
        comment: "",
        tag: "Sifat",
      });
      setSuccessMsg("");
    }, 1500);
  };

  // Tags for filtering
  const tags = ["Barchasi", "Sifat", "Yetkazib berish", "Narxlar", "Xizmat"];

  // Filter and Sort Logic
  const filteredTestimonials = testimonials
    .filter((item) => {
      const matchesTag = activeTag === "Barchasi" || item.tag === activeTag;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "highest-rating") {
        return b.rating - a.rating;
      }
      if (sortBy === "lowest-rating") {
        return a.rating - b.rating;
      }
      // default: newest
      return b.id - a.id;
    });

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Header Section */}
        <div className="testimonials-header">
          <span className="testimonials-subtitle">Mijozlarimiz fikrlari</span>
          <h2 className="testimonials-title">Biz haqimizda nima deyishadi?</h2>
          <p className="testimonials-description">
            Raxmatulla Market sifatli mahsulotlar va yuqori xizmat ko'rsatish orqali mijozlar ishonchini qozonib kelmoqda.
          </p>
          <div className="header-divider"></div>
        </div>

        {/* Control Panel (Search, Filter, Sort, Add Button) */}
        <div className="testimonials-controls">
          <div className="search-sort-wrapper">
            <div className="search-bar">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Fikrlarni qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="sort-dropdown">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Eng yangilari</option>
                <option value="highest-rating">Eng yuqori reyting</option>
                <option value="lowest-rating">Eng past reyting</option>
              </select>
            </div>
          </div>

          <div className="tags-container">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`tag-btn ${activeTag === tag ? "active" : ""}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <button className="add-review-btn" onClick={() => setIsModalOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="btn-icon">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Fikr qoldirish
          </button>
        </div>

        {/* Testimonials Grid */}
        {filteredTestimonials.length > 0 ? (
          <div className="testimonials-grid">
            {filteredTestimonials.map((item) => (
              <div className="testimonial-card" key={item.id}>
                {/* Quote Icon Background */}
                <div className="quote-icon-bg">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.961l.653 1.414c-3.272 1.258-4.837 3.397-4.837 6.406h5.83v10.532h-10.646zm-11 0v-7.391c0-5.704 3.748-9.762 9-10.961l.652 1.414c-3.272 1.258-4.837 3.397-4.837 6.406h5.83v10.532h-10.645z" />
                  </svg>
                </div>

                <div className="card-header">
                  <div className="user-avatar" style={{ backgroundColor: item.color || "#4caf50" }}>
                    {item.initials}
                  </div>
                  <div className="user-details">
                    <h4 className="user-name">{item.name}</h4>
                    <span className="user-role">{item.role}</span>
                  </div>
                  <div className="card-tag">{item.tag}</div>
                </div>

                <div className="card-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`star-icon ${i < item.rating ? "star-active" : ""}`}
                      viewBox="0 0 24 24"
                      fill={i < item.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>

                <p className="card-comment">"{item.comment}"</p>

                <div className="card-footer">
                  <span className="card-date">{item.date}</span>
                  <div className="verified-buyer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="check-icon">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Xaridor tasdiqlangan
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="no-results-icon">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <h3>Fikrlar topilmadi</h3>
            <p>Qidiruv shartlarini o'zgartiring yoki birinchilardan bo'lib fikr qoldiring!</p>
          </div>
        )}

        {/* Modal Window for Add Review */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h3 className="modal-title">Fikringizni ulashing</h3>
              <p className="modal-desc">Sizning fikringiz biz uchun juda muhim. Xizmatimiz sifatini yaxshilashga yordam bering.</p>

              {formError && <div className="form-error">{formError}</div>}
              {successMsg && (
                <div className="form-success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="success-icon">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {successMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="review-form">
                <div className="form-group">
                  <label htmlFor="name">To'liq ismingiz *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newReview.name}
                    onChange={handleChange}
                    placeholder="Masalan: Ali Valiyev"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="role">Lavozimingiz / Holatingiz</label>
                    <select id="role" name="role" value={newReview.role} onChange={handleChange}>
                      <option value="Xaridor">Xaridor</option>
                      <option value="Doimiy Mijoz">Doimiy Mijoz</option>
                      <option value="Mehmon">Mehmon</option>
                      <option value="Biznes Mijoz">Biznes Mijoz</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tag">Mavzu *</label>
                    <select id="tag" name="tag" value={newReview.tag} onChange={handleChange}>
                      <option value="Sifat">Sifat</option>
                      <option value="Yetkazib berish">Yetkazib berish</option>
                      <option value="Narxlar">Narxlar</option>
                      <option value="Xizmat">Xizmat</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Baholang *</label>
                  <div className="interactive-stars">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const ratingValue = i + 1;
                      return (
                        <button
                          type="button"
                          key={i}
                          className={`star-btn ${
                            ratingValue <= (hoverRating || newReview.rating) ? "active" : ""
                          }`}
                          onClick={() => setNewReview((prev) => ({ ...prev, rating: ratingValue }))}
                          onMouseEnter={() => setHoverRating(ratingValue)}
                          onMouseLeave={() => setHoverRating(0)}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Fikringiz *</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={newReview.comment}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Do'konimiz, mahsulotlarimiz va yetkazib berish xizmati haqidagi taassurotlaringizni yozing..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-review-btn">
                  Fikrni Yuborish
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonals;
