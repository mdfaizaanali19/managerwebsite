import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => p.is_featured === 1).slice(0, 6);

  const filmStills = [
    { src: '/images/resource/slider01.jpg', label: 'Commercial Production Set' },
    { src: '/images/resource/slider02.jpg', label: 'Directorial Showreel Frame' },
    { src: '/images/resource/slider03.jpg', label: 'Directing Dramatic Scene' },
    { src: '/images/resource/slider04.jpg', label: 'Lighting & Scene Staging' },
    { src: '/images/resource/slider05.jpg', label: 'Cinematography in Motion' },
    // Duplicate set for seamless continuous marquee loop
    { src: '/images/resource/slider01.jpg', label: 'Commercial Production Set' },
    { src: '/images/resource/slider02.jpg', label: 'Directorial Showreel Frame' },
    { src: '/images/resource/slider03.jpg', label: 'Directing Dramatic Scene' },
    { src: '/images/resource/slider04.jpg', label: 'Lighting & Scene Staging' },
    { src: '/images/resource/slider05.jpg', label: 'Cinematography in Motion' }
  ];

  return (
    <div className="home-page">
      {/* ===================================================================
           1. HERO SECTION (EDITORIAL & CINEMATIC)
           =================================================================== */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-editorial-inner">
            {/* Left Content */}
            <div className="hero-editorial-content">
              <div className="kicker">
                Brand Strategy &bull; Creative Direction &bull; Filmmaking
              </div>
              <h1 className="hero-editorial-headline">
                Building Brands<br />
                With Purpose.<br />
                <em>Stories That Stay.</em>
              </h1>
              <p className="hero-editorial-lead">
                I partner with founders, enterprise leaders, and forward-thinking businesses to transform core business clarity into distinctive market positioning, compelling visual identities, and cinematic brand storytelling.
              </p>
              <div className="hero-editorial-actions">
                <Link to="/portfolio" className="sv-btn sv-btn-dark sv-btn-lg">
                  <span>Explore Selected Work</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }}></i>
                </Link>
                <Link to="/contact" className="sv-btn sv-btn-outline sv-btn-lg">
                  <span>Discuss a Project</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Portrait */}
            <div className="hero-portrait-frame">
              <div className="hero-portrait-box">
                <img 
                  src="/images/resource/sohel_hero_portrait.jpg" 
                  alt="Soheal Vaseem — Brand Strategist & Filmmaker" 
                  className="hero-portrait-img" 
                  loading="eager"
                />
                <div className="hero-portrait-badge">
                  <i className="fa-solid fa-compass-drafting hero-badge-icon"></i>
                  <div>
                    <div className="hero-badge-title">Strategic Architecture</div>
                    <div className="hero-badge-sub">30+ Years Industry Leadership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. METRICS STRIP
           =================================================================== */}
      <section className="stats-strip" aria-label="Key Milestones">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-num">30+</span>
              <span className="stat-label">Years In Strategic Consulting</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">200+</span>
              <span className="stat-label">Brand &amp; Marketing Campaigns</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">50+</span>
              <span className="stat-label">TVCs &amp; Brand Films Directed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">100+</span>
              <span className="stat-label">Enterprise &amp; Healthcare Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           3. STRATEGIC SERVICES (CORE PILLARS)
           =================================================================== */}
      <section className="section-padding services-section" id="services">
        <div className="container">
          <div className="section-head centered">
            <div className="kicker">Core Capabilities</div>
            <h2 className="section-title">
              Precision Strategy. <em>Artful Execution.</em>
            </h2>
            <p className="section-desc">
              Every engagement is grounded in market realities and amplified by high-impact storytelling to build sustainable brand equity and commercial traction.
            </p>
          </div>

          <div className="services-grid-4">
            {/* Card 1: Brand Strategy */}
            <div className="service-card">
              <div className="service-icon-box">
                <i className="fa-solid fa-chess-knight"></i>
              </div>
              <h3 className="service-card-title">Brand Strategy &amp; Positioning</h3>
              <p className="service-card-desc">
                In-depth brand audits, competitive differentiation, narrative frameworks, and core value proposition design that carve clear market ownership.
              </p>
              <Link to="/services" className="service-card-link">
                <span>Explore Strategy</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            {/* Card 2: Creative Direction */}
            <div className="service-card">
              <div className="service-icon-box">
                <i className="fa-solid fa-bezier-curve"></i>
              </div>
              <h3 className="service-card-title">Creative Direction &amp; Identity</h3>
              <p className="service-card-desc">
                Visual brand systems, typography curation, brand identity manuals, and high-touch campaign guidelines that command executive authority.
              </p>
              <Link to="/services" className="service-card-link">
                <span>View Identity Work</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            {/* Card 3: Commercial Filmmaking */}
            <div className="service-card">
              <div className="service-icon-box">
                <i className="fa-solid fa-film"></i>
              </div>
              <h3 className="service-card-title">Directorial Filmmaking</h3>
              <p className="service-card-desc">
                End-to-end directorial leadership for television commercials, corporate brand films, broadcast ads, and high-production narrative films.
              </p>
              <Link to="/filmmaking" className="service-card-link">
                <span>Discover Films</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

            {/* Card 4: Digital Architecture */}
            <div className="service-card">
              <div className="service-icon-box">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3 className="service-card-title">Digital Web Architecture</h3>
              <p className="service-card-desc">
                High-conversion digital web platforms, luxury e-commerce engines, and hospital CRM portals designed for seamless customer acquisition.
              </p>
              <Link to="/portfolio" className="service-card-link">
                <span>View Platforms</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           4. CINEMATIC FILM REEL (DIRECTORIAL SHOWCASE)
           =================================================================== */}
      <section className="film-reel-section" aria-label="Directorial Showcase">
        <div className="container">
          <div className="film-reel-head">
            <div className="kicker kicker-gold">Cinematic Directing</div>
            <h2 className="section-title">
              Behind the Lens. <em>Stories Captured in Motion.</em>
            </h2>
            <p className="section-desc">
              From commercial soundstages to high-stakes television productions, every frame is crafted with deliberate intent, visual drama, and emotional resonance.
            </p>
          </div>
        </div>

        <div className="film-reel-viewport">
          <div className="film-reel-track">
            {filmStills.map((still, idx) => (
              <div className="film-reel-frame" key={idx}>
                <img src={still.src} alt={still.label} loading="lazy" />
                <div className="film-frame-overlay">
                  <span>{still.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link to="/filmmaking" className="sv-btn sv-btn-white">
            <span>Explore Directorial Reel</span>
            <i className="fa-solid fa-play" style={{ fontSize: '11px' }}></i>
          </Link>
        </div>
      </section>

      {/* ===================================================================
           5. SELECTED PORTFOLIO (REAL CLIENT WORK)
           =================================================================== */}
      <section className="section-padding" id="work">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Selected Work</div>
            <h2 className="section-title">
              Proof of Concept. <em>Enduring Commercial Value.</em>
            </h2>
            <p className="section-desc">
              A curated selection of authenticated brand architectures, digital e-commerce flagships, and enterprise portals engineered for ambitious businesses.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map(project => (
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
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  <div className="project-footer">
                    {project.project_url ? (
                      <a 
                        href={project.project_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                      >
                        <span>Visit Live Project</span>
                        <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px' }}></i>
                      </a>
                    ) : (
                      <Link to="/portfolio" className="project-link">
                        <span>View Case Study</span>
                        <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/portfolio" className="sv-btn sv-btn-dark sv-btn-lg">
              <span>View All Portfolio Projects</span>
              <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }}></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
           6. CREDENTIALS & MEDIA MARQUEE
           =================================================================== */}
      <section className="marquee-section" aria-label="Credentials & Media Mentions">
        <div className="marquee-container">
          <div className="marquee-track track-left">
            <div className="marquee-badge"><i className="fa-solid fa-newspaper"></i> Featured in Eenadu National Daily</div>
            <div className="marquee-badge"><i className="fa-solid fa-award"></i> 30+ Years Brand Strategy Authority</div>
            <div className="marquee-badge"><i className="fa-solid fa-newspaper"></i> Profiled by The Hindu</div>
            <div className="marquee-badge"><i className="fa-solid fa-clapperboard"></i> 50+ Broadcast Television Commercials</div>
            <div className="marquee-badge"><i className="fa-solid fa-newspaper"></i> Deccan Chronicle Directorial Feature</div>
            <div className="marquee-badge"><i className="fa-solid fa-briefcase"></i> 200+ Enterprise Marketing Campaigns</div>
            {/* Repeat for seamless loop */}
            <div className="marquee-badge"><i className="fa-solid fa-newspaper"></i> Featured in Eenadu National Daily</div>
            <div className="marquee-badge"><i className="fa-solid fa-award"></i> 30+ Years Brand Strategy Authority</div>
            <div className="marquee-badge"><i className="fa-solid fa-newspaper"></i> Profiled by The Hindu</div>
            <div className="marquee-badge"><i className="fa-solid fa-clapperboard"></i> 50+ Broadcast Television Commercials</div>
            <div className="marquee-badge"><i className="fa-solid fa-newspaper"></i> Deccan Chronicle Directorial Feature</div>
            <div className="marquee-badge"><i className="fa-solid fa-briefcase"></i> 200+ Enterprise Marketing Campaigns</div>
          </div>

          <div className="marquee-track track-right">
            <div className="marquee-badge"><i className="fa-solid fa-location-dot"></i> Mumbai &bull; Hyderabad Advisory</div>
            <div className="marquee-badge"><i className="fa-solid fa-gem"></i> Luxury E-Commerce Platforms</div>
            <div className="marquee-badge"><i className="fa-solid fa-hospital"></i> Multi-Specialty Hospital CRM Systems</div>
            <div className="marquee-badge"><i className="fa-solid fa-bullhorn"></i> Nationwide Advertising Campaigns</div>
            <div className="marquee-badge"><i className="fa-solid fa-chart-line"></i> Sustainable Market Positioning</div>
            {/* Repeat for seamless loop */}
            <div className="marquee-badge"><i className="fa-solid fa-location-dot"></i> Mumbai &bull; Hyderabad Advisory</div>
            <div className="marquee-badge"><i className="fa-solid fa-gem"></i> Luxury E-Commerce Platforms</div>
            <div className="marquee-badge"><i className="fa-solid fa-hospital"></i> Multi-Specialty Hospital CRM Systems</div>
            <div className="marquee-badge"><i className="fa-solid fa-bullhorn"></i> Nationwide Advertising Campaigns</div>
            <div className="marquee-badge"><i className="fa-solid fa-chart-line"></i> Sustainable Market Positioning</div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           7. ABOUT SOHEAL PREVIEW
           =================================================================== */}
      <section className="section-padding about-preview-section">
        <div className="container">
          <div className="about-preview-inner">
            {/* Visual Portrait */}
            <div className="about-preview-visual">
              <div className="about-preview-img-frame">
                <img 
                  src="/images/resource/about_portrait_editorial.jpg" 
                  alt="Soheal Vaseem — Directorial Vision" 
                  className="about-preview-img" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Narrative */}
            <div className="about-preview-content">
              <div className="kicker">About Soheal Vaseem</div>
              <h2 className="section-title">
                Three Decades of Shaping Brands. <em>One Timeless Philosophy.</em>
              </h2>
              <p className="section-desc">
                Starting in advertising with Gazelle Ads in 1991, Soheal Vaseem's career has evolved across traditional print, commercial typography, television broadcasting, and the modern digital landscape.
              </p>

              <div className="about-quote-box">
                <p className="about-quote-text">
                  &ldquo;A brand is not merely a logo or visual styling &mdash; it is the emotional and commercial promise a business makes and consistently keeps with its market.&rdquo;
                </p>
              </div>

              <div className="about-preview-features">
                <div className="about-feature-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Directorial leadership on high-profile film sets</span>
                </div>
                <div className="about-feature-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Strategic positioning for enterprise founders</span>
                </div>
                <div className="about-feature-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Deep experience in healthcare &amp; retail</span>
                </div>
                <div className="about-feature-item">
                  <i className="fa-solid fa-circle-check"></i>
                  <span>Proven record in national advertising</span>
                </div>
              </div>

              <div>
                <Link to="/about" className="sv-btn sv-btn-dark">
                  <span>Read Full Journey &amp; Philosophy</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           8. CONSULTATION CTA BANNER
           =================================================================== */}
      <section className="cta-banner-section" aria-label="Consultation Enquiry">
        <div className="container">
          <div className="cta-banner-inner">
            <div className="kicker kicker-gold" style={{ justifyContent: 'center' }}>Let's Collaborate</div>
            <h2 className="section-title">
              Ready to Give Your Brand Strategic Clarity &amp; Cinematic Presence?
            </h2>
            <p className="section-desc">
              Whether you are launching a flagship venture, repositioning an established enterprise, or commissioning a national film campaign &mdash; let's discuss how we can build something enduring.
            </p>
            <div className="cta-banner-actions">
              <Link to="/contact" className="sv-btn sv-btn-red sv-btn-lg">
                <span>Schedule a Consultation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a 
                href="https://wa.me/919014365364?text=Hi%20Soheal,%20I%20would%20like%20to%20discuss%20a%20brand%20strategy%20or%20film%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sv-btn sv-btn-white sv-btn-lg"
              >
                <i className="fa-brands fa-whatsapp" style={{ color: 'var(--wa)', fontSize: '18px' }}></i>
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
