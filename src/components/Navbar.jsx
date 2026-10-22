import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

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
            <Link to="/" className="brand-mark" title="Soheal Vaseem — Brand Strategist & Filmmaker">
              <div className="brand-monogram">SV</div>
              <div className="brand-text">
                <span className="brand-title">SOHEAL VASEEM</span>
                <span className="brand-subtitle">BRAND STRATEGIST &amp; FILMMAKER</span>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="nav-desktop-wrap" aria-label="Main Navigation">
              <ul className="nav-menu">
                <li className="nav-item">
                  <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Expertise
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolio" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Work
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/media" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Insights
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/filmmaking" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    Film Making
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Nav CTA & Mobile Toggle */}
            <div className="nav-actions-group">
              <NavLink to="/contact" className={({ isActive }) => `nav-cta-btn ${isActive ? 'active' : ''}`} title="Let's Talk — Start a Conversation">
                <span>Let's Talk</span>
                <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
              <button 
                type="button" 
                className={`mobile-toggle ${drawerOpen ? 'active' : ''}`} 
                aria-label="Toggle navigation menu"
                onClick={toggleDrawer}
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
          <Link to="/" className="drawer-brand-lockup" title="Soheal Vaseem" onClick={() => setDrawerOpen(false)}>
            <div className="brand-monogram">SV</div>
            <div className="brand-text">
              <span className="brand-title">SOHEAL VASEEM</span>
              <span className="brand-subtitle">BRAND STRATEGY &bull; FILMMAKING</span>
            </div>
          </Link>
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
              <NavLink to="/" end className="drawer-link" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-num">01</span>
                <span className="drawer-text">Home</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="drawer-link" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-num">02</span>
                <span className="drawer-text">About</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="drawer-link" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-num">03</span>
                <span className="drawer-text">Expertise</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="drawer-link" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-num">04</span>
                <span className="drawer-text">Work</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/filmmaking" className="drawer-link" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-num">05</span>
                <span className="drawer-text">Film Making</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/media" className="drawer-link" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-num">06</span>
                <span className="drawer-text">Insights &amp; Press</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="drawer-link" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-num">07</span>
                <span className="drawer-text">Contact &amp; Advisory</span>
                <i className="fa-solid fa-arrow-right drawer-arrow"></i>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Drawer Footer Actions */}
        <div className="drawer-footer">
          <Link to="/contact" className="drawer-cta-btn" onClick={() => setDrawerOpen(false)}>
            <span>Let's Talk</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
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
            <a href="https://facebook.com/soheal.vaseem" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
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
