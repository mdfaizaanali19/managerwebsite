import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const polaroids = [
    {
      img: '/images/resource/slider03.jpg',
      caption: 'Directing on Commercial Set'
    },
    {
      img: '/images/resource/about_director_portrait.jpg',
      caption: 'Strategic Clarity & Vision'
    },
    {
      img: '/images/resource/slider01.jpg',
      caption: 'Multi-Camera Stage Direction'
    },
    {
      img: '/images/resource/sohel_executive.jpg',
      caption: 'Enterprise Consultation'
    }
  ];

  return (
    <div className="about-page">
      {/* ===================================================================
           1. HERO SECTION
           =================================================================== */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="kicker">About Soheal Vaseem</div>
            <h1 className="page-hero-title">
              Strategy Gives Brands Direction.<br />
              <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>Storytelling Gives Them Meaning.</em>
            </h1>
            <p className="page-hero-lead">
              For over three decades, Soheal Vaseem has partnered with enterprise founders, leadership teams, and ambitious organizations to transform strategic business clarity into distinctive market positioning, compelling communication, and enduring commercial value.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. BEHIND THE LENS (POLAROID FRAMES)
           =================================================================== */}
      <section className="section-padding" style={{ background: '#ffffff', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head centered">
            <div className="kicker">Behind The Lens</div>
            <h2 className="section-title">
              Moments of Craft. <em>Decades of Dedication.</em>
            </h2>
            <p className="section-desc">
              Directing commercial film sets, shaping brand narratives, and collaborating with visionary teams across Mumbai and Hyderabad.
            </p>
          </div>

          <div className="polaroid-grid">
            {polaroids.map((p, idx) => (
              <div className="sv-polaroid-card" key={idx}>
                <div className="sv-polaroid-img-wrap">
                  <img src={p.img} alt={p.caption} loading="lazy" />
                </div>
                <div className="sv-polaroid-caption">{p.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
           3. THE 30-YEAR JOURNEY & PHILOSOPHY
           =================================================================== */}
      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="about-preview-inner">
            {/* Visual Portrait */}
            <div className="about-preview-visual">
              <div className="about-preview-img-frame">
                <img 
                  src="/images/resource/sohel_intro_portrait.jpg" 
                  alt="Soheal Vaseem — Directorial Milestones" 
                  className="about-preview-img" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Narrative Text */}
            <div className="about-preview-content">
              <div className="kicker">Career Evolution &bull; Since 1991</div>
              <h2 className="section-title">
                From Foundational Advertising to <em>Full-Spectrum Brand Architecture.</em>
              </h2>
              
              <p className="section-desc" style={{ marginBottom: '18px' }}>
                Soheal Vaseem’s professional journey began in advertising with <strong>Gazelle Ads in 1991</strong>. From traditional print advertising, visual communication, and commercial typography to television broadcasting and the digital web landscape, his career has tracked the continuous transformation of how businesses connect with audiences.
              </p>

              <p className="section-desc">
                With filmmaking and creative direction as core facets of his identity, Soheal brings an authentic visual storytelling perspective to brand communication. He believes that true brand power emerges when analytical business strategy and high-craft emotional storytelling operate as one unified discipline.
              </p>

              <div className="about-quote-box">
                <p className="about-quote-text">
                  &ldquo;A great brand does not shout for attention; it creates an unmistakable gravity that draws people in, earns their trust, and commands loyalty.&rdquo;
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/services" className="sv-btn sv-btn-dark">
                  <span>Explore Strategic Services</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link to="/filmmaking" className="sv-btn sv-btn-outline">
                  <span>View Film Direction</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           4. CORE STRATEGIC PRINCIPLES
           =================================================================== */}
      <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head centered">
            <div className="kicker">Working Principles</div>
            <h2 className="section-title">
              How Strategy &amp; Craft <em>Deliver Results.</em>
            </h2>
            <p className="section-desc">
              Four fundamental rules that guide every brand architecture, visual campaign, and film production.
            </p>
          </div>

          <div className="services-grid-4">
            <div className="service-card">
              <div className="service-icon-box">
                <i className="fa-solid fa-crosshairs"></i>
              </div>
              <h3 className="service-card-title">1. Clarity Before Creativity</h3>
              <p className="service-card-desc">
                Before designing a single asset or writing a single line of script, we define exactly what problem we are solving, who we are speaking to, and what competitive space we intend to own.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3 className="service-card-title">2. Emotion Grounded in Logic</h3>
              <p className="service-card-desc">
                Consumers and business buyers make decisions based on emotion and justify them with logic. Every campaign balances emotional resonance with unequivocal commercial value.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <i className="fa-solid fa-video"></i>
              </div>
              <h3 className="service-card-title">3. Directorial Precision</h3>
              <p className="service-card-desc">
                Whether on a commercial film set or guiding an enterprise digital launch, every visual nuance, camera movement, and typographic choice is executed with uncompromising precision.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon-box">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="service-card-title">4. Enduring Brand Equity</h3>
              <p className="service-card-desc">
                We design for longevity rather than fleeting trends. Our goal is to build brand frameworks that continue generating commercial value for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           5. CAREER TIMELINE
           =================================================================== */}
      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="section-head centered">
            <div className="kicker">Milestone Milestones</div>
            <h2 className="section-title">
              Three Decades of Growth. <em>Key Eras of Impact.</em>
            </h2>
            <p className="section-desc">
              A chronology of continuous reinvention and creative excellence across Indian media.
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-item left">
              <div className="timeline-card">
                <div className="timeline-step">1991 &bull; Genesis</div>
                <h3 className="timeline-title">Gazelle Ads &amp; Print Foundations</h3>
                <p className="timeline-desc">
                  Immersed in classical print advertising, typography, visual hierarchy, and foundational commercial copywriting that forged rigorous design discipline.
                </p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-card">
                <div className="timeline-step">Early 2000s &bull; Directorial Transition</div>
                <h3 className="timeline-title">Commercial Television Direction</h3>
                <p className="timeline-desc">
                  Expanded into broadcast directing, overseeing major television serials, public awareness spots, and high-budget brand commercials on regional and national networks.
                </p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-card">
                <div className="timeline-step">2010s &bull; Full-Spectrum Campaigns</div>
                <h3 className="timeline-title">Corporate &amp; Healthcare Leadership</h3>
                <p className="timeline-desc">
                  Directed comprehensive marketing campaigns for hospitals, luxury hospitality venues, real estate leaders, and multi-tier consumer product brands.
                </p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-card">
                <div className="timeline-step">2020s &bull; Digital &amp; Beyond</div>
                <h3 className="timeline-title">Modern Digital Architecture</h3>
                <p className="timeline-desc">
                  Synthesizing three decades of strategic consulting with luxury e-commerce platforms, patient portals, and high-conversion omnichannel digital ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           6. CTA BANNER
           =================================================================== */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-inner">
            <div className="kicker kicker-gold" style={{ justifyContent: 'center' }}>Let's Talk</div>
            <h2 className="section-title">
              Partner with Soheal Vaseem to Elevate Your Brand
            </h2>
            <p className="section-desc">
              Available for brand architecture advisory, commercial film direction, and selective executive consulting assignments.
            </p>
            <div className="cta-banner-actions">
              <Link to="/contact" className="sv-btn sv-btn-red sv-btn-lg">
                <span>Start a Conversation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/portfolio" className="sv-btn sv-btn-white sv-btn-lg">
                <span>Browse Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
