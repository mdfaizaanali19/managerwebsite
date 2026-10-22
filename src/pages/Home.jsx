import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Home() {
  // Curated spotlight project (Vintagio flagship) and companion projects
  const spotlightProject = projects.find(p => p.id === 1) || projects[0];
  const companionProjects = projects.filter(p => p.is_featured === 1 && p.id !== spotlightProject.id).slice(0, 4);

  const coreServices = [
    {
      num: '01',
      title: 'Brand Strategy & Strategic Positioning',
      desc: 'Formulating rigorous brand audits, competitive differentiation, narrative frameworks, and core value proposition architecture that give businesses commanding market presence.'
    },
    {
      num: '02',
      title: 'Creative Direction & Identity Systems',
      desc: 'Architecting complete visual identities, typographic hierarchy, brand manuals, and tactile packaging design that build immediate prestige and customer recognition.'
    },
    {
      num: '03',
      title: 'Cinematic Directing & Commercial Filmmaking',
      desc: 'Directing broadcast-grade television commercials (TVCs), corporate brand films, and dramatic visual spots with 4K cinematography and precision sound design.'
    },
    {
      num: '04',
      title: 'Digital Web Architecture & Platforms',
      desc: 'Engineering high-conversion digital flagships, luxury e-commerce marketplaces, and hospital CRM patient inquiry portals designed for measurable commercial traction.'
    }
  ];

  return (
    <>
      {/* ===================================================================
           HERO: LUXURY CINEMATIC EDITORIAL BANNER
           =================================================================== */}
      <section className="hero-cinematic" id="hero">
        <div className="hero-cinematic-inner">
          {/* Left Side: Editorial Typography & Actions */}
          <div className="hero-cinematic-content">
            <div className="hero-category-label">
              <span>BRAND STRATEGY</span>
              <span className="dot">&bull;</span>
              <span>CREATIVE DIRECTION</span>
              <span className="dot">&bull;</span>
              <span>FILMMAKING</span>
            </div>

            <h1 className="hero-cinematic-headline">
              Building Brands<br />
              With Purpose.<br />
              <span className="hero-italic-gold">Stories That Stay.</span>
            </h1>

            <p className="hero-cinematic-lead">
              I partner with founders, enterprise leadership, and visionary businesses to transform core business clarity into distinctive market positioning, compelling communication, and enduring commercial value.
            </p>

            <div className="hero-cinematic-actions">
              <a href="#work" className="btn-cinematic-dark" title="Explore Selected Work">
                <span>EXPLORE MY WORK</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <Link to="/contact" className="btn-cinematic-outline" title="Let's Build Your Brand">
                <span>LET'S BUILD YOUR BRAND</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Dedicated Portrait (Mobile) */}
          <div className="hero-cinematic-visual-mobile">
            <div className="hero-mobile-portrait-wrapper">
              <img 
                src="/images/resource/home_portrait_mobile.jpg" 
                alt="Soheal Vaseem — Brand Strategist & Filmmaker" 
                className="hero-mobile-portrait-img" 
                loading="eager" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 1: BRAND PHILOSOPHY (EDITORIAL SPREAD)
          =================================================================== */}
      <section className="philosophy-editorial-section">
        <div className="container">
          <div className="philosophy-editorial-wrapper">
            <span className="editorial-badge">Brand Philosophy</span>
            <h2 className="philosophy-editorial-headline">
              Great Brands Begin With <em>Clear Thinking.</em>
            </h2>
            <p className="philosophy-editorial-lead">
              In a crowded commercial landscape, brand distinction is never accidental—it is engineered. Meaningful growth happens when strategic business clarity, sharp market positioning, and disciplined creative execution operate in total alignment. When an organization understands precisely who it is, why it matters, and where it is going, every design choice, campaign, and digital touchpoint builds compounding enterprise value.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 2: SERVICES & STRATEGIC DISCIPLINES (NUMBERED ROWS)
          =================================================================== */}
      <section className="expertise-preview-section" id="services">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <span className="editorial-badge">Strategic Disciplines</span>
              <h2>Core Areas of Expertise</h2>
            </div>
            <p className="section-header-lead">
              End-to-end strategic advisory, visual identity, and growth capabilities tailored for ambitious businesses.
            </p>
          </div>

          {/* Editorial Numbered Rows Layout */}
          <div className="services-editorial-list">
            {coreServices.map((service) => (
              <div className="service-editorial-row" key={service.num}>
                <div className="service-row-num">{service.num}</div>
                <div className="service-row-main">
                  <h3 className="service-row-title">{service.title}</h3>
                  <p className="service-row-desc">{service.desc}</p>
                </div>
                <Link to="/services" className="service-row-arrow" aria-label={`Explore ${service.title}`}>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>

          <div className="expertise-preview-footer" style={{ marginTop: '36px' }}>
            <Link to="/services" className="btn btn-secondary">
              <span>Explore All Capabilities</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 3: CURATED PORTFOLIO SHOWCASE (ASYMMETRIC EDITORIAL)
          =================================================================== */}
      <section className="work-editorial-section" id="work">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <span className="editorial-badge">Verified Client Work</span>
              <h2>Selected Work &amp; Digital Platforms</h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline btn-sm">
              <span>View All Projects</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          {/* 1. Premier Flagship Spotlight */}
          {spotlightProject && (
            <div className="work-spotlight-card">
              <div className="work-spotlight-img-box">
                <img 
                  src={spotlightProject.image_path} 
                  alt={spotlightProject.title} 
                  loading="lazy" 
                />
                {spotlightProject.logo_path && (
                  <div className="work-brand-logo-badge" title={`${spotlightProject.title} Official Brand Logo`}>
                    <img src={spotlightProject.logo_path} alt={`${spotlightProject.title} Logo`} />
                  </div>
                )}
                <span className="work-spotlight-pill">Flagship Case Study</span>
              </div>
              <div className="work-spotlight-content">
                <span className="work-cat-tag">{spotlightProject.cat_label}</span>
                <h3 className="work-spotlight-title">{spotlightProject.title}</h3>
                <p className="work-spotlight-desc">{spotlightProject.description}</p>
                <div className="work-spotlight-footer">
                  {spotlightProject.project_url && spotlightProject.project_url !== '#' ? (
                    <a 
                      href={spotlightProject.project_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-cinematic-dark"
                    >
                      <span>Visit Live Platform</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
                    </a>
                  ) : (
                    <Link to="/portfolio" className="btn-cinematic-dark">
                      <span>Explore Case Study</span>
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 2. Curated Companion Grid */}
          <div className="work-grid-editorial" style={{ marginTop: '36px' }}>
            {companionProjects.map((project) => (
              <div key={project.id} className="work-card-editorial">
                <div className="work-img-box">
                  <img src={project.image_path} alt={project.title} loading="lazy" />
                  {project.logo_path && (
                    <div className="work-brand-logo-badge" title={`${project.title} Official Brand Logo`}>
                      <img src={project.logo_path} alt={`${project.title} Logo`} />
                    </div>
                  )}
                </div>
                <div className="work-content-box">
                  <span className="work-cat-tag">{project.cat_label}</span>
                  <h4 className="work-title-text">{project.title}</h4>
                  <p className="work-desc-text">{project.description}</p>
                  <div className="work-card-actions">
                    {project.project_url && project.project_url !== '#' ? (
                      <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="work-view-link">
                        <span>View Project</span> <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    ) : (
                      <Link to="/portfolio" className="work-view-link">
                        <span>Explore Case Study</span> <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 4: LATEST INSIGHTS & PRESS RECOGNITION
          =================================================================== */}
      <section className="insights-editorial-section" id="insights">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <span className="editorial-badge">Documented Recognition</span>
              <h2>Latest Insights &amp; Press</h2>
            </div>
            <Link to="/media" className="btn btn-outline btn-sm">
              <span>Read All Insights</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="insights-preview-grid">
            <div className="insight-card-editorial">
              <div className="insight-thumb-box">
                <img src="/images/resource/Hindu.jpg" alt="The Hindu — Directorial Acumen & Cinematic Vision" loading="lazy" />
              </div>
              <div className="insight-content-box">
                <span className="insight-meta-source">The Hindu &bull; National Daily</span>
                <h4 className="insight-title-text">Directorial Acumen &amp; Cinematic Vision</h4>
                <p className="insight-excerpt-text">
                  National newspaper coverage highlighting Soheal Vaseem’s innovative approach to visual storytelling, brand narratives, and production leadership.
                </p>
                <Link to="/media" className="insight-read-link">
                  <span>Read Full Feature</span> <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="insight-card-editorial">
              <div className="insight-thumb-box">
                <img src="/images/resource/chronicle.jpg" alt="Deccan Chronicle — Television Series & Ad Direction Spotlight" loading="lazy" />
              </div>
              <div className="insight-content-box">
                <span className="insight-meta-source">Deccan Chronicle &bull; Print Feature</span>
                <h4 className="insight-title-text">Television Series &amp; Ad Direction Spotlight</h4>
                <p className="insight-excerpt-text">
                  In-depth feature examining Soheal’s directorial execution across television drama serials and nationwide advertising campaigns.
                </p>
                <Link to="/media" className="insight-read-link">
                  <span>Read Full Feature</span> <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="insight-card-editorial">
              <div className="insight-thumb-box">
                <img src="/images/resource/eenadu.jpg" alt="Eenadu — Director Soheal Vaseem’s Creative Milestone" loading="lazy" />
              </div>
              <div className="insight-content-box">
                <span className="insight-meta-source">Eenadu &bull; Regional Leader</span>
                <h4 className="insight-title-text">Director Soheal Vaseem’s Creative Milestone</h4>
                <p className="insight-excerpt-text">
                  Extensive regional daily reporting highlighting Soheal’s artistic storytelling contributions and commercial campaign triumph.
                </p>
                <Link to="/media" className="insight-read-link">
                  <span>Read Full Feature</span> <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 5: FINAL CALL TO ACTION (LUXURY INVITATION)
          =================================================================== */}
      <section className="cta-meaningful-section" id="contact">
        <div className="container">
          <div className="cta-meaningful-inner">
            <span className="editorial-badge" style={{ justifyContent: 'center' }}>Start a Conversation</span>
            <h2>Let's Build Something Meaningful.</h2>
            <p>
              Have a brand, business, or marketing challenge in mind? Let's start a conversation about the possibilities.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link to="/contact" className="btn-cinematic-dark">
                <span>Start a Conversation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a 
                href="https://wa.me/919014365364?text=Hi%20Soheal,%20I%20would%20like%20to%20discuss%20a%20brand%20strategy%20or%20film%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-cinematic-outline"
                style={{ backgroundColor: '#ffffff', color: '#181716' }}
              >
                <i className="fa-brands fa-whatsapp" style={{ color: '#25d366' }}></i>
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
