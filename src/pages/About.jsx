import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* ===================================================================
           1. HERO SECTION — CINEMATIC LUXURY EDITORIAL BANNER
           =================================================================== */}
      <section className="about-hero-cinematic" id="about-hero">
        <div className="about-hero-cinematic-inner">
          <div className="about-hero-cinematic-content">
            <div className="about-hero-subhead">
              <span className="dash"></span>
              <span>ABOUT SOHEL</span>
            </div>

            <h1 className="hero-cinematic-headline">
              Strategy Gives Brands<br />
              Direction.<br />
              <span className="hero-italic-gold">Storytelling Gives<br />Them Meaning.</span>
            </h1>

            <p className="hero-cinematic-lead">
              For over three decades, Sohel Vaseem has partnered with enterprise founders, leadership teams, and growing businesses to transform strategic business clarity into distinctive market positioning, compelling communication, and enduring commercial value.
            </p>

            <div className="hero-cinematic-actions">
              <a href="#story" className="btn-cinematic-dark" title="Explore Career Story">
                <span>EXPLORE MY STORY</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <Link to="/contact" className="btn-cinematic-outline" title="Let's Build Your Brand">
                <span>LET'S BUILD YOUR BRAND</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            <div className="about-hero-bottom-tag">
              <span className="dash"></span>
              <span>VISION &bull; STRATEGY &bull; STORIES</span>
            </div>
          </div>

          {/* Dedicated Portrait (Mobile) */}
          <div className="about-hero-visual-mobile">
            <div className="about-mobile-portrait-wrapper">
              <img 
                src="/images/resource/about_portrait_mobile.jpg?v=2" 
                alt="Sohel Vaseem" 
                className="about-mobile-portrait-img" 
                loading="eager" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. CAREER STORY — EDITORIAL FEATURE NARRATIVE
           =================================================================== */}
      <section className="section-padding bg-canvas" id="story">
        <div className="container">
          <div className="section-header-editorial" style={{ marginBottom: '52px' }}>
            <div>
              <span className="editorial-badge">Career Journey &bull; Since 1991</span>
              <h2>A Career Built Around Communication. A Philosophy Rooted in Strategy.</h2>
            </div>
            <p className="section-header-lead">
              Tracing a thirty-year evolution from foundational advertising to comprehensive brand architecture and commercial direction.
            </p>
          </div>

          <div className="about-story-grid">
            <div className="about-story-col">
              <div className="about-milestone-card">
                <div className="about-milestone-year">1991</div>
                <h3 className="about-milestone-title">The Foundation at Gazelle Ads</h3>
                <p className="about-milestone-text">
                  Sohel Vaseem’s professional journey began in advertising with Gazelle Ads in 1991. From traditional print advertising, visual communication, and commercial typography to the evolving digital landscape, his early career followed the continuous transformation of how businesses connect with audiences and build market recognition.
                </p>
              </div>
              
              <div className="about-milestone-card">
                <div className="about-milestone-year">The Evolution</div>
                <h3 className="about-milestone-title">Beyond Advertising to Brand Strategy</h3>
                <p className="about-milestone-text">
                  Over time, his perspective expanded beyond standalone campaigns. He recognized that lasting brand value depends on far more than visibility alone. It requires genuine clarity of purpose, a distinctive position in the market, a consistent identity, and a meaningful connection with the people a business serves.
                </p>
              </div>
            </div>
            
            <div className="about-story-col">
              <div className="about-milestone-card">
                <div className="about-milestone-year">Media Wagon</div>
                <h3 className="about-milestone-title">Architecture, Direction &amp; Enterprise Value</h3>
                <p className="about-milestone-text">
                  That evolution inspired the transition from Gazelle Ads to founding Media Wagon—uniting corporate brand positioning, digital web architecture, and multi-channel creative direction under a disciplined strategic consulting practice designed for sustainable growth.
                </p>
              </div>

              <div className="about-story-quote-card">
                <p className="about-story-quote">
                  &ldquo;Building a brand is not simply about being seen. It is about being understood, trusted, and remembered.&rdquo;
                </p>
                <span className="about-story-author">&mdash; Sohel Vaseem</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           3. STRATEGIC PHILOSOPHY
           =================================================================== */}
      <section className="section-padding bg-surface" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="about-philosophy-wrapper">
            <span className="editorial-badge" style={{ justifyContent: 'center' }}>Strategic Philosophy</span>
            <blockquote className="about-philosophy-statement">
              &ldquo;Branding is not simply a logo, a colour palette, or a collection of campaigns. It is the perception a business creates through every interaction.&rdquo;
            </blockquote>
            <p className="about-philosophy-subtext">
              Meaningful commercial growth occurs when an organization’s business reality, customer understanding, and creative execution operate in total alignment. When strategic clarity precedes design choices, every communication touchpoint builds compounding enterprise value.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
           4. FOUR CORE DIAGNOSTIC PILLARS
           =================================================================== */}
      <section className="section-padding bg-canvas">
        <div className="container">
          <div className="section-header-editorial" style={{ marginBottom: '48px' }}>
            <div>
              <span className="editorial-badge">Strategic Discipline</span>
              <h2>The Four Core Diagnostic Pillars</h2>
            </div>
            <p className="section-header-lead">
              A disciplined methodology to replace market guesswork with structural clarity, positioning precision, and creative execution.
            </p>
          </div>

          <div className="about-pillars-grid">
            <div className="about-pillar-item">
              <span className="about-pillar-num">01</span>
              <h3 className="about-pillar-title">What It Stands For</h3>
              <p className="about-pillar-desc">
                Uncovering the fundamental purpose, commercial ethos, and authentic principles that anchor the enterprise and guide leadership decisions.
              </p>
            </div>

            <div className="about-pillar-item">
              <span className="about-pillar-num">02</span>
              <h3 className="about-pillar-title">Whom It Serves</h3>
              <p className="about-pillar-desc">
                Gaining acute clarity on the real needs, aspirations, and decision-making criteria of qualified customers in your specific sector.
              </p>
            </div>

            <div className="about-pillar-item">
              <span className="about-pillar-num">03</span>
              <h3 className="about-pillar-title">What Makes It Different</h3>
              <p className="about-pillar-desc">
                Formulating a sharp, defensible market position that separates the business from competitor noise and clearly articulates superior value.
              </p>
            </div>

            <div className="about-pillar-item">
              <span className="about-pillar-num">04</span>
              <h3 className="about-pillar-title">How It Is Understood</h3>
              <p className="about-pillar-desc">
                Translating strategic positioning into deliberate creative direction, visual identity, communication systems, and coherent brand experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           5. FILMMAKING AND BRAND STRATEGY
           =================================================================== */}
      <section className="section-padding bg-surface" style={{ borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="about-cinema-grid">
            <div className="about-cinema-content">
              <span className="editorial-badge">Creative Direction &bull; Directorial Craft</span>
              <h3>Where Strategy Meets Storytelling</h3>
              <p>
                With filmmaking and creative direction as core facets of his professional identity, Sohel brings an authentic visual storytelling perspective to brand communication.
              </p>
              <p>
                He believes that a strong strategic idea should not remain on paper. It must be translated into a clear visual identity, compelling narrative communication, and memorable experiences that audiences can instantly recognize. This synergy of analytical business thinking and directorial craft informs his approach to building brands that endure.
              </p>
              <div style={{ marginTop: '14px' }}>
                <Link to="/filmmaking" className="btn btn-outline btn-sm">
                  <span>Explore Commercial Direction</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="about-cinema-visual">
              <div className="about-cinema-frame">
                <img src="/images/resource/slider03.jpg" alt="Sohel Vaseem Directing on Commercial Film Set" loading="lazy" />
              </div>
              <div className="about-cinema-caption">
                <i className="fa-solid fa-film"></i>
                <span>Directorial execution on commercial film sets, corporate narratives, and television broadcasts.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           6. PUBLISHED RECOGNITION & PRESS
           =================================================================== */}
      <section className="section-padding-sm bg-canvas">
        <div className="container">
          <div className="about-press-strip">
            <div className="about-press-info">
              <span className="editorial-badge" style={{ marginBottom: '6px' }}>Published Recognition</span>
              <h4>Featured in National &amp; Regional Press</h4>
              <p>
                Read profile features and milestone coverages in The Hindu, Deccan Chronicle, Eenadu, and The Siasat Daily.
              </p>
            </div>
            <Link to="/media" className="btn btn-outline btn-sm">
              <span>View Press Coverage</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
           7. FINAL CALL TO ACTION
           =================================================================== */}
      <section className="cta-meaningful-section" id="contact">
        <div className="container">
          <div className="cta-meaningful-inner">
            <span className="editorial-badge" style={{ justifyContent: 'center' }}>Initiate Consultation</span>
            <h2>Let's Start With a Conversation.</h2>
            <p>
              If your business is ready to define its direction, strengthen its positioning, or build an enduring brand, let's explore what comes next.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '28px' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 34px' }}>
                <span>Schedule An Advisory Call</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/services" className="btn btn-outline" style={{ padding: '14px 28px' }}>
                <span>Explore Capabilities</span>
              </Link>
            </div>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', letterSpacing: '0.03em' }}>
              <span>Mumbai &bull; Hyderabad &bull; </span>
              <a href="mailto:info@sohealvaseem.com" style={{ color: 'var(--accent-bronze)', textDecoration: 'underline' }}>info@sohealvaseem.com</a>
              <span> &bull; </span>
              <a href="tel:+919014365364" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>+91 9014 365 364</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
