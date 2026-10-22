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

  // Close drawer on route change & scroll top
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
      <div className="nvb-topbar">
        <div className="container">
          <div className="nvb-topbar-inner">
            <div className="nvb-topbar-left">
              <div className="nvb-top-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Mumbai &bull; Hyderabad</span>
              </div>
              <div className="nvb-top-item">
                <i className="fa-solid fa-envelope" style={{ color: 'var(--red)' }}></i>
                <a href="mailto:info@sohealvaseem.com">info@sohealvaseem.com</a>
              </div>
              <div className="nvb-top-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+919014365364">+91 9014 365 364</a>
              </div>
            </div>

            <div className="nvb-topbar-right">
              <div className="nvb-socials">
                <a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer" className="nvb-social" title="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer" className="nvb-social" title="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer" className="nvb-social" title="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`nvb-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nvb-main">
            <Link to="/" className="nvb-brand">
              <span className="nvb-brand-title">SOHEAL VASEEM</span>
              <span className="nvb-brand-tagline">Brand Strategist &bull; Filmmaker</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="nvb-nav" aria-label="Main Navigation">
              <NavLink to="/" className={({ isActive }) => `nvb-link ${isActive ? 'active' : ''}`} end>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `nvb-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => `nvb-link ${isActive ? 'active' : ''}`}>
                Services
              </NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => `nvb-link ${isActive ? 'active' : ''}`}>
                Portfolio
              </NavLink>
              <NavLink to="/filmmaking" className={({ isActive }) => `nvb-link ${isActive ? 'active' : ''}`}>
                Filmmaking
              </NavLink>
              <NavLink to="/media" className={({ isActive }) => `nvb-link ${isActive ? 'active' : ''}`}>
                Media
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nvb-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </nav>

            {/* Action CTA */}
            <div className="nvb-actions">
              <Link to="/contact" className="sv-btn sv-btn-dark">
                <span>Discuss Project</span>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
              </Link>

              <button 
                onClick={toggleDrawer} 
                className="nvb-mobile-toggle" 
                aria-label="Toggle navigation menu"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`nvb-drawer-overlay ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>
      <aside className={`nvb-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="nvb-drawer-head">
          <Link to="/" className="nvb-brand" onClick={toggleDrawer}>
            <span className="nvb-brand-title">SOHEAL VASEEM</span>
            <span className="nvb-brand-tagline">Brand Strategist &bull; Filmmaker</span>
          </Link>
          <button onClick={toggleDrawer} className="nvb-drawer-close" aria-label="Close menu">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="nvb-drawer-links">
          <NavLink to="/" className={({ isActive }) => `nvb-drawer-link ${isActive ? 'active' : ''}`} end onClick={toggleDrawer}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nvb-drawer-link ${isActive ? 'active' : ''}`} onClick={toggleDrawer}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nvb-drawer-link ${isActive ? 'active' : ''}`} onClick={toggleDrawer}>
            Services
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `nvb-drawer-link ${isActive ? 'active' : ''}`} onClick={toggleDrawer}>
            Portfolio
          </NavLink>
          <NavLink to="/filmmaking" className={({ isActive }) => `nvb-drawer-link ${isActive ? 'active' : ''}`} onClick={toggleDrawer}>
            Filmmaking
          </NavLink>
          <NavLink to="/media" className={({ isActive }) => `nvb-drawer-link ${isActive ? 'active' : ''}`} onClick={toggleDrawer}>
            Media &amp; Press
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nvb-drawer-link ${isActive ? 'active' : ''}`} onClick={toggleDrawer}>
            Contact
          </NavLink>
        </nav>

        <div className="nvb-drawer-contact">
          <div><i className="fa-solid fa-envelope" style={{ color: 'var(--red)', marginRight: '8px' }}></i> info@sohealvaseem.com</div>
          <div><i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i> +91 9014 365 364</div>
          <div><i className="fa-solid fa-location-dot" style={{ marginRight: '8px' }}></i> Mumbai &bull; Hyderabad</div>
        </div>
      </aside>
    </>
  );
}
