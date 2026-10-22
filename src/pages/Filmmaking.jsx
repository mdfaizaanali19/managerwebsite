import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Filmmaking() {
  const [activeVideo, setActiveVideo] = useState(null);

  const stills = [
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
      desc: 'High-speed camera rigging, vehicle tracking mounts, and dynamic night-drive reflections engineered for performance brand launch.'
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
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              backgroundColor: '#000',
              borderRadius: '8px',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              <i className="fa-solid fa-xmark"></i> Close
            </button>
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="page-hero-editorial hero-page-filmmaking">
        <div className="hero-editorial-overlay"></div>
        <div className="container">
          <div className="hero-editorial-content">
            <div className="hero-editorial-badge">
              <span className="dash"></span>
              <span>DIRECTORIAL CRAFT &bull; 20+ YEARS</span>
            </div>
            <h1 className="hero-editorial-headline">
              Stories Beyond<br />
              the <span className="hero-italic-gold">Frame.</span>
            </h1>
            <p className="hero-editorial-lead">
              Bringing ideas to life through visual storytelling, film, and advertising.
            </p>
            <div className="hero-editorial-actions">
              <a href="#showreel" className="btn-hero-dark-pill" title="Experience Directorial Showreel">
                <span>EXPLORE SHOWREEL</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
              <Link to="/contact" className="btn-hero-outline-pill" title="Discuss Film Production">
                <span>DISCUSS PRODUCTION</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="hero-editorial-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>Film Making</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directorial Milestones & Credentials */}
      <section style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-light)', padding: '42px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', textAlign: 'left' }}>
            <div style={{ borderLeft: '2px solid var(--accent-bronze)', paddingLeft: '18px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>150+</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-bronze)', marginTop: '6px', fontWeight: 600 }}>Commercial Films Directed</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Nationwide broadcast and multi-channel campaigns</div>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-bronze)', paddingLeft: '18px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-bronze)', marginTop: '6px', fontWeight: 600 }}>Years Directorial Craft</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Decades commanding film sets &amp; soundstages</div>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-bronze)', paddingLeft: '18px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>Prime-Time</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-bronze)', marginTop: '6px', fontWeight: 600 }}>Television Drama Series</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Critically acclaimed multi-episode broadcasts</div>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-bronze)', paddingLeft: '18px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>National</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-bronze)', marginTop: '6px', fontWeight: 600 }}>Media Recognition</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Covered in The Hindu, Deccan Chronicle, Siasat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Directorial Showreel */}
      <section className="section-padding bg-canvas" id="showreel">
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span className="editorial-badge"><i className="fa-solid fa-play"></i> Cinematic Reel</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', margin: '14px 0' }}>The Directorial Showreel (4K)</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              A curated sequence of commercial television commercials, brand monographs, and broadcast visual narratives directed by Soheal Vaseem. Click below to experience the directorial reel.
            </p>
          </div>

          <div style={{ maxWidth: '1040px', margin: '0 auto', position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12)', border: '1px solid var(--border-light)' }}>
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000000', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/resource/slider02.jpg" alt="Soheal Vaseem Directorial Showreel" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.82 }} />
              
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14, 18, 28, 0.85) 0%, rgba(14, 18, 28, 0.3) 60%, rgba(14, 18, 28, 0.4) 100%)' }}></div>

              <button 
                type="button"
                onClick={() => setActiveVideo('O0AT4TKrUSY')}
                title="Play Cinematic Showreel (4K)" 
                style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 2 }}
              >
                <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'rgba(157, 120, 68, 0.9)', border: '2px solid rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '1.8rem', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}>
                  <i className="fa-solid fa-play" style={{ marginLeft: '4px' }}></i>
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#ffffff', background: 'rgba(0,0,0,0.65)', padding: '6px 16px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  Play Directorial Reel (4K)
                </span>
              </button>

              <div style={{ position: 'absolute', bottom: '20px', left: '24px', zIndex: 2, color: '#ffffff' }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent-bronze)', fontWeight: 700, display: 'block' }}>Commercial Direction</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>Cinema &bull; TVCs &bull; Brand Narratives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Stills Showcase */}
      <section className="section-padding bg-surface" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <span className="editorial-badge">Verified Production Archive</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', margin: '12px 0 6px' }}>Directorial Stills &amp; Key Visuals</h2>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1.05rem' }}>
                Archived stills from commercials, key visual art, television series, and on-set production assets.
              </p>
            </div>
            <div>
              <Link to="/portfolio" className="btn btn-outline" style={{ borderColor: 'var(--border-medium)' }}>
                View Full Portfolio <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {stills.map((still, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'block', position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={still.img} alt={still.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-bronze)', fontWeight: 700, marginBottom: '6px' }}>
                    {still.category}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{still.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: 0 }}>
                    {still.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-meaningful-section">
        <div className="container">
          <div className="cta-meaningful-inner">
            <span className="editorial-badge" style={{ justifyContent: 'center' }}>Initiate Production</span>
            <h2>Bring Your Story to the Screen.</h2>
            <p>
              Looking for directorial vision, commercial ad production, or a corporate film that elevates your brand? Let's discuss your production goals.
            </p>
            <Link to="/contact" className="btn btn-primary">
              <span>Start Production Dialogue</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
