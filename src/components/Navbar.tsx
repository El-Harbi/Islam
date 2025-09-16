import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Brain, MessageSquare, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'الرئيسية', icon: Sparkles },
    { path: '/quran', label: 'القرآن الكريم', icon: BookOpen },
    { path: '/hadith', label: 'الأحاديث النبوية', icon: MessageSquare },
    { path: '/adhkar', label: 'الأذكار', icon: BookOpen },
    { path: '/ai', label: 'حربي AI', icon: Brain },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">الحربي</span>
          <div className="logo-glow"></div>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <IconComponent size={18} />
                <span>{item.label}</span>
                {isActive && <div className="active-indicator"></div>}
              </Link>
            );
          })}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 136, 0, 0.2);
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          position: relative;
          text-decoration: none;
          z-index: 1001;
        }

        .logo-text {
          font-size: 2rem;
          font-weight: 700;
          color: #ff8800;
          text-shadow: 0 0 20px rgba(255, 136, 0, 0.8);
          transition: all 0.3s ease;
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 136, 0, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: logoGlow 3s ease-in-out infinite alternate;
        }

        @keyframes logoGlow {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
          transition: all 0.3s ease;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ffffff;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .nav-link:hover {
          color: #ff8800;
          background: rgba(255, 136, 0, 0.1);
          border-color: rgba(255, 136, 0, 0.3);
          text-shadow: 0 0 10px rgba(255, 136, 0, 0.8);
        }

        .nav-link.active {
          color: #ff8800;
          background: rgba(255, 136, 0, 0.15);
          border-color: #ff8800;
          box-shadow: 0 0 15px rgba(255, 136, 0, 0.4);
        }

        .active-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff8800, transparent);
          animation: indicatorGlow 2s ease-in-out infinite alternate;
        }

        @keyframes indicatorGlow {
          0% { box-shadow: 0 0 5px #ff8800; }
          100% { box-shadow: 0 0 15px #ff8800, 0 0 25px rgba(255, 136, 0, 0.5); }
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          color: #ff8800;
          z-index: 1001;
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
          }

          .nav-menu {
            position: fixed;
            top: 80px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 80px);
            background: rgba(10, 10, 10, 0.98);
            flex-direction: column;
            justify-content: flex-start;
            padding-top: 2rem;
            gap: 1rem;
            transition: right 0.3s ease;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-toggle {
            display: flex;
          }

          .logo-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;