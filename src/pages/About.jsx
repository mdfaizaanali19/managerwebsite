import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Faq from '../components/Faq';
import Reveal from '../motion/Reveal';
import AnimatedCounter from '../motion/AnimatedCounter';

const STATS = [
  { value: 30, suffix: '+', label: 'Years building brands that lead their markets' },
  { value: 250, suffix: '+', label: 'Brands repositioned, launched and sharpened' },
  { value: 1200, suffix: '+', label: 'Films and campaigns delivered end to end' },
  { text: '12', label: 'Industries — retail, hospitality, healthcare, tech and more' }
];

const BELIEFS = [
  {
    num: '(01)',
    title: 'Clarity before creativity',
    text: 'A beautiful identity cannot rescue a confused position. The work begins with the business, the market and the customer — then the creative has something true to say.'
  },
  {
    num: '(02)',
    title: 'Perception is the asset',
    text: 'Brands are not owned by the businesses that build them. They live in the mind of the customer.'
  },
  {
    num: '(03)',
    title: 'Strategy must be visible',
    text: 'Positioning that stays on paper creates no value. It has to become a mark, a language, a film, a website.'
  }
];

const FAQ = [
  {
    q: 'What kind of businesses do you work with?',
    a: 'Founder-led businesses and leadership teams who have outgrown improvised marketing — where the brand needs to catch up with the ambition of the business.'
  },
  {
    q: 'Is this a consultancy or an agency?',
    a: 'A strategic consultancy that also executes. Direction is set personally, then delivered with a trusted network assembled for the brief.'
  },
  {
    q: 'How long does an engagement take?',
    a: 'A focused positioning and identity engagement typically runs 6 to 10 weeks. Retained advisory is continuous.'
  }
];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        title={(
          <>
            I Build Brands<br />
            That <em className="rl-script">Command</em><br />
            Markets
          </>
        )}
        lead="For over three decades, Soheal Vaseem has partnered with founders and leadership teams to turn strategic clarity into market position, communication and commercial value."
        meta={['Since 1991', 'Mumbai · Hyderabad', 'Brand Strategy & Direction']}
      />

      {/* ---------------- TRACK RECORD ---------------- */}
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

      {/* ---------------- STORY ---------------- */}
      <section className="rl-section">
        <div className="rl-container rl-split rl-split--reverse">
          <div className="rl-split-body">
            <span className="rl-eyebrow">The career</span>
            <h2 className="rl-h2 rl-mb-0">From advertising craft to brand <em className="rl-script">architecture</em>.</h2>
            <div className="rl-mt-40">
              <p>
                The journey began in 1991 at Gazelle Ads — print, typography and commercial communication. What followed was a steady move upstream: from making the message, to deciding what the message should be.
              </p>
              <p>
                That shift became Media Wagon: a practice uniting brand positioning, digital architecture and creative direction under one strategic discipline. The work is deliberately selective, built for businesses that intend to lead a category rather than compete inside one.
              </p>
            </div>
            <Link to="/services" className="rl-pill rl-pill-dark">
              Explore capabilities <span className="rl-pill-arrow">→</span>
            </Link>
          </div>

          <div className="rl-split-media">
            <img src="/images/resource/soheal-vaseem-portrait.jpg" alt="Soheal Vaseem, brand strategist and film director" loading="lazy" />
            <span className="rl-caption">Soheal Vaseem — Brand Strategist &amp; Commercial Film Director</span>
          </div>
        </div>
      </section>

      {/* ---------------- BELIEFS ---------------- */}
      <section className="rl-section rl-section--light">
        <div className="rl-container">
          <div className="rl-head">
            <div>
              <span className="rl-eyebrow">What I believe</span>
              <h2 className="rl-h2">Three beliefs behind<br />every <em className="rl-script">engagement</em></h2>
            </div>
            <p className="rl-head-lead">
              A disciplined way of looking at brands: less guesswork, more structural clarity — and creative work that has somewhere to land.
            </p>
          </div>

          <div className="rl-beliefs">
            {BELIEFS.map((b, i) => (
              <Reveal className="rl-belief" direction="up" delay={i * 0.06} key={b.num}>
                <span className="rl-belief-num">{b.num}</span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PRESS ---------------- */}
      <section className="rl-section">
        <div className="rl-container">
          <div className="rl-head">
            <div>
              <span className="rl-eyebrow">Published recognition</span>
              <h2 className="rl-h2">Featured in national<br />and regional <em className="rl-script">press</em></h2>
            </div>
            <p className="rl-head-lead">
              Profile features and milestone coverage across India's leading dailies — documenting three decades of brand and directorial work.
            </p>
          </div>

          <div className="rl-tag-strip rl-mt-40">
            {['The Hindu', 'Deccan Chronicle', 'Eenadu', 'Andhra Jyothi', 'The Siasat Daily', 'Vaartha'].map((p) => (
              <span className="rl-tag" key={p}>{p}</span>
            ))}
          </div>

          <div className="rl-mt-40">
            <Link to="/media" className="rl-pill rl-pill-dark">
              View press archive <span className="rl-pill-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="rl-section rl-section--light">
        <div className="rl-container rl-two-col">
          <div>
            <span className="rl-eyebrow">Questions</span>
            <h2 className="rl-h2">What working<br />together looks like</h2>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="rl-cta rl-cta--dark">
        <div className="rl-container rl-cta-inner">
          <h2 className="rl-cta-title">
            Lead with <em className="rl-script">Strategy</em>.<br />Win the market.
          </h2>
          <div className="rl-cta-actions">
            <Link to="/contact" className="rl-pill rl-pill-light">
              Start a conversation <span className="rl-pill-arrow">→</span>
            </Link>
            <p className="rl-cta-note">Mumbai · Hyderabad · Nationally</p>
          </div>
        </div>
      </section>
    </>
  );
}
