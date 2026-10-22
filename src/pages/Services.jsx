import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      num: '01',
      title: 'Advertising and Performance Marketing',
      subtitle: 'Campaign Direction • Media Strategy',
      desc: 'Formulating synchronized cross-channel advertising campaigns, targeted media planning, and creative direction across broadcast, digital, and outdoor formats to engage qualified customers and maximize return on marketing investment.',
      link: '/contact?service=advertising',
      btnText: 'Enquire Service'
    },
    {
      num: '02',
      title: 'Branding and Graphic Design',
      subtitle: 'Identity Systems • Visual Architecture',
      desc: 'Architecting memorable corporate marks, cohesive typographic systems, brand guidelines, packaging structural design, and corporate stationery that establish premium market positioning and consumer resonance.',
      link: '/contact?service=branding',
      btnText: 'Explore Branding'
    },
    {
      num: '03',
      title: 'Website Design and Development',
      subtitle: 'UI/UX Architecture • Web Platforms',
      desc: 'Crafting elegant, mobile-responsive, and high-performance digital web experiences. Engineered with intuitive information architecture, fast load times, and structured customer pathways that convert traffic into business conversations.',
      link: '/contact?service=web',
      btnText: 'Enquire Service'
    },
    {
      num: '04',
      title: 'Digital Marketing and Social Media Marketing',
      subtitle: 'Audience Engagement • Channel Growth',
      desc: 'Formulating content narratives, social platform strategies, organic community engagement, and digital activations that build enduring brand authority across key stakeholder touchpoints.',
      link: '/contact?service=digital',
      btnText: 'Enquire Service'
    },
    {
      num: '05',
      title: 'Search Engine Optimization (SEO)',
      subtitle: 'Search Visibility • Content Discovery',
      desc: 'Optimizing technical website architecture, metadata structures, and search intent alignment to build organic search authority, ensuring prospective clients discover your services naturally over time.',
      link: '/contact?service=seo',
      btnText: 'Enquire Service'
    },
    {
      num: '06',
      title: 'Filmmaking and Creative Production',
      subtitle: 'Commercial Direction • Brand Films',
      desc: 'Bringing cinematic craftsmanship and directorial discipline to television commercials (TVCs), corporate documentaries, product narrative films, and brand visual assets with 4K cinematography and precision sound design.',
      link: '/filmmaking',
      btnText: 'Explore Film Portfolio'
    },
    {
      num: '07',
      title: 'Events and Consulting',
      subtitle: 'Turnkey Advisory • Brand Inception',
      desc: 'Providing senior executive advisory for new business launches, turnkey brand setups, corporate event visual direction, and strategic feasibility consulting for enterprise leadership teams.',
      link: '/contact?service=advisory',
      btnText: 'Explore Advisory'
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
            <div className="hero-editorial-badge">
              <span className="dash"></span>
              <span>STRATEGIC DISCIPLINES &bull; CONSULTING</span>
            </div>
            <h1 className="hero-editorial-headline">
              Strategy That Gives<br />
              Brands <span className="hero-italic-gold">Direction.</span>
            </h1>
            <p className="hero-editorial-lead">
              Building clarity, distinction, and meaningful connections between brands and the people they serve.
            </p>
            <div className="hero-editorial-actions">
              <a href="#capabilities" className="btn-hero-dark-pill" title="Explore Consulting Capabilities">
                <span>EXPLORE SERVICES</span>
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
              <span className="editorial-badge">Advisory Philosophy</span>
              <h2>Clarity Precedes Creative Execution.</h2>
            </div>
            <p className="section-header-lead">
              Sustainable commercial distinction begins with honest self-examination: understanding precisely who your brand is, the exact problem it solves, and why customers should care. Without strategic clarity, marketing spend is merely overhead. With it, every touchpoint builds compounding enterprise equity.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Exact Capabilities Detailed */}
      <section className="section-padding bg-canvas" id="capabilities">
        <div className="container">
          <div className="services-list-editorial">
            {servicesList.map((service) => (
              <div key={service.num} className="service-row-item">
                <span className="service-num">{service.num}</span>
                <div>
                  <h3 className="service-name-title">{service.title}</h3>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-bronze)', marginTop: '4px' }}>
                    {service.subtitle}
                  </div>
                </div>
                <p className="service-desc-text">{service.desc}</p>
                <Link to={service.link} className="service-action-link">
                  <span>{service.btnText}</span> <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Engagement CTA */}
      <section className="section-padding bg-surface" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span className="editorial-badge" style={{ justifyContent: 'center' }}>Bespoke Scope</span>
          <h2>Need a Tailored Strategy or Creative Solution?</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Every brand faces distinct challenges. Let us examine your market landscape and structure an engagement plan aligned with your commercial targets.
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
