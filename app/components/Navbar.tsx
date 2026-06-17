'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { name: language === 'te' ? 'హోమ్' : 'Home', path: '/' },
    { name: language === 'te' ? 'కార్యక్రమాలు' : 'Events', path: '/events' },
    { name: language === 'te' ? 'స్థలం' : 'Location', path: '/location' },
  ];

  return (
    <nav style={{ background: 'linear-gradient(135deg, #8b0000 0%, #b22222 50%, #8b0000 100%)', borderBottom: '3px solid #ffd700', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} style={{ textDecoration: 'none', color: pathname === item.path ? '#ffd700' : '#f8e4a0', fontFamily: 'Libre Bodoni, serif', fontWeight: pathname === item.path ? 700 : 400, borderBottom: pathname === item.path ? '2px solid #ffd700' : 'none', paddingBottom: '4px' }}>
            {item.name}
          </Link>
        ))}
      </div>
      <button onClick={toggleLanguage} style={{ background: 'linear-gradient(90deg, #daa520, #ffd700)', color: '#4a0404', border: '1px solid rgba(139, 0, 0, 0.2)', padding: '6px 12px', borderRadius: '12px', fontFamily: 'Newsreader, serif', fontWeight: 700, cursor: 'pointer' }}>
        {language === 'te' ? 'English' : 'తెలుగు'}
      </button>
    </nav>
  );
}
