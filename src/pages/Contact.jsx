import { useState } from 'react';
import PageHero from '../components/PageHero';
import Faq from '../components/Faq';
import Reveal from '../motion/Reveal';
import { services, serviceTitleById } from '../data/services';

const FAQ = [
  {
    q: 'How quickly will I hear back?',
    a: 'Every enquiry is reviewed personally and answered within 24 hours on business days. If the brief is a fit, the next step is a 30-minute call to understand the business before any proposal is written.'
  },
  {
    q: 'What should I include in the brief?',
    a: 'The business, the market it operates in, what has already been tried, and the outcome you want. Timelines and budget range help scope the engagement accurately.'
  },
  {
    q: 'Do you take on early-stage businesses?',
    a: 'Yes — when the ambition is clear. Early-stage brands often get the most value from a focused positioning sprint before investing in identity or campaigns.'
  }
];

/**
 * Delivery channel for project briefs.
 *
 * The brief is composed into a WhatsApp message and the visitor is taken
 * straight to the chat (wa.me) with every field already written out. There is
 * no server round-trip, so nothing is silently lost — the visitor just presses
 * send in WhatsApp.
 */
const CONTACT_WHATSAPP = '919014365364';
const CONTACT_PHONE_DISPLAY = '+91 9014 365 364';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBrief(values) {
  const found = {};
  if (!values.name.trim()) found.name = 'Please enter your name.';
  if (!values.email.trim()) found.email = 'Please enter your email address.';
  else if (!EMAIL_PATTERN.test(values.email.trim())) found.email = 'That email address looks incomplete.';
  if (!values.message.trim()) found.message = 'Please add a short project brief.';
  else if (values.message.trim().length < 20) found.message = 'A sentence or two more — at least 20 characters.';
  return found;
}

