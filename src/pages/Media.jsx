import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import PageHero from '../components/PageHero';
import Reveal from '../motion/Reveal';

const PRESS = [
  {
    publication: 'The Hindu',
    title: 'Directorial Acumen & Cinematic Vision',
    desc: 'National newspaper coverage highlighting Soheal Vaseem’s approach to visual storytelling, brand narratives and production leadership.',
    thumb: '/images/resource/Hindu.jpg',
    type: 'National Daily',
    featured: true
  },
  {
    publication: 'Deccan Chronicle',
    title: 'Television Series & Ad Direction Spotlight',
    desc: 'An in-depth feature examining directorial execution across television drama serials and nationwide campaigns.',
    thumb: '/images/resource/chronicle.jpg',
    type: 'Print Feature'
  },
  {
    publication: 'Deccan Chronicle',
    title: 'Creative Excellence in Modern Commercials',
    desc: 'Reporting on storytelling craft and leadership on high-profile corporate commercial film sets.',
    thumb: '/images/resource/chronicleone.jpg',
    type: 'Commercial Spotlight'
  },
  {
    publication: 'Eenadu',
    title: 'Director Soheal Vaseem’s Creative Milestone',
    desc: 'Extensive regional daily coverage of artistic storytelling contributions and commercial campaign success.',
    thumb: '/images/resource/eenadu.jpg',
    type: 'Regional Leader'
  },
  {
    publication: 'Andhra Jyothi',
    title: 'Artistic Journey Behind The Camera',
    desc: 'A feature examining the making of high-concept television commercials and on-set directorial discipline.',
    thumb: '/images/resource/andhrajyothi.jpg',
    type: 'Cultural Daily'
  },
  {
    publication: 'The Siasat Daily',
    title: 'Acclaimed Filmmaker & Directorial Craft',
    desc: 'Prominent coverage spotlighting national advertising campaigns and cultural storytelling.',
    thumb: '/images/resource/siasatone.jpg',
    type: 'National Daily'
  },
  {
    publication: 'The Siasat Daily',
    title: 'Media & Television Directorial Triumph',
    desc: 'Special press reporting on prime-time television direction and successful brand inception initiatives.',
    thumb: '/images/resource/siasattwo.jpg',
    type: 'Press Profile'
  },
  {
    publication: 'Vaartha',
    title: 'Milestone Commercial Achievements',
    desc: 'Daily news profile tracing the evolution from creative director to strategic brand builder.',
    thumb: '/images/resource/vaarta.jpg',
    type: 'Print Feature'
  }
];

export default function Media() {
  const [activeZoom, setActiveZoom] = useState(null);
  const closeRef = useRef(null);
  const featured = PRESS[0];
  const rest = PRESS.slice(1);

  /* Escape closes the clipping; the page behind stops scrolling while open. */
  useEffect(() => {
    if (!activeZoom) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveZoom(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeZoom]);

  return (
    <>
      <PageHero
        crumb="Insights"
        title={(
          <>
            The Work<br />
            <em className="rl-script">Starts</em> With<br />
            The Thinking
          </>
        )}
        lead="Ideas and observations on branding, creativity, communication and the changing business landscape — documented in the national press."
        meta={[`${PRESS.length} press features`, 'National & regional', '1991 — Today']}
      />

      {/* ---------------- FEATURED ---------------- */}
      <section className="rl-section">
        <div className="rl-container">
          <div className="rl-head">
            <div>
              <span className="rl-eyebrow">Press archive</span>
              <h2 className="rl-h2">Three decades<br />of documented <em className="rl-script">craft</em></h2>
            </div>
            <p className="rl-head-lead">
              A verified archive of newspaper features tracking directorial milestones, commercial storytelling and brand leadership across Indian media.
            </p>
          </div>

          <Reveal direction="up">
            <div className="rl-feature-press">
              <div className="rl-feature-press-media">
                <img src={featured.thumb} alt={`${featured.publication} — ${featured.title}`} loading="eager" />
              </div>
              <div className="rl-feature-press-body">
                <span className="rl-eyebrow">{featured.publication} · {featured.type}</span>
                <h3>{featured.title}</h3>
                <p>{featured.desc}</p>
                <button
                  type="button"
                  className="rl-pill rl-pill-dark"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => setActiveZoom(featured)}
                >
                  Read the feature <span className="rl-pill-arrow">→</span>
                </button>
              </div>
            </div>
          </Reveal>

          <div className="rl-press-grid">
            {rest.map((press, i) => (
              <Reveal key={`${press.publication}-${press.title}`} direction="up" delay={(i % 3) * 0.08}>
                <article className="rl-press-card">
                  <div className="rl-press-media">
                    <img src={press.thumb} alt={`${press.publication} — ${press.title}`} loading="lazy" />
                  </div>
                  <div className="rl-press-body">
                    <span className="rl-press-source">{press.publication} · {press.type}</span>
                    <h3>{press.title}</h3>
                    <p>{press.desc}</p>
                    <button type="button" onClick={() => setActiveZoom(press)}>
                      Inspect clipping <span>→</span>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="rl-cta rl-cta--dark">
        <div className="rl-container rl-cta-inner">
          <h2 className="rl-cta-title">
            Media, speaking<br />&amp; <em className="rl-script">commentary</em>.
          </h2>
          <div className="rl-cta-actions">
            <Link to="/contact" className="rl-pill rl-pill-light">
              Start a dialogue <span className="rl-pill-arrow">→</span>
            </Link>
            <p className="rl-cta-note">Press, panels and brand commentary</p>
          </div>
        </div>
      </section>

      {/* ---------------- LIGHTBOX ---------------- */}
      <AnimatePresence>
        {activeZoom && (
          <motion.div
            className="rl-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveZoom(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeZoom.publication} clipping`}
          >
            <motion.div
              className="rl-lightbox-inner"
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="rl-lightbox-close"
                ref={closeRef}
                onClick={() => setActiveZoom(null)}
              >
                Close ✕
              </button>
              <img src={activeZoom.thumb} alt={`${activeZoom.publication} — ${activeZoom.title}`} />
              <div className="rl-lightbox-cap">{activeZoom.publication} — {activeZoom.title}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
