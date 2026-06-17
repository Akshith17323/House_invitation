'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3500); // Slightly increased time so guests can appreciate the details
    return () => clearTimeout(timer);
  }, []);

  if (showAnimation) {
    return (
      <div style={{ 
        position: 'fixed', inset: 0, background: '#4a0404', zIndex: 1000, 
        display: 'flex', flexDirection: 'column', alignItems: 'center', 
        justifyContent: 'center', color: '#ffd700', fontFamily: 'Noto Serif Telugu, serif' 
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{ marginBottom: '35px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '20px' }}>
            
            {/* 1. CHAKRA (Left) */}
            <svg width="85" height="100" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))' }}>
              <g transform="translate(10, 0)">
                {/* Side Golden Wings */}
                <path d="M 22,55 C 5,45 -5,75 10,85 C 0,70 10,40 30,55 Z" fill="#f5a623" />
                <path d="M 22,65 C 0,75 10,95 20,95 C 10,85 10,65 30,70 Z" fill="#f5a623" />
                <path d="M 78,55 C 95,45 105,75 90,85 C 100,70 90,40 70,55 Z" fill="#f5a623" />
                <path d="M 78,65 C 100,75 90,95 80,95 C 90,85 90,65 70,70 Z" fill="#f5a623" />
                
                {/* Top & Bottom Red Accents */}
                <path d="M 50,12 L 42,20 L 50,22 L 58,20 Z" fill="#d11111" />
                <path d="M 50,12 L 46,5 L 50,10 L 54,5 Z" fill="#d11111" />
                <path d="M 50,98 L 42,90 L 50,88 L 58,90 Z" fill="#d11111" />
                <path d="M 50,98 L 46,105 L 50,100 L 54,105 Z" fill="#d11111" />

                {/* Main Concentric Circles */}
                <circle cx="50" cy="55" r="35" fill="#1b5e20" stroke="#ffd700" strokeWidth="4" />
                <circle cx="50" cy="55" r="28" fill="#ffffff" stroke="#d11111" strokeWidth="3" />
                
                {/* Center Starburst / Petals */}
                <g transform="translate(50, 55)">
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                    <path key={angle} transform={`rotate(${angle})`} d="M 0,0 L -5,-22 L 0,-26 L 5,-22 Z" fill="#ffd700" stroke="#b8860b" strokeWidth="1" />
                  ))}
                  <circle cx="0" cy="0" r="6" fill="#d11111" />
                </g>
              </g>
              {/* Base */}
              <path d="M 40,115 L 80,115 L 75,105 L 45,105 Z" fill="#ffd700" />
              <path d="M 30,125 L 90,125 L 85,115 L 35,115 Z" fill="#daa520" />
            </svg>


            {/* 2. NAMAM (Center) */}
            <svg width="75" height="100" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))' }}>
              <g transform="translate(0, 5)">
                {/* White U shape */}
                <path d="M 15,20 L 32,85 C 38,105 62,105 68,85 L 85,20 L 60,20 L 53,75 C 52,80 48,80 47,75 L 40,20 Z" fill="#ffffff" />
                {/* Red drop */}
                <path d="M 47,30 L 53,30 L 50,85 Z" fill="#ff0000" />
                <circle cx="50" cy="87" r="4" fill="#ff0000" />
              </g>
              {/* Base */}
              <path d="M 30,120 L 70,120 L 65,110 L 35,110 Z" fill="#ffd700" />
              <path d="M 20,130 L 80,130 L 75,120 L 25,120 Z" fill="#daa520" />
            </svg>


            {/* 3. SHANKHA / CONCH (Right) */}
            <svg width="85" height="100" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.5))' }}>
              <g transform="translate(10, 0)">
                {/* Top/Side Red Accents & Green Gems */}
                <path d="M 50,15 L 40,30 L 60,30 Z" fill="#d11111" />
                <path d="M 50,5 L 45,15 L 55,15 Z" fill="#d11111" />
                <circle cx="25" cy="45" r="4" fill="#2a7b3e" />
                <circle cx="75" cy="45" r="4" fill="#2a7b3e" />
                <path d="M 22,50 L 15,60 L 25,65 Z" fill="#d11111" />
                <path d="M 78,50 L 85,60 L 75,65 Z" fill="#d11111" />
                <path d="M 28,70 L 18,80 L 30,85 Z" fill="#d11111" />
                <path d="M 72,70 L 82,80 L 70,85 Z" fill="#d11111" />
                
                {/* Golden Conch Body */}
                <path d="M 35,30 C 60,20 80,35 70,60 C 65,75 55,95 50,105 C 45,95 35,75 30,60 C 20,35 40,20 35,30 Z" fill="#ffd700" stroke="#b8860b" strokeWidth="2" />
                
                {/* Spiral Details */}
                <path d="M 32,45 C 50,40 65,45 68,55" fill="none" stroke="#b8860b" strokeWidth="3" />
                <path d="M 30,60 C 45,65 55,70 58,80" fill="none" stroke="#b8860b" strokeWidth="3" />
                <path d="M 35,75 C 45,85 48,90 50,100" fill="none" stroke="#b8860b" strokeWidth="3" />
                
                {/* Bottom Red Accent */}
                <path d="M 50,105 L 42,112 L 50,110 L 58,112 Z" fill="#d11111" />
              </g>
              {/* Base */}
              <path d="M 40,115 L 80,115 L 75,105 L 45,105 Z" fill="#ffd700" />
              <path d="M 30,125 L 90,125 L 85,115 L 35,115 Z" fill="#daa520" />
            </svg>

          </div>
          
          <h1 style={{ fontSize: '26px', letterSpacing: '2px', marginBottom: '10px', color: '#ffd700' }}>శ్రీ మాత్రే నమః</h1>
          <p style={{ fontSize: '17px', fontStyle: 'italic', opacity: 0.9, fontFamily: 'Newsreader, serif', color: '#f8e4a0' }}>Sri Matre Namah</p>
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