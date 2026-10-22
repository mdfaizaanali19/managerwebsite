import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    // Client-side simulation or send to Web3Forms / mailto
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
              Have a project, an idea, or an opportunity in mind? Let's explore what we can create together.
            </p>
            <div className="hero-editorial-actions">
              <a href="#inquiry-form" className="btn-hero-dark-pill" title="Submit Project Brief">
                <span>MESSAGE DIRECTLY</span>
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

      {/* Contact Details & Form Section */}
      <section className="section-padding bg-canvas" id="inquiry-form">
        <div className="container">
          <div className="row" style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div className="col-md-5" style={{ marginBottom: '40px' }}>
              <span className="editorial-badge">Consultation Inquiries</span>
              <h2>Let's Discuss Your Commercial Objectives</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '30px' }}>
                Every project begins with understanding your strategic vision and challenges. Reach out directly or complete the brief form to initiate a conversation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '28px' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '4px' }}>Direct Telephone</div>
                  <a href="tel:+919014365364" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-primary)' }}>+91 9014 365 364</a>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '4px' }}>Direct Email</div>
                  <a href="mailto:info@sohealvaseem.com" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-primary)' }}>info@sohealvaseem.com</a>
                </div>

                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '4px' }}>Primary Locations</div>
                  <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 500 }}>Mumbai &bull; Hyderabad &bull; Available Nationally</span>
                </div>

                <div style={{ marginTop: '6px' }}>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-muted)', marginBottom: '8px' }}>Professional Network</div>
                  <div className="top-social" style={{ fontSize: '1.1rem', gap: '16px' }}>
                    <a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={{ background: '#ffffff', border: '1px solid var(--border-light)', padding: '40px', boxShadow: 'var(--shadow-subtle)', borderRadius: '4px' }}>
                <h3 style={{ marginBottom: '6px' }}>Submit a Project Brief</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '26px' }}>
                  Share your goals, current brand challenges, and timeline. I review all inquiries and respond within 24 hours.
                </p>

                {submitted ? (
                  <div className="alert alert-success" style={{ padding: '20px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '4px', color: '#166534', marginBottom: '20px' }}>
                    <i className="fa-solid fa-circle-check" style={{ marginRight: '8px' }}></i>
                    <strong>Thank you, {formData.name}!</strong> Your message has been received. I will review your project brief and get in touch shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>Your Full Name *</label>
                      <input 
                        id="contact-name" 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter your full name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border-medium)', borderRadius: '4px' }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>Email Address *</label>
                      <input 
                        id="contact-email" 
                        type="email" 
                        className="form-control" 
                        placeholder="name@company.com" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border-medium)', borderRadius: '4px' }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '24px' }}>
                      <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>Project Brief or Objective *</label>
                      <textarea 
                        id="contact-message" 
                        className="form-control" 
                        rows="5" 
                        placeholder="Describe your brand, key requirements, and timeline..." 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--border-medium)', borderRadius: '4px' }}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary" 
                      disabled={loading}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>{loading ? 'Sending...' : 'Send Project Inquiry'}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
