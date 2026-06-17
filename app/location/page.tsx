'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Location() {
  const { language } = useLanguage();

  return (
    <div style={{ paddingBottom: '20px' }}>
      <div className="ornament" style={{ paddingTop: '20px' }}>
        <div className="ornament-line"></div>
        <div className="ornament-center"><i className="fa-solid fa-diamond"></i></div>
        <div className="ornament-line"></div>
      </div>
      
      <div className="section" style={{ marginBottom: '15px' }}>
        <h2 style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Libre Bodoni, serif', color: '#8b0000', fontSize: '18px', fontWeight: 700 }}>
          {language === 'te' ? 'వేదిక & స్థలం' : 'Venue & Location'}
        </h2>
      </div>

      <div style={{ margin: '0 24px 12px 24px', border: '1px solid rgba(218, 165, 32, 0.5)', borderRadius: '8px', overflow: 'hidden', position: 'relative', zIndex: 2, background: '#fff', boxShadow: '0 4px 10px rgba(139,0,0,0.1)' }}>
        <iframe 
          src="https://maps.google.com/maps?q=17.8173907,83.2107555&z=16&output=embed" 
          style={{ border: 0, display: 'block', width: '100%', height: '300px' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a href="https://www.google.com/maps/dir/?api=1&destination=17.8173907,83.2107555" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #8b0000 0%, #b22222 100%)', 
            color: '#ffd700', 
            padding: '12px 8px', 
            fontSize: language === 'te' ? '13px' : '14px', 
            textAlign: 'center', 
            fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Newsreader, serif', 
            borderTop: '1px solid #daa520', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px',
            fontWeight: language === 'te' ? 400 : 600
          }}>
            <i className="fa-solid fa-diamond-turn-right"></i> 
            {language === 'te' ? 'గూగుల్ మ్యాప్స్ ద్వారా రూట్ డైరెక్షన్స్ పొందండి' : 'Get Directions via Google Maps'}
          </div>
        </a>
      </div>
    </div>
  );
}
