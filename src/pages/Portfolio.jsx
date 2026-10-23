import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/projects';
import PageHero from '../components/PageHero';

const ARCHIVE = [
  {
    id: 101,
    title: 'Signature Brand Identity System',
    category: 'archive',
    cat_label: 'Brand Architecture',
    image_path: '/images/portfolio/01.jpg',
    logo_path: '',
    project_url: '',
    description: 'Comprehensive brand architecture, corporate identity manual and stationery system built for coherent multi-touchpoint communication.'
  },
  {
    id: 102,
    title: 'Luxury Packaging & Structural Design',
    category: 'archive',
    cat_label: 'Packaging System',
    image_path: '/images/portfolio/02.jpg',
    logo_path: '',
    project_url: '',
    description: 'Premium retail packaging engineered for standout shelf presence and tactile brand appeal.'
  },
  {
    id: 103,
    title: 'Commercial Advertising Campaign',
    category: 'archive',
    cat_label: 'Campaign Direction',
    image_path: '/images/portfolio/03.jpg',
    logo_path: '',
    project_url: '',
    description: 'Multi-channel campaign roll-out with creative direction across print, outdoor and commercial media.'
  },
  {
    id: 104,
    title: 'Corporate Symbol & Monogram Mark',
    category: 'archive',
    cat_label: 'Logo Design',
    image_path: '/images/portfolio/04.jpg',
    logo_path: '',
    project_url: '',
    description: 'Bespoke typographic mark designed for enduring corporate stature and high digital scalability.'
  },
  {
    id: 105,
    title: 'Theatrical Commercial Key Visual',
    category: 'archive',
    cat_label: 'Key Visual Art',
    image_path: '/images/portfolio/07.jpg',
    logo_path: '',
    project_url: '',
    description: 'Cinematic key art and promotional layout designed for widescreen release and billboard advertising.'
  },
  {
    id: 106,
    title: 'Television Commercial Storyboard Art',
    category: 'archive',
    cat_label: 'Directorial Art',
    image_path: '/images/portfolio/14.jpg',
    logo_path: '',
    project_url: '',
    description: 'Directorial storyboards mapping shot composition, pacing and dramatic beats before filming.'
  }
];

const ALL_ITEMS = [...projects, ...ARCHIVE];

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'hospitality', label: 'Hospitality' },
  { key: 'tech', label: 'Technology' },
  { key: 'fashion', label: 'Fashion' },
  { key: 'realestate', label: 'Real Estate' },
  { key: 'archive', label: 'Brand Architecture' }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const items = filter === 'all' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.category === filter);
  const countFor = (key) => (key === 'all' ? ALL_ITEMS.length : ALL_ITEMS.filter((i) => i.category === key).length);

  return (
    <>
      <PageHero
        crumb="Projects"
        title={(
          <>
            Explore Our<br />
            <em className="rl-script">Projects</em>
          </>
        )}
        lead="A selection of work shaped by strategy, storytelling and purposeful execution — across identity, digital and film."
        meta={[`${ALL_ITEMS.length} case studies`, 'Brand · Digital · Film', 'Since 1991']}
      />

      {/* ---------------- WORK GRID ---------------- */}
      <section className="rl-section">
        <div className="rl-container">
          <div className="rl-filter-bar" role="tablist" aria-label="Project categories">
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

          <motion.div layout className="rl-grid">
            <AnimatePresence mode="popLayout">
              {items.map((item) => {
                /* When the only artwork on file is the brand mark itself, the
                   card shows it contained on a plate rather than cropping it. */
                const isLogoPlate = Boolean(item.logo_path) && item.image_path === item.logo_path;

                return (
                  <motion.article
                    key={item.id}
                    layout
                    className={`rl-grid-card ${isLogoPlate ? 'is-logo-plate' : ''}`}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="rl-grid-media">
                      <img src={item.image_path} alt={item.title} loading="lazy" />
                      {!isLogoPlate && item.logo_path && (
                        <span className="rl-grid-logo" title={`${item.title} identity`}>
                          <img src={item.logo_path} alt={`${item.title} logo`} loading="lazy" />
                        </span>
                      )}
                    </div>

                    <div className="rl-grid-body">
                      <span className="rl-grid-cat">{item.cat_label}</span>
                      <h3 className="rl-grid-title">{item.title}</h3>
                      <p className="rl-grid-desc">{item.description}</p>
                      <div className="rl-grid-foot">
                        <span>{item.category === 'archive' ? 'Studio archive' : 'Client project'}</span>
                        {item.project_url && item.project_url !== '#' ? (
                          <a href={item.project_url} target="_blank" rel="noopener noreferrer">
                            View project <span>↗</span>
                          </a>
                        ) : (
                          <Link to="/contact">
                            Enquire <span>→</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="rl-cta rl-cta--dark">
        <div className="rl-container rl-cta-inner">
          <h2 className="rl-cta-title">
            Have an ambitious<br />project in <em className="rl-script">mind</em>?
          </h2>
          <div className="rl-cta-actions">
            <Link to="/contact" className="rl-pill rl-pill-light">
              Discuss your project <span className="rl-pill-arrow">→</span>
            </Link>
            <p className="rl-cta-note">From identity systems to full market launches</p>
          </div>
        </div>
      </section>
    </>
  );
}
