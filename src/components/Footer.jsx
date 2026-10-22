import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ft-root">
      <div className="container">
        <div className="ft-grid">
          {/* Column 1: Brand & Bio */}
          <div className="ft-brand-col">
            <div className="ft-brand">SOHEAL VASEEM</div>
            <div className="ft-tagline">Brand Strategist &bull; Creative Director &bull; Filmmaker</div>
            <p className="ft-desc">
              Three decades of crafting distinctive market positioning, enduring brand identities, and cinematic visual narratives for visionary businesses across India.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="ft-col-title">Navigation</div>
            <ul className="ft-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Soheal</Link></li>
              <li><Link to="/services">Services &amp; Strategy</Link></li>
              <li><Link to="/portfolio">Selected Portfolio</Link></li>
              <li><Link to="/filmmaking">Filmmaking &amp; Commercials</Link></li>
              <li><Link to="/media">Media &amp; Press Archive</Link></li>
              <li><Link to="/contact">Discuss a Project</Link></li>
            </ul>
          </div>

          {/* Column 3: Strategic Services */}
          <div>
            <div className="ft-col-title">Capabilities</div>
            <ul className="ft-links">
              <li><Link to="/services">Brand Architecture &amp; Identity</Link></li>
              <li><Link to="/services">Directorial Filmmaking (TVCs)</Link></li>
              <li><Link to="/services">Commercial Advertising</Link></li>
              <li><Link to="/services">E-Commerce &amp; Web Platforms</Link></li>
              <li><Link to="/services">Go-To-Market Consultation</Link></li>
              <li><Link to="/services">Creative Direction</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div>
            <div className="ft-col-title">Offices &amp; Contact</div>
            <div className="ft-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Mumbai &bull; Hyderabad, India</span>
            </div>
            <div className="ft-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info@sohealvaseem.com" style={{ color: '#ffffff' }}>info@sohealvaseem.com</a>
            </div>
            <div className="ft-contact-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+919014365364" style={{ color: '#ffffff' }}>+91 9014 365 364</a>
            </div>
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#a0a2ab', marginBottom: '8px' }}>
                Featured In
              </div>
              <div style={{ fontSize: '13px', color: '#c5c7d0' }}>
                Eenadu &bull; The Hindu &bull; Deccan Chronicle
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="ft-bottom">
          <div>
            &copy; {currentYear} Soheal Vaseem. All Rights Reserved. Strategic Brand Consulting &amp; Direction.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer" style={{ color: '#8d8d93' }}>
              LinkedIn
            </a>
            <a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer" style={{ color: '#8d8d93' }}>
              YouTube
            </a>
            <a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer" style={{ color: '#8d8d93' }}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
