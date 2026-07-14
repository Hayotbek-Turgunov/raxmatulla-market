import React, { useState } from 'react';
import './Navbar.css';

// Lootbox mukofotlari ro'yxati
const REWARDS = [
  { name: "⚡ Hyperion Neon AWP", rarity: "Legendary", color: "#ff007f", chance: "5%" },
  { name: "🗡️ Cyberpunk Katana v2", rarity: "Epic", color: "#8a2be2", chance: "15%" },
  { name: "🛡️ Nanotech Body Armor", rarity: "Rare", color: "#00d2ff", chance: "30%" },
  { name: "🔫 Rusty Desert Eagle", rarity: "Common", color: "#888888", chance: "50%" }
];

export default function GamingPortal() {
  // State-lar
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [participants, setParticipants] = useState(124);
  const [isJoined, setIsJoined] = useState(false);
  
  // Lootbox uchun state-lar
  const [isRolling, setIsRolling] = useState(false);
  const [rolledReward, setRolledReward] = useState(null);

  // Chat uchun state-lar
  const [messages, setMessages] = useState([
    { id: 1, user: "Slayer_99", text: "Kim turnirga tayyor? 🔥" },
    { id: 2, user: "Neo_Uz", text: "Lootboxdan bugun Legendary tushdi, daxshat!" }
  ]);
  const [newMsg, setNewMsg] = useState("");

  // Lootbox aylantirish funksiyasi
  const rollLootbox = () => {
    setIsRolling(true);
    setRolledReward(null);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * REWARDS.length);
      setRolledReward(REWARDS[randomIndex]);
      setIsRolling(false);
    }, 1200); // 1.2 soniya aylanish animatsiyasi
  };

  // Turnirga qo'shilish
  const handleJoinTournament = () => {
    if (!isJoined) {
      setParticipants(prev => prev + 1);
      setIsJoined(true);
    } else {
      setParticipants(prev => prev - 1);
      setIsJoined(false);
    }
  };

  // Chatga xabar yozish
  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setMessages([...messages, { id: Date.now(), user: "You_Gamer", text: newMsg }]);
    setNewMsg("");
  };

  return (
    <div className="gaming-body">
      {/* 1. Header Section */}
      <header className="gaming-header">
        <div className="logo">CYBER<span>NEXUS</span></div>
        <nav className="nav-menu">
          <a href="#hero">Home</a>
          <a href="#games">Games</a>
          <a href="#lootbox">Lootbox</a>
          <a href="#tournament">Tournament</a>
        </nav>
        <button 
          className={`connect-btn ${isWalletConnected ? 'connected' : ''}`}
          onClick={() => setIsWalletConnected(!isWalletConnected)}
        >
          {isWalletConnected ? "🟢 CONNECTED" : "🎮 CONNECT PROFILE"}
        </button>
      </header>

      {/* 2. Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <span className="subtitle">THE FUTURE OF GAMING IS HERE</span>
          <h1>ENTER THE <br /><span>METAVERSE</span></h1>
          <p>Dunyoning eng kuchli geymerlari bilan bellashing, turnirlarda qatnashing va daxshatli skinlarni yutib oling.</p>
          <div className="hero-buttons">
            <a href="#tournament" className="primary-btn">PLAY NOW</a>
            <a href="#lootbox" className="secondary-btn">OPEN CHEST</a>
          </div>
        </div>
        <div className="hero-glow"></div>
      </section>

      {/* 3. Interactive Lootbox Section */}
      <section id="lootbox" className="lootbox-section">
        <h2>🔮 NEON LOOTBOX</h2>
        <p className="section-desc">Omadingizni sinab ko'ring! Qutidan afsonaviy qurollar va noyob buyumlar tushishi mumkin.</p>
        
        <div className="lootbox-container">
          <div className={`chest-visual ${isRolling ? 'shaking' : ''}`}>
            {isRolling ? "🌀" : rolledReward ? "🎁" : "📦"}
          </div>

          <button className="roll-btn" onClick={rollLootbox} disabled={isRolling}>
            {isRolling ? "OPENING..." : "OPEN BOX (100 COINS)"}
          </button>

          {rolledReward && (
            <div className="reward-modal" style={{ borderColor: rolledReward.color }}>
              <h3>TABRIKLAYMIZ! 🎉</h3>
              <div className="reward-name" style={{ color: rolledReward.color }}>
                {rolledReward.name}
              </div>
              <span className="rarity-badge" style={{ backgroundColor: rolledReward.color }}>
                {rolledReward.rarity} ({rolledReward.chance})
              </span>
            </div>
          )}
        </div>
      </section>

      {/* 4. Tournament Section */}
      <section id="tournament" className="tournament-section">
        <div className="tournament-card">
          <div className="badge">LIVE NOW</div>
          <h2>TOXIC CYBER CHAMPIONSHIP</h2>
          <div className="tournament-details">
            <div className="detail-box">
              <span>PRIZE POOL</span>
              <strong>$10,000</strong>
            </div>
            <div className="detail-box">
              <span>ACTIVE PLAYERS</span>
              <strong>{participants} / 256</strong>
            </div>
          </div>
          <button 
            className={`join-btn ${isJoined ? 'joined' : ''}`} 
            onClick={handleJoinTournament}
          >
            {isJoined ? "❌ LEAVE TOURNAMENT" : "🚀 JOIN TOURNAMENT"}
          </button>
        </div>

        {/* 5. Live Chat (Community vibe) */}
        <div className="live-chat">
          <h3>💬 LOBBY CHAT</h3>
          <div className="chat-box">
            {messages.map(msg => (
              <div key={msg.id} className="chat-msg">
                <span className="chat-user">{msg.user}:</span> {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="chat-input-area">
            <input 
              type="text" 
              placeholder="Xabar yozing..." 
              value={newMsg} 
              onChange={(e) => setNewMsg(e.target.value)}
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </section>

      <footer className="gaming-footer">
        <p>&copy; 2026 CYBERNEXUS. Hamma huquqlar himoyalangan. Created for Gamers.</p>
      </footer>
    </div>
  );
}