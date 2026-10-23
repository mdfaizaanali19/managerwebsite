import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import GrainOverlay from './components/GrainOverlay';
import PageTransition from './motion/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Filmmaking from './pages/Filmmaking';
import Media from './pages/Media';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const TITLES = {
  about: 'About — Soheal Vaseem',
  services: 'Services & Methodology — Soheal Vaseem',
  portfolio: 'Projects — Soheal Vaseem',
  filmmaking: 'Filmmaking — Soheal Vaseem',
  media: 'Insights & Press — Soheal Vaseem',
  contact: 'Contact — Soheal Vaseem'
};

const NOT_FOUND_TITLE = 'Page not found — Soheal Vaseem';

const HOME_TITLE = 'Soheal Vaseem — Brand Strategist & Commercial Film Director';

/* Legacy .html/.php paths kept alive for old links and bookmarks. */
const HOME_ALIASES = new Set(['/', '/index.html', '/index.php']);
const isKnownPath = (path) => HOME_ALIASES.has(path);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const key = Object.keys(TITLES).find((k) => path.includes(k));
    if (key) {
      document.title = TITLES[key];
      return;
    }
    document.title = isKnownPath(path) ? HOME_TITLE : NOT_FOUND_TITLE;
  }, [location.pathname]);

  return (
    <div className="site-wrapper">
      <Preloader />
      <SmoothScroll />
      <GrainOverlay />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/index.html" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/index.php" element={<PageTransition><Home /></PageTransition>} />

            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/about.html" element={<PageTransition><About /></PageTransition>} />
            <Route path="/about.php" element={<PageTransition><About /></PageTransition>} />

            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/services.html" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/services.php" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/services_two.php" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/services_three.php" element={<PageTransition><Services /></PageTransition>} />

            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/portfolio.html" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/portfolio.php" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/portfolio_two.php" element={<PageTransition><Portfolio /></PageTransition>} />

            <Route path="/filmmaking" element={<PageTransition><Filmmaking /></PageTransition>} />
            <Route path="/filmmaking.html" element={<PageTransition><Filmmaking /></PageTransition>} />
            <Route path="/filmmaking.php" element={<PageTransition><Filmmaking /></PageTransition>} />

            <Route path="/media" element={<PageTransition><Media /></PageTransition>} />
            <Route path="/media.html" element={<PageTransition><Media /></PageTransition>} />
            <Route path="/media.php" element={<PageTransition><Media /></PageTransition>} />

            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/contact.html" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/contact.php" element={<PageTransition><Contact /></PageTransition>} />

            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
