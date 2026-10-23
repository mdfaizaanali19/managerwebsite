import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import Reveal from '../motion/Reveal';
import { services } from '../data/services';
import ServiceBody from '../components/ServiceBody';

const SERVICES = services.map((service) => ({
  num: service.num,
  title: service.title,
  body: <ServiceBody service={service} />
}));

const METHOD = [
  { num: '(01)', title: 'Diagnose', text: 'Business model, market dynamics and current perception — read first-hand before any recommendation.' },
  { num: '(02)', title: 'Define', text: 'Positioning, narrative and brand architecture documented and agreed with leadership.' },
  { num: '(03)', title: 'Direct', text: 'Identity, campaigns and platforms built to carry the position into the market.' },
  { num: '(04)', title: 'Steward', text: 'Review and refinement so consistency holds as the business grows.' }
];

const ENGAGEMENTS = [
  {
    tag: 'Entry point',
    title: 'Advisory Sprint',
    text: 'A focused diagnostic for leadership teams that need clarity before committing to a larger build.',
    list: ['Positioning workshop', 'Perception audit', 'Strategic roadmap'],
    foot: '2 – 3 weeks'
  },
  {
    tag: 'Most common',
    title: 'Brand Build',
    text: 'The complete engagement — strategy, identity and the digital flagship, delivered as one coherent system.',
    list: ['Strategy & narrative', 'Identity system', 'Website & launch assets'],
    foot: '6 – 10 weeks',
    dark: true
  },
  {
    tag: 'Ongoing',
    title: 'Retained Direction',
    text: 'Continuous strategic and creative direction for brands that are scaling and need a consistent hand.',
    list: ['Monthly advisory', 'Campaign direction', 'Brand governance'],
    foot: 'Monthly retainer'
  }
];

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        title={(
          <>
            Services <em className="rl-script">&amp;</em><br />
            Methodology
          </>
        )}
        lead="Building clarity, distinction and meaningful connection between brands and the people they serve."
        meta={[`${services.length} disciplines`, 'Advisory since 1991', 'Strategy to execution']}
      />

      {/* ---------------- POSITIONING ---------------- */}
      <section className="rl-section">
        <div className="rl-container">
          <span className="rl-eyebrow">Advisory philosophy</span>
          <Reveal direction="up">
            <p className="rl-statement">
              Clarity precedes creative execution. Without it, marketing spend is overhead. With it, every touchpoint builds <em className="rl-script">enterprise</em> equity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="rl-section rl-section--light">
        <div className="rl-container">
          <div className="rl-section-head">
            <div>
              <span className="rl-eyebrow">Services</span>
              <h2 className="rl-h2">What we can<br /><em className="rl-script">work on</em><br />together</h2>
            </div>
            <p className="rl-section-lead">
              From a single identity system to a full market launch — each service is delivered against the same strategic reference point.
            </p>
          </div>

          <Accordion items={SERVICES} defaultOpen={0} className="rl-accordion-light" />

          <div className="rl-services-foot">
            <Link to="/contact" className="rl-pill rl-pill-dark">
              Discuss a brief <span className="rl-pill-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- METHODOLOGY ---------------- */}
      <section className="rl-section rl-services">
        <div className="rl-container">
          <div className="rl-section-head">
            <div>
              <span className="rl-eyebrow">Methodology</span>
              <h2 className="rl-h2">Four phases.<br />One <em className="rl-script">direction</em>.</h2>
            </div>
            <p className="rl-section-lead">
              A repeatable process that keeps ambition, evidence and execution moving in the same direction.
            </p>
          </div>

          <div className="rl-method">
            {METHOD.map((m, i) => (
              <Reveal className="rl-method-row" direction="up" delay={i * 0.05} key={m.num}>
                <span className="rl-method-num">{m.num}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ENGAGEMENTS ---------------- */}
      <section className="rl-section rl-section--light">
        <div className="rl-container">
          <div className="rl-head">
            <div>
              <span className="rl-eyebrow">Engagement formats</span>
              <h2 className="rl-h2">Three ways<br />to <em className="rl-script">begin</em></h2>
            </div>
            <p className="rl-head-lead">
              Scope is shaped around the decision in front of the business — not around a standard deliverable list.
            </p>
          </div>

          <div className="rl-engage-grid">
            {ENGAGEMENTS.map((e, i) => (
              <Reveal
                key={e.title}
                direction="up"
                delay={i * 0.1}
                className={`rl-engage-card ${e.dark ? 'rl-engage-card--dark' : ''}`}
              >
                <span className="rl-engage-tag">{e.tag}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <ul className="rl-engage-list">
                  {e.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
                <span className="rl-engage-foot">{e.foot}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="rl-cta rl-cta--dark">
        <div className="rl-container rl-cta-inner">
          <h2 className="rl-cta-title">
            Let's define what<br />your brand <em className="rl-script">stands</em> for.
          </h2>
          <div className="rl-cta-actions">
            <Link to="/contact" className="rl-pill rl-pill-light">
              Schedule advisory <span className="rl-pill-arrow">→</span>
            </Link>
            <p className="rl-cta-note">Response within 24 hours</p>
          </div>
        </div>
      </section>
    </>
  );
}
