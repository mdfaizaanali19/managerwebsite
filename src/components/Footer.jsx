import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="main-footer" id="footer">
      <div className="container">
        {/* Pre-Footer Editorial Statement Bar */}
        <div className="footer-statement-bar">
          <div className="footer-statement-tag">
            <span className="dash"></span>
            <span>BRAND STRATEGY &bull; CREATIVE DIRECTION &bull; FILMMAKING</span>
          </div>
          <div className="footer-statement-cta">
            <span className="cta-prompt">Ready to give your brand clear direction?</span>
            <Link to="/contact" className="footer-cta-pill">
              <span>Start a Conversation</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand Profile & Philosophy */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-lockup" title="Soheal Vaseem — Brand Strategist &amp; Filmmaker">
              <div className="brand-monogram">SV</div>
              <div className="brand-text">
                <span className="brand-title">SOHEAL VASEEM</span>
                <span className="brand-subtitle">BRAND STRATEGIST &amp; FILMMAKER</span>
              </div>
            </Link>
            <p>
              Partnering with visionary founders, enterprises, and creative leaders to craft enduring brand strategy, distinctive identity systems, and high-impact cinematic storytelling.
            </p>
            <div className="footer-location-badge">
              <i className="fa-solid fa-location-dot"></i>
              <span>Mumbai &bull; Hyderabad &bull; Working Nationally</span>
            </div>
          </div>

          {/* Col 2: Primary Navigation */}
          <div className="footer-nav-col">
            <h5>Navigation</h5>
            <ul className="footer-nav-list">
              <li><Link to="/"><i className="fa-solid fa-angle-right"></i> Home</Link></li>
              <li><Link to="/about"><i className="fa-solid fa-angle-right"></i> About</Link></li>
              <li><Link to="/services"><i className="fa-solid fa-angle-right"></i> Expertise</Link></li>
              <li><Link to="/portfolio"><i className="fa-solid fa-angle-right"></i> Work</Link></li>
              <li><Link to="/filmmaking"><i className="fa-solid fa-angle-right"></i> Film Making</Link></li>
              <li><Link to="/media"><i className="fa-solid fa-angle-right"></i> Insights &amp; Press</Link></li>
              <li><Link to="/contact"><i className="fa-solid fa-angle-right"></i> Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Practice Areas & Disciplines */}
          <div className="footer-nav-col">
            <h5>Practice Areas</h5>
            <ul className="footer-nav-list">
              <li><Link to="/services"><i className="fa-solid fa-angle-right"></i> Brand Strategy &amp; Positioning</Link></li>
              <li><Link to="/services"><i className="fa-solid fa-angle-right"></i> Identity Systems &amp; Design</Link></li>
              <li><Link to="/filmmaking"><i className="fa-solid fa-angle-right"></i> Commercial &amp; Narrative Film</Link></li>
              <li><Link to="/portfolio"><i className="fa-solid fa-angle-right"></i> Advertising &amp; Campaigns</Link></li>
              <li><Link to="/services"><i className="fa-solid fa-angle-right"></i> Executive Brand Advisory</Link></li>
            </ul>
          </div>

          {/* Col 4: Direct Advisory & Contact */}
          <div className="footer-nav-col">
            <h5>Start a Dialogue</h5>
            <ul className="footer-contact-list">
              <li>
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <span className="contact-label">Direct Inquiries</span>
                  <a href="mailto:info@sohealvaseem.com" className="contact-val">info@sohealvaseem.com</a>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <span className="contact-label">Executive Advisory</span>
                  <a href="tel:+919014365364" className="contact-val">+91 9014 365 364</a>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-calendar-check"></i>
                <div>
                  <span className="contact-label">Private Consultation</span>
                  <Link to="/contact" className="footer-advisory-btn">
                    <span>Schedule Advisory Call</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Editorial Legal / Copyright Strip */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Soheal Vaseem. All Rights Reserved. Master of Brand Architecture &amp; Cinematic Direction.
          </p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <span className="separator">&bull;</span>
            <Link to="/contact">Terms of Engagement</Link>
            <span className="separator">&bull;</span>
            <Link to="/contact">Brand Advisory Protocol</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
