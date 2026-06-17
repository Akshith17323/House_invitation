'use client';

import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #8b0000 0%, #b22222 30%, #d11111 50%, #b22222 70%, #8b0000 100%)',
        padding: '20px 15px',
        textAlign: 'center',
        position: 'relative',
        borderBottom: '3px solid #ffd700'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '8px', fontSize: '16px', color: '#ffd700' }}>
          <i className="fa-solid fa-fire"></i>
          <i className="fa-solid fa-spa"></i>
          <i className="fa-solid fa-fire"></i>
        </div>
        <div style={{ color: '#ffd700', fontFamily: 'Noto Serif Telugu, serif', fontSize: '15px', fontWeight: 600, letterSpacing: '2px', marginBottom: '4px', marginTop: '8px' }}>
          {language === 'te' ? 'ఓం  |  శ్రీ మాత్రే నమః' : 'Om  |  Sri Matre Namah'}
        </div>
      </div>

      <div className="ornament" style={{ paddingTop: '20px' }}>
        <div className="ornament-line"></div>
        <div className="ornament-center"><i className="fa-solid fa-fire"></i></div>
        <div className="ornament-line"></div>
      </div>

      <div className="section">
        {language === 'te' ? (
          <>
            <p style={{ fontFamily: 'Noto Serif Telugu, serif', color: '#6b0000', fontSize: '13px', lineHeight: 1.8 }}>
              <i className="fa-solid fa-spa" style={{ fontSize: '11px', color: '#b22222' }}></i> తల్లిదండ్రుల దీవెనలతో, గురువుల ఆశీస్సులతో మరియు దైవానుగ్రహంతో... <i className="fa-solid fa-spa" style={{ fontSize: '11px', color: '#b22222' }}></i>
            </p>
            <h2 style={{ fontFamily: 'Noto Serif Telugu, serif', color: '#8b0000', fontSize: '18px', fontWeight: 700, lineHeight: 1.5, marginTop: '20px' }}>
              <i className="fa-solid fa-house-chimney" style={{ fontSize: '14px', marginRight: '4px', color: '#b22222' }}></i>
              నూతన గృహ ప్రవేశ శుభ ఆహ్వానం
            </h2>
            <p style={{ fontFamily: 'Noto Serif Telugu, serif', color: '#6b0000', fontSize: '13px', marginTop: '6px', opacity: 0.9 }}>మీకు మా హృదయపూర్వక ఆహ్వానం తెలియజేయుచున్నాము.</p>
          </>
        ) : (
          <>
            <p style={{ fontFamily: 'Newsreader, serif', color: '#6b0000', fontSize: '15px', lineHeight: 1.6, fontStyle: 'italic' }}>
              <i className="fa-solid fa-spa" style={{ fontSize: '11px', color: '#b22222' }}></i> With the blessings of parents, guidance of teachers & divine grace <i className="fa-solid fa-spa" style={{ fontSize: '11px', color: '#b22222' }}></i>
            </p>
            <h2 style={{ fontFamily: 'Libre Bodoni, serif', color: '#8b0000', fontSize: '18px', fontWeight: 700, letterSpacing: '0.5px', marginTop: '20px' }}>
              Housewarming Invitation
            </h2>
            <p style={{ fontFamily: 'Newsreader, serif', color: '#6b0000', fontSize: '15px', lineHeight: 1.6, marginTop: '6px' }}>
              We cordially invite you to the auspicious occasion of our Griha Pravesh ceremony.
            </p>
          </>
        )}
      </div>

      <div className="section" style={{ marginTop: '30px' }}>
        <div style={{ 
          fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Libre Bodoni, serif', 
          color: '#b22222', 
          fontSize: language === 'te' ? '11px' : '10px', 
          letterSpacing: language === 'te' ? '2px' : '3px', 
          textTransform: 'uppercase', 
          fontWeight: 600, 
          marginBottom: '6px' 
        }}>
          {language === 'te' ? 'ఆతిధ్యం వహించువారు' : 'HOSTED BY'}
        </div>
        <div style={{ 
          fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Libre Bodoni, serif', 
          color: '#4a0404', 
          fontSize: language === 'te' ? '18px' : '17px', 
          fontWeight: 700, 
          lineHeight: 1.4 
        }}>
          {language === 'te' ? 'శ్రీ కిల్లి ముత్యాల నాయుడు & శ్రీమతి లీలా కుమారి' : 'Mr. Killi Mutyala Naidu & Mrs. Leela Kumari'}
        </div>
      </div>

      <div className="ornament" style={{ paddingBottom: '30px' }}>
        <div className="ornament-line"></div>
        <div className="ornament-center"><i className="fa-solid fa-crown"></i></div>
        <div className="ornament-line"></div>
      </div>
    </div>
  );
}
