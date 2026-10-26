import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import HeroCanvas from './HeroCanvas';

/**
 * PageHero — inner-page banner matching the reference site:
 * animated ink backdrop, giant gradient headline, lead + meta rail.
 *
 * Every route renders this at exactly one viewport tall, the same fold as the
 * home hero — there is no shorter variant, so the banner never changes height
 * as the visitor moves between pages.
 */
export default function PageHero({ title, lead, meta = [], crumb = 'Page' }) {
  return (
    <section className="rl-page-hero">
      <HeroCanvas />
      <div className="rl-page-hero-shade" aria-hidden="true" />

      <div className="rl-page-hero-inner">
        <motion.div
          className="rl-page-hero-crumbs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <span>{crumb}</span>
        </motion.div>

        <motion.h1
          className="rl-page-hero-title"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="rl-page-hero-foot"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {lead && <p className="rl-page-hero-lead">{lead}</p>}
          {meta.length > 0 && (
            <div className="rl-page-hero-meta">
              {meta.map((m) => <span key={m}>{m}</span>)}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
