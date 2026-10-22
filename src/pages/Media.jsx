import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Media() {
  const [activeZoom, setActiveZoom] = useState(null);

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
      publication: 'Deccan Chronicle',
      title: 'Creative Excellence in Modern Commercials',
      desc: 'Chronicle reporting on Soheal Vaseem’s storytelling craft and his leadership on high-profile corporate commercial film sets.',
      thumb: '/images/resource/chronicleone.jpg',
      zoom: '/images/resource/chronicleone.jpg',
      type: 'Commercial Spotlight'
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
      publication: 'Andhra Jyothi',
      title: 'Artistic Journey Behind The Camera',
      desc: 'Feature article examining the making of high-concept television commercials and on-set directorial discipline.',
      thumb: '/images/resource/andhrajyothi.jpg',
      zoom: '/images/resource/andhrajyothi.jpg',
      type: 'Cultural Daily'
    },
    {
      publication: 'The Siasat Daily',
      title: 'Acclaimed Filmmaker & Directorial Craft',
      desc: 'Prominent coverage spotlighting Soheal Vaseem’s national advertising campaigns and cultural storytelling.',
      thumb: '/images/resource/siasatone.jpg',
      zoom: '/images/resource/siasatone.jpg',
      type: 'National Daily'
    },
    {
      publication: 'The Siasat Daily',
      title: 'Media & Television Directorial Triumph',
      desc: 'Special press reporting on prime-time television direction and successful brand inception initiatives.',
      thumb: '/images/resource/siasattwo.jpg',
      zoom: '/images/resource/siasattwo.jpg',
      type: 'Press Profile'
    },
    {
      publication: 'Vaartha',
      title: 'Milestone Commercial Achievements',
      desc: 'Daily news profile tracing Soheal Vaseem’s evolution as a strategic brand builder and creative director.',
      thumb: '/images/resource/vaarta.jpg',
      zoom: '/images/resource/vaarta.jpg',
      type: 'Print Feature'
    }
  ];

  return (
    <>
      {/* Lightbox Zoom Modal */}
      {activeZoom && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
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
              {activeZoom.publication} — {activeZoom.title}
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="page-hero-editorial hero-page-insights">
        <div className="hero-editorial-overlay"></div>
        <div className="container">
          <div className="hero-editorial-content">
            <div className="hero-editorial-badge">
              <span className="dash"></span>
              <span>PERSPECTIVES &bull; PRESS ARCHIVE</span>
            </div>
            <h1 className="hero-editorial-headline">
              Perspectives That Move<br />
              Brands <span className="hero-italic-gold">Forward.</span>
            </h1>
            <p className="hero-editorial-lead">
              Ideas and observations on branding, creativity, communication, and the changing business landscape.
            </p>
            <div className="hero-editorial-actions">
              <a href="#press-archive" className="btn-hero-dark-pill" title="Explore Press Archive">
                <span>EXPLORE PRESS ARCHIVE</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
              <Link to="/contact?type=press" className="btn-hero-outline-pill" title="Media & Speaking Inquiries">
                <span>MEDIA INQUIRIES</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="hero-editorial-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-surface" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-editorial" style={{ marginBottom: 0 }}>
            <div>
              <span className="editorial-badge">Critical Recognition</span>
              <h2>Three Decades of Media Coverage &amp; Documented Craft.</h2>
            </div>
            <p className="section-header-lead">
              A verified archive of national newspaper features and published commentary tracking Soheal Vaseem’s directorial milestones, commercial storytelling, and brand leadership across Indian media.
            </p>
          </div>
        </div>
      </section>

      {/* Press Articles Grid */}
      <section className="section-padding bg-canvas" id="press-archive">
        <div className="container">
          <div className="work-grid-editorial">
            {pressItems.map((press, idx) => (
              <div key={idx} className="work-card-editorial">
                <div className="work-img-box">
                  <img src={press.thumb} alt={`${press.publication} - ${press.title}`} loading="lazy" />
                </div>
                <div className="work-content-box">
                  <span className="work-cat-tag">{press.publication} &bull; {press.type}</span>
                  <h4 className="work-title-text">{press.title}</h4>
                  <p className="work-desc-text">{press.desc}</p>
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

      {/* CTA */}
      <section className="cta-meaningful-section">
        <div className="container">
          <div className="cta-meaningful-inner">
            <span className="editorial-badge" style={{ justifyContent: 'center' }}>Media &amp; Speaking</span>
            <h2>Let's Start With a Conversation.</h2>
            <p>
              For speaking engagements, press commentary on branding &amp; advertising, or strategic consulting on brand architecture.
            </p>
            <Link to="/contact" className="btn btn-primary">
              <span>Start a Dialogue</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
