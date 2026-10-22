import React from 'react';

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="footer-cta-pill">
              <span>Start a Conversation</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand Profile & Philosophy */}
          <div className="footer-brand">
            <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="footer-brand-lockup" title="Soheal Vaseem — Brand Strategist &amp; Filmmaker">
              <div className="brand-monogram">SV</div>
              <div className="brand-text">
                <span className="brand-title">SOHEAL VASEEM</span>
                <span className="brand-subtitle">BRAND STRATEGY &bull; FILMMAKING</span>
              </div>
            </a>
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
            <h5>Directory</h5>
            <ul className="footer-nav-list">
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}><i className="fa-solid fa-angle-right"></i> About &amp; Positioning</a></li>
              <li><a href="#journey" onClick={(e) => scrollTo(e, 'journey')}><i className="fa-solid fa-angle-right"></i> Career Journey (1991)</a></li>
              <li><a href="#capabilities" onClick={(e) => scrollTo(e, 'capabilities')}><i className="fa-solid fa-angle-right"></i> Strategic Disciplines</a></li>
              <li><a href="#work" onClick={(e) => scrollTo(e, 'work')}><i className="fa-solid fa-angle-right"></i> Selected Work</a></li>
              <li><a href="#filmmaking" onClick={(e) => scrollTo(e, 'filmmaking')}><i className="fa-solid fa-angle-right"></i> Filmmaking &amp; Showreel</a></li>
              <li><a href="#recognition" onClick={(e) => scrollTo(e, 'recognition')}><i className="fa-solid fa-angle-right"></i> Press &amp; Recognition</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}><i className="fa-solid fa-angle-right"></i> Contact &amp; Advisory</a></li>
            </ul>
          </div>

          {/* Col 3: Practice Areas & Disciplines */}
          <div className="footer-nav-col">
            <h5>Practice Areas</h5>
            <ul className="footer-nav-list">
              <li><a href="#capabilities" onClick={(e) => scrollTo(e, 'capabilities')}><i className="fa-solid fa-angle-right"></i> Brand Strategy &amp; Positioning</a></li>
              <li><a href="#capabilities" onClick={(e) => scrollTo(e, 'capabilities')}><i className="fa-solid fa-angle-right"></i> Identity Systems &amp; Design</a></li>
              <li><a href="#filmmaking" onClick={(e) => scrollTo(e, 'filmmaking')}><i className="fa-solid fa-angle-right"></i> Commercial &amp; Narrative Film</a></li>
              <li><a href="#work" onClick={(e) => scrollTo(e, 'work')}><i className="fa-solid fa-angle-right"></i> Web &amp; Digital Platforms</a></li>
              <li><a href="#capabilities" onClick={(e) => scrollTo(e, 'capabilities')}><i className="fa-solid fa-angle-right"></i> Executive Brand Advisory</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Advisory & Contact */}
          <div className="footer-nav-col">
            <h5>Start a Dialogue</h5>
            <ul className="footer-contact-list">
              <li>
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <span className="contact-label">Direct Correspondence</span>
                  <a href="mailto:info@sohealvaseem.com" className="contact-val">info@sohealvaseem.com</a>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <div>
                  <span className="contact-label">Direct Telephone</span>
                  <a href="tel:+919014365364" className="contact-val">+91 9014 365 364</a>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-calendar-check"></i>
                <div>
                  <span className="contact-label">Private Consultation</span>
                  <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="footer-advisory-btn">
                    <span>Schedule Advisory Call</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar: Copyright & Social */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Soheal Vaseem. All Rights Reserved. Strategic Brand Consulting &amp; Commercial Direction.
          </div>
          <div className="footer-social-links">
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
        </div>
      </div>
    </footer>
  );
}
