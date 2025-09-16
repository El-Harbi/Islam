import React, { useState } from 'react';
import { Search, Play, Pause, Volume2, BookOpen, Star } from 'lucide-react';
import PrayerReminder from './PrayerReminder';
interface Surah {
  id: number;
  name: string;
  arabicName: string;
  verses: number;
  type: 'مكية' | 'مدنية';
  meaning: string;

}

const QuranPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(1);

  // Sample Quran data (في التطبيق الحقيقي، ستأتي هذه البيانات من API)
  const surahs: Surah[] = [
    { id: 1, name: 'الفاتحة', arabicName: 'ٱلْفَاتِحَة', verses: 7, type: 'مكية', meaning: 'الافتتاح' },
    { id: 2, name: 'البقرة', arabicName: 'ٱلْبَقَرَة', verses: 286, type: 'مدنية', meaning: 'البقرة' },
    { id: 3, name: 'آل عمران', arabicName: 'آل عِمْرَان', verses: 200, type: 'مدنية', meaning: 'عائلة عمران' },
    { id: 4, name: 'النساء', arabicName: 'ٱلنِّسَاء', verses: 176, type: 'مدنية', meaning: 'النساء' },
    { id: 5, name: 'المائدة', arabicName: 'ٱلْمَائِدَة', verses: 120, type: 'مدنية', meaning: 'المائدة' },
    // Add more surahs as needed
  ];

  const filteredSurahs = surahs.filter(surah =>
    surah.name.includes(searchTerm) || 
    surah.arabicName.includes(searchTerm) ||
    surah.meaning.includes(searchTerm)
  );

  const handleSurahClick = (surah: Surah) => {
    setSelectedSurah(surah);
    setCurrentVerse(1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // هنا سيتم إضافة منطق تشغيل/إيقاف الصوت
  };

  return (
    <div className="quran-page">
      <div className="quran-container">
        <div className="quran-header">
          <div className="header-content">
            <BookOpen className="header-icon" />
            <div>
              <h1>القرآن الكريم</h1>
              <p>اقرأ واستمع للقرآن الكريم مع التلاوة</p>
            </div>
          </div>
        </div>

        <div className="content-layout">
          <div className="surahs-panel">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="ابحث عن السورة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="surahs-list">
              {filteredSurahs.map((surah) => (
                <div
                  key={surah.id}
                  className={`surah-card ${selectedSurah?.id === surah.id ? 'active' : ''}`}
                  onClick={() => handleSurahClick(surah)}
                >
                  <div className="surah-number">{surah.id}</div>
                  <div className="surah-info">
                    <div className="surah-names">
                      <h3 className="surah-arabic">{surah.arabicName}</h3>
                      <span className="surah-name">{surah.name}</span>
                    </div>
                    <div className="surah-details">
                      <span className="verse-count">{surah.verses} آية</span>
                      <span className="surah-type">{surah.type}</span>
                    </div>
                  </div>
                  <div className="surah-meaning">
                    {surah.meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reading-panel">
            {selectedSurah ? (
              <>
                <div className="surah-header-info">
                  <div className="bismillah">
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                  </div>
                  <h2 className="current-surah">سورة {selectedSurah.arabicName}</h2>
                  <div className="surah-meta">
                    <span>{selectedSurah.type}</span>
                    <span>•</span>
                    <span>{selectedSurah.verses} آية</span>
                  </div>
                </div>

                <div className="audio-controls">
                  <button 
                    className="play-btn"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <div className="audio-info">
                    <span>تلاوة القارئ: عبد الرحمن السديس</span>
                    <Volume2 size={18} />
                  </div>
                </div>

                <div className="verses-container">
                  <div className="verse-card">
                    <div className="verse-number">
                      <Star size={16} />
                      <span>1</span>
                    </div>
                    <div className="verse-text">
                      {selectedSurah.id === 1 ? 
                        'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَالَمِينَ' :
                        'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ'
                      }
                    </div>
                  </div>
                  
                  {/* إضافة المزيد من الآيات حسب البيانات الفعلية */}
                  <div className="verse-card">
                    <div className="verse-number">
                      <Star size={16} />
                      <span>2</span>
                    </div>
                    <div className="verse-text">
                      {selectedSurah.id === 1 ? 
                        'ٱلرَّحْمَٰنِ ٱلرَّحِيمِ' :
                        'ذَٰلِكَ ٱلْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ'
                      }
                    </div>
                  </div>

                  <div className="load-more">
                    <button className="load-more-btn">
                      تحميل المزيد من الآيات
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-selection">
                <BookOpen size={64} className="no-selection-icon" />
                <h3>اختر سورة للبدء</h3>
                <p>اختر أي سورة من القائمة لبدء القراءة والاستماع</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .quran-page {
          min-height: calc(100vh - 80px);
          padding: 2rem;
          background: radial-gradient(ellipse at center, rgba(255, 136, 0, 0.05) 0%, transparent 70%);
        }

        .quran-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .quran-header {
          background: rgba(16, 16, 16, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.3);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .header-icon {
          color: #ff8800;
          filter: drop-shadow(0 0 10px rgba(255, 136, 0, 0.8));
        }

        .header-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ff8800;
          text-shadow: 0 0 20px rgba(255, 136, 0, 0.8);
          margin-bottom: 0.5rem;
        }

        .header-content p {
          color: #cccccc;
          font-size: 1.1rem;
        }

        .content-layout {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          min-height: 70vh;
        }

        .surahs-panel {
          background: rgba(16, 16, 16, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .search-container {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .search-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #888888;
        }

        .search-input {
          width: 100%;
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.3);
          border-radius: 12px;
          padding: 1rem 3rem 1rem 1rem;
          color: #ffffff;
          font-size: 1rem;
          font-family: 'Cairo', sans-serif;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #ff8800;
          box-shadow: 0 0 15px rgba(255, 136, 0, 0.3);
        }

        .search-input::placeholder {
          color: #888888;
        }

        .surahs-list {
          max-height: 60vh;
          overflow-y: auto;
        }

        .surah-card {
          background: rgba(10, 10, 10, 0.5);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 15px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .surah-card:hover {
          border-color: rgba(255, 136, 0, 0.5);
          background: rgba(255, 136, 0, 0.05);
          transform: translateY(-2px);
        }

        .surah-card.active {
          border-color: #ff8800;
          background: rgba(255, 136, 0, 0.1);
          box-shadow: 0 0 20px rgba(255, 136, 0, 0.3);
        }

        .surah-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ff8800, #ff6600);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          flex-shrink: 0;
        }

        .surah-info {
          flex: 1;
        }

        .surah-names {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .surah-arabic {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
        }

        .surah-name {
          color: #cccccc;
          font-size: 1rem;
        }

        .surah-details {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
          color: #888888;
        }

        .surah-meaning {
          color: #ff8800;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .reading-panel {
          background: rgba(16, 16, 16, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .surah-header-info {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 136, 0, 0.2);
        }

        .bismillah {
          font-size: 1.8rem;
          color: #ff8800;
          font-weight: 600;
          margin-bottom: 1rem;
          text-shadow: 0 0 10px rgba(255, 136, 0, 0.5);
        }

        .current-surah {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .surah-meta {
          color: #cccccc;
          font-size: 1rem;
        }

        .audio-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.3);
          border-radius: 15px;
          padding: 1rem 1.5rem;
          margin-bottom: 2rem;
        }

        .play-btn {
          background: linear-gradient(135deg, #ff8800, #ff6600);
          border: none;
          color: white;
          padding: 1rem;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-btn:hover {
          background: linear-gradient(135deg, #ff6600, #ff4400);
          box-shadow: 0 0 20px rgba(255, 136, 0, 0.5);
          transform: scale(1.05);
        }

        .audio-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #cccccc;
        }

        .verses-container {
          max-height: 50vh;
          overflow-y: auto;
        }

        .verse-card {
          background: rgba(10, 10, 10, 0.5);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .verse-card:hover {
          border-color: rgba(255, 136, 0, 0.4);
          background: rgba(255, 136, 0, 0.05);
        }

        .verse-number {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ff8800;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .verse-text {
          font-size: 1.8rem;
          line-height: 2.2;
          color: #ffffff;
          text-align: right;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .load-more {
          text-align: center;
          margin-top: 2rem;
        }

        .load-more-btn {
          background: transparent;
          border: 2px solid #ff8800;
          color: #ff8800;
          padding: 1rem 2rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Cairo', sans-serif;
          font-weight: 600;
        }

        .load-more-btn:hover {
          background: rgba(255, 136, 0, 0.1);
          box-shadow: 0 0 20px rgba(255, 136, 0, 0.3);
        }

        .no-selection {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          color: #888888;
        }

        .no-selection-icon {
          color: #ff8800;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .no-selection h3 {
          color: #cccccc;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 1024px) {
          .content-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .quran-page {
            padding: 1rem;
          }

          .header-content h1 {
            font-size: 2rem;
          }

          .verse-text {
            font-size: 1.5rem;
            line-height: 1.8;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .surah-names {
            flex-direction: column;
            gap: 0.5rem;
          }

          .audio-controls {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default QuranPage;