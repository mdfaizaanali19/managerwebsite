import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/filmmaking', label: 'Filmmaking' },
  { to: '/media', label: 'Insights' },
  { to: '/contact', label: 'Contact' }
];

/**
 * Newsletter delivery. Set VITE_NEWSLETTER_ENDPOINT to POST subscriptions to a
 * list provider; until then the subscribe action opens a pre-filled mail so the
 * request is genuinely delivered rather than only appearing to succeed.
 */
const NEWSLETTER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
const CONTACT_EMAIL = 'info@sohealvaseem.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const subscribing = status === 'sending';

  const subscribe = async (e) => {
    e.preventDefault();
    if (subscribing) return;

    const address = email.trim();
    if (!EMAIL_PATTERN.test(address)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      if (NEWSLETTER_ENDPOINT) {
        const response = await fetch(NEWSLETTER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email: address, source: 'footer', subscribedAt: new Date().toISOString() })
        });
        if (!response.ok) throw new Error(`Request failed with ${response.status}`);
        setStatus('done');
        setMessage("You're on the list. Talk soon.");
        setEmail('');
        return;
      }

      const subject = 'Newsletter subscription';
      const body = `Please add this address to the From the desk list:\n\n${address}`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('done');
      setMessage('Your mail app should have opened — confirm the message to complete the subscription.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage(`Subscription failed. Please email ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <footer className="rl-footer">
      <div className="rl-footer-container">
        {/* Newsletter */}
        <div className="rl-footer-news">
          <span className="rl-eyebrow">From the desk</span>
          <h3 className="rl-footer-news-title">
            Occasional notes on brand, strategy &amp; story.
          </h3>
          {status === 'done' ? (
            <p className="rl-footer-news-done" role="status">{message}</p>
          ) : (
            <form className="rl-news-form" onSubmit={subscribe} noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') { setStatus(null); setMessage(''); }
                }}
                placeholder="Your email address"
                aria-label="Email address"
                aria-invalid={status === 'error' ? true : undefined}
                aria-describedby={status === 'error' ? 'news-error' : undefined}
                className={status === 'error' ? 'is-invalid' : undefined}
                required
              />
              <button type="submit" disabled={subscribing}>
                {subscribing ? 'Sending…' : 'Subscribe'}
              </button>
            </form>
          )}
          {status === 'error' && message && (
            <p className="rl-news-error" id="news-error" role="alert">{message}</p>
          )}
        </div>

        {/* Link columns */}
        <div className="rl-footer-grid">
          <div className="rl-footer-col">
            <span className="rl-footer-label">Navigation</span>
            <ul>
              {NAV.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="rl-footer-col">
            <span className="rl-footer-label">Direct contact</span>
            <ul>
              <li><a href="mailto:info@sohealvaseem.com">info@sohealvaseem.com</a></li>
              <li><a href="tel:+919014365364">+91 9014 365 364</a></li>
              <li><a href="https://wa.me/919014365364" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
          </div>

          <div className="rl-footer-col">
            <span className="rl-footer-label">Based in</span>
            <ul>
              <li>Mumbai, India</li>
              <li>Hyderabad, India</li>
              <li>Working Nationally</li>
            </ul>
          </div>

          <div className="rl-footer-col">
            <span className="rl-footer-label">Follow</span>
            <ul>
              <li><a href="https://www.linkedin.com/in/sohealvaseem" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/user/Sohealvaseem" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://www.instagram.com/soheal_vaseem" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com/soheal.vaseem" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <Link to="/" className="rl-footer-wordmark" aria-label="Soheal Vaseem — Home">
          SOHEAL VASEEM
        </Link>

        <div className="rl-footer-bottom">
          <span>&copy; {new Date().getFullYear()} Soheal Vaseem. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
