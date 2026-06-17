'use client';

import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      {/* HOME SECTION */}
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

      <div className="ornament">
        <div className="ornament-line"></div>
        <div className="ornament-center"><i className="fa-solid fa-leaf"></i></div>
        <div className="ornament-line"></div>
      </div>

      {/* EVENTS SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', padding: '5px 24px', position: 'relative' }}>
        {/* Event 1 */}
        <div style={{ background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05), rgba(218, 165, 32, 0.15))', border: '1px solid rgba(218, 165, 32, 0.4)', borderRadius: '8px', padding: '14px 12px', textAlign: 'center' }}>
          <i className="fa-solid fa-house-chimney" style={{ fontSize: '18px', color: '#b22222', marginBottom: '6px', display: 'block' }}></i>
          <div style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Libre Bodoni, serif', color: '#8b0000', fontSize: '13px', fontWeight: 700 }}>
            {language === 'te' ? 'గృహ ప్రవేశ ముహూర్తం' : 'Griha Pravesh Ceremony'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', margin: '4px 0' }}>
            <i className="fa-regular fa-calendar" style={{ fontSize: '12px', color: '#daa520' }}></i>
            {language === 'te' && <span style={{ fontFamily: 'Noto Serif Telugu, serif', fontSize: '12px', color: '#6b0000' }}>తేది: </span>}
            <span style={{ fontFamily: 'Roboto Serif, serif', color: '#8b0000', fontSize: '13.5px', fontWeight: 700 }}>
              {language === 'te' ? '28 జూన్ 2026' : '28th June 2026'}
            </span>
          </div>
          <div style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Newsreader, serif', fontSize: language === 'te' ? '10.5px' : '12px', color: '#8b0000', fontStyle: language === 'te' ? 'normal' : 'italic' }}>
            {language === 'te' ? '(ఆదివారం రాత్రి / తెల్లవారితే సోమవారం)' : '(Sunday Night / Early Mon)'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', margin: '4px 0', marginTop: '4px' }}>
            <i className="fa-regular fa-clock" style={{ fontSize: '12px', color: '#daa520' }}></i>
            <span style={{ fontFamily: 'Roboto Serif, serif', color: '#8b0000', fontSize: '13.5px', fontWeight: 700 }}>
              {language === 'te' ? 'రాత్రి 2:01 ని.లకు' : '2:01 AM'}
            </span>
          </div>
          <span style={{ display: 'inline-block', background: 'linear-gradient(90deg, #daa520, #ffd700, #daa520)', color: '#4a0404', fontFamily: 'Newsreader, serif', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '12px', marginTop: '6px', border: '1px solid rgba(139, 0, 0, 0.2)' }}>
            {language === 'te' ? 'మూల నక్షత్ర, మేష లగ్నమున' : 'Moola Nakshatra, Mesha Lagnam'}
          </span>
        </div>

        {/* Event 2 */}
        <div style={{ background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05), rgba(218, 165, 32, 0.15))', border: '1px solid rgba(218, 165, 32, 0.4)', borderRadius: '8px', padding: '14px 12px', textAlign: 'center' }}>
          <i className="fa-solid fa-om" style={{ fontSize: '18px', color: '#b22222', marginBottom: '6px', display: 'block' }}></i>
          <div style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Libre Bodoni, serif', color: '#8b0000', fontSize: '13px', fontWeight: 700 }}>
            {language === 'te' ? 'శ్రీ సత్యనారాయణ స్వామి వ్రతం' : 'Satyanarayana Vratham'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', margin: '4px 0' }}>
            <i className="fa-regular fa-calendar" style={{ fontSize: '12px', color: '#daa520' }}></i>
            <span style={{ fontFamily: 'Roboto Serif, serif', color: '#8b0000', fontSize: '13.5px', fontWeight: 700 }}>
              {language === 'te' ? '29 జూన్ 2026' : '29th June 2026'}
            </span>
          </div>
          <div style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Newsreader, serif', fontSize: language === 'te' ? '10.5px' : '12px', color: '#8b0000', fontStyle: language === 'te' ? 'normal' : 'italic' }}>
            {language === 'te' ? '(సోమవారం ఉదయం)' : '(Monday Morning)'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center', margin: '4px 0', marginTop: '4px' }}>
            <i className="fa-solid fa-star" style={{ fontSize: '12px', color: '#daa520' }}></i>
            <span style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Newsreader, serif', fontSize: language === 'te' ? '12px' : '13px', fontWeight: 600, color: '#6b0000' }}>
              {language === 'te' ? 'పవిత్ర అనుష్ఠానం' : 'Sacred Ceremony'}
            </span>
          </div>
          <span style={{ display: 'inline-block', background: 'linear-gradient(90deg, #daa520, #ffd700, #daa520)', color: '#4a0404', fontFamily: 'Newsreader, serif', fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '12px', marginTop: '6px', border: '1px solid rgba(139, 0, 0, 0.2)' }}>
            {language === 'te' ? 'నిజ జ్యేష్ఠ శుద్ధ పౌర్ణమి' : 'Divine Rituals'}
          </span>
        </div>
      </div>

      <div className="section" style={{ marginTop: '10px' }}>
        <p style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Newsreader, serif', color: '#6b0000', fontSize: language === 'te' ? '12.5px' : '14px', padding: '0 10px', lineHeight: 1.6 }}>
          {language === 'te' ? (
            <>
              <i className="fa-solid fa-hands-praying" style={{ color: '#b22222', marginRight: '2px' }}></i>
              మీరు మీ కుటుంబ సమేతంగా విచ్చేసి మా ఈ కార్యక్రమానికి మీ అమూల్యమైన ఆశీర్వాదాలు అందించవలసిందిగా కోరుకుంటున్నాము.
            </>
          ) : (
            'We sincerely request your gracious presence with family to bless our new home with your love and good wishes.'
          )}
        </p>
      </div>

      {/* Luncheon Box */}
      <div style={{ margin: '12px 24px 6px 24px', background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05), rgba(218, 165, 32, 0.15))', border: '1px solid rgba(218, 165, 32, 0.5)', borderRadius: '8px', padding: '14px', textAlign: 'center', position: 'relative' }}>
        <div style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Libre Bodoni, serif', color: '#8b0000', fontSize: language === 'te' ? '15px' : '14px', fontWeight: 700 }}>
          <i className="fa-solid fa-utensils"></i> {language === 'te' ? 'భోజన ఆహ్వానం' : 'Luncheon Invitation'}
        </div>
        <p style={{ fontFamily: 'Newsreader, serif', fontSize: '14px', color: '#6b0000', lineHeight: 1.8, marginTop: '4px' }}>
          <i className="fa-regular fa-calendar" style={{ color: '#daa520', marginRight: '4px' }}></i> 
          {language === 'te' ? <>తేది: <strong>29 జూన్ 2026 (సోమవారం)</strong></> : <>Date: <strong>29th June 2026 (Monday)</strong></>}<br/>
          <i className="fa-regular fa-clock" style={{ color: '#daa520', marginRight: '4px' }}></i> 
          {language === 'te' ? <>సమయం: <strong>మధ్యాహ్నం 12:00 గంటల నుండి</strong></> : <>Time: <strong>12:00 PM onwards</strong></>}<br/>
          <i className="fa-solid fa-location-dot" style={{ color: '#daa520', marginRight: '4px' }}></i> 
          {language === 'te' ? 'స్థలం: మా నూతన నివాసంలో' : 'Venue: At our new residence'}
        </p>
      </div>

      <div className="ornament" style={{ paddingBottom: '0' }}>
        <div className="ornament-line"></div>
        <div className="ornament-center"><i className="fa-solid fa-diamond"></i></div>
        <div className="ornament-line"></div>
      </div>
      
      {/* LOCATION SECTION */}
      <div className="section" style={{ marginBottom: '15px' }}>
        <h2 style={{ fontFamily: language === 'te' ? 'Noto Serif Telugu, serif' : 'Libre Bodoni, serif', color: '#8b0000', fontSize: '18px', fontWeight: 700 }}>
          {language === 'te' ? 'వేదిక & స్థలం' : 'Venue & Location'}
        </h2>
      </div>

      <div style={{ margin: '0 24px 24px 24px', border: '1px solid rgba(218, 165, 32, 0.5)', borderRadius: '8px', overflow: 'hidden', position: 'relative', zIndex: 2, background: '#fff', boxShadow: '0 4px 10px rgba(139,0,0,0.1)' }}>
        <iframe 
          src="https://maps.google.com/maps?q=17.8173907,83.2107555&z=16&output=embed" 
          style={{ border: 0, display: 'block', width: '100%', height: '200px' }} 
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
