'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav style={{ background: 'linear-gradient(135deg, #8b0000 0%, #b22222 50%, #8b0000 100%)', borderBottom: '3px solid #ffd700', padding: '15px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
      <button onClick={toggleLanguage} style={{ background: 'linear-gradient(90deg, #daa520, #ffd700)', color: '#4a0404', border: '1px solid rgba(139, 0, 0, 0.2)', padding: '6px 16px', borderRadius: '12px', fontFamily: 'Newsreader, serif', fontWeight: 700, cursor: 'pointer', fontSize: '15px' }}>
        <i className="fa-solid fa-language" style={{ marginRight: '6px' }}></i>
        {language === 'te' ? 'Read in English' : 'తెలుగులో చదవండి'}
      </button>
    </nav>
  );
}
