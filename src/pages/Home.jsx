import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Home() {
  const homeProjects = projects.filter(p => p.is_featured === 1).slice(0, 6);

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
              I help businesses find their voice, shape their identity, and communicate with greater impact &mdash; through strategic thinking and cinematic storytelling.
            </p>

            <div className="hero-cinematic-actions">
              <a href="#work" className="btn-cinematic-dark" title="Explore My Work">
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
                src="/images/resource/home_portrait_mobile.jpg?v=2" 
                alt="Sohel Vaseem" 
                className="hero-mobile-portrait-img" 
                loading="eager" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 1: BRAND PHILOSOPHY
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
          SECTION 2: CORE EXPERTISE PREVIEW (4 KEY AREAS)
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

          <div className="expertise-preview-grid">
            <div className="expertise-preview-card">
              <span className="expertise-preview-num">01</span>
              <h3 className="expertise-preview-title">Brand Strategy and Positioning</h3>
              <p className="expertise-preview-desc">
                Formulating rigorous market positioning, value propositions, and strategic narratives that distinguish enterprises from competitor noise.
              </p>
            </div>

            <div className="expertise-preview-card">
              <span className="expertise-preview-num">02</span>
              <h3 className="expertise-preview-title">Branding and Creative Direction</h3>
              <p className="expertise-preview-desc">
                Architecting complete visual identities, typographic systems, brand guidelines, and collateral that build immediate prestige and customer recognition.
              </p>
            </div>

            <div className="expertise-preview-card">
              <span className="expertise-preview-num">03</span>
              <h3 className="expertise-preview-title">Digital Marketing and Growth</h3>
              <p className="expertise-preview-desc">
                Designing multi-channel campaigns, performance media planning, and content strategies that connect with qualified audiences and drive acquisition.
              </p>
            </div>

            <div className="expertise-preview-card">
              <span className="expertise-preview-num">04</span>
              <h3 className="expertise-preview-title">Business Strategy and Consulting</h3>
              <p className="expertise-preview-desc">
                Providing confidential advisory to leadership teams on market expansion, product incubation, and strategic organizational alignment.
              </p>
            </div>
          </div>

          <div className="expertise-preview-footer">
            <Link to="/services" className="btn btn-secondary">
              <span>Explore All Expertise</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 3: SELECTED WORK
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

          <div className="work-grid-editorial">
            {homeProjects.map((project) => (
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
          SECTION 4: LATEST INSIGHTS
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
                  National newspaper coverage highlighting Sohel Vaseem’s innovative approach to visual storytelling, brand narratives, and production leadership.
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
                  In-depth feature examining Sohel’s directorial execution across television drama serials and nationwide advertising campaigns.
                </p>
                <Link to="/media" className="insight-read-link">
                  <span>Read Full Feature</span> <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="insight-card-editorial">
              <div className="insight-thumb-box">
                <img src="/images/resource/eenadu.jpg" alt="Eenadu — Director Sohel Vaseem’s Creative Milestone" loading="lazy" />
              </div>
              <div className="insight-content-box">
                <span className="insight-meta-source">Eenadu &bull; Regional Leader</span>
                <h4 className="insight-title-text">Director Sohel Vaseem’s Creative Milestone</h4>
                <p className="insight-excerpt-text">
                  Extensive regional daily reporting highlighting Sohel’s artistic storytelling contributions and commercial campaign triumph.
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
          SECTION 5: FINAL CALL TO ACTION
          =================================================================== */}
      <section className="cta-meaningful-section" id="contact">
        <div className="container">
          <div className="cta-meaningful-inner">
            <span className="editorial-badge" style={{ justifyContent: 'center' }}>Start a Conversation</span>
            <h2>Let's Build Something Meaningful.</h2>
            <p>
              Have a brand, business, or marketing challenge in mind? Let's start a conversation about the possibilities.
            </p>
            <Link to="/contact" className="btn btn-primary">
              <span>Start a Conversation</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
