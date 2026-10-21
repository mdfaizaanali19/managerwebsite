import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const archiveItems = [
  {
    id: 101,
    title: 'Signature Brand Identity System',
    category: 'archive',
    cat_label: 'Brand Architecture',
    image_path: '/images/portfolio/01.jpg',
    logo_path: '',
    project_url: '',
    description: 'Comprehensive brand architecture, corporate identity manual, and visual stationery system developed for coherent multi-touchpoint communication.'
  },
  {
    id: 102,
    title: 'Luxury Packaging & Structural Design',
    category: 'archive',
    cat_label: 'Packaging System',
    image_path: '/images/portfolio/02.jpg',
    logo_path: '',
    project_url: '',
    description: 'Premium retail packaging structural design engineered for standout retail presence and tactile shelf appeal.'
  },
  {
    id: 103,
    title: 'Commercial Advertising Campaign',
    category: 'archive',
    cat_label: 'Campaign Direction',
    image_path: '/images/portfolio/03.jpg',
    logo_path: '',
    project_url: '',
    description: 'Visual advertising campaign roll-out with multi-channel creative direction across print, outdoor displays, and commercial media.'
  },
  {
    id: 104,
    title: 'Corporate Symbol & Monogram Mark',
    category: 'archive',
    cat_label: 'Logo Design',
    image_path: '/images/portfolio/04.jpg',
    logo_path: '',
    project_url: '',
    description: 'Bespoke corporate typographic mark designed for enduring corporate stature and high digital scalability.'
  },
  {
    id: 105,
    title: 'Theatrical Commercial Key Visual Art',
    category: 'archive',
    cat_label: 'Key Visual Art',
    image_path: '/images/portfolio/07.jpg',
    logo_path: '',
    project_url: '',
    description: 'Cinematic visual art and promotional poster layout designed for widescreen theatrical release and billboard advertising.'
  },
  {
    id: 106,
    title: 'Television Commercial Storyboard Art',
    category: 'archive',
    cat_label: 'Directorial Art',
    image_path: '/images/portfolio/14.jpg',
    logo_path: '',
    project_url: '',
    description: 'Directorial storyboards mapping camera shot compositions, temporal pacing, and dramatic beats before on-set filming.'
  }
];

const allItems = [...projects, ...archiveItems];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === filter);

  return (
    <>
      {/* ===================================================================
           PORTFOLIO HERO BANNER
           =================================================================== */}
      <section className="page-hero-editorial hero-page-work">
        <div className="hero-editorial-overlay"></div>
        <div className="container">
          <div className="hero-editorial-content">
            <div className="hero-editorial-badge">
              <span className="dash"></span>
              <span>CURATED WORK &bull; CASE STUDIES</span>
            </div>
            <h1 className="hero-editorial-headline">
              Ideas Made <span className="hero-italic-gold">Visible.</span>
            </h1>
            <p className="hero-editorial-lead">
              A selection of creative work shaped by strategy, storytelling, and purposeful execution.
            </p>
            <div className="hero-editorial-actions">
              <a href="#portfolio-grid" className="btn-hero-dark-pill" title="Explore Selected Projects">
                <span>EXPLORE PROJECTS</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
              <Link to="/contact" className="btn-hero-outline-pill" title="Start a Project Conversation">
                <span>START A PROJECT</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="hero-editorial-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           PORTFOLIO GALLERY & CATEGORY FILTERS
           =================================================================== */}
      <section className="section-padding bg-canvas" id="portfolio-grid">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="portfolio-filter-bar">
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({allItems.length})
            </button>
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setFilter('ecommerce')}
            >
              E-Commerce &amp; Retail
            </button>
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'healthcare' ? 'active' : ''}`}
              onClick={() => setFilter('healthcare')}
            >
              Healthcare &amp; Medical
            </button>
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'hospitality' ? 'active' : ''}`}
              onClick={() => setFilter('hospitality')}
            >
              Hospitality &amp; Events
            </button>
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'tech' ? 'active' : ''}`}
              onClick={() => setFilter('tech')}
            >
              Technology &amp; Web
            </button>
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'fashion' ? 'active' : ''}`}
              onClick={() => setFilter('fashion')}
            >
              Fashion
            </button>
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'realestate' ? 'active' : ''}`}
              onClick={() => setFilter('realestate')}
            >
              Real Estate
            </button>
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'archive' ? 'active' : ''}`}
              onClick={() => setFilter('archive')}
            >
              Brand Architecture
            </button>
          </div>

          {/* Portfolio Projects Grid */}
          <div className="work-grid-editorial">
            {filteredItems.map((item) => (
              <div key={item.id} className="work-card-editorial portfolio-item">
                <div className="work-img-box">
                  <img src={item.image_path} alt={item.title} loading="lazy" />
                  {item.logo_path && (
                    <div className="work-brand-logo-badge" title={`${item.title} Verified Brand Identity`}>
                      <img src={item.logo_path} alt={`${item.title} Official Logo`} />
                    </div>
                  )}
                </div>

                <div className="work-content-box">
                  <span className="work-cat-tag">{item.cat_label}</span>
                  <h4 className="work-title-text">{item.title}</h4>
                  <p className="work-desc-text">{item.description}</p>
                  
                  <div className="work-card-actions">
                    {item.project_url && item.project_url !== '#' ? (
                      <a href={item.project_url} target="_blank" rel="noopener noreferrer" className="work-view-link">
                        <span>View Project</span> <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.72rem' }}></i>
                      </a>
                    ) : (
                      <Link to="/contact" className="work-view-link">
                        <span>Enquire Project</span> <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-surface" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="editorial-badge" style={{ justifyContent: 'center' }}>Start Your Build</span>
          <h2>Have an Ambitious Project in Mind?</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            From high-converting e-commerce web systems to bespoke corporate visual identities, let's architect a solution that sets your enterprise apart.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <span>Discuss Your Project</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
