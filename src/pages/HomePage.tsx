import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'القرآن الكريم',
      description: 'اقرأ واستمع للقرآن الكريم مع التفسير',
      path: '/quran',
      color: '#ff8800'
    },
    {
      icon: MessageSquare,
      title: 'الأحاديث النبوية',
      description: 'صحيح البخاري ومسلم والأحاديث الشريفة',
      path: '/hadith',
      color: '#ff6600'
    },
    {
      icon: Sparkles,
      title: 'الأذكار',
      description: 'أذكار الصباح والمساء وجميع المناسبات',
      path: '/adhkar',
      color: '#ff4400'
    },
    {
      icon: Brain,
      title: 'حربي AI',
      description: 'اسأل الذكاء الاصطناعي عن الإسلام',
      path: '/ai',
      color: '#ff2200'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="welcome-text">مرحباً بكم في</span>
            <span className="brand-name">الحربي</span>
          </h1>
          <p className="hero-subtitle">
            موقعك الشامل للقرآن الكريم والأحاديث النبوية والأذكار
          </p>
          <div className="hero-features">
            <div className="feature-pill">
              <Sparkles size={16} />
              <span>قرآن كريم</span>
            </div>
            <div className="feature-pill">
              <MessageSquare size={16} />
              <span>أحاديث شريفة</span>
            </div>
            <div className="feature-pill">
              <Brain size={16} />
              <span>ذكاء اصطناعي</span>
            </div>
          </div>
        </div>
        <div className="hero-glow"></div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">استكشف المحتوى</h2>
          <div className="features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.path}
                  className="feature-card"
                  style={{ '--feature-color': feature.color } as any}
                >
                  <div className="feature-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-arrow">
                    <ExternalLink size={18} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">من نحن</h2>
            <div className="about-text">
              <p>
                موقع الحربي هو منصة إسلامية شاملة تهدف لتسهيل الوصول للمحتوى الديني الصحيح.
                نوفر لك القرآن الكريم مع التلاوات المختلفة، والأحاديث النبوية الصحيحة،
                والأذكار اليومية، بالإضافة لمساعد ذكي للإجابة على أسئلتك الدينية.
              </p>
              <p>
                نؤمن بأهمية التكنولوجيا في خدمة الدين، لذلك صممنا هذا الموقع بعناية
                ليكون سهل الاستخدام ومفيد لجميع المسلمين حول العالم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">تواصل معنا</h2>
          <div className="contact-content">
            <p>للتواصل معنا والحصول على الدعم، يمكنكم التواصل عبر Discord</p>
            <a 
              href="https://discord.gg/alharbi" 
              className="discord-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.195.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              انضم لسيرفر Discord
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          min-height: 100vh;
        }

        .hero-section {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 2rem;
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .welcome-text {
          font-size: 2rem;
          color: #ffffff;
          font-weight: 400;
          opacity: 0.9;
        }

        .brand-name {
          font-size: 5rem;
          font-weight: 700;
          color: #ff8800;
          text-shadow: 
            0 0 20px #ff8800,
            0 0 40px #ff8800,
            0 0 60px rgba(255, 136, 0, 0.8);
          animation: heroGlow 3s ease-in-out infinite alternate;
        }

        @keyframes heroGlow {
          0% { 
            text-shadow: 
              0 0 20px #ff8800,
              0 0 40px #ff8800,
              0 0 60px rgba(255, 136, 0, 0.8);
          }
          100% { 
            text-shadow: 
              0 0 30px #ff8800,
              0 0 50px #ff8800,
              0 0 70px rgba(255, 136, 0, 0.9),
              0 0 90px rgba(255, 68, 0, 0.6);
          }
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #cccccc;
          line-height: 1.6;
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .hero-features {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .feature-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 136, 0, 0.1);
          border: 1px solid rgba(255, 136, 0, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          color: #ff8800;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .feature-pill:hover {
          background: rgba(255, 136, 0, 0.2);
          border-color: #ff8800;
          box-shadow: 0 0 15px rgba(255, 136, 0, 0.4);
          transform: translateY(-2px);
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(255, 136, 0, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: heroGlowBg 6s ease-in-out infinite alternate;
        }

        @keyframes heroGlowBg {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }

        .features-section {
          padding: 5rem 0;
          background: rgba(16, 16, 16, 0.5);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: #ff8800;
          margin-bottom: 3rem;
          text-shadow: 0 0 20px rgba(255, 136, 0, 0.5);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--feature-color), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .feature-card:hover::before {
          transform: translateX(100%);
        }

        .feature-card:hover {
          border-color: var(--feature-color);
          box-shadow: 
            0 10px 40px rgba(255, 136, 0, 0.2),
            0 0 30px rgba(255, 136, 0, 0.3);
          transform: translateY(-10px);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 136, 0, 0.1);
          border: 2px solid rgba(255, 136, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--feature-color);
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          background: rgba(255, 136, 0, 0.2);
          border-color: var(--feature-color);
          box-shadow: 0 0 20px rgba(255, 136, 0, 0.4);
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .feature-description {
          color: #cccccc;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .feature-arrow {
          color: var(--feature-color);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .about-section, .contact-section {
          padding: 5rem 0;
        }

        .about-section {
          background: rgba(16, 16, 16, 0.3);
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .about-text {
          color: #cccccc;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .contact-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-content p {
          color: #cccccc;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .discord-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #5865F2;
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(88, 101, 242, 0.3);
        }

        .discord-btn:hover {
          background: #4752C4;
          box-shadow: 0 6px 25px rgba(88, 101, 242, 0.4);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .brand-name {
            font-size: 3rem;
          }

          .welcome-text {
            font-size: 1.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;