function buildWhatsApp(brief) {
  const body = [
    'New project brief',
    '',
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Telephone: ${brief.phone || '—'}`,
    `Service: ${brief.service}`,
    '',
    'Brief:',
    brief.message
  ].join('\n');
  return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(body)}`;
}

/**
 * Opens the composed chat in a new tab. Falls back to the current tab when a
 * popup blocker swallows the window.
 */
function openWhatsApp(url) {
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  if (!opened) window.location.href = url;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', company: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [chatUrl, setChatUrl] = useState('');

  const loading = status === 'sending';
  const done = status === 'sent';

  const update = (key) => (e) => {
    const { value } = e.target;
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const found = validateBrief(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('error');
      setErrorMsg('Please check the highlighted fields and try again.');
      return;
    }

    // Honeypot: real visitors never fill a field they cannot see.
    if (form.company) return;

    setStatus('sending');
    setErrorMsg('');

    const brief = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service: form.service ? serviceTitleById(form.service) : 'Not specified',
      message: form.message.trim()
    };

    try {
      const url = buildWhatsApp(brief);
      setChatUrl(url);
      setSubmittedName(brief.name.split(' ')[0]);
      setStatus('sent');
      openWhatsApp(url);
    } catch {
      setStatus('error');
      setErrorMsg('WhatsApp could not be opened automatically. Please message +91 9014 365 364 directly.');
    }
  };

  return (
    <>
      <PageHero
        crumb="Contact"
        title={(
          <>
            Build a Brand.<br />
            Win the <em className="rl-script">Market</em>.
          </>
        )}
        lead="Have a project, an idea, or an opportunity in mind? Let's explore what we can create together."
        meta={['Response within 24 hours', 'Mumbai · Hyderabad', 'Working nationally']}
      />

      {/* ---------------- CONTACT ---------------- */}
      <section className="rl-section">
        <div className="rl-container rl-contact-grid">
          <Reveal direction="up">
            <div>
              <span className="rl-eyebrow">Direct engagement</span>
              <h2 className="rl-h2">Let's discuss your<br />commercial <em className="rl-script">objectives</em></h2>
              <p className="rl-head-lead" style={{ justifySelf: 'start', marginTop: '24px' }}>
                Every project begins with understanding the strategic vision and the challenge behind it. Reach out directly, or send a brief and I will respond personally.
              </p>

              <dl className="rl-contact-block">
                <div className="rl-contact-row">
                  <dt>Telephone</dt>
                  <dd><a href="tel:+919014365364">+91 9014 365 364</a></dd>
                </div>
                <div className="rl-contact-row">
                  <dt>Email</dt>
                  <dd><a href="mailto:info@sohealvaseem.com">info@sohealvaseem.com</a></dd>
                </div>
                <div className="rl-contact-row">
                  <dt>Based in</dt>
                  <dd>Mumbai &amp; Hyderabad, India</dd>
                </div>
                <div className="rl-contact-row">
                  <dt>Availability</dt>
                  <dd>Monday – Saturday · 10:00 – 19:00 IST</dd>
                </div>
                <div className="rl-contact-row">
                  <dt>Follow</dt>
                  <dd>
                    <div className="rl-contact-socials">
                      <a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      <a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer">YouTube</a>
                      <a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.12}>
            <div className="rl-form-panel">
              {done ? (
                <div className="rl-form-success" role="status">
                  <strong>Thank you, {submittedName}.</strong>
                  Your brief is waiting in WhatsApp — just press send. If the chat did not open,{' '}
                  <a href={chatUrl} target="_blank" rel="noopener noreferrer">open WhatsApp again</a>{' '}
                  or message {CONTACT_PHONE_DISPLAY} directly.
                </div>
              ) : (
                <>
                  <h3>Submit a project brief</h3>
                  <p>Share your goals, the brand challenge and the timeline. All enquiries are read personally.</p>

                  <form className="rl-form" onSubmit={handleSubmit} noValidate>
                    <div className="rl-honeypot" aria-hidden="true">
                      <label htmlFor="cf-company">Company</label>
                      <input
                        id="cf-company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={form.company}
                        onChange={update('company')}
                      />
                    </div>

                    <div className="rl-field">
                      <label htmlFor="cf-name">Full name *</label>
                      <input
                        id="cf-name"
                        type="text"
                        required
                        className={errors.name ? 'is-invalid' : undefined}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? 'cf-name-error' : undefined}
                        placeholder="Your name"
                        value={form.name}
                        onChange={update('name')}
                      />
                      {errors.name && <span className="rl-field-error" id="cf-name-error">{errors.name}</span>}
                    </div>

                    <div className="rl-field">
                      <label htmlFor="cf-email">Email address *</label>
                      <input
                        id="cf-email"
                        type="email"
                        required
                        className={errors.email ? 'is-invalid' : undefined}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? 'cf-email-error' : undefined}
                        placeholder="name@company.com"
                        value={form.email}
                        onChange={update('email')}
                      />
                      {errors.email && <span className="rl-field-error" id="cf-email-error">{errors.email}</span>}
                    </div>

                    <div className="rl-field">
                      <label htmlFor="cf-phone">Telephone</label>
                      <input
                        id="cf-phone"
                        type="tel"
                        placeholder="+91"
                        value={form.phone}
                        onChange={update('phone')}
                      />
                    </div>

                    <div className="rl-field">
                      <label htmlFor="cf-service">What do you need?</label>
                      <select id="cf-service" value={form.service} onChange={update('service')}>
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>{service.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="rl-field">
                      <label htmlFor="cf-message">Project brief *</label>
                      <textarea
                        id="cf-message"
                        rows="4"
                        required
                        className={errors.message ? 'is-invalid' : undefined}
                        aria-invalid={errors.message ? true : undefined}
                        aria-describedby={errors.message ? 'cf-message-error' : undefined}
                        placeholder="Describe the business, the challenge and the timeline…"
                        value={form.message}
                        onChange={update('message')}
                      />
                      {errors.message && <span className="rl-field-error" id="cf-message-error">{errors.message}</span>}
                    </div>

                    {status === 'error' && errorMsg && (
                      <p className="rl-form-error" role="alert">{errorMsg}</p>
                    )}

                    <div className="rl-form-submit">
                      <button type="submit" className="rl-pill rl-pill-dark" disabled={loading}>
                        {loading ? 'Sending…' : 'Send inquiry'} <span className="rl-pill-arrow">→</span>
                      </button>
                      <p className="rl-form-note">
                        Your details open in WhatsApp, ready to send.<br />
                        Or email <a href="mailto:info@sohealvaseem.com">info@sohealvaseem.com</a>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="rl-section rl-section--light">
        <div className="rl-container rl-two-col">
          <div>
            <span className="rl-eyebrow">Before we speak</span>
            <h2 className="rl-h2">Common<br /><em className="rl-script">questions</em></h2>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  );
}
