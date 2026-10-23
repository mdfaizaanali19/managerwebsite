import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import PageHero from '../components/PageHero';
import Reveal from '../motion/Reveal';
import AnimatedCounter from '../motion/AnimatedCounter';

const SHOWREEL = 'O0AT4TKrUSY';
const SHOWREEL_TIER = 1;

const STATS = [
  { value: 150, suffix: '+', label: 'Commercial films directed for nationwide broadcast' },
  { value: 30, suffix: '+', label: 'Years of directorial craft on set and soundstage' },
  { text: 'Prime-Time', label: 'Television drama series directed and broadcast' },
  { text: 'National', label: 'Press recognition across leading Indian dailies' }
];

const FILMS = [
  {
    id: 'qg8MG9mtJhc',
    title: 'Saani Napkin TVC',
    client: 'Saani Tissues',
    category: 'commercial',
    year: 2019,
    desc: 'Swachh Bharat campaign film — “pehle swachh ho aap, phir swachh hoga Bharat.”'
  },
  {
    id: 'u50Alx52nKk',
    title: 'Saani Facial Tissues',
    client: 'Saani Tissues',
    category: 'commercial',
    year: 2020,
    thumb: 2,
    desc: 'Premium facial tissue film shot at Hyderabad Polo & Riding Club.'
  },
  {
    id: 'WpT15Phb4_c',
    title: 'Saani Napkin',
    client: 'Saani Tissues',
    category: 'commercial',
    year: 2020,
    desc: '“Aadat badal lo” — the line carried across the Saani tissue campaign.'
  },
  {
    id: '3bpEK3TYrzs',
    title: 'Saani Napkin — Short Cut',
    client: 'Saani Tissues',
    category: 'commercial',
    year: 2023,
    thumb: 1,
    desc: 'Short-form edit of the napkin film built for social platforms.'
  },
  {
    id: 'oTBjrKt43ok',
    title: '60 Sec — Fashion Dock',
    client: 'Fashion Dock',
    category: 'commercial',
    year: 2018,
    desc: 'Premium casual wear TVC. Music direction by Srikanth.'
  },
  {
    id: 'jmmrfxQ0Aw0',
    title: 'Pratham Shampoo',
    client: 'Pratham',
    category: 'commercial',
    year: 2017,
    thumb: 2,
    desc: 'National FMCG commercial for the Pratham haircare range.'
  },
  {
    id: 'w3k-AAkTsIk',
    title: 'Pratham Ayurveda Soap',
    client: 'Pratham',
    category: 'commercial',
    year: 2017,
    thumb: 2,
    desc: 'Ayurvedic soap film from the same Pratham campaign.'
  },
  {
    id: '3wMwHgozVyo',
    title: 'Khwahishen — Music Video',
    client: 'Media Wagon Productions',
    category: 'music',
    year: 2020,
    desc: 'Four artists, four cities, one lockdown. Released Eid 2020.'
  },
  {
    id: 'omwesSaPTdw',
    title: 'Khwahishein — Album Promo',
    client: 'Media Wagon Productions',
    category: 'music',
    year: 2020,
    thumb: 2,
    desc: 'Launch promo cut ahead of the Eid release.'
  },
  {
    id: 'NkxcvTfACoA',
    title: 'Song Shoot — On Location',
    client: 'Production diary',
    category: 'onset',
    year: 2017,
    desc: 'Location work for a song sequence, shot on the move.'
  },
  {
    id: 'KcD9HfhAsHQ',
    title: 'Song Shoot — Second Unit',
    client: 'Production diary',
    category: 'onset',
    year: 2017,
    desc: 'Additional location footage from the same schedule.'
  },
  {
    id: 'EB5-2UVLo7Q',
    title: 'On Location',
    client: 'Camera test',
    category: 'onset',
    year: 2017,
    desc: 'Shot on Canon 5D Mark II during a location recce.'
  },
  {
    id: 'ZPZCeQ8RbxM',
    title: 'Iftaar at Thumbay Hospital',
    client: 'Thumbay Hospital',
    category: 'brand',
    year: 2019,
    desc: 'Community film with Shehbaaz Khan, visiting patients at Chaderghat.'
  },
  {
    id: 'jATMusCcEP4',
    title: 'Media Wagon — Channel Film',
    client: 'Media Wagon',
    category: 'brand',
    year: 2019,
    desc: 'Studio identity film for the production house.'
  }
];

const FILTERS = [
  { key: 'all', label: 'All Work' },
  { key: 'commercial', label: 'Commercials' },
  { key: 'music', label: 'Music' },
  { key: 'onset', label: 'On Set' },
  { key: 'brand', label: 'Brand & Events' }
];

/* YouTube poster sizes, sharpest first. Older uploads do not all have every
   size, so each film records the best tier that actually exists for it —
   that way no card wastes a request on a 404. */
const THUMB_TIERS = ['maxresdefault', 'sddefault', 'hqdefault'];

const thumbnail = (id, tier = 0) => `https://i.ytimg.com/vi/${id}/${THUMB_TIERS[tier]}.jpg`;

