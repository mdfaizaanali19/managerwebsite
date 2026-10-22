import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'about', 'journey', 'capabilities', 'work', 'filmmaking', 'recognition', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    setDrawerOpen(false);
    if (location.pathname === '/' || location.pathname === '/index.html') {
      e.preventDefault();
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'about', label: 'About', target: 'about' },
    { id: 'journey', label: 'Journey', target: 'journey' },
    { id: 'capabilities', label: 'Expertise', target: 'capabilities' },
    { id: 'work', label: 'Work', target: 'work' },
    { id: 'filmmaking', label: 'Film Making', target: 'filmmaking' },
    { id: 'recognition', label: 'Recognition', target: 'recognition' }
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="top-info-bar">
        <div className="container">
          <div className="top-info-content">
            <div className="top-info-left">
              <div className="top-info-item">
                <i className="fa-solid fa-location-dot"></i> Mumbai &bull; Hyderabad
              </div>
              <div className="top-info-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@sohealvaseem.com">info@sohealvaseem.com</a>
              </div>
              <div className="top-info-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+919014365364">+91 9014 365 364</a>
              </div>
            </div>
            
            <div className="top-info-right">
              <div className="top-social">
                <a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer" title="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-container">
            {/* Brand Mark */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, 'hero')} 
              className="brand-mark" 
              title="Soheal Vaseem — Brand Strategist & Filmmaker"
            >
              <div className="brand-monogram">SV</div>
              <div className="brand-text">
                <span className="brand-title">SOHEAL VASEEM</span>
                <span className="brand-subtitle">STRATEGY &bull; CREATIVE DIRECTION &bull; FILM</span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Smooth Anchors) */}
            <nav className="nav-desktop-wrap" aria-label="Main Navigation">
              <ul className="nav-menu">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <a
                      href={`#${item.target}`}
                      onClick={(e) => handleNavClick(e, item.target)}
                      className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Nav CTA & Mobile Toggle */}
            <div className="nav-actions-group">
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')} 
                className={`nav-cta-btn ${activeSection === 'contact' ? 'active' : ''}`} 
                title="Let's Talk — Start a Conversation"
              >
                <span>Let's Talk</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <button 
                type="button" 
                className={`mobile-toggle ${drawerOpen ? 'active' : ''}`} 
                aria-label="Toggle navigation menu"
                onClick={() => setDrawerOpen(prev => !prev)}
              >
                <span className="toggle-line line-top"></span>
                <span className="toggle-line line-mid"></span>
                <span className="toggle-line line-bot"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer */}
      <div 
        className={`drawer-backdrop ${drawerOpen ? 'active' : ''}`} 
        onClick={() => setDrawerOpen(false)}
      ></div>
      <aside className={`mobile-drawer ${drawerOpen ? 'active' : ''}`} aria-label="Mobile Navigation">
        <div className="drawer-header">
          <a 
            href="#hero" 
            className="drawer-brand-lockup" 
            title="Soheal Vaseem" 
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            <div className="brand-monogram">SV</div>
            <div className="brand-text">
              <span className="brand-title">SOHEAL VASEEM</span>
              <span className="brand-subtitle">BRAND STRATEGY &bull; FILMMAKING</span>
            </div>
          </a>
          <button 
            type="button" 
            className="drawer-close" 
            aria-label="Close navigation menu" 
            onClick={() => setDrawerOpen(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="drawer-nav-wrap">
          <div className="drawer-meta-tag">
            <span className="dash"></span>
            <span>DIRECTORY &bull; 2026</span>
          </div>
          <ul className="drawer-menu">
            <li>
              <a href="#about" className="drawer-link" onClick={(e) => handleNavClick(e, 'about')}>
                <span className="drawer-num">01</span>
                <span className="drawer-text">About &amp; Positioning</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </a>
            </li>
            <li>
              <a href="#journey" className="drawer-link" onClick={(e) => handleNavClick(e, 'journey')}>
                <span className="drawer-num">02</span>
                <span className="drawer-text">Career Journey (1991)</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </a>
            </li>
            <li>
              <a href="#capabilities" className="drawer-link" onClick={(e) => handleNavClick(e, 'capabilities')}>
                <span className="drawer-num">03</span>
                <span className="drawer-text">Strategy &amp; Methodology</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </a>
            </li>
            <li>
              <a href="#work" className="drawer-link" onClick={(e) => handleNavClick(e, 'work')}>
                <span className="drawer-num">04</span>
                <span className="drawer-text">Selected Work</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </a>
            </li>
            <li>
              <a href="#filmmaking" className="drawer-link" onClick={(e) => handleNavClick(e, 'filmmaking')}>
                <span className="drawer-num">05</span>
                <span className="drawer-text">Filmmaking &amp; Showreel</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </a>
            </li>
            <li>
              <a href="#recognition" className="drawer-link" onClick={(e) => handleNavClick(e, 'recognition')}>
                <span className="drawer-num">06</span>
                <span className="drawer-text">Press &amp; Recognition</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </a>
            </li>
            <li>
              <a href="#contact" className="drawer-link" onClick={(e) => handleNavClick(e, 'contact')}>
                <span className="drawer-num">07</span>
                <span className="drawer-text">Contact &amp; Advisory</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Drawer Footer Actions */}
        <div className="drawer-footer">
          <a href="#contact" className="drawer-cta-btn" onClick={(e) => handleNavClick(e, 'contact')}>
            <span>Let's Talk</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          <div className="drawer-contact-block">
            <a href="tel:+919014365364" className="drawer-contact-link">
              <i className="fa-solid fa-phone"></i>
              <span>+91 9014 365 364</span>
            </a>
            <a href="mailto:info@sohealvaseem.com" className="drawer-contact-link">
              <i className="fa-solid fa-envelope"></i>
              <span>info@sohealvaseem.com</span>
            </a>
          </div>
          <div className="drawer-social-strip">
            <a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer" title="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="drawer-city-tag">
            <span>Mumbai &bull; Hyderabad &bull; Working Nationally</span>
          </div>
        </div>
      </aside>
    </>
  );
}
