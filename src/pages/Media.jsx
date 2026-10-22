import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Media() {
  const [activeZoom, setActiveZoom] = useState(null);

  const pressItems = [
    {
      publication: 'The Hindu',
      title: 'Directorial Acumen &amp; Cinematic Vision',
      desc: 'National newspaper coverage highlighting Soheal Vaseem’s innovative approach to visual storytelling, brand narratives, and production leadership.',
      thumb: '/images/resource/Hindu.jpg',
      type: 'National Daily'
    },
    {
      publication: 'Deccan Chronicle',
      title: 'Television Series &amp; Ad Direction Spotlight',
      desc: 'In-depth feature examining Soheal’s directorial execution across television drama serials and nationwide advertising campaigns.',
      thumb: '/images/resource/chronicle.jpg',
      type: 'Print Feature'
    },
    {
      publication: 'Deccan Chronicle',
      title: 'Creative Excellence in Modern Commercials',
      desc: 'Chronicle reporting on Soheal Vaseem’s storytelling craft and his leadership on high-profile corporate commercial film sets.',
      thumb: '/images/resource/chronicleone.jpg',
      type: 'Commercial Spotlight'
    },
    {
      publication: 'Eenadu',
      title: 'Director Soheal Vaseem’s Creative Milestone',
      desc: 'Extensive regional daily reporting highlighting Soheal’s artistic storytelling contributions and commercial campaign triumph.',
      thumb: '/images/resource/eenadu.jpg',
      type: 'Regional Daily'
    },
    {
      publication: 'Andhra Jyothi',
      title: 'Artistic Journey Behind The Camera',
      desc: 'Feature article examining the making of high-concept television commercials and on-set directorial discipline.',
      thumb: '/images/resource/andhrajyothi.jpg',
      type: 'Cultural Daily'
    },
    {
      publication: 'The Siasat Daily',
      title: 'Acclaimed Filmmaker &amp; Directorial Craft',
      desc: 'Prominent coverage spotlighting Soheal Vaseem’s national advertising campaigns and cultural storytelling.',
      thumb: '/images/resource/siasatone.jpg',
      type: 'National Daily'
    },
    {
      publication: 'The Siasat Daily',
      title: 'Media &amp; Television Directorial Triumph',
      desc: 'Special press reporting on prime-time television direction and successful brand inception initiatives.',
      thumb: '/images/resource/siasattwo.jpg',
      type: 'Television Coverage'
    },
    {
      publication: 'Vaartha',
      title: 'Brand Builder &amp; Creative Visionary',
      desc: 'Daily news profile tracing Soheal Vaseem’s evolution as a strategic brand builder and creative director.',
      thumb: '/images/resource/vaartha.jpg',
      type: 'Daily Profile'
    }
  ];

  return (
    <div className="media-page">
      {/* ===================================================================
           1. HERO SECTION
           =================================================================== */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="kicker">Media &amp; Press Archive</div>
            <h1 className="page-hero-title">
              National Press Features &amp;<br />
              <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>
                Directorial Milestones.
              </em>
            </h1>
            <p className="page-hero-lead">
              A verified archive of published commentary, national newspaper profiles, and television features documenting Soheal Vaseem's directorial work and commercial storytelling across Indian media.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. PRESS CLIPPINGS GRID
           =================================================================== */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="press-grid">
            {pressItems.map((item, idx) => (
              <div className="press-card" key={idx}>
                <div 
                  className="press-img-wrap" 
                  onClick={() => setActiveZoom(item.thumb)}
                  style={{ cursor: 'pointer' }}
                  title="Click to view full clipping"
                >
                  <img 
                    src={item.thumb} 
                    alt={item.title} 
                    className="press-img" 
                    loading="lazy" 
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0}
                  >
                    <span className="sv-btn sv-btn-white" style={{ height: '34px', fontSize: '12px' }}>
                      <i className="fa-solid fa-magnifying-glass-plus"></i> View Full Article
                    </span>
                  </div>
                </div>

                <div className="press-body">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span className="press-pub-tag">{item.publication}</span>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', background: '#f4f4f6', padding: '2px 8px', borderRadius: '4px' }}>
                      {item.type}
                    </span>
                  </div>

                  <h3 className="press-title" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="press-desc">{item.desc}</p>

                  <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>
                    <button 
                      onClick={() => setActiveZoom(item.thumb)} 
                      style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>Inspect Clipping</span>
                      <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '11px', color: 'var(--red)' }}></i>
                    </button>
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
            <div className="kicker kicker-gold" style={{ justifyContent: 'center' }}>Press &amp; Media Inquiries</div>
            <h2 className="section-title">
              Looking for Press Information or Directorial Quotes?
            </h2>
            <p className="section-desc">
              For editorial commentary, media interviews, or high-resolution directorial press kits, please get in touch.
            </p>
            <div className="cta-banner-actions">
              <Link to="/contact" className="sv-btn sv-btn-red sv-btn-lg">
                <span>Contact Media Desk</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/about" className="sv-btn sv-btn-white sv-btn-lg">
                <span>Read Full Biography</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Article Lightbox */}
      {activeZoom && (
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
          onClick={() => setActiveZoom(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '900px',
              maxHeight: '90vh',
              background: '#ffffff',
              borderRadius: 'var(--radius-md)',
              overflow: 'auto',
              boxShadow: '0 24px 60px rgba(0,0,0,0.8)',
              padding: '16px'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveZoom(null)}
              style={{
                position: 'sticky',
                top: '8px',
                right: '8px',
                marginLeft: 'auto',
                background: 'rgba(0,0,0,0.7)',
                border: 'none',
                color: '#ffffff',
                fontSize: '22px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <img 
              src={activeZoom} 
              alt="Full Press Article" 
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