const handleThumbError = (e, id) => {
  const img = e.currentTarget;
  const next = Number(img.dataset.tier || 0) + 1;
  if (next >= THUMB_TIERS.length) return;
  img.dataset.tier = String(next);
  img.src = thumbnail(id, next);
};

export default function Filmmaking() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState('all');
  const closeRef = useRef(null);

  const activeFilm = activeVideo ? FILMS.find((f) => f.id === activeVideo) : null;

  /* Escape closes the player; the page behind it stops scrolling while open. */
  useEffect(() => {
    if (!activeVideo) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  const items = filter === 'all' ? FILMS : FILMS.filter((f) => f.category === filter);
  const countFor = (key) => (key === 'all' ? FILMS.length : FILMS.filter((f) => f.category === key).length);

  return (
    <>
      <PageHero
        crumb="Filmmaking"
        title={(
          <>
            Stories Beyond<br />
            the <em className="rl-script">Frame</em>
          </>
        )}
        lead="Commercials, music videos and brand films — directed with a strategist's eye and a filmmaker's craft."
        meta={['Commercial direction', '30+ years', '4K production']}
      />

      {/* ---------------- NUMBERS ---------------- */}
      <section className="rl-band-top rl-section--light">
        <div className="rl-container">
          <div className="rl-stats">
            {STATS.map((s) => (
              <div className="rl-stat" key={s.label}>
                <span className="rl-stat-num">
                  {s.value ? <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.2} /> : s.text}
                </span>
                <span className="rl-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SHOWREEL ---------------- */}
      <section className="rl-section">
        <div className="rl-container">
          <div className="rl-head">
            <div>
              <span className="rl-eyebrow">Showreel</span>
              <h2 className="rl-h2">The directorial<br /><em className="rl-script">reel</em>, in 4K</h2>
            </div>
            <p className="rl-head-lead">
              A curated sequence of television commercials, brand monographs and broadcast narratives.
            </p>
          </div>

          <Reveal direction="up">
            <div className="rl-reel">
              <img
                src={thumbnail(SHOWREEL, SHOWREEL_TIER)}
                data-tier={SHOWREEL_TIER}
                alt="Soheal Vaseem directorial showreel"
                onError={(e) => handleThumbError(e, SHOWREEL)}
              />
              <button
                type="button"
                className="rl-reel-play"
                onClick={() => setActiveVideo(SHOWREEL)}
                aria-label="Play the directorial showreel"
              >
                <span className="rl-reel-btn" aria-hidden="true">▶</span>
              </button>
              <div className="rl-reel-meta">
                <span>Commercial Direction</span>
                <span>Cinema · TVCs · Brand Narratives</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- ARCHIVE ---------------- */}
      <section className="rl-section rl-section--light">
        <div className="rl-container">
          <div className="rl-head">
            <div>
              <span className="rl-eyebrow">Film archive</span>
              <h2 className="rl-h2">Commercials,<br />music &amp; <em className="rl-script">craft</em></h2>
            </div>
            <p className="rl-head-lead">
              Ad films, music videos and on-set work directed across the last three decades.
            </p>
          </div>

          <div className="rl-filter-bar" role="tablist" aria-label="Film categories">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={filter === f.key}
                className={`rl-filter-btn ${filter === f.key ? 'is-active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label} ({String(countFor(f.key)).padStart(2, '0')})
              </button>
            ))}
          </div>

          <motion.div layout className="rl-film-grid">
            <AnimatePresence mode="popLayout">
              {items.map((f) => (
                <motion.article
                  key={f.id}
                  layout
                  className="rl-film-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    className="rl-film-thumb"
                    onClick={() => setActiveVideo(f.id)}
                    aria-label={`Play ${f.title}`}
                  >
                    <img
                      src={thumbnail(f.id, f.thumb || 0)}
                      data-tier={f.thumb || 0}
                      alt={f.title}
                      loading="lazy"
                      onError={(e) => handleThumbError(e, f.id)}
                    />
                    <span className="rl-film-year">{f.year}</span>
                    <span className="rl-film-play" aria-hidden="true">▶</span>
                  </button>

                  <div className="rl-film-body">
                    <span className="rl-film-client">{f.client}</span>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="rl-cta rl-cta--dark">
        <div className="rl-container rl-cta-inner">
          <h2 className="rl-cta-title">
            Bring your story<br />to the <em className="rl-script">screen</em>.
          </h2>
          <div className="rl-cta-actions">
            <Link to="/contact" className="rl-pill rl-pill-light">
              Discuss production <span className="rl-pill-arrow">→</span>
            </Link>
            <p className="rl-cta-note">TVCs · Brand films · Music videos</p>
          </div>
        </div>
      </section>

      {/* ---------------- VIDEO MODAL ---------------- */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="rl-video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveVideo(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeFilm ? `Playing ${activeFilm.title}` : 'Film player'}
          >
            <motion.div
              className="rl-video-modal-inner"
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="rl-video-modal-close"
                ref={closeRef}
                onClick={() => setActiveVideo(null)}
              >
                Close ✕
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title={activeFilm ? `${activeFilm.title} — Soheal Vaseem` : 'Soheal Vaseem film'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
