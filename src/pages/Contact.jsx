import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || searchParams.get('type') || '';

  const serviceOptions = [
    { id: 'branding', label: 'Brand Architecture' },
    { id: 'film', label: 'Commercial Film & TVCs' },
    { id: 'advertising', label: 'Advertising & Marketing' },
    { id: 'web', label: 'Web & Digital Platforms' },
    { id: 'advisory', label: 'Turnkey Advisory' }
  ];

  const getInitialService = () => {
    if (serviceParam.includes('brand')) return 'Brand Architecture';
    if (serviceParam.includes('film')) return 'Commercial Film & TVCs';
    if (serviceParam.includes('adver')) return 'Advertising & Marketing';
    if (serviceParam.includes('web')) return 'Web & Digital Platforms';
    if (serviceParam.includes('advis') || serviceParam.includes('press')) return 'Turnkey Advisory';
    return 'Brand Architecture';
  };

  const [selectedService, setSelectedService] = useState(getInitialService());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setSelectedService(getInitialService());
    }
  }, [serviceParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      {/* ===================================================================
           CONTACT HERO BANNER
           =================================================================== */}
      <section className="page-hero-editorial hero-page-contact">
        <div className="hero-editorial-overlay"></div>
        <div className="container">
          <div className="hero-editorial-content">
            <div className="hero-editorial-badge">
              <span className="dash"></span>
              <span>DIRECT ENGAGEMENT &bull; STRATEGIC ADVISORY</span>
            </div>
            <h1 className="hero-editorial-headline">
              Let's Start a <span className="hero-italic-gold">Conversation.</span>
            </h1>
            <p className="hero-editorial-lead">
              Have a project, an idea, or an ambitious market opportunity in mind? Let's explore what we can architect together.
            </p>
            <div className="hero-editorial-actions">
              <a href="#inquiry-form" className="btn-hero-dark-pill" title="Submit Project Brief">
                <span>SUBMIT PROJECT BRIEF</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
              <a href="tel:+919014365364" className="btn-hero-outline-pill" title="Call Direct Office Line">
                <span>+91 9014 365 364</span>
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
            <div className="hero-editorial-breadcrumbs">
              <Link to="/">Home</Link>
              <span className="sep">/</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
           CONTACT DETAILS & FORM SECTION
           =================================================================== */}
      <section className="section-padding bg-canvas" id="inquiry-form">
        <div className="container">
          <div className="contact-editorial-layout">
            
            {/* Left Column: Direct Communication Channels */}
            <div className="contact-channels-wrapper">
              <div style={{ marginBottom: '12px' }}>
                <span className="editorial-badge">Consultation Inquiries</span>
                <h2 style={{ fontSize: 'clamp(1.85rem, 2.6vw, 2.45rem)', margin: '14px 0 10px', lineHeight: 1.25 }}>
                  Let's Discuss Your Commercial Objectives
                </h2>
                <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '28px' }}>
                  Every engagement begins with understanding your strategic vision, competitive landscape, and goals. Connect directly or submit a brief.
                </p>
              </div>

              {/* 1. Direct Phone Card */}
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

              {/* 2. Direct Email Card */}
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

              {/* 3. Studio Locations Card */}
              <div className="contact-channel-card">
                <div className="contact-channel-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-channel-body">
                  <span className="contact-channel-kicker">Primary Studios</span>
                  <div className="contact-channel-val" style={{ fontSize: '1.18rem' }}>Mumbai &bull; Hyderabad</div>
                  <p className="contact-channel-sub">On-site consulting &amp; film production across India &amp; overseas</p>
                </div>
              </div>

              {/* 4. Professional Networks Card */}
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

            {/* Right Column: Premium Inquiry Form */}
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
                        placeholder="Organization or brand name" 
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
