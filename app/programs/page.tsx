import type { Metadata } from 'next';
import Link from 'next/link';
import { programs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Six performance programmes at FORGE Athletic — strength, conditioning, recovery, combat, Olympic lifting, and athletic performance. Science-led, coach-supervised.',
};

export default function ProgramsPage() {
  return (
    <main>
      <div className="page-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=80"
          src="https://assets.mixkit.co/videos/52091/52091-720.mp4"
        />
        <div className="page-hero-content">
          <span className="eyebrow">What we offer</span>
          <h1 className="page-hero-title">Programs</h1>
        </div>
      </div>

      <section className="programs-full">
        <div className="reveal">
          <span className="eyebrow">All Disciplines</span>
          <h2 className="section-title">
            Every programme.<br />
            <em>one standard.</em>
          </h2>
        </div>

        <div className="programs-full-grid">
          {programs.map((p, i) => (
            <div className={`prog-full-card reveal${i % 2 ? ' reveal-d1' : ''}`} key={p.title}>
              <div className="prog-full-img">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="prog-full-body">
                <span className="prog-full-tag">{p.tag}</span>
                <h3 className="prog-full-title">{p.title}</h3>
                <p className="prog-full-desc">{p.desc}</p>
                <div className="prog-full-meta">
                  <div className="prog-meta-item">
                    <strong>{p.meta.frequency}</strong>Frequency
                  </div>
                  <div className="prog-meta-item">
                    <strong>{p.meta.suitability}</strong>Suitability
                  </div>
                  <div className="prog-meta-item">
                    <strong>{p.meta.duration}</strong>Duration
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-inner">
          <h2 className="cta-title reveal">
            Find your<br />
            <em>programme.</em>
          </h2>
          <p className="cta-sub reveal reveal-d1">
            Not sure where to start? Book a free 30-minute assessment and we’ll build a plan
            around your goals.
          </p>
          <div className="cta-actions reveal reveal-d2">
            <Link href="/membership" className="btn-primary">Book Assessment</Link>
            <Link href="/trainers" className="btn-ghost">Meet the Coaches</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
