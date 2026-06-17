import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";

export const metadata: Metadata = {
  title: "Housewarming Invitation - Killi Family",
  description: "We cordially invite you to the auspicious occasion of our Griha Pravesh ceremony.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Noto+Serif+Telugu:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <IntroAnimation>
            <div className="card-wrapper mx-auto shadow-2xl relative">
              <div className="watermark"><i className="fa-solid fa-spa"></i></div>
              <div className="card-inner">
                {/* Corner Anchors */}
                <svg className="corner corner-tl" viewBox="0 0 70 70" fill="none"><path d="M5 65 L5 15 Q5 5 15 5 L65 5" stroke="#daa520" strokeWidth="2"/></svg>
                <svg className="corner corner-tr" viewBox="0 0 70 70" fill="none"><path d="M5 65 L5 15 Q5 5 15 5 L65 5" stroke="#daa520" strokeWidth="2"/></svg>
                <svg className="corner corner-bl" viewBox="0 0 70 70" fill="none"><path d="M5 65 L5 15 Q5 5 15 5 L65 5" stroke="#daa520" strokeWidth="2"/></svg>
                <svg className="corner corner-br" viewBox="0 0 70 70" fill="none"><path d="M5 65 L5 15 Q5 5 15 5 L65 5" stroke="#daa520" strokeWidth="2"/></svg>
                
                <Navbar />
                <div style={{ flex: 1, zIndex: 10, position: 'relative' }}>
                  {children}
                </div>
                
                {/* FOOTER BLOCK */}
                <div style={{ background: 'linear-gradient(135deg, #8b0000 0%, #b22222 50%, #8b0000 100%)', padding: '20px 15px', textAlign: 'center', borderTop: '3px solid #ffd700', position: 'relative', zIndex: 2, marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'Noto Serif Telugu, serif', color: '#f8e4a0', fontSize: '11px', opacity: 0.9 }}>ఆప్యాయంగా మీ వారు</div>
                  <div style={{ fontFamily: 'Noto Serif Telugu, serif', color: '#ffd700', fontSize: '15px', fontWeight: 600, marginTop: '2px' }}>కిల్లి కుటుంబ సభ్యులు</div>
                  <div style={{ fontFamily: 'Libre Bodoni, serif', color: '#ffd700', fontSize: '13px', opacity: 0.95, marginTop: '1px' }}>Killi Family Members</div>
                  <div style={{ marginTop: '14px', color: '#ffd700', fontSize: '13px', opacity: 0.9, letterSpacing: '6px' }}>
                    <i className="fa-solid fa-fire"></i> <i className="fa-solid fa-spa"></i> <i className="fa-solid fa-house"></i>
                  </div>
                </div>
              </div>
            </div>
          </IntroAnimation>
        </LanguageProvider>
      </body>
    </html>
  );
}
