'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 100 }}>
      <button onClick={toggleLanguage} style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(6px)', color: '#5c2a2a', border: '1px solid rgba(92, 42, 42, 0.15)', padding: '5px 12px', borderRadius: '20px', fontFamily: 'Newsreader, serif', fontWeight: 600, cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <i className="fa-solid fa-language"></i>
        {language === 'te' ? 'EN' : 'తెలుగు'}
      </button>
    </div>
  );
}
