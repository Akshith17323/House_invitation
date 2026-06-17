'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showAnimation) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#4a0404', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#ffd700', fontFamily: 'Noto Serif Telugu, serif' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{ fontSize: '40px', marginBottom: '20px' }}>
            <i className="fa-solid fa-om"></i>
          </div>
          <h1 style={{ fontSize: '24px', letterSpacing: '2px', marginBottom: '10px' }}>శ్రీ మాత్రే నమః</h1>
          <p style={{ fontSize: '16px', fontStyle: 'italic', opacity: 0.8, fontFamily: 'Newsreader, serif' }}>Sri Matre Namah</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
