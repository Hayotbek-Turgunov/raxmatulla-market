import { useState } from "react";
import "./Abrorbek.css";

const Abrorbek = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [showTimeline, setShowTimeline] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim() && messageInput.trim()) {
      setFeedbackSubmitted(true);
      setTimeout(() => {
        setEmailInput("");
        setMessageInput("");
        setFeedbackSubmitted(false);
      }, 4000);
    }
  };

  const tabsContent = {
    mission: {
      title: "Our Mission",
      description: "At Raxmatulla Market, we are dedicated to bridging the gap between local vendors and modern consumers. We strive to provide a seamless, highly secure, and lightning-fast shopping experience that empowers communities and fosters digital growth in Uzbekistan.",
      highlight: "Connecting 10,000+ local sellers with consumers nationwide.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    vision: {
      title: "Our Vision",
      description: "To become Central Asia's leading e-commerce ecosystem, recognized for our commitment to customer-centric design, ethical trade practices, and cutting-edge logistics solutions. We envision a future where retail is inclusive, accessible, and barrier-free.",
      highlight: "Expanding service access to even the most remote regions by 2027.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    technology: {
      title: "Our Technology",
      description: "Powered by a state-of-the-art React frontend and optimized database layer, our platform delivers sub-second load times. With robust API architectures and SSL protection, we guarantee your personal data and transactions are completely secure.",
      highlight: "Built with React 19, Vite, and high-performance serverless pipelines.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    }
  };

  const timelineSteps = [
    { year: "2024", title: "Project Inception", desc: "Raxmatulla Market was founded as a small regional grocery delivery app." },
    { year: "2025", title: "Marketplace Expansion", desc: "Successfully onboarded over 500 electronics and apparel merchants." },
    { year: "2026", title: "Smart Logistics Integration", desc: "Launched automated routing and next-day delivery networks across 12 provinces." }
  ];

  return (
    <section className="abrorbek-about-section">
      <div className="abrorbek-container">
        
        {/* Hero Section */}
        <div className="abrorbek-hero">
          <div className="abrorbek-badge">About Raxmatulla Market</div>
          <h2 className="abrorbek-title">
            Redefining E-Commerce in <span className="abrorbek-highlight">Uzbekistan</span>
          </h2>
          <p className="abrorbek-subtitle">
            Raxmatulla Market is a next-generation shopping ecosystem designed to combine premium product quality, secure escrow payments, and reliable countrywide delivery under a single visual dashboard.
          </p>
        </div>

        {/* Tab Switcher & Dynamic Content */}
        <div className="abrorbek-tabs-wrapper">
          <div className="abrorbek-tabs-header">
            {Object.keys(tabsContent).map((tabKey) => (
              <button
                key={tabKey}
                className={`abrorbek-tab-btn ${activeTab === tabKey ? "active" : ""}`}
                onClick={() => setActiveTab(tabKey)}
              >
                {tabsContent[tabKey].title}
              </button>
            ))}
          </div>
          <div className="abrorbek-tab-card">
            <div className="abrorbek-tab-icon-box">
              {tabsContent[activeTab].icon}
            </div>
            <div className="abrorbek-tab-content">
              <h3>{tabsContent[activeTab].title}</h3>
              <p className="abrorbek-tab-desc">{tabsContent[activeTab].description}</p>
              <div className="abrorbek-tab-highlight">
                <strong>Key Focus:</strong> {tabsContent[activeTab].highlight}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stats Panel */}
        <div className="abrorbek-stats-grid">
          <div className="abrorbek-stat-card">
            <div className="abrorbek-stat-number">15K+</div>
            <div className="abrorbek-stat-label">Active Customers</div>
          </div>
          <div className="abrorbek-stat-card">
            <div className="abrorbek-stat-number">99.9%</div>
            <div className="abrorbek-stat-label">Delivery Success</div>
          </div>
          <div className="abrorbek-stat-card">
            <div className="abrorbek-stat-number">50+</div>
            <div className="abrorbek-stat-label">Cities Covered</div>
          </div>
          <div className="abrorbek-stat-card">
            <div className="abrorbek-stat-number">4.9 ★</div>
            <div className="abrorbek-stat-label">Average Review</div>
          </div>
        </div>

        {/* Core Values / Features */}
        <h3 className="abrorbek-section-subtitle">Why Users Choose Our Site</h3>
        <div className="abrorbek-features-grid">
          <div className="abrorbek-feature-card">
            <div className="abrorbek-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h4>Instant Fulfillment</h4>
            <p>Orders are dispatched through automated pipelines, minimizing processing times and ensuring your goods arrive on schedule.</p>
          </div>
          <div className="abrorbek-feature-card">
            <div className="abrorbek-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h4>Secure Escrow Payments</h4>
            <p>Your funds are kept safe in an escrow hold until you receive the package and verify its pristine condition.</p>
          </div>
          <div className="abrorbek-feature-card">
            <div className="abrorbek-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h4>Verified Merchants</h4>
            <p>Every store owner undergoes strict checks and product audits to prevent counterfeits and protect buyers.</p>
          </div>
        </div>

        {/* Toggle Timeline Trigger */}
        <div className="abrorbek-timeline-wrapper">
          <button 
            onClick={() => setShowTimeline(!showTimeline)} 
            className="abrorbek-toggle-btn"
          >
            {showTimeline ? "Hide Our Growth Timeline" : "Reveal Our Growth Timeline"}
          </button>
          
          {showTimeline && (
            <div className="abrorbek-timeline">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="abrorbek-timeline-item">
                  <div className="abrorbek-timeline-marker">{step.year}</div>
                  <div className="abrorbek-timeline-info">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interactive feedback corner */}
        <div className="abrorbek-feedback-box">
          <div className="abrorbek-feedback-left">
            <h3>Have Questions or Suggestions?</h3>
            <p>We are constantly improving Raxmatulla Market. Drop us a line and help us design the future of shopping.</p>
          </div>
          
          <form className="abrorbek-feedback-form" onSubmit={handleFeedbackSubmit}>
            {feedbackSubmitted ? (
              <div className="abrorbek-success-message">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="checkmark">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Thank you! Your feedback has been sent successfully.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="abrorbek-input"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Share your thoughts about our site..."
                  className="abrorbek-textarea"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  required
                />
                <button type="submit" className="abrorbek-submit-btn">
                  Send Feedback
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Abrorbek;
