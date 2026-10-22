import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Brand Strategy & Identity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
    <div className="contact-page">
      {/* ===================================================================
           1. HERO SECTION
           =================================================================== */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div className="kicker">Direct Engagement</div>
            <h1 className="page-hero-title">
              Let's Start a Conversation.<br />
              <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>
                Build Something Enduring.
              </em>
            </h1>
            <p className="page-hero-lead">
              Have an upcoming brand launch, digital platform, or commercial film to direct? Reach out directly to discuss scope, timelines, and strategic alignment.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
           2. CONTACT LAYOUT: INFO + FORM
           =================================================================== */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Left: Contact Info Cards */}
            <div className="contact-info-panel">
              <div className="contact-card-box">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-envelope" style={{ color: 'var(--red)' }}></i>
                </div>
                <div>
                  <div className="contact-box-title">Direct Email</div>
                  <a href="mailto:info@sohealvaseem.com" className="contact-box-value" style={{ color: 'var(--ink)' }}>
                    info@sohealvaseem.com
                  </a>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                    Expect response within 24 business hours
                  </div>
                </div>
              </div>

              <div className="contact-card-box">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-phone" style={{ color: 'var(--ink)' }}></i>
                </div>
                <div>
                  <div className="contact-box-title">Direct Office Line</div>
                  <a href="tel:+919014365364" className="contact-box-value" style={{ color: 'var(--ink)' }}>
                    +91 9014 365 364
                  </a>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                    Available Mon &ndash; Sat, 10:00 AM &ndash; 7:00 PM IST
                  </div>
                </div>
              </div>

              <div className="contact-card-box">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--red)' }}></i>
                </div>
                <div>
                  <div className="contact-box-title">Office Locations</div>
                  <div className="contact-box-value">
                    Mumbai &bull; Hyderabad, India
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                    Consulting client teams across India and overseas
                  </div>
                </div>
              </div>

              <div className="contact-card-box" style={{ background: '#f5fbf7', borderColor: '#d3ebd9' }}>
                <div className="contact-icon-bubble" style={{ background: '#e0f5e7', color: 'var(--wa)' }}>
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '22px' }}></i>
                </div>
                <div>
                  <div className="contact-box-title" style={{ color: '#2b7845' }}>Instant WhatsApp Connect</div>
                  <div className="contact-box-value" style={{ fontSize: '14px', marginBottom: '8px' }}>
                    Fastest way to share initial project brief or schedule a call.
                  </div>
                  <a 
                    href="https://wa.me/919014365364?text=Hi%20Soheal,%20I%20would%20like%20to%20discuss%20a%20brand%20strategy%20or%20film%20project." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sv-btn sv-btn-dark"
                    style={{ height: '34px', fontSize: '12px' }}
                  >
                    <span>Message on WhatsApp</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '10px' }}></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="contact-form-panel">
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Send a Project Brief
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '28px' }}>
                Please share brief details regarding your brand, project timeline, and key requirements.
              </p>

              {submitted ? (
                <div style={{ background: '#edf9f0', border: '1px solid #c2ebd0', borderRadius: 'var(--radius-sm)', padding: '32px', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#d4f2dc', color: '#1f7a37', display: 'grid', placeItems: 'center', fontSize: '24px', margin: '0 auto 16px' }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: '#1a5c2d', marginBottom: '8px' }}>
                    Inquiry Received Successfully
                  </h3>
                  <p style={{ fontSize: '14px', color: '#2c6b3f', lineHeight: '1.6', maxWidth: '440px', margin: '0 auto 20px' }}>
                    Thank you, <strong>{formData.name}</strong>. Soheal Vaseem and the strategic advisory team will review your brief and contact you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="sv-btn sv-btn-dark" style={{ height: '36px', fontSize: '12.5px' }}>
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="form-input" 
                      placeholder="e.g. Rahul Sharma" 
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="form-input" 
                        placeholder="e.g. rahul@company.com" 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="form-input" 
                        placeholder="e.g. +91 98765 43210" 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="form-label">Primary Service of Interest</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange} 
                      className="form-select"
                    >
                      <option value="Brand Strategy & Identity">Brand Strategy &amp; Identity</option>
                      <option value="Commercial Filmmaking (TVCs)">Commercial Filmmaking &amp; TVCs</option>
                      <option value="Advertising Campaigns">Advertising Campaigns</option>
                      <option value="Digital Web Architecture">Digital Web Architecture &amp; E-Commerce</option>
                      <option value="Executive Advisory">Executive Consulting &amp; Feasibility</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Project Scope &amp; Objectives *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      className="form-textarea" 
                      placeholder="Tell us about your brand, what you are looking to build or transform, and your ideal timeline..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="sv-btn sv-btn-dark sv-btn-lg" 
                    style={{ width: '100%' }}
                  >
                    <span>{loading ? 'Submitting Brief...' : 'Submit Consultation Request'}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
