import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions-dock" aria-label="Quick Actions">
      <a 
        href="https://wa.me/919014365364?text=Hi%20Soheal,%20I%20would%20like%20to%20discuss%20a%20brand%20strategy%20or%20film%20project." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn floating-wa"
        title="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {showTop && (
        <button 
          onClick={scrollToTop} 
          className="floating-btn floating-top" 
          title="Back to Top"
          aria-label="Back to Top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
