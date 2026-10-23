import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { projects } from '../data/projects';
import HeroCanvas from '../components/HeroCanvas';
import Accordion from '../components/Accordion';
import Reveal from '../motion/Reveal';
import AnimatedCounter from '../motion/AnimatedCounter';
import { featuredServices } from '../data/services';
import ServiceBody from '../components/ServiceBody';

const CLIENTS = [
  'Vintagio', 'FX Recare', 'Morine Bakery', 'BazaarAAO', 'Royale Heritage',
  'Neo Candy', 'Aura ENT', 'AYEN Fashion', 'Witt India', 'Marvels',
  'New Jubilee', 'Dr. Bakshi'
];

/* The home list is a four-service excerpt of the full catalogue, so the rows
   are renumbered here instead of inheriting gaps like (01), (03), (04), (07). */
const SERVICES = featuredServices.map((service, i) => ({
  num: `(${String(i + 1).padStart(2, '0')})`,
  title: service.title,
  body: <ServiceBody service={service} />
}));

export default function Home() {
  const heroRef = useRef(null);
  const railRef = useRef(null);
  const [railIndex, setRailIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-24%']);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const featured = projects.filter(p => p.is_featured === 1).slice(0, 4);

  const scrollRail = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector('.rl-work-card');
    const amount = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  const onRailScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector('.rl-work-card');
    const w = card ? card.getBoundingClientRect().width + 24 : 1;
    setRailIndex(Math.min(featured.length - 1, Math.round(el.scrollLeft / w)));
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="rl-hero" ref={heroRef}>
        <HeroCanvas />
        <div className="rl-hero-banner" aria-hidden="true">
          <img src="/images/resource/parallax1.jpg" alt="" loading="eager" fetchPriority="high" />
        </div>
        <div className="rl-hero-overlay" aria-hidden="true" />

        <div className="rl-hero-inner">
          <motion.h1 className="rl-hero-title" style={{ y: titleY, opacity: fade }}>
            <motion.span
              className="rl-hero-word"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Strategy
            </motion.span>
            <motion.span
              className="rl-hero-word rl-script rl-hero-amp"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              &amp;
            </motion.span>
            <motion.span
              className="rl-hero-word"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Story
            </motion.span>
          </motion.h1>

          <motion.div
            className="rl-hero-bottom"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rl-hero-left">
              <span className="rl-hero-eyebrow">Brand Strategist · Business Advisor · Filmmaker</span>
              <p>
                Thirty years of building brands that lead their markets. I help founders and
                leadership teams turn strategic clarity into market position — through identity,
                story and film that earn attention and hold it.
              </p>
              <div className="rl-hero-actions">
                <Link to="/portfolio" className="rl-pill rl-pill-light">View the work <span className="rl-pill-arrow">→</span></Link>
                <Link to="/contact" className="rl-text-link">Start a conversation <span>→</span></Link>
              </div>
              <span className="rl-hero-copy">&copy; {new Date().getFullYear()} Soheal Vaseem</span>
            </div>
          </motion.div>
        </div>

        <div className="rl-hero-location">Based in: Mumbai &amp; Hyderabad</div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="rl-about">
        <div className="rl-container">
          <span className="rl-eyebrow">What I do</span>
          <Reveal direction="up">
            <p className="rl-statement">
              I help businesses control how they are <em className="rl-script">perceived</em> — the strategy that shapes how customers understand, trust, and ultimately <em className="rl-script">choose</em> the brand.
            </p>
          </Reveal>

          <div className="rl-about-grid">
            <div className="rl-about-visual">
              <img src="/images/resource/soheal-vaseem-portrait.jpg" alt="Soheal Vaseem, brand strategist and film director" loading="lazy" />
            </div>
            <div className="rl-about-copy">
              <p>
                Thirty years of brand work has taught me one thing: the craft is never the destination.
                The architecture underneath it is. Today the practice works at the intersection of strategy,
                behavioural insight and cinematic storytelling — for brands built to lead, not chase.
              </p>
              <div className="rl-about-foot">
                <div className="rl-about-meta">
                  <span>Mumbai &amp; Hyderabad</span>
                  <span>Practising since 1991</span>
                </div>
                <Link to="/about" className="rl-pill rl-pill-dark">About me <span className="rl-pill-arrow">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="rl-clients">
        <div className="rl-clients-bg" aria-hidden="true" />
        <div className="rl-container">
          <div className="rl-clients-head">
            <span className="rl-eyebrow">Brands I've worked with</span>
            <h2 className="rl-clients-statement">
              Built through strategy, shaped through collaboration, and designed to drive real business outcomes.
            </h2>
          </div>

          <div className="rl-logo-grid">
            {CLIENTS.map((c) => (
              <div className="rl-logo-cell" key={c}>{c}</div>
            ))}
          </div>

          <div className="rl-clients-foot">
            <div className="rl-clients-count">
              <span className="rl-count-num"><AnimatedCounter to={250} suffix="+" duration={2.2} /></span>
              <span className="rl-count-label">Brands repositioned since 1991</span>
            </div>
            <Link to="/portfolio" className="rl-pill rl-pill-dark">See the work <span className="rl-pill-arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ================= WORK ================= */}
      <section className="rl-work">
        <div className="rl-container">
          <div className="rl-section-head rl-section-head-dark">
            <div>
              <span className="rl-eyebrow">Selected work</span>
              <h2 className="rl-h2">Work that<br /><em className="rl-script">earns</em><br />attention</h2>
            </div>
            <Link to="/portfolio" className="rl-pill rl-pill-light">See the work <span className="rl-pill-arrow">→</span></Link>
          </div>
        </div>

        <div className="rl-rail" ref={railRef} onScroll={onRailScroll}>
          {featured.map((p) => (
            <article className="rl-work-card" key={p.id}>
              <div className="rl-work-media">
                <img src={p.image_path} alt={p.title} loading="lazy" />
                <span className="rl-work-cat">{p.cat_label}</span>
              </div>
              <div className="rl-work-body">
                <h3 className="rl-work-title">{p.title}</h3>
                <p className="rl-work-desc">{p.description}</p>
                {p.project_url && p.project_url !== '#' ? (
                  <a href={p.project_url} target="_blank" rel="noopener noreferrer" className="rl-text-link">View project <span>→</span></a>
                ) : (
                  <Link to="/contact" className="rl-text-link">Enquire <span>→</span></Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="rl-container rl-rail-controls">
          <div className="rl-rail-count">
            <span>{String(railIndex + 1).padStart(2, '0')}</span> / {String(featured.length).padStart(2, '0')}
          </div>
          <div className="rl-rail-btns">
            <button type="button" onClick={() => scrollRail(-1)} aria-label="Previous project">←</button>
            <button type="button" onClick={() => scrollRail(1)} aria-label="Next project">→</button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="rl-section rl-section--white">
        <div className="rl-container">
          <div className="rl-section-head">
            <div>
              <span className="rl-eyebrow">Services</span>
              <h2 className="rl-h2">What we can<br /><em className="rl-script">work on</em></h2>
            </div>
            <p className="rl-section-lead">
              Each engagement starts one layer deeper — with why the market should choose this brand at all.
            </p>
          </div>

          <Accordion items={SERVICES} defaultOpen={0} className="rl-accordion-light" />

          <div className="rl-mt-40">
            <Link to="/services" className="rl-pill rl-pill-dark">Details <span className="rl-pill-arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ================= CLOSE ================= */}
      <section className="rl-cta rl-cta--dark">
        <div className="rl-container rl-cta-inner">
          <h2 className="rl-cta-title">
            Your ideas <em className="rl-script">transform</em> into brand <em className="rl-script">stories</em>.
          </h2>
          <div className="rl-cta-actions">
            <Link to="/contact" className="rl-pill rl-pill-light">
              Start a conversation <span className="rl-pill-arrow">→</span>
            </Link>
            <p className="rl-cta-note">Response within 24 hours</p>
          </div>
        </div>
      </section>
    </>
  );
}
