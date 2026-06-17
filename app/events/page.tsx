'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Events() {
  const { language } = useLanguage();

  return (
    <div style={{ paddingBottom: '20px' }}>
      <div className="ornament" style={{ paddingTop: '20px' }}>
        <div className="ornament-line"></div>
        <div className="ornament-center"><i className="fa-solid fa-leaf"></i></div>
        <div className="ornament-line"></div>
      </div>

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
    </div>
  );
}
