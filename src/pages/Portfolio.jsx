import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'healthcare', label: 'Healthcare & Clinics' },
    { key: 'hospitality', label: 'Hospitality & Events' },
    { key: 'corporate', label: 'Corporate & Services' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* ===================================================================
           1. HERO SECTION
           =================================================================== */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="kicker">Selected Works</div>
            <h1 className="page-hero-title">
              Case Studies &amp; Projects.<br />
              <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>
                Enduring Commercial Impact.
              </em>
            </h1>
            <p className="page-hero-lead">
              A curated archive of verified brand architectures, bespoke digital platforms, hospital CRM systems, and e-commerce flagships designed and deployed for ambitious enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. FILTER TABS & PROJECT GRID
           =================================================================== */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '44px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--line)'
            }}
          >
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`sv-btn ${activeFilter === cat.key ? 'sv-btn-dark' : 'sv-btn-outline'}`}
                style={{ height: '36px', fontSize: '12.5px', padding: '0 18px' }}
              >
                <span>{cat.label}</span>
                {activeFilter === cat.key && (
                  <span style={{ fontSize: '10px', opacity: 0.8, marginLeft: '4px' }}>
                    ({filteredProjects.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-img-wrapper">
                  <img 
                    src={project.image_path} 
                    alt={project.title} 
                    className="project-img" 
                    loading="lazy" 
                  />
                  <span className="project-cat-pill">{project.cat_label}</span>
                </div>

                <div className="project-body">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <h3 className="project-title" style={{ margin: 0 }}>{project.title}</h3>
                    {project.is_featured === 1 && (
                      <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--red)', background: '#fee', padding: '2px 6px', borderRadius: '4px' }}>
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="project-desc">{project.description}</p>

                  <div className="project-footer">
                    {project.project_url ? (
                      <a 
                        href={project.project_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                      >
                        <span>Visit Live Platform</span>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
                      </a>
                    ) : (
                      <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Internal Client Archive</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
           3. CTA BANNER
           =================================================================== */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-inner">
            <div className="kicker kicker-gold" style={{ justifyContent: 'center' }}>Start Your Build</div>
            <h2 className="section-title">
              Have a Venture or Platform in Mind?
            </h2>
            <p className="section-desc">
              From foundational brand discovery to custom digital architecture &mdash; let's build something exceptional together.
            </p>
            <div className="cta-banner-actions">
              <Link to="/contact" className="sv-btn sv-btn-red sv-btn-lg">
                <span>Discuss Your Project</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/services" className="sv-btn sv-btn-white sv-btn-lg">
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
