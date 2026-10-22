import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      num: '01',
      icon: 'fa-solid fa-chess-knight',
      title: 'Brand Architecture & Identity Systems',
      subtitle: 'Market Positioning &bull; Visual Systems &bull; Brand Guidelines',
      desc: 'Architecting authoritative brand frameworks, memorable marks, cohesive typographic systems, packaging design, and comprehensive identity manuals that set you apart from competitors.',
      points: [
        'Brand Discovery & Competitive Audits',
        'Core Narrative & Value Proposition Frameworks',
        'Complete Corporate Visual Identity & Stylebooks',
        'Packaging, Collateral & Stationery Architecture'
      ],
      link: '/contact?service=branding',
      btnText: 'Enquire for Branding'
    },
    {
      num: '02',
      icon: 'fa-solid fa-film',
      title: 'Commercial Filmmaking & Creative Direction',
      subtitle: 'TV Commercials &bull; Brand Documentaries &bull; Ad Films',
      desc: 'Directing broadcast-grade television commercials, cinematic brand monographs, corporate documentaries, and digital video assets with full-scale production stewardship.',
      points: [
        'Directorial Script-to-Screen Leadership',
        'Cinematography, Lighting & Sound Design',
        'Talent Coaching & Multi-Camera Set Direction',
        'High-End Post-Production & Color Grading'
      ],
      link: '/filmmaking',
      btnText: 'Explore Film Portfolio'
    },
    {
      num: '03',
      icon: 'fa-solid fa-bullhorn',
      title: 'Advertising & Performance Campaigns',
      subtitle: 'Campaign Direction &bull; Media Strategy &bull; Broadcast Ads',
      desc: 'Conceptualizing and executing synchronized advertising campaigns across television, outdoor print, digital platforms, and national newspapers to generate qualified customer demand.',
      points: [
        'Cross-Channel Campaign Conceptualization',
        'Strategic Media Planning & Allocation',
        'Copywriting & Creative Visual Art Direction',
        'Print, Outdoor & Digital Media Deployment'
      ],
      link: '/contact?service=advertising',
      btnText: 'Enquire for Advertising'
    },
    {
      num: '04',
      icon: 'fa-solid fa-laptop-code',
      title: 'Digital Web Architecture & E-Commerce',
      subtitle: 'UI/UX Design &bull; Custom Platforms &bull; CRM Integrations',
      desc: 'Engineering bespoke, lightning-fast digital flagships, luxury e-commerce marketplaces, and hospital CRM patient inquiry systems designed for seamless conversions.',
      points: [
        'High-Performance Responsive React/Vite Architecture',
        'Custom E-Commerce & Product Inventory Management',
        'Specialized Healthcare & Hospital Booking Portals',
        'Intuitive UI/UX Navigation & Conversion Pathways'
      ],
      link: '/portfolio',
      btnText: 'View Web Work'
    },
    {
      num: '05',
      icon: 'fa-solid fa-chart-line',
      title: 'Digital Marketing & Content Strategy',
      subtitle: 'Audience Engagement &bull; Search Visibility &bull; Social Strategy',
      desc: 'Formulating strategic content roadmaps, organic search engine optimization (SEO), and targeted social channels that convert casual browsers into loyal brand advocates.',
      points: [
        'Search Intent Alignment & Technical SEO',
        'Organic Social Media Strategy & Positioning',
        'Executive Thought Leadership Content',
        'Ongoing Growth Analytics & Conversion Tuning'
      ],
      link: '/contact?service=digital',
      btnText: 'Enquire for Growth'
    },
    {
      num: '06',
      icon: 'fa-solid fa-briefcase',
      title: 'Executive Consulting & Turnkey Inception',
      subtitle: 'Brand Feasibility &bull; Launch Roadmaps &bull; Strategic Advisory',
      desc: 'Serving as a senior strategic advisor for enterprise leadership teams launching new business verticals, revitalizing legacy brands, or executing high-stakes transitions.',
      points: [
        'New Venture Feasibility & Market Entry Roadmaps',
        'Comprehensive Turnkey Brand Inception',
        'Executive Leadership Alignment Workshops',
        'Vendor, Agency & Production Stewardship'
      ],
      link: '/contact?service=advisory',
      btnText: 'Discuss Advisory'
    }
  ];

  return (
    <div className="services-page">
      {/* ===================================================================
           1. HERO SECTION
           =================================================================== */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="kicker">Strategic Services</div>
            <h1 className="page-hero-title">
              Disciplined Strategy.<br />
              <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>Flawless Commercial Execution.</em>
            </h1>
            <p className="page-hero-lead">
              Every service is engineered around real business objectives &mdash; translating market positioning into high-converting digital platforms, broadcast-grade film campaigns, and enduring brand equity.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. DETAILED SERVICES LISTING
           =================================================================== */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {servicesList.map((srv, idx) => (
              <div 
                key={idx} 
                style={{
                  background: '#fcfcfd',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'clamp(28px, 4vw, 44px)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    <div className="service-icon-box" style={{ marginBottom: 0, width: '44px', height: '44px', fontSize: '18px' }}>
                      <i className={srv.icon}></i>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--red)', textTransform: 'uppercase' }}>
                      {srv.num} &bull; {srv.subtitle}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 600, color: 'var(--ink)', marginBottom: '14px' }}>
                    {srv.title}
                  </h2>

                  <p style={{ fontSize: '14.5px', color: 'var(--ink-soft)', lineHeight: '1.7', marginBottom: '24px' }}>
                    {srv.desc}
                  </p>

                  <Link to={srv.link} className="sv-btn sv-btn-dark">
                    <span>{srv.btnText}</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
                  </Link>
                </div>

                {/* Right Points */}
                <div style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', padding: '24px 28px' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '16px' }}>
                    Key Deliverables &amp; Scope
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {srv.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--ink)' }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--red)', marginTop: '4px', fontSize: '12px' }}></i>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
           3. THE 5-STEP CONSULTATION PROCESS (TIMELINE)
           =================================================================== */}
      <section className="section-padding" style={{ background: 'var(--bg)', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="section-head centered">
            <div className="kicker">The Methodology</div>
            <h2 className="section-title">
              Our Strategic Process. <em>From Discovery to Market Impact.</em>
            </h2>
            <p className="section-desc">
              A structured 5-step framework that ensures rigorous strategic clarity and flawless creative execution.
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-item left">
              <div className="timeline-card">
                <div className="timeline-step">Step 01 &bull; Discovery</div>
                <h3 className="timeline-title">Brand &amp; Market Audit</h3>
                <p className="timeline-desc">
                  We interrogate customer perceptions, competitor positioning, internal competencies, and market gaps to establish honest commercial baselines.
                </p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-card">
                <div className="timeline-step">Step 02 &bull; Strategy</div>
                <h3 className="timeline-title">Strategic Architecture</h3>
                <p className="timeline-desc">
                  Defining the core brand narrative, target personas, distinctive value proposition, and communication pillars that will guide all execution.
                </p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-card">
                <div className="timeline-step">Step 03 &bull; Creative</div>
                <h3 className="timeline-title">Creative Conceptualization</h3>
                <p className="timeline-desc">
                  Developing the visual systems, script treatments, storyboard sequences, and typographic hierarchy that give strategy tangible emotional power.
                </p>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-card">
                <div className="timeline-step">Step 04 &bull; Production</div>
                <h3 className="timeline-title">Directorial Execution</h3>
                <p className="timeline-desc">
                  Overseeing commercial film shoots, digital development sprints, and collateral production with strict directorial precision and quality control.
                </p>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-card">
                <div className="timeline-step">Step 05 &bull; Launch</div>
                <h3 className="timeline-title">Market Deployment &amp; Scaling</h3>
                <p className="timeline-desc">
                  Coordinating go-to-market rollouts, performance marketing activations, and brand governance to safeguard long-term brand equity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           4. CTA BANNER
           =================================================================== */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-inner">
            <div className="kicker kicker-gold" style={{ justifyContent: 'center' }}>Let's Build Together</div>
            <h2 className="section-title">
              Ready to Discuss Your Brand Strategy or Film Project?
            </h2>
            <p className="section-desc">
              Reach out today to discuss scope, strategic alignment, and availability for your upcoming initiative.
            </p>
            <div className="cta-banner-actions">
              <Link to="/contact" className="sv-btn sv-btn-red sv-btn-lg">
                <span>Request a Consultation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/portfolio" className="sv-btn sv-btn-white sv-btn-lg">
                <span>View Portfolio Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
