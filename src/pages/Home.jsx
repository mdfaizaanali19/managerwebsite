import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Curated spotlight project (Vintagio flagship) and companion projects
  const spotlightProject = projects.find(p => p.id === 1) || projects[0];
  const companionProjects = projects.filter(p => p.is_featured === 1 && p.id !== spotlightProject.id).slice(0, 4);

  const threePillars = [
    {
      num: '01',
      title: 'Brand Strategy & Positioning',
      desc: 'Formulating rigorous market audits, competitive differentiation, narrative architecture, and value propositions that build defensible market leadership.',
      deliverables: ['Brand Architecture & Audits', 'Market Positioning & Strategy', 'Messaging & Narrative Systems'],
      link: '/services'
    },
    {
      num: '02',
      title: 'Creative Direction & Identity',
      desc: 'Architecting bespoke visual identities, typography, brand guidelines, and high-performance digital platforms that command consumer trust and prestige.',
      deliverables: ['Visual Identity Systems', 'Packaging & Structural Design', 'Web Platforms & UI/UX Design'],
      link: '/services'
    },
    {
      num: '03',
      title: 'Commercial Filmmaking & TVCs',
      desc: 'Directing broadcast television commercials, corporate brand films, and dramatic visual spots with 4K cinematography, precision lighting, and sound choreography.',
      deliverables: ['Television Commercials (TVCs)', 'Corporate Brand Films', 'Key Visuals & Theatrical Art'],
      link: '/filmmaking'
    }
  ];

  return (
    <>
      {/* Video Modal */}
      {activeVideo && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.88)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '920px',
              aspectRatio: '16/9',
              backgroundColor: '#000',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: '-42px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.25rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <i className="fa-solid fa-xmark"></i> Close
            </button>
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="Soheal Vaseem Directorial Showreel"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* ===================================================================
           1. HERO: RESTRAINED EDITORIAL BANNER (Kumar Aman & Anna Rahier Style)
           =================================================================== */}
      <section className="hero-cinematic" id="hero">
        <div className="hero-cinematic-inner">
          <div className="hero-cinematic-content">
            <div className="editorial-kicker">
              <span className="kicker-line"></span>
              <span>STRATEGY &bull; CREATIVE DIRECTION &bull; FILMMAKING</span>
            </div>

            <h1 className="hero-cinematic-headline">
              Brand Strategist,<br />
              Creative Director<br />
              <span style={{ color: 'var(--text-primary)', fontStyle: 'italic', fontWeight: 500 }}>&amp; Filmmaker.</span>
            </h1>

            <p className="hero-cinematic-lead">
              For over three decades, Soheal Vaseem has partnered with founders, enterprise leadership teams, and ambitious businesses to transform strategic clarity into distinctive market positioning, compelling creative direction, and enduring commercial value.
            </p>

            <div className="hero-cinematic-actions">
              <a href="#work" className="btn-cinematic-dark" title="Explore Selected Work">
                <span>EXPLORE WORK</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <Link to="/contact" className="btn-cinematic-outline" title="Initiate Consultation">
                <span>LET'S TALK</span>
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
           2. BRAND POSITIONING PHILOSOPHY (Anna Rahier Style)
           =================================================================== */}
      <section className="philosophy-editorial-section">
        <div className="container">
          <div className="philosophy-editorial-wrapper">
            <div className="editorial-kicker">
              <span className="kicker-line"></span>
              <span>BRAND PHILOSOPHY &bull; SINCE 1991</span>
            </div>
            <h2 className="philosophy-editorial-headline">
              Great Brands Begin With <em>Clear Thinking.</em>
            </h2>
            <p className="philosophy-editorial-lead">
              In a crowded market, distinction is never accidental—it is engineered. Meaningful commercial growth happens when strategic business clarity, sharp positioning, and disciplined creative execution operate in total alignment. When an organization understands precisely who it is, why it matters, and where it is going, every design choice, campaign, and touchpoint builds compounding enterprise equity.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
           3. THE THREE CORE PILLARS (Kumar Aman Style)
           =================================================================== */}
      <section className="expertise-preview-section" id="capabilities">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>CORE CAPABILITIES</span>
              </div>
              <h2>Three Disciplines. One Integrated Practice.</h2>
            </div>
            <p className="section-header-lead">
              A comprehensive approach combining strategic business advisory, identity design, and broadcast commercial direction.
            </p>
          </div>

          <div className="pillars-three-grid">
            {threePillars.map((pillar) => (
              <div className="pillar-three-card" key={pillar.num}>
                <div className="pillar-three-num">{pillar.num}</div>
                <h3 className="pillar-three-title">{pillar.title}</h3>
                <p className="pillar-three-desc">{pillar.desc}</p>
                <ul className="pillar-three-deliverables">
                  {pillar.deliverables.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <Link to={pillar.link} className="pillar-three-link">
                  <span>Explore Discipline</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
           4. CURATED WORK & DIGITAL PLATFORMS (thisisbrown Style)
           =================================================================== */}
      <section className="work-editorial-section" id="work">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>SELECTED WORK</span>
              </div>
              <h2>Recent Case Studies &amp; Platforms</h2>
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

          {/* 2. Curated Image-Led Companion Grid */}
          <div className="portfolio-image-grid">
            {companionProjects.map((project) => (
              <div key={project.id} className="portfolio-image-card">
                <div className="portfolio-image-frame">
                  <img src={project.image_path} alt={project.title} loading="lazy" />
                  {project.logo_path && (
                    <div className="work-brand-logo-badge" title={`${project.title} Brand Logo`}>
                      <img src={project.logo_path} alt={`${project.title} Logo`} />
                    </div>
                  )}
                </div>
                <div className="portfolio-image-meta">
                  <span className="portfolio-image-cat">{project.cat_label}</span>
                  <h4 className="portfolio-image-title">{project.title}</h4>
                  <p className="portfolio-image-desc">{project.description}</p>
                  <div style={{ marginTop: '14px' }}>
                    {project.project_url && project.project_url !== '#' ? (
                      <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="work-view-link">
                        <span>View Project</span> <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.74rem' }}></i>
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
           5. ATMOSPHERIC CINEMATIC TEASER (Phil Griffiths & Siddhesh Salvi Style)
           =================================================================== */}
      <section className="cinematic-dark-section">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto 48px', textAlign: 'center' }}>
            <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
              <span className="kicker-line"></span>
              <span>COMMERCIAL DIRECTION &bull; 150+ FILMS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', margin: '14px 0 16px', lineHeight: 1.25 }}>
              Stories Beyond the Frame.
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              Directing broadcast commercials, prime-time television serials, and high-concept brand monographs with rigorous cinematic composition and dramatic timing.
            </p>
          </div>

          <div style={{ maxWidth: '1040px', margin: '0 auto', position: 'relative', borderRadius: 'var(--radius-xs)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000000', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/resource/slider02.jpg" alt="Soheal Vaseem Directorial Showreel" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.78 }} />
              
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14, 18, 28, 0.85) 0%, rgba(14, 18, 28, 0.2) 60%, rgba(14, 18, 28, 0.4) 100%)' }}></div>

              <button 
                type="button"
                onClick={() => setActiveVideo('O0AT4TKrUSY')}
                title="Play Directorial Showreel" 
                style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 2 }}
              >
                <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'rgba(142, 109, 54, 0.95)', border: '2px solid rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '1.75rem', boxShadow: '0 12px 32px rgba(0,0,0,0.5)' }}>
                  <i className="fa-solid fa-play" style={{ marginLeft: '4px' }}></i>
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffffff', background: 'rgba(0,0,0,0.7)', padding: '6px 18px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  Watch Directorial Reel (4K)
                </span>
              </button>

              <div style={{ position: 'absolute', bottom: '24px', left: '28px', zIndex: 2, color: '#ffffff' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c49e5e', fontWeight: 700, display: 'block' }}>Commercial Direction</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>Television &bull; Cinema &bull; Brand Films</span>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/filmmaking" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}>
              <span>Explore Filmmaking Archive</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
           6. DOCUMENTED PRESS & MEDIA RECOGNITION
           =================================================================== */}
      <section className="insights-editorial-section" id="insights">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>DOCUMENTED RECOGNITION</span>
              </div>
              <h2>Featured in National &amp; Regional Press</h2>
            </div>
            <Link to="/media" className="btn btn-outline btn-sm">
              <span>View Press Archive</span>
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
                  <span>Read Feature</span> <i className="fa-solid fa-arrow-right"></i>
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
                  <span>Read Feature</span> <i className="fa-solid fa-arrow-right"></i>
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
                  <span>Read Feature</span> <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           7. CALL TO ACTION (CONSULTATION INVITATION)
           =================================================================== */}
      <section className="cta-meaningful-section" id="contact">
        <div className="container">
          <div className="cta-meaningful-inner">
            <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
              <span className="kicker-line"></span>
              <span>START A CONVERSATION</span>
            </div>
            <h2>Let's Build Something Meaningful.</h2>
            <p>
              Have a brand, business, or marketing challenge in mind? Let's explore the possibilities through an exploratory advisory dialogue.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
              <Link to="/contact" className="btn-cinematic-dark">
                <span>Initiate Consultation</span>
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
