import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

/**
 * NotFound — served for any unmatched route.
 *
 * Previously every unknown URL silently rendered the Home page, which hid broken
 * links instead of surfacing them. This route shows the visitor where they
 * landed and hands them the real sections of the site.
 */
const SECTIONS = [
  { to: '/portfolio', label: 'Projects', note: 'Selected brand and business work' },
  { to: '/services', label: 'Services', note: 'Strategy, identity, digital and film' },
  { to: '/filmmaking', label: 'Filmmaking', note: 'Commercials, music videos and on-set work' },
  { to: '/media', label: 'Insights', note: 'Press features and published writing' },
  { to: '/contact', label: 'Contact', note: 'Start a conversation directly' }
];

export default function NotFound() {
  return (
    <>
      <PageHero
        short
        crumb="Page not found"
        title={(
          <>
            This page has<br />
            <em className="rl-script">moved on</em>.
          </>
        )}
        lead="The address you followed does not exist on this site. Nothing is broken on your end — the link simply points somewhere that is no longer here."
        meta={['Error 404', 'Page not found']}
      />

      <section className="rl-section rl-section--light">
        <div className="rl-container">
          <span className="rl-eyebrow">Where to next</span>
          <h2 className="rl-h2">Continue to<br /><em className="rl-script">the right place</em></h2>

          <ul className="rl-404-list">
            {SECTIONS.map((section) => (
              <li key={section.to}>
                <Link to={section.to}>
                  <span className="rl-404-label">{section.label}</span>
                  <span className="rl-404-note">{section.note}</span>
                  <span className="rl-404-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="rl-mt-40">
            <Link to="/" className="rl-pill rl-pill-dark">Back to home <span className="rl-pill-arrow">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
