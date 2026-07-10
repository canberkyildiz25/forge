import Link from 'next/link';
import HeroLoader from '@/components/HeroLoader';
import Counter from '@/components/Counter';
import { gallery, tiers, trainers, voices } from '@/lib/data';

const homePrograms = [
  {
    title: 'Strength & Power',
    short: 'Progressive overload built around the compound lifts, tracked to the kilogram.',
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&q=80&fit=crop',
  },
  {
    title: 'Conditioning',
    short: 'Heart-rate-zoned intervals that build a bigger engine without burning you out.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80&fit=crop',
  },
  {
    title: 'Combat',
    short: 'Boxing pad work, bag rounds and footwork. No contact — all output.',
    img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=900&q=80&fit=crop',
  },
];

const homeCoaches = [
  { trainer: trainers[1], role: 'Head of Performance', tag: 'Olympic Athlete' },
  { trainer: trainers[2], role: 'Combat Conditioning', tag: 'Pro Boxing' },
  { trainer: trainers[3], role: 'Olympic Weightlifting', tag: 'USAW Certified' },
];

export default function HomePage() {
  return (
    <main>
      <HeroLoader />

      {/* HERO */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1600&q=80"
          src="https://assets.mixkit.co/videos/52094/52094-720.mp4"
        />
        <div className="hero-veil" />
        <div className="hero-content">
          <span className="hero-eyebrow">Performance Training — Bermondsey, London</span>
          <h1 className="hero-title">
            <span className="h-line"><span>The Body</span></span>
            <span className="h-line"><span>Follows</span></span>
            <span className="h-line">
              <span>
                The <em>will.</em>
              </span>
            </span>
          </h1>
          <div className="hero-row">
            <p className="hero-sub">
              A 26,000 sq ft performance facility built for people who take training seriously.
              Programmed by sport scientists. Coached by former athletes.
            </p>
            <div className="hero-btns">
              <Link href="/membership" className="btn-primary">Start Free Trial</Link>
              <Link href="/programs" className="btn-ghost">Explore Programs</Link>
            </div>
          </div>
        </div>
        <span className="hero-side">Forge Athletic — Est. 2019</span>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-bar" />
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Strength</span><span>Conditioning</span><span className="t-solid">Power</span>
          <span>Discipline</span><span>Recovery</span><span>Combat</span>
          <span className="t-solid">Mobility</span><span>Performance</span>
          <span>Strength</span><span>Conditioning</span><span className="t-solid">Power</span>
          <span>Discipline</span><span>Recovery</span><span>Combat</span>
          <span className="t-solid">Mobility</span><span>Performance</span>
        </div>
      </div>

      {/* THE STANDARD */}
      <section className="standard">
        <div className="standard-text">
          <span className="eyebrow reveal">The Standard</span>
          <h2 className="standard-title reveal reveal-d1">
            Not a gym.<br />A <em>proving ground.</em>
          </h2>
          <p className="standard-body reveal reveal-d2">
            FORGE was built on an unfashionable idea: that results come from environment, not
            equipment. <strong>Every square metre of this floor was designed to make hard work
            feel inevitable</strong> — no posing mirrors, no machines that do the thinking for
            you.
          </p>
          <p className="standard-body reveal reveal-d2">
            Training blocks are written by our performance team, reviewed every six weeks, and
            coached in person. You will never train alone here unless you choose to.
          </p>
          <div className="standard-facts reveal reveal-d3">
            <div className="fact"><strong>26,000</strong><span>sq ft of floor</span></div>
            <div className="fact"><strong>05:30</strong><span>doors open</span></div>
            <div className="fact"><strong>6</strong><span>disciplines</span></div>
          </div>
        </div>
        <div className="standard-media reveal reveal-d1">
          <img
            className="standard-img-main"
            src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=1000&q=80&fit=crop"
            alt="Loaded barbell on the FORGE main floor"
          />
          <img
            className="standard-img-off"
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80&fit=crop"
            alt="Athlete training in low light"
          />
          <span className="standard-caption">The floor — Bermondsey SE1</span>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="programs">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">Programs</span>
            <h2 className="section-title">
              Train with <em>intent.</em>
            </h2>
          </div>
          <Link href="/programs" className="head-link reveal">All six programs →</Link>
        </div>
        <div className="programs-grid">
          {homePrograms.map((p, i) => (
            <Link
              href="/programs"
              className={`prog-card reveal${i ? ` reveal-d${i}` : ''}`}
              key={p.title}
            >
              <img src={p.img} alt={p.title} />
              <span className="prog-num">0{i + 1} / 06</span>
              <div className="prog-info">
                <h3 className="prog-name">{p.title}</h3>
                <p className="prog-desc">{p.short}</p>
                <span className="prog-tag">View programme →</span>
              </div>
              <span className="prog-bar" />
            </Link>
          ))}
        </div>
      </section>

      {/* FILM BAND */}
      <section className="film">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1600&q=80"
          src="https://assets.mixkit.co/videos/52088/52088-720.mp4"
        />
        <h2 className="film-title">
          Inside<em>the forge.</em>
        </h2>
        <span className="film-caption">05:42 AM — The floor is already loud</span>
      </section>

      {/* STATS */}
      <section className="stats-band">
        <div className="stats-grid">
          <div className="stat reveal">
            <Counter target={1800} suffix="+" />
            <span className="stat-lbl">Active members</span>
          </div>
          <div className="stat reveal reveal-d1">
            <Counter target={48} />
            <span className="stat-lbl">Classes per week</span>
          </div>
          <div className="stat reveal reveal-d2">
            <Counter target={12} />
            <span className="stat-lbl">Full-time coaches</span>
          </div>
          <div className="stat reveal reveal-d3">
            <Counter target={94} suffix="%" />
            <span className="stat-lbl">Member retention</span>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="founder">
        <div className="founder-media reveal">
          <img
            src="https://images.unsplash.com/photo-1549476464-37392f717541?w=900&q=80&fit=crop&crop=faces"
            alt="James Calloway, founder of FORGE Athletic"
          />
        </div>
        <div className="founder-text">
          <blockquote className="founder-quote reveal">
            Mediocrity is a choice. So is greatness.
          </blockquote>
          <p className="founder-body reveal reveal-d1">
            FORGE exists because of a single belief: the environment you train in shapes the
            athlete you become. We don’t sell gym memberships. We hold a standard — one that
            demands more of you, and gives more back.
          </p>
          <p className="founder-body reveal reveal-d1">
            Every programme, every coach, every square metre of this facility serves one purpose:
            to make you better than you were yesterday.
          </p>
          <span className="founder-sig reveal reveal-d2">
            James Calloway<span>Founder — Strength & Conditioning</span>
          </span>
        </div>
      </section>

      {/* COACHES PREVIEW */}
      <section className="coaches">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">The Coaches</span>
            <h2 className="section-title">
              In good <em>hands.</em>
            </h2>
          </div>
          <Link href="/trainers" className="head-link reveal">Meet the full team →</Link>
        </div>
        <div className="coaches-grid">
          {homeCoaches.map(({ trainer, role, tag }, i) => (
            <Link
              href="/trainers"
              className={`coach-card reveal${i ? ` reveal-d${i}` : ''}`}
              key={trainer.name}
            >
              <img src={trainer.img.replace('w=600', 'w=700')} alt={trainer.name} />
              <div className="coach-info">
                <h3 className="coach-name">{trainer.name}</h3>
                <span className="coach-role">{role}</span>
                <span className="coach-tag">{tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VOICES */}
      <section className="voices">
        <div className="voices-inner">
          <div className="reveal">
            <span className="eyebrow">Members</span>
            <h2 className="section-title">
              Word from <em>the floor.</em>
            </h2>
          </div>
          <div className="voices-grid">
            {voices.map((v, i) => (
              <div className={`voice reveal${i ? ' reveal-d1' : ''}`} key={v.name}>
                <blockquote className="voice-quote">{v.quote}</blockquote>
                <div className="voice-who">
                  <img src={v.avatar} alt={v.name} />
                  <div>
                    <strong>{v.name}</strong>
                    <span>{v.meta}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="facility">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">The Facility</span>
            <h2 className="section-title">
              Built for <em>work.</em>
            </h2>
          </div>
        </div>
        <div className="fac-grid">
          {gallery.map((g, i) => (
            <div
              className={`fac-item fac-${g.span} reveal${i % 3 ? ` reveal-d${i % 3}` : ''}`}
              key={g.label}
            >
              {g.video ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={g.poster}
                  src={g.video}
                />
              ) : (
                <img src={g.img} alt={g.label} />
              )}
              <span>{g.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP PREVIEW */}
      <section className="tiers">
        <div className="section-head">
          <div className="reveal">
            <span className="eyebrow">Membership</span>
            <h2 className="section-title">
              Choose your <em>level.</em>
            </h2>
          </div>
          <Link href="/membership" className="head-link reveal">Compare all features →</Link>
        </div>
        <div className="tiers-grid">
          {tiers.map((t, i) => (
            <div
              className={`tier-card${t.featured ? ' featured' : ''} reveal${i ? ` reveal-d${i}` : ''}`}
              key={t.name}
            >
              {t.badge ? <span className="tier-badge">{t.badge}</span> : null}
              <div className="tier-name">{t.name}</div>
              <div className="tier-price">
                <sup>£</sup>
                {t.price}
                <sub>/month</sub>
              </div>
              <div className="tier-divider" />
              <ul className="tier-list">
                {t.features.slice(0, 5).map(f => (
                  <li className={f.included ? 'in' : ''} key={f.label}>
                    {f.label}
                  </li>
                ))}
              </ul>
              <Link href="/membership" className={`tier-cta${t.featured ? '' : ' ghost'}`}>
                {t.featured ? 'Join Elite' : t.name === 'Apex' ? 'Go Apex' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>
        <p className="tiers-note reveal">
          Every membership starts with a two-week free trial. No contract — cancel or change tier
          at any time.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=80"
          src="https://assets.mixkit.co/videos/23929/23929-720.mp4"
        />
        <div className="cta-inner">
          <h2 className="cta-title reveal">
            Two weeks.<br />
            <em>on us.</em>
          </h2>
          <p className="cta-sub reveal reveal-d1">
            Train free for fourteen days — every programme, every class, every coach. If it’s not
            for you, walk away. No contract, no card required.
          </p>
          <div className="cta-actions reveal reveal-d2">
            <Link href="/membership" className="btn-primary">Claim Free Trial</Link>
            <Link href="/trainers" className="btn-ghost">Meet the Coaches</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
