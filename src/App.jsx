import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Filmmaking from './pages/Filmmaking';
import Media from './pages/Media';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/index.php" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/about.php" element={<About />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/services.html" element={<Services />} />
          <Route path="/services.php" element={<Services />} />
          <Route path="/services_two.php" element={<Services />} />
          <Route path="/services_three.php" element={<Services />} />
          
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio.html" element={<Portfolio />} />
          <Route path="/portfolio.php" element={<Portfolio />} />
          <Route path="/portfolio_two.php" element={<Portfolio />} />
          
          <Route path="/filmmaking" element={<Filmmaking />} />
          <Route path="/filmmaking.html" element={<Filmmaking />} />
          <Route path="/filmmaking.php" element={<Filmmaking />} />
          
          <Route path="/media" element={<Media />} />
          <Route path="/media.html" element={<Media />} />
          <Route path="/media.php" element={<Media />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/contact.php" element={<Contact />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
