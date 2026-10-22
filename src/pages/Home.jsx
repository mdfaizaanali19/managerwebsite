import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeZoom, setActiveZoom] = useState(null);
  const [filter, setFilter] = useState('all');

  // Form state
  const [selectedService, setSelectedService] = useState('Brand Architecture');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Projects data
  const spotlightProject = projects.find(p => p.id === 1) || projects[0];
  const allProjects = projects;
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const serviceOptions = [
    { id: 'branding', label: 'Brand Architecture' },
    { id: 'film', label: 'Commercial Film & TVCs' },
    { id: 'advertising', label: 'Advertising & Marketing' },
    { id: 'web', label: 'Web & Digital Platforms' },
    { id: 'advisory', label: 'Turnkey Advisory' }
  ];

  const pressItems = [
    {
      publication: 'The Hindu',
      title: 'Directorial Acumen & Cinematic Vision',
      desc: 'National newspaper coverage highlighting Soheal Vaseem’s innovative approach to visual storytelling, brand narratives, and production leadership.',
      thumb: '/images/resource/Hindu.jpg',
      zoom: '/images/resource/Hindu.jpg',
      type: 'National Daily'
    },
    {
      publication: 'Deccan Chronicle',
      title: 'Television Series & Ad Direction Spotlight',
      desc: 'In-depth feature examining Soheal’s directorial execution across television drama serials and nationwide advertising campaigns.',
      thumb: '/images/resource/chronicle.jpg',
      zoom: '/images/resource/chronicle.jpg',
      type: 'Print Feature'
    },
    {
      publication: 'Eenadu',
      title: 'Director Soheal Vaseem’s Creative Milestone',
      desc: 'Extensive regional daily reporting highlighting Soheal’s artistic storytelling contributions and commercial campaign triumph.',
      thumb: '/images/resource/eenadu.jpg',
      zoom: '/images/resource/eenadu.jpg',
      type: 'Regional Leader'
    },
    {
      publication: 'The Siasat Daily',
      title: 'Acclaimed Filmmaker & Directorial Craft',
      desc: 'Prominent coverage spotlighting Soheal Vaseem’s national advertising campaigns and cultural storytelling.',
      thumb: '/images/resource/siasatone.jpg',
      zoom: '/images/resource/siasatone.jpg',
      type: 'National Daily'
    }
  ];

  const filmmakingStills = [
    {
      img: '/images/resource/slider01.jpg',
      category: 'Commercial Ad Campaign',
      title: 'Infinite Horizon • Natura Film',
      desc: 'National multi-location commercial ad campaign featuring outdoor natural-light cinematography, vast horizon framing, and brand storytelling.'
    },
    {
      img: '/images/resource/slider02.jpg',
      category: 'Television Drama Broadcast',
      title: 'Prime-Time Drama Series',
      desc: 'Director Soheal Vaseem commanding complex multi-camera setups, character staging, and dramatic scene progression on a soundstage.'
    },
    {
      img: '/images/resource/slider03.jpg',
      category: 'Soundstage Commercial',
      title: 'Behind the Directorial Monitor',
      desc: 'Fine-tuning lighting angles, color temperatures, and lens choices with cinematographer on a high-fashion studio set.'
    },
    {
      img: '/images/resource/slider05.jpg',
      category: 'Commercial Ad Campaign',
      title: 'Heritage Jewellery Commercial Spot',
      desc: 'Macro lens choreography and soft gold ambient lighting capturing artisanal craftsmanship and timeless luxury.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 4K Video Modal */}
      {activeVideo && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.92)',
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
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)'
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
              title="Soheal Vaseem Directorial Reel"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Lightbox Press Modal */}
      {activeZoom && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.92)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setActiveZoom(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <button 
              onClick={() => setActiveZoom(null)}
              style={{
                position: 'absolute',
                top: '-45px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.4rem',
                cursor: 'pointer'
              }}
            >
              <i className="fa-solid fa-xmark"></i> Close
            </button>
            <img 
              src={activeZoom.zoom} 
              alt={activeZoom.title} 
              style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '4px' }}
            />
            <div style={{ color: '#fff', marginTop: '12px', textAlign: 'center', fontSize: '1rem', fontFamily: 'var(--font-serif)' }}>
              {activeZoom.publication} &mdash; {activeZoom.title}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
           1. CINEMATIC HERO (ABSTRACT LIGHT, DEPTH & TYPOGRAPHY — NO PORTRAIT)
           =================================================================== */}
      <section className="hero-abstract-cinematic" id="hero">
        <div className="hero-abstract-grid"></div>
        <div className="hero-light-streak-1"></div>
        <div className="hero-light-streak-2"></div>

        <div className="hero-abstract-container">
          <div className="hero-abstract-kicker">
            <span>STRATEGY &bull; CREATIVE DIRECTION &bull; COMMERCIAL FILM</span>
          </div>

          <h1 className="hero-abstract-headline">
            Strategy Gives Brands Direction.
            <span className="hero-gold-italic">Storytelling Gives Them Meaning.</span>
          </h1>

          <p className="hero-abstract-lead">
            Soheal Vaseem &mdash; Brand Strategist, Creative Director &amp; Filmmaker.
          </p>

          <div className="hero-abstract-actions">
            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')} 
              className="btn-hero-cinematic-primary"
            >
              <span>EXPLORE MY WORK</span>
              <i className="fa-solid fa-arrow-down"></i>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="btn-hero-cinematic-secondary"
            >
              <span>START A CONVERSATION</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="hero-abstract-meta-strip">
            <span>30+ Years Tenure (Since 1991)</span>
            <span className="dot">&bull;</span>
            <span>150+ Commercial Films Directed</span>
            <span className="dot">&bull;</span>
            <span>Mumbai &bull; Hyderabad</span>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. INTRODUCTION & PROFESSIONAL POSITIONING (Warm Ivory #F5F1E8)
           =================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)' }} id="about">
        <div className="container">
          <div className="section-header-editorial" style={{ marginBottom: '44px' }}>
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>PROFESSIONAL POSITIONING</span>
              </div>
              <h2>At the Intersection of Strategic Rigor and Cinematic Storytelling.</h2>
            </div>
            <p className="section-header-lead">
              For over three decades, Soheal Vaseem has partnered with founders, enterprise leadership teams, and ambitious organizations to transform strategic clarity into distinctive market positioning, compelling creative direction, and enduring commercial value.
            </p>
          </div>

          {/* Three Disciplines Grid */}
          <div className="pillars-three-grid" style={{ marginTop: '36px' }}>
            <div className="pillar-three-card">
              <div className="pillar-three-num">01</div>
              <h3 className="pillar-three-title">Brand Strategy</h3>
              <p className="pillar-three-desc">
                Uncovering core commercial truth, customer decision psychology, competitive white spaces, and positioning moats that guide leadership decisions.
              </p>
              <ul className="pillar-three-deliverables">
                <li>Brand Architecture &amp; Audits</li>
                <li>Market Positioning &amp; Strategy</li>
                <li>Value Proposition Formulation</li>
              </ul>
            </div>

            <div className="pillar-three-card">
              <div className="pillar-three-num">02</div>
              <h3 className="pillar-three-title">Creative Direction</h3>
              <p className="pillar-three-desc">
                Translating strategic clarity into bespoke visual identity systems, corporate typographic standards, packaging, and high-performance digital web platforms.
              </p>
              <ul className="pillar-three-deliverables">
                <li>Corporate Identity Systems</li>
                <li>Packaging &amp; Structural Design</li>
                <li>Web Platforms &amp; UI/UX Design</li>
              </ul>
            </div>

            <div className="pillar-three-card">
              <div className="pillar-three-num">03</div>
              <h3 className="pillar-three-title">Commercial Filmmaking</h3>
              <p className="pillar-three-desc">
                Directing broadcast-grade television commercials (TVCs), soundstage brand films, and dramatic visual narratives with 4K cinematography and precision sound design.
              </p>
              <ul className="pillar-three-deliverables">
                <li>Television Commercials (TVCs)</li>
                <li>Corporate Brand Films</li>
                <li>Soundstage &amp; Theatrical Direction</li>
              </ul>
            </div>
          </div>

          {/* Optional Small Editorial Bio Card */}
          <div style={{ marginTop: '48px', background: '#ffffff', border: '1px solid var(--color-border-soft)', borderRadius: 'var(--radius-xs)', padding: '32px 36px', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ width: '110px', height: '130px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(0,0,0,0.1)' }}>
              <img 
                src="/images/resource/about_portrait_mobile.jpg" 
                alt="Soheal Vaseem" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-gold)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                DIRECTORIAL CRAFT &bull; FOUNDER, MEDIA WAGON
              </span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', margin: '0 0 8px', color: 'var(--color-midnight)' }}>
                Soheal Vaseem
              </h4>
              <p style={{ fontSize: '0.96rem', color: '#55504a', lineHeight: 1.65, margin: 0 }}>
                &ldquo;Building a brand is not simply about being seen. It is about being understood, trusted, and remembered.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           3. CAREER JOURNEY AND EXPERIENCE (Timeline Since 1991)
           =================================================================== */}
      <section className="section-padding bg-canvas" id="journey">
        <div className="container">
          <div className="section-header-editorial" style={{ marginBottom: '24px' }}>
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>CAREER JOURNEY &bull; THREE DECADES</span>
              </div>
              <h2>A Trajectory Built on Communication, Clarified by Strategy.</h2>
            </div>
            <p className="section-header-lead">
              Tracing an evolution from traditional print advertising to comprehensive corporate brand architecture and commercial filmmaking.
            </p>
          </div>

          <div className="journey-timeline">
            {/* Step 1 */}
            <div className="journey-step">
              <div className="journey-node">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <div className="journey-card">
                <div className="journey-year-tag">1991 &bull; The Foundation</div>
                <h3 className="journey-title">Early Foundations at Gazelle Ads</h3>
                <p className="journey-text">
                  His professional journey commenced in advertising with Gazelle Ads in 1991. From print advertising, visual communication, and commercial typography to the evolving media landscape, his early career followed the transformation of how businesses build market presence.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="journey-step">
              <div className="journey-node">
                <i className="fa-solid fa-compass"></i>
              </div>
              <div className="journey-card">
                <div className="journey-year-tag">The Strategic Shift</div>
                <h3 className="journey-title">Beyond Campaigns to Brand Strategy</h3>
                <p className="journey-text">
                  Over time, his perspective expanded beyond standalone campaigns. He recognized that enduring market value depends on genuine clarity of purpose, a defensible market position, a consistent identity, and a meaningful connection with the people a business serves.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="journey-step">
              <div className="journey-node">
                <i className="fa-solid fa-film"></i>
              </div>
              <div className="journey-card">
                <div className="journey-year-tag">Present Day &bull; Media Wagon</div>
                <h3 className="journey-title">Enterprise Architecture &amp; Directorial Practice</h3>
                <p className="journey-text">
                  That evolution inspired founding Media Wagon—uniting corporate brand positioning, digital web architecture, and multi-channel creative direction under a disciplined strategic consulting practice. Over his career, he has directed 150+ commercial films and television serials nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           4. BRAND STRATEGY & CREATIVE DIRECTION (Methodology & Pillars)
           =================================================================== */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-border-soft)', borderBottom: '1px solid var(--color-border-soft)' }} id="capabilities">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>STRATEGIC DISCIPLINE</span>
              </div>
              <h2>The Four Diagnostic Pillars</h2>
            </div>
            <p className="section-header-lead">
              A disciplined framework to replace market guesswork with structural clarity, positioning precision, and creative execution.
            </p>
          </div>

          <div className="about-pillars-grid" style={{ marginTop: '36px' }}>
            <div className="about-pillar-item">
              <span className="about-pillar-num">01</span>
              <h3 className="about-pillar-title">What It Stands For</h3>
              <p className="about-pillar-desc">
                Uncovering the fundamental purpose, commercial ethos, and authentic principles that anchor the enterprise.
              </p>
            </div>

            <div className="about-pillar-item">
              <span className="about-pillar-num">02</span>
              <h3 className="about-pillar-title">Whom It Serves</h3>
              <p className="about-pillar-desc">
                Gaining acute clarity on the real needs, aspirations, and decision-making criteria of qualified customers.
              </p>
            </div>

            <div className="about-pillar-item">
              <span className="about-pillar-num">03</span>
              <h3 className="about-pillar-title">What Makes It Different</h3>
              <p className="about-pillar-desc">
                Formulating a sharp, defensible market position that separates the business from competitor noise.
              </p>
            </div>

            <div className="about-pillar-item">
              <span className="about-pillar-num">04</span>
              <h3 className="about-pillar-title">How It Is Understood</h3>
              <p className="about-pillar-desc">
                Translating strategic positioning into deliberate creative direction, visual identity, and coherent brand experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           5. SELECTED WORK AND CASE STUDIES (Image-Led Editorial Portfolio)
           =================================================================== */}
      <section className="section-padding bg-canvas" id="work">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>SELECTED WORK &bull; CASE STUDIES</span>
              </div>
              <h2>Ideas Made Visible.</h2>
            </div>
            <p className="section-header-lead">
              A curated selection of creative work, brand identities, and digital platforms shaped by strategic thinking.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="portfolio-filter-bar" style={{ marginTop: '20px', marginBottom: '36px' }}>
            <button 
              type="button" 
              className={`portfolio-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Work ({allProjects.length})
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
          </div>

          {/* 1. Flagship Spotlight Card */}
          {filter === 'all' && spotlightProject && (
            <div className="work-spotlight-card" style={{ marginBottom: '40px' }}>
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
                    <a 
                      href="#contact" 
                      onClick={(e) => scrollToSection(e, 'contact')} 
                      className="btn-cinematic-dark"
                    >
                      <span>Enquire Project</span>
                      <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 2. Portfolio Image Grid (2-Column Widescreen) */}
          <div className="portfolio-image-grid">
            {filteredProjects.map((project) => (
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
                        <span>View Live Platform</span> <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.74rem' }}></i>
                      </a>
                    ) : (
                      <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="work-view-link">
                        <span>Enquire Project</span> <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
           6. FILMMAKING AND VISUAL STORYTELLING (Midnight Charcoal #101114)
           =================================================================== */}
      <section className="cinematic-dark-section" id="filmmaking">
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
              Directing broadcast commercials, prime-time television serials, and high-concept brand visual monographs with rigorous cinematic composition.
            </p>
          </div>

          {/* Credentials Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '1040px', margin: '0 auto 44px' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 24px', borderRadius: '4px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: 'var(--color-gold)', lineHeight: 1 }}>150+</div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', marginTop: '8px', fontWeight: 700 }}>Commercial Films Directed</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 24px', borderRadius: '4px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: 'var(--color-gold)', lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', marginTop: '8px', fontWeight: 700 }}>Years Directorial Craft</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 24px', borderRadius: '4px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: 'var(--color-gold)', lineHeight: 1 }}>Prime-Time</div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', marginTop: '8px', fontWeight: 700 }}>Television Drama Series</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 24px', borderRadius: '4px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 600, color: 'var(--color-gold)', lineHeight: 1 }}>National</div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', marginTop: '8px', fontWeight: 700 }}>Media Recognition</div>
            </div>
          </div>

          {/* 4K Showreel Player */}
          <div style={{ maxWidth: '1040px', margin: '0 auto', position: 'relative', borderRadius: 'var(--radius-xs)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000000', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/resource/slider02.jpg" alt="Soheal Vaseem Directorial Showreel" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.78 }} />
              
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14, 18, 28, 0.85) 0%, rgba(14, 18, 28, 0.2) 60%, rgba(14, 18, 28, 0.4) 100%)' }}></div>

              <button 
                type="button"
                onClick={() => setActiveVideo('O0AT4TKrUSY')}
                title="Play Directorial Showreel" 
                style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 2 }}
              >
                <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: 'rgba(197, 165, 114, 0.95)', border: '2px solid rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '1.75rem', boxShadow: '0 12px 32px rgba(0,0,0,0.5)' }}>
                  <i className="fa-solid fa-play" style={{ marginLeft: '4px', color: '#101114' }}></i>
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffffff', background: 'rgba(0,0,0,0.7)', padding: '6px 18px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  Watch Directorial Reel (4K)
                </span>
              </button>

              <div style={{ position: 'absolute', bottom: '24px', left: '28px', zIndex: 2, color: '#ffffff' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 700, display: 'block' }}>Commercial Direction</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>Television &bull; Cinema &bull; Brand Films</span>
              </div>
            </div>
          </div>

          {/* Production Stills Grid */}
          <div style={{ maxWidth: '1040px', margin: '48px auto 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {filmmakingStills.map((still, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={still.img} alt={still.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                      {still.category}
                    </span>
                    <h5 style={{ fontSize: '1rem', color: '#ffffff', margin: 0 }}>{still.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           7. PHILOSOPHY AND APPROACH (Warm Ivory #F5F1E8)
           =================================================================== */}
      <section className="philosophy-editorial-section" id="philosophy">
        <div className="container">
          <div className="philosophy-editorial-wrapper">
            <div className="editorial-kicker">
              <span className="kicker-line"></span>
              <span>STRATEGIC PHILOSOPHY</span>
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
           8. MEDIA COVERAGE AND VERIFIED RECOGNITION
           =================================================================== */}
      <section className="insights-editorial-section" id="recognition">
        <div className="container">
          <div className="section-header-editorial">
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>DOCUMENTED RECOGNITION</span>
              </div>
              <h2>Featured in National &amp; Regional Press</h2>
            </div>
            <p className="section-header-lead">
              Documented newspaper features tracking Soheal Vaseem’s directorial milestones, commercial storytelling, and brand leadership.
            </p>
          </div>

          <div className="insights-preview-grid">
            {pressItems.map((press, idx) => (
              <div key={idx} className="insight-card-editorial">
                <div className="insight-thumb-box">
                  <img src={press.thumb} alt={`${press.publication} - ${press.title}`} loading="lazy" />
                </div>
                <div className="insight-content-box">
                  <span className="insight-meta-source">{press.publication} &bull; {press.type}</span>
                  <h4 className="insight-title-text">{press.title}</h4>
                  <p className="insight-excerpt-text">{press.desc}</p>
                  <button 
                    type="button" 
                    className="work-view-link" 
                    style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                    onClick={() => setActiveZoom(press)}
                  >
                    <span>Inspect Article Clipping</span> <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
           9. CONTACT AND FINAL CALL TO ACTION (Let's Talk)
           =================================================================== */}
      <section className="section-padding bg-canvas" id="contact">
        <div className="container">
          <div className="contact-editorial-layout">
            
            {/* Left Column: Direct Communication Channels */}
            <div className="contact-channels-wrapper">
              <div>
                <div className="editorial-kicker">
                  <span className="kicker-line"></span>
                  <span>START A CONVERSATION</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.85rem, 2.6vw, 2.45rem)', margin: '14px 0 10px', lineHeight: 1.25 }}>
                  Let's Build Something Meaningful.
                </h2>
                <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '28px' }}>
                  Have an ambitious project, an identity challenge, or commercial production in mind? Connect directly or submit a brief below.
                </p>
              </div>

              {/* Direct Telephone Card */}
              <a href="tel:+919014365364" className="contact-channel-card" title="Direct Phone Call">
                <div className="contact-channel-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-channel-body">
                  <span className="contact-channel-kicker">Direct Telephone &bull; WhatsApp</span>
                  <div className="contact-channel-val">+91 9014 365 364</div>
                  <p className="contact-channel-sub">Available Mon &ndash; Sat &bull; 10:00 AM &ndash; 7:00 PM IST</p>
                </div>
              </a>

              {/* Direct Email Card */}
              <a href="mailto:info@sohealvaseem.com" className="contact-channel-card" title="Direct Email">
                <div className="contact-channel-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-channel-body">
                  <span className="contact-channel-kicker">Official Correspondence</span>
                  <div className="contact-channel-val">info@sohealvaseem.com</div>
                  <p className="contact-channel-sub">Direct executive inbox &bull; Guaranteed response within 24h</p>
                </div>
              </a>

              {/* Studio Locations Card */}
              <div className="contact-channel-card">
                <div className="contact-channel-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-channel-body">
                  <span className="contact-channel-kicker">Primary Studios</span>
                  <div className="contact-channel-val" style={{ fontSize: '1.18rem' }}>Mumbai &bull; Hyderabad</div>
                  <p className="contact-channel-sub">Consultations available nationwide &amp; internationally</p>
                </div>
              </div>

              {/* Professional Networks */}
              <div className="contact-channel-card" style={{ flexDirection: 'column', gap: '14px' }}>
                <span className="contact-channel-kicker" style={{ margin: 0 }}>Professional Network &amp; Media</span>
                <div className="contact-social-row">
                  <a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                    <i className="fa-brands fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                    <i className="fa-brands fa-youtube"></i>
                    <span>YouTube</span>
                  </a>
                  <a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                    <i className="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Executive Brief Intake Form */}
            <div className="contact-form-card">
              <div className="contact-form-header">
                <span className="editorial-badge">Project Intake &bull; Confidential</span>
                <h3>Submit a Project Brief</h3>
                <p>
                  Share your strategic goals, timeline, or current commercial challenge. Soheal Vaseem reviews all inquiries personally.
                </p>
              </div>

              {submitted ? (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '32px 24px', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#22c55e', color: '#ffffff', display: 'grid', placeItems: 'center', margin: '0 auto 16px', fontSize: '1.5rem' }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#14532d', marginBottom: '8px' }}>
                    Thank you, {formData.name}!
                  </h4>
                  <p style={{ color: '#166534', fontSize: '0.98rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 20px' }}>
                    Your project brief regarding <strong>{selectedService}</strong> has been received. You will receive a direct response within 24 business hours.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-outline btn-sm" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                    }}
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Service Focus Selector */}
                  <div className="contact-services-selector">
                    <label className="contact-services-label">Focus Area &bull; Strategic Scope</label>
                    <div className="contact-services-chips">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          className={`contact-chip ${selectedService === opt.label ? 'active' : ''}`}
                          onClick={() => setSelectedService(opt.label)}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="contact-fields-row">
                    <div className="contact-field-group">
                      <label htmlFor="contact-name" className="contact-field-label">
                        <span>Your Full Name</span>
                        <span className="required-dot">*</span>
                      </label>
                      <input 
                        id="contact-name" 
                        type="text" 
                        className="contact-input" 
                        placeholder="e.g. Rahul Sharma" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="contact-email" className="contact-field-label">
                        <span>Email Address</span>
                        <span className="required-dot">*</span>
                      </label>
                      <input 
                        id="contact-email" 
                        type="email" 
                        className="contact-input" 
                        placeholder="name@company.com" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="contact-fields-row">
                    <div className="contact-field-group">
                      <label htmlFor="contact-phone" className="contact-field-label">
                        <span>Phone / WhatsApp</span>
                        <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>(Optional)</span>
                      </label>
                      <input 
                        id="contact-phone" 
                        type="tel" 
                        className="contact-input" 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="contact-company" className="contact-field-label">
                        <span>Company / Brand</span>
                        <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>(Optional)</span>
                      </label>
                      <input 
                        id="contact-company" 
                        type="text" 
                        className="contact-input" 
                        placeholder="Organization name" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="contact-field-group">
                    <label htmlFor="contact-message" className="contact-field-label">
                      <span>Project Brief, Objectives or Timeline</span>
                      <span className="required-dot">*</span>
                    </label>
                    <textarea 
                      id="contact-message" 
                      className="contact-textarea" 
                      rows="4" 
                      placeholder="Describe your brand, key goals, target audience, and current timeline..." 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="contact-submit-btn" 
                    disabled={loading}
                  >
                    <span>{loading ? 'Sending Inquiry...' : 'Send Project Inquiry'}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>

                  {/* Trust Reassurance Badges */}
                  <div className="contact-trust-strip">
                    <div className="contact-trust-item">
                      <i className="fa-solid fa-lock"></i>
                      <span>Confidential &bull; NDA upon request</span>
                    </div>
                    <div className="contact-trust-item">
                      <i className="fa-solid fa-clock"></i>
                      <span>24-Hour Response</span>
                    </div>
                    <div className="contact-trust-item">
                      <i className="fa-solid fa-user-shield"></i>
                      <span>Direct Advisory</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
