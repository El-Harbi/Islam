import React, { useState } from 'react';
import { Search, Book, Star, Filter, ExternalLink } from 'lucide-react';

interface Hadith {
  id: number;
  text: string;
  narrator: string;
  source: string;
  book: string;
  chapter: string;
  number: string;
  grade: 'صحيح' | 'حسن' | 'ضعيف';
  category: string;
}

const HadithPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('الكل');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // Sample Hadith data
  const hadiths: Hadith[] = [
    {
      id: 1,
      text: 'إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه',
      narrator: 'عمر بن الخطاب رضي الله عنه',
      source: 'صحيح البخاري',
      book: 'كتاب بدء الوحي',
      chapter: 'باب كيف كان بدء الوحي',
      number: '1',
      grade: 'صحيح',
      category: 'العبادات'
    },
    {
      id: 2,
      text: 'بُني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وحج البيت، وصوم رمضان',
      narrator: 'عبد الله بن عمر رضي الله عنهما',
      source: 'صحيح البخاري',
      book: 'كتاب الإيمان',
      chapter: 'باب بني الإسلام على خمس',
      number: '8',
      grade: 'صحيح',
      category: 'العقيدة'
    },
    {
      id: 3,
      text: 'من حُسن إسلام المرء تركه ما لا يعنيه',
      narrator: 'أبو هريرة رضي الله عنه',
      source: 'سنن الترمذي',
      book: 'كتاب الزهد',
      chapter: 'باب ما جاء في حسن الإسلام',
      number: '2317',
      grade: 'حسن',
      category: 'الأخلاق'
    },
    {
      id: 4,
      text: 'المسلم من سلم المسلمون من لسانه ويده، والمهاجر من هجر ما نهى الله عنه',
      narrator: 'عبد الله بن عمرو بن العاص رضي الله عنهما',
      source: 'صحيح البخاري',
      book: 'كتاب الإيمان',
      chapter: 'باب المسلم من سلم المسلمون',
      number: '10',
      grade: 'صحيح',
      category: 'الأخلاق'
    },
    {
      id: 5,
      text: 'الدين النصيحة، قلنا: لمن يا رسول الله؟ قال: لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم',
      narrator: 'تميم الداري رضي الله عنه',
      source: 'صحيح مسلم',
      book: 'كتاب الإيمان',
      chapter: 'باب بيان أن الدين النصيحة',
      number: '55',
      grade: 'صحيح',
      category: 'الأخلاق'
    }
  ];

  const sources = ['الكل', 'صحيح البخاري', 'صحيح مسلم', 'سنن الترمذي', 'سنن أبي داود', 'سنن النسائي'];
  const categories = ['الكل', 'العقيدة', 'العبادات', 'الأخلاق', 'المعاملات', 'السيرة'];

  const filteredHadiths = hadiths.filter(hadith => {
    const matchesSearch = hadith.text.includes(searchTerm) || 
                         hadith.narrator.includes(searchTerm) ||
                         hadith.category.includes(searchTerm);
    const matchesSource = selectedSource === 'الكل' || hadith.source === selectedSource;
    const matchesCategory = selectedCategory === 'الكل' || hadith.category === selectedCategory;
    
    return matchesSearch && matchesSource && matchesCategory;
  });

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'صحيح': return '#22c55e';
      case 'حسن': return '#ff8800';
      case 'ضعيف': return '#ef4444';
      default: return '#888888';
    }
  };

  return (
    <div className="hadith-page">
      <div className="hadith-container">
        <div className="hadith-header">
          <div className="header-content">
            <Book className="header-icon" />
            <div>
              <h1>الأحاديث النبوية الشريفة</h1>
              <p>صحيح البخاري ومسلم وكتب السنة المعتمدة</p>
            </div>
          </div>
        </div>

        <div className="filters-section">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="ابحث في نص الحديث أو الراوي..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters-grid">
            <div className="filter-group">
              <label>المصدر:</label>
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="filter-select"
              >
                {sources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>التصنيف:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="results-count">
              <Filter size={18} />
              <span>{filteredHadiths.length} حديث</span>
            </div>
          </div>
        </div>

        <div className="hadiths-grid">
          {filteredHadiths.map((hadith) => (
            <div key={hadith.id} className="hadith-card">
              <div className="hadith-header-info">
                <div className="hadith-number">#{hadith.number}</div>
                <div 
                  className="hadith-grade"
                  style={{ '--grade-color': getGradeColor(hadith.grade) } as any}
                >
                  <Star size={14} />
                  {hadith.grade}
                </div>
              </div>

              <div className="hadith-text">
                {hadith.text}
              </div>

              <div className="hadith-narrator">
                <strong>الراوي:</strong> {hadith.narrator}
              </div>

              <div className="hadith-source-info">
                <div className="source-details">
                  <div className="source-name">
                    <Book size={16} />
                    {hadith.source}
                  </div>
                  <div className="book-chapter">
                    {hadith.book} - {hadith.chapter}
                  </div>
                </div>
                <div className="hadith-category">
                  {hadith.category}
                </div>
              </div>

              <div className="hadith-actions">
                <button className="action-btn share-btn">
                  <ExternalLink size={16} />
                  مشاركة
                </button>
                <button className="action-btn bookmark-btn">
                  <Star size={16} />
                  حفظ
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredHadiths.length === 0 && (
          <div className="no-results">
            <Book size={64} className="no-results-icon" />
            <h3>لم يتم العثور على أحاديث</h3>
            <p>جرب تغيير كلمات البحث أو المرشحات</p>
          </div>
        )}

        <div className="load-more-container">
          <button className="load-more-btn">
            تحميل المزيد من الأحاديث
          </button>
        </div>
      </div>

      <style jsx>{`
        .hadith-page {
          min-height: calc(100vh - 80px);
          padding: 2rem;
          background: radial-gradient(ellipse at center, rgba(255, 136, 0, 0.05) 0%, transparent 70%);
        }

        .hadith-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hadith-header {
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

        .filters-section {
          background: rgba(16, 16, 16, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .search-container {
          position: relative;
          margin-bottom: 2rem;
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

        .filters-grid {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 2rem;
          align-items: end;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          color: #ff8800;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .filter-select {
          background: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.3);
          border-radius: 8px;
          padding: 0.75rem;
          color: #ffffff;
          font-family: 'Cairo', sans-serif;
          outline: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          border-color: #ff8800;
          box-shadow: 0 0 10px rgba(255, 136, 0, 0.3);
        }

        .filter-select option {
          background: #1a1a1a;
          color: #ffffff;
        }

        .results-count {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ff8800;
          font-weight: 600;
          padding: 0.75rem 1rem;
          background: rgba(255, 136, 0, 0.1);
          border: 1px solid rgba(255, 136, 0, 0.3);
          border-radius: 8px;
          white-space: nowrap;
        }

        .hadiths-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .hadith-card {
          background: rgba(16, 16, 16, 0.8);
          border: 1px solid rgba(255, 136, 0, 0.2);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .hadith-card::before {
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

        .hadith-card:hover::before {
          transform: translateX(100%);
        }

        .hadith-card:hover {
          border-color: rgba(255, 136, 0, 0.4);
          background: rgba(255, 136, 0, 0.05);
          box-shadow: 0 10px 40px rgba(255, 136, 0, 0.2);
          transform: translateY(-5px);
        }

        .hadith-header-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .hadith-number {
          background: linear-gradient(135deg, #ff8800, #ff6600);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .hadith-grade {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--grade-color);
          background: rgba(255, 136, 0, 0.1);
          border: 1px solid var(--grade-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .hadith-text {
          font-size: 1.3rem;
          line-height: 1.8;
          color: #ffffff;
          text-align: right;
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          background: rgba(10, 10, 10, 0.5);
          border-radius: 15px;
          border: 1px solid rgba(255, 136, 0, 0.1);
          font-weight: 500;
        }

        .hadith-narrator {
          color: #cccccc;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(255, 136, 0, 0.05);
          border-radius: 10px;
          border-right: 3px solid #ff8800;
        }

        .hadith-narrator strong {
          color: #ff8800;
        }

        .hadith-source-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(16, 16, 16, 0.5);
          border-radius: 12px;
          border: 1px solid rgba(255, 136, 0, 0.2);
        }

        .source-details {
          flex: 1;
        }

        .source-name {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ff8800;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .book-chapter {
          color: #888888;
          font-size: 0.9rem;
        }

        .hadith-category {
          background: rgba(255, 136, 0, 0.2);
          color: #ff8800;
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid rgba(255, 136, 0, 0.3);
        }

        .hadith-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid rgba(255, 136, 0, 0.3);
          color: #cccccc;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Cairo', sans-serif;
          font-weight: 500;
        }

        .action-btn:hover {
          background: rgba(255, 136, 0, 0.1);
          border-color: #ff8800;
          color: #ff8800;
          transform: translateY(-2px);
        }

        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          color: #888888;
        }

        .no-results-icon {
          color: #ff8800;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .no-results h3 {
          color: #cccccc;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .load-more-container {
          text-align: center;
          margin-top: 3rem;
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
          font-size: 1rem;
        }

        .load-more-btn:hover {
          background: rgba(255, 136, 0, 0.1);
          box-shadow: 0 0 20px rgba(255, 136, 0, 0.3);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .hadith-page {
            padding: 1rem;
          }

          .header-content h1 {
            font-size: 2rem;
          }

          .filters-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .hadith-source-info {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .hadith-text {
            font-size: 1.1rem;
            line-height: 1.6;
          }

          .hadith-actions {
            flex-direction: column;
          }

          .action-btn {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HadithPage;