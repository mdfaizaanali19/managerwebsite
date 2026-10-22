import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicePillars = [
    {
      pillarTitle: 'I. Brand Strategy & Market Positioning',
      pillarSubtitle: 'Strategic Foundation & Enterprise Moats',
      services: [
        {
          num: '01',
          title: 'Strategic Brand Architecture & Audits',
          subtitle: 'Market Positioning &bull; Differentiation Moats',
          desc: 'Conducting in-depth brand audits, customer decision mapping, and competitive differentiation to articulate an authentic value proposition that separates your enterprise from market noise.',
          link: '/contact?service=branding',
          btnText: 'Consult on Strategy'
        },
        {
          num: '02',
          title: 'Turnkey Advisory & Brand Inception',
          subtitle: 'Senior Executive Advisory &bull; New Business Launch',
          desc: 'Providing senior executive counsel for new business inception, brand launch feasibility, corporate event visual direction, and turnkey commercial setup for founding teams.',
          link: '/contact?service=advisory',
          btnText: 'Explore Advisory'
        }
      ]
    },
    {
      pillarTitle: 'II. Creative Direction & Identity Systems',
      pillarSubtitle: 'Visual Craft, Typographic Systems & Digital Platforms',
      services: [
        {
          num: '03',
          title: 'Corporate Visual Identity & Graphic Design',
          subtitle: 'Identity Systems &bull; Visual Manuals &bull; Packaging',
          desc: 'Architecting memorable corporate marks, cohesive typographic standards, brand manuals, and tactile packaging design engineered for high-end shelf presence and prestige.',
          link: '/contact?service=branding',
          btnText: 'Explore Branding'
        },
        {
          num: '04',
          title: 'Digital Web Architecture & User Experience',
          subtitle: 'Flagship Web Platforms &bull; E-Commerce &bull; CRM Portals',
          desc: 'Designing fast, mobile-first web platforms with intuitive information architecture, clear conversion pathways, and sophisticated editorial styling that convert visitors into qualified inquiries.',
          link: '/contact?service=web',
          btnText: 'Explore Web Design'
        },
        {
          num: '05',
          title: 'Advertising & Cross-Channel Campaign Direction',
          subtitle: 'Media Strategy &bull; Broadcast &bull; Outdoor Print',
          desc: 'Formulating synchronized cross-channel advertising campaigns, targeted media planning, and creative direction across television, digital, and outdoor formats to maximize marketing ROI.',
          link: '/contact?service=advertising',
          btnText: 'Explore Advertising'
        },
        {
          num: '06',
          title: 'Search Optimization & Content Discovery (SEO)',
          subtitle: 'Technical SEO &bull; Search Visibility &bull; Authority',
          desc: 'Aligning technical web architecture, metadata systems, and search intent to establish organic search dominance, ensuring your brand is found naturally by qualified clients.',
          link: '/contact?service=seo',
          btnText: 'Enquire SEO'
        }
      ]
    },
    {
      pillarTitle: 'III. Commercial Filmmaking & TVCs',
      pillarSubtitle: 'Directorial Craft, Soundstage & 4K Cinematography',
      services: [
        {
          num: '07',
          title: 'Filmmaking & Commercial Direction',
          subtitle: 'TVCs &bull; Corporate Documentaries &bull; Key Visuals',
          desc: 'Bringing three decades of directorial craft to television commercials (TVCs), corporate brand films, dramatic soundstage narratives, and product visual assets with 4K cinematography and precision sound design.',
          link: '/filmmaking',
          btnText: 'Explore Film Work'
        }
      ]
    }
  ];

  return (
    <>
      {/* ===================================================================
           EXPERTISE HERO BANNER
           =================================================================== */}
      <section className="page-hero-editorial hero-page-expertise">
        <div className="hero-editorial-overlay"></div>
        <div className="container">
          <div className="hero-editorial-content">
            <div className="editorial-kicker">
              <span className="kicker-line"></span>
              <span>STRATEGIC CAPABILITIES &bull; CONSULTING</span>
            </div>
            <h1 className="hero-editorial-headline">
              Strategy That Gives<br />
              Brands <span style={{ color: 'var(--text-primary)', fontStyle: 'italic', fontWeight: 500 }}>Direction.</span>
            </h1>
            <p className="hero-editorial-lead">
              Building clarity, distinction, and meaningful connections between enterprise brands and the audiences they serve.
            </p>
            <div className="hero-editorial-actions">
              <a href="#capabilities" className="btn-hero-dark-pill" title="Explore Consulting Capabilities">
                <span>EXPLORE DISCIPLINES</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
              <Link to="/contact" className="btn-hero-outline-pill" title="Schedule Strategic Advisory">
                <span>SCHEDULE ADVISORY</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="hero-editorial-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Philosophy */}
      <section className="section-padding bg-surface" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header-editorial" style={{ marginBottom: 0 }}>
            <div>
              <div className="editorial-kicker">
                <span className="kicker-line"></span>
                <span>ADVISORY PHILOSOPHY</span>
              </div>
              <h2>Clarity Precedes Creative Execution.</h2>
            </div>
            <p className="section-header-lead">
              Sustainable commercial distinction begins with honest self-examination: understanding precisely who your brand is, the exact problem it solves, and why customers should care. Without strategic clarity, marketing spend is merely overhead. With it, every touchpoint builds compounding enterprise equity.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Grouping */}
      <section className="section-padding bg-canvas" id="capabilities">
        <div className="container">
          {servicePillars.map((pillar, idx) => (
            <div key={idx} style={{ marginBottom: idx < servicePillars.length - 1 ? '64px' : '0' }}>
              <div style={{ marginBottom: '24px', borderBottom: '2px solid var(--text-primary)', paddingBottom: '14px' }}>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--accent-bronze)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  {pillar.pillarSubtitle}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', margin: 0, color: 'var(--text-primary)' }}>
                  {pillar.pillarTitle}
                </h3>
              </div>

              <div className="services-list-editorial">
                {pillar.services.map((service) => (
                  <div key={service.num} className="service-row-item">
                    <span className="service-num">{service.num}</span>
                    <div>
                      <h4 className="service-name-title" style={{ margin: 0 }}>{service.title}</h4>
                      <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-bronze)', marginTop: '4px' }} dangerouslySetInnerHTML={{ __html: service.subtitle }} />
                    </div>
                    <p className="service-desc-text">{service.desc}</p>
                    <Link to={service.link} className="service-action-link">
                      <span>{service.btnText}</span> <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Engagement CTA */}
      <section className="section-padding bg-surface" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <div className="editorial-kicker" style={{ justifyContent: 'center' }}>
            <span className="kicker-line"></span>
            <span>BESPOKE SCOPE</span>
          </div>
          <h2>Need a Tailored Strategy or Creative Direction?</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Every brand faces distinct commercial challenges. Let us examine your market landscape and structure an engagement scope aligned with your commercial targets.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <span>Schedule Initial Consultation</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
