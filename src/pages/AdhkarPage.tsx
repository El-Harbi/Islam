import React, { useState } from 'react';
import { Sun, Moon, Sunrise, Sunset, Heart, BookOpen, RotateCcw, Plus } from 'lucide-react';

interface Dhikr {
  id: number;
  arabic: string;
  transliteration: string;
  translation: string;
  count: number;
  benefit: string;
  category: string;
}

interface AdhkarCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  adhkar: Dhikr[];
}

const AdhkarPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('morning');
  const [dhikrCounts, setDhikrCounts] = useState<{ [key: number]: number }>({});

  const categories: AdhkarCategory[] = [
    {
      id: 'morning',
      name: 'أذكار الصباح',
      icon: Sunrise,
      color: '#ff8800',
      adhkar: [
        {
          id: 1,
          arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
          transliteration: 'Ayat al-Kursi',
          translation: 'آية الكرسي - الله لا إله إلا هو الحي القيوم...',
          count: 1,
          benefit: 'من قرأها في الصباح لم يضره شيطان حتى يمسي',
          category: 'morning'
        },
        {
          id: 2,
          arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
          transliteration: 'Bismillahi alladhi la yadurru ma\'a ismihi shay\'un fi\'l-ard wa la fi\'s-sama\' wa huwa\'s-samee\'u\'l-\'aleem',
          translation: 'بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم',
          count: 3,
          benefit: 'من قالها ثلاثاً لم يضره شيء',
          category: 'morning'
        },
        {
          id: 3,
          arabic: 'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صلى الله عليه وسلم رَسُولًا',
          transliteration: 'Radeetu billahi rabban, wa bil-Islami deenan, wa bi Muhammadin rasolan',
          translation: 'رضيت بالله رباً وبالإسلام ديناً وبمحمد رسولاً',
          count: 3,
          benefit: 'حق على الله أن يرضيه يوم القيامة',
          category: 'morning'
        }
      ]
    },
    {
      id: 'evening',
      name: 'أذكار المساء',
      icon: Sunset,
      color: '#ff6600',
      adhkar: [
        {
          id: 4,
          arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
          transliteration: 'Amsayna wa amsa\'l-mulku lillahi wal-hamdu lillah...',
          translation: 'أمسينا وأمسى الملك لله والحمد لله...',
          count: 1,
          benefit: 'من قالها حين يمسي كان في ذمة الله',
          category: 'evening'
        },
        {
          id: 5,
          arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ',
          transliteration: 'Allahumma anta rabbi la ilaha illa ant...',
          translation: 'اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك...',
          count: 1,
          benefit: 'سيد الاستغفار، من قالها موقناً بها فمات من يومه دخل الجنة',
          category: 'evening'
        }
      ]
    },
    {
      id: 'sleep',
      name: 'أذكار النوم',
      icon: Moon,
      color: '#4f46e5',
      adhkar: [
        {
          id: 6,
          arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
          transliteration: 'Bismika Allahumma amootu wa ahya',
          translation: 'باسمك اللهم أموت وأحيا',
          count: 1,
          benefit: 'يقال عند النوم',
          category: 'sleep'
        },
        {
          id: 7,
          arabic: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
          transliteration: 'Allahumma qini \'adhabaka yawma tab\'athu \'ibadak',
          translation: 'اللهم قني عذابك يوم تبعث عبادك',
          count: 3,
          benefit: 'يقال عند وضع اليد تحت الخد الأيمن',
          category: 'sleep'
        }
      ]
    },
    {
      id: 'general',
      name: 'أذكار عامة',
      icon: Heart,
      color: '#22c55e',
      adhkar: [
        {
          id: 8,
          arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
          transliteration: 'Subhan Allahi wa bihamdihi, subhan Allahi\'l-\'azeem',
          translation: 'سبحان الله وبحمده، سبحان الله العظيم',
          count: 100,
          benefit: 'كلمتان خفيفتان على اللسان، ثقيلتان في الميزان',
          category: 'general'
        },
        {
          id: 9,
          arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
          transliteration: 'La ilaha illa Allah wahdahu la shareeka lah...',
          translation: 'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير',
          count: 10,
          benefit: 'من قالها عشر مرات كان كمن أعتق أربعة أنفس من ولد إسماعيل',
          category: 'general'
        }
      ]
    }
  ];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const incrementCount = (dhikrId: number) => {
    setDhikrCounts(prev => ({
      ...prev,
      [dhikrId]: (prev[dhikrId] || 0) + 1
    }));
  };

  const resetCount = (dhikrId: number) => {
    setDhikrCounts(prev => ({
      ...prev,
      [dhikrId]: 0
    }));
  };

  const resetAllCounts = () => {
    setDhikrCounts({});
  };

  const getCurrentCount = (dhikrId: number) => {
    return dhikrCounts[dhikrId] || 0;
  };

  const isCompleted = (dhikr: Dhikr) => {
    return getCurrentCount(dhikr.id) >= dhikr.count;
  };

  return (
    <div className="adhkar-page">
      <div className="adhkar-container">
        <div className="adhkar-header">
          <div className="header-content">
            <BookOpen className="header-icon" />
            <div>
              <h1>الأذكار والأدعية</h1>
              <p>أذكار الصباح والمساء والأدعية المأثورة</p>
            </div>
          </div>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                style={{ '--category-color': category.color } as any}
              >
                <div className="category-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <div className="category-count">
                  {category.adhkar.length} ذكر
                </div>
              </button>
            );
          })}
        </div>

        {selectedCategoryData && (
          <div className="adhkar-content">
            <div className="content-header">
              <div className="category-info">
                <div className="category-icon-large">
                  <selectedCategoryData.icon size={40} />
                </div>
                <div>
                  <h2>{selectedCategoryData.name}</h2>
                  <p>{selectedCategoryData.adhkar.length} ذكر وداء</p>
                </div>
              </div>
              <button className="reset-all-btn" onClick={resetAllCounts}>
                <RotateCcw size={18} />
                إعادة تعيين الكل
              </button>
            </div>

            <div className="adhkar-list">
              {selectedCategoryData.adhkar.map((dhikr) => (
                <div 
                  key={dhikr.id} 
                  className={`dhikr-card ${isCompleted(dhikr) ? 'completed' : ''}`}
                >
                  <div className="dhikr-content">
                    <div className="dhikr-arabic">
                      {dhikr.arabic}
                    </div>

                    <div className="dhikr-translation">
                      {dhikr.translation}
                    </div>

                    <div className="dhikr-benefit">
                      <strong>الفائدة:</strong> {dhikr.benefit}
                    </div>

                    <div className="dhikr-counter">
                      <div className="counter-info">
                        <span className="count-display">
                          {getCurrentCount(dhikr.id)} / {dhikr.count}
                        </span>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ 
                              width: `${(getCurrentCount(dhikr.id) / dhikr.count) * 100}%`,
                              '--category-color': selectedCategoryData.color
                            } as any}
                          ></div>
                        </div>
                      </div>

                      <div className="counter-controls">
                        <button 
                          className="count-btn"
                          onClick={() => incrementCount(dhikr.id)}
                          disabled={isCompleted(dhikr)}
                        >
                          <Plus size={20} />
                          {isCompleted(dhikr) ? 'مكتمل' : 'تسبيح'}
                        </button>
                        <button 
                          className="reset-btn"
                          onClick={() => resetCount(dhikr.id)}
                        >
                          <RotateCcw size={16} />
                        </button>
                      </div>
                    </div>

                    {isCompleted(dhikr) && (
                      <div className="completion-badge">
                        ✨ مبارك! تم إكمال هذا الذكر
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .adhkar-page {
          min-height: calc(100vh - 80px);
          padding: 2rem;
          background: radial-gradient(ellipse at center, rgba(255, 136, 0, 0.05) 0%, transparent 70%);
        }

        .adhkar-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .adhkar-header {
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

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .category-card {
          background: rgba(16, 16, 16, 0.8);
          border: 2px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--category-color), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .category-card:hover::before {
          transform: translateX(100%);
        }

        .category-card:hover {
          border-color: var(--category-color);
          background: rgba(255, 136, 0, 0.05);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 136, 0, 0.2);
        }

        .category-card.active {
          border-color: var(--category-color);
          background: rgba(255, 136, 0, 0.1);
          box-shadow: 0 0 30px rgba(255, 136, 0, 0.3);
        }

        .category-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 136, 0, 0.1);
          border: 2px solid var(--category-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--category-color);
          transition: all 0.3s ease;
        }

        .category-card:hover .category-icon {
          background: rgba(255, 136, 0, 0.2);
          transform: scale(1.1);
        }

        .category-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .category-count {
          color: var(--category-color);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .adhkar-content {
          background: rgba(16, 16, 16, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 136, 0, 0.2);
        }

        .category-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .category-icon-large {
          width: 80px;
          height: 80px;
          background: rgba(255, 136, 0, 0.1);
          border: 2px solid #ff8800;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff8800;
        }

        .category-info h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #ff8800;
          margin-bottom: 0.5rem;
        }

        .category-info p {
          color: #cccccc;
        }

        .reset-all-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 2px solid #ff8800;
          color: #ff8800;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Cairo', sans-serif;
          font-weight: 600;
        }

        .reset-all-btn:hover {
          background: rgba(255, 136, 0, 0.1);
          box-shadow: 0 0 20px rgba(255, 136, 0, 0.3);
        }

        .adhkar-list {
          display: grid;
          gap: 2rem;
        }

        .dhikr-card {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .dhikr-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff8800, transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .dhikr-card:hover::before {
          transform: translateX(100%);
        }

        .dhikr-card:hover {
          border-color: rgba(255, 136, 0, 0.4);
          background: rgba(255, 136, 0, 0.03);
          transform: translateY(-3px);
        }

        .dhikr-card.completed {
          border-color: #22c55e;
          background: rgba(34, 197, 94, 0.05);
        }

        .dhikr-card.completed::before {
          background: linear-gradient(90deg, transparent, #22c55e, transparent);
        }

        .dhikr-arabic {
          font-size: 1.8rem;
          line-height: 2.2;
          color: #ffffff;
          text-align: center;
          margin-bottom: 2rem;
          padding: 2rem;
          background: rgba(16, 16, 16, 0.5);
          border-radius: 15px;
          border: 1px solid rgba(255, 136, 0, 0.2);
          font-weight: 500;
        }

        .dhikr-translation {
          font-size: 1.1rem;
          color: #cccccc;
          text-align: center;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .dhikr-benefit {
          background: rgba(255, 136, 0, 0.1);
          border: 1px solid rgba(255, 136, 0, 0.3);
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 2rem;
          color: #ffffff;
          font-size: 1rem;
        }

        .dhikr-benefit strong {
          color: #ff8800;
        }

        .dhikr-counter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .counter-info {
          flex: 1;
        }

        .count-display {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ff8800;
          margin-bottom: 0.5rem;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 136, 0, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--category-color, #ff8800);
          border-radius: 4px;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px var(--category-color, #ff8800);
        }

        .counter-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .count-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #ff8800, #ff6600);
          border: none;
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Cairo', sans-serif;
          font-weight: 600;
          font-size: 1rem;
        }

        .count-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #ff6600, #ff4400);
          box-shadow: 0 0 20px rgba(255, 136, 0, 0.5);
          transform: scale(1.05);
        }

        .count-btn:disabled {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          cursor: not-allowed;
        }

        .reset-btn {
          background: transparent;
          border: 1px solid #888888;
          color: #888888;
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .reset-btn:hover {
          border-color: #ff8800;
          color: #ff8800;
        }

        .completion-badge {
          text-align: center;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
          padding: 1rem;
          border-radius: 12px;
          margin-top: 1.5rem;
          font-weight: 600;
          font-size: 1rem;
          animation: completionGlow 2s ease-in-out infinite alternate;
        }

        @keyframes completionGlow {
          0% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.5); }
          100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.8); }
        }

        @media (max-width: 1024px) {
          .adhkar-page {
            padding: 1rem;
          }

          .header-content h1 {
            font-size: 2rem;
          }

          .content-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .dhikr-counter {
            flex-direction: column;
            gap: 1rem;
          }

          .counter-controls {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .dhikr-arabic {
            font-size: 1.4rem;
            line-height: 1.8;
          }

          .category-info {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AdhkarPage;