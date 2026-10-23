import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Single navigation list. The desktop bar and the full-screen overlay both read
 * from here so a route can never appear in one and be missing from the other.
 */
const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/filmmaking', label: 'Filmmaking' },
  { to: '/media', label: 'Insights' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <div className="rl-nav-wrap">
        <header className="rl-nav">
          <Link to="/" className="rl-nav-logo" aria-label="Soheal Vaseem — Home">
            <span className="rl-nav-mark">SV</span>
            <span className="rl-nav-word">SOHEAL VASEEM</span>
          </Link>

          <nav className="rl-nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `rl-nav-link ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="rl-nav-right">
            <span className="rl-nav-based">Mumbai &amp; Hyderabad</span>
            <button
              type="button"
              className={`rl-menu-btn ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="rl-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rl-menu-inner">
              <nav className="rl-menu-links" aria-label="Full navigation">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link to={l.to} className="rl-menu-link" onClick={() => setMenuOpen(false)}>
                      <span className="rl-menu-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="rl-menu-label">{l.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="rl-menu-meta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <div className="rl-menu-meta-group">
                  <span className="rl-menu-eyebrow">Get in touch</span>
                  <a href="mailto:info@sohealvaseem.com">info@sohealvaseem.com</a>
                  <a href="tel:+919014365364">+91 9014 365 364</a>
                </div>
                <div className="rl-menu-meta-group">
                  <span className="rl-menu-eyebrow">Based in</span>
                  <span>Mumbai &amp; Hyderabad, India</span>
                  <span>Working Nationally</span>
                </div>
                <div className="rl-menu-socials">
                  <a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer">YouTube</a>
                  <a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
