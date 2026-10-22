import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Filmmaking() {
  const [modalOpen, setModalOpen] = useState(false);

  const filmStills = [
    {
      img: '/images/resource/slider01.jpg',
      category: 'Commercial Ad Campaign',
      title: 'Infinite Horizon &bull; Natural Light Direction',
      desc: 'National multi-location commercial campaign featuring outdoor natural-light cinematography, vast horizon framing, and brand storytelling.'
    },
    {
      img: '/images/resource/slider02.jpg',
      category: 'Television Drama Broadcast',
      title: 'Prime-Time Drama Series Direction',
      desc: 'Director Soheal Vaseem commanding complex multi-camera setups, character staging, and dramatic scene progression on a soundstage.'
    },
    {
      img: '/images/resource/slider03.jpg',
      category: 'Soundstage Commercial',
      title: 'Behind the Directorial Monitor',
      desc: 'Fine-tuning lighting angles, color temperatures, and lens choices with cinematographer on a high-fashion studio set.'
    },
    {
      img: '/images/resource/slider04.jpg',
      category: 'Corporate Brand Film',
      title: 'Corporate Manufacturing Monograph',
      desc: 'Cinematic documentary tracking industrial automation, assembly excellence, and enterprise scale for global corporate stakeholders.'
    },
    {
      img: '/images/resource/slider05.jpg',
      category: 'Commercial Ad Campaign',
      title: 'Heritage Jewellery Commercial Spot',
      desc: 'Macro lens choreography and soft gold ambient lighting capturing artisanal craftsmanship and timeless heirloom luxury.'
    },
    {
      img: '/images/resource/slider1.jpg',
      category: 'Brand Key Visual',
      title: 'Automotive Kinetic Commercial Spot',
      desc: 'High-speed camera rigging, vehicle tracking mounts, and dynamic reflections engineered for an aggressive performance brand launch.'
    }
  ];

  const reelLoop = [
    ...filmStills,
    ...filmStills
  ];

  return (
    <div className="filmmaking-page" style={{ background: '#0e0e11', color: '#ffffff' }}>
      {/* ===================================================================
           1. HERO SECTION (CINEMATIC DARK)
           =================================================================== */}
      <section className="page-hero" style={{ background: '#111113', color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="kicker kicker-gold">Cinematic Directing</div>
            <h1 className="page-hero-title" style={{ color: '#ffffff' }}>
              Directorial Filmmaking &amp; Visual Storytelling.<br />
              <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gold-light)' }}>
                Emotion Captured in Motion.
              </em>
            </h1>
            <p className="page-hero-lead" style={{ color: '#a0a2ab' }}>
              For over twenty-five years, Soheal Vaseem has brought narrative gravitas, visual drama, and technical discipline to television commercials, corporate documentaries, and broadcast advertising across India.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. DIRECTORIAL SHOWREEL BOX
           =================================================================== */}
      <section className="section-padding" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div className="film-showreel-box">
            <img 
              src="/images/resource/slider02.jpg" 
              alt="Soheal Vaseem Directorial Showreel" 
              className="film-showreel-img" 
            />
            <div className="film-play-trigger" onClick={() => setModalOpen(true)}>
              <div className="film-play-btn">
                <i className="fa-solid fa-play" style={{ marginLeft: '4px' }}></i>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '0.04em' }}>Play Directorial Showreel</div>
                <div style={{ fontSize: '12.5px', color: '#ccc', marginTop: '4px' }}>A Curated Compilation of Commercial TVCs &amp; Broadcast Spots</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           3. SPROCKET HOLE FILM REEL MARQUEE
           =================================================================== */}
      <section className="film-reel-section" style={{ padding: '24px 0 64px' }}>
        <div className="film-reel-viewport">
          <div className="film-reel-track">
            {reelLoop.map((item, idx) => (
              <div className="film-reel-frame" key={idx}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="film-frame-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
           4. DIRECTORIAL STILLS & COMMERCIAL SPOTS GRID
           =================================================================== */}
      <section className="section-padding" style={{ background: '#141418', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="section-head centered">
            <div className="kicker kicker-gold">Production Archive</div>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Directorial Works. <em>Craft Across Diverse Genres.</em>
            </h2>
            <p className="section-desc" style={{ color: '#a0a2ab' }}>
              From high-budget television commercials to corporate monograph films, every production is executed with rigorous set leadership and artistic vision.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
            {filmStills.map((still, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#1b1b20',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden' }}>
                  <img 
                    src={still.img} 
                    alt={still.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                  <span 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(0,0,0,0.75)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--gold)',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {still.category}
                  </span>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                    {still.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#9d9ea6', lineHeight: '1.65' }}>
                    {still.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
           5. DIRECTORIAL CRAFT PILLARS
           =================================================================== */}
      <section className="section-padding" style={{ background: '#111113', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-head centered">
            <div className="kicker kicker-gold">The Directorial Process</div>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Four Pillars of <em>Cinematic Direction.</em>
            </h2>
            <p className="section-desc" style={{ color: '#a0a2ab' }}>
              How vision, soundstage discipline, and meticulous post-production translate into broadcast-standard visual storytelling.
            </p>
          </div>

          <div className="services-grid-4">
            <div className="service-card" style={{ background: '#18181d', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="service-icon-box" style={{ background: '#222228', color: 'var(--gold)' }}>
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <h3 className="service-card-title" style={{ color: '#ffffff' }}>Script &amp; Storyboard</h3>
              <p className="service-card-desc" style={{ color: '#a0a2ab' }}>
                Translating the brand's strategic message into scene beats, cinematic pacing, emotional arcs, and shot-by-shot visual storyboards.
              </p>
            </div>

            <div className="service-card" style={{ background: '#18181d', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="service-icon-box" style={{ background: '#222228', color: 'var(--gold)' }}>
                <i className="fa-solid fa-camera"></i>
              </div>
              <h3 className="service-card-title" style={{ color: '#ffffff' }}>Camera &amp; Lighting</h3>
              <p className="service-card-desc" style={{ color: '#a0a2ab' }}>
                Selecting prime anamorphic lenses, lighting ratios, camera movement rigs, and optical filtration to give each film a distinct texture.
              </p>
            </div>

            <div className="service-card" style={{ background: '#18181d', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="service-icon-box" style={{ background: '#222228', color: 'var(--gold)' }}>
                <i className="fa-solid fa-masks-theater"></i>
              </div>
              <h3 className="service-card-title" style={{ color: '#ffffff' }}>Talent Direction</h3>
              <p className="service-card-desc" style={{ color: '#a0a2ab' }}>
                Guiding actors and voiceover artists to deliver authentic performances that feel natural, convincing, and emotionally gripping.
              </p>
            </div>

            <div className="service-card" style={{ background: '#18181d', borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="service-icon-box" style={{ background: '#222228', color: 'var(--gold)' }}>
                <i className="fa-solid fa-sliders"></i>
              </div>
              <h3 className="service-card-title" style={{ color: '#ffffff' }}>Color &amp; Sound Post</h3>
              <p className="service-card-desc" style={{ color: '#a0a2ab' }}>
                Precision DaVinci color grading, orchestral sound design, foley mastering, and final broadcast quality compliance checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           6. COLLABORATION CTA
           =================================================================== */}
      <section className="cta-banner-section" style={{ background: '#0a0a0c', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="cta-banner-inner">
            <div className="kicker kicker-gold" style={{ justifyContent: 'center' }}>Directorial Inquiry</div>
            <h2 className="section-title">
              Have a Commercial Film or Broadcast Campaign to Direct?
            </h2>
            <p className="section-desc">
              Discuss script treatments, soundstage availability, production budgeting, and directorial dates.
            </p>
            <div className="cta-banner-actions">
              <Link to="/contact" className="sv-btn sv-btn-red sv-btn-lg">
                <span>Commission Directorial Project</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <a 
                href="https://wa.me/919014365364?text=Hi%20Soheal,%20I%20would%20like%20to%20discuss%20a%20commercial%20film%20direction%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sv-btn sv-btn-white sv-btn-lg"
              >
                <i className="fa-brands fa-whatsapp" style={{ color: 'var(--wa)', fontSize: '18px' }}></i>
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {modalOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setModalOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16 / 9',
              background: '#000000',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0,0,0,0.8)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                color: '#ffffff',
                fontSize: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Close video"
            >
              &times;
            </button>
            <iframe 
              src="https://www.youtube.com/embed/videoseries?list=PL_PLACEHOLDER" 
              title="Soheal Vaseem Directorial Reel"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
