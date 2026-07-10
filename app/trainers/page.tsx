import type { Metadata } from 'next';
import Link from 'next/link';
import { trainers } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Trainers',
  description:
    'Meet the FORGE Athletic coaching team. Elite trainers with professional sports backgrounds, certified in strength, conditioning, and performance.',
};

export default function TrainersPage() {
  return (
    <main>
      <div className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=2000&q=80&fit=crop"
          alt="A FORGE coach on the training floor"
        />
        <div className="page-hero-content">
          <span className="eyebrow">The Team</span>
          <h1 className="page-hero-title">Trainers</h1>
        </div>
      </div>

      <section className="trainers-full">
        <div className="reveal">
          <span className="eyebrow">Coaching Staff</span>
          <h2 className="section-title">
            Coached by people<br />
            <em>who have been there.</em>
          </h2>
        </div>

        <div className="trainers-full-grid">
          {trainers.map((t, i) => (
            <div className={`trainer-full-card reveal${i % 3 ? ` reveal-d${i % 3}` : ''}`} key={t.name}>
              <div className="trainer-full-img">
                <img src={t.img} alt={t.name} />
              </div>
              <div className="trainer-full-body">
                <h3 className="trainer-full-name">{t.name}</h3>
                <span className="trainer-full-role">{t.role}</span>
                <p className="trainer-full-bio">{t.bio}</p>
                <div className="trainer-full-spec">
                  {t.specs.map(s => (
                    <span className="spec-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-inner">
          <h2 className="cta-title reveal">
            Train with<br />
            <em>the best.</em>
          </h2>
          <p className="cta-sub reveal reveal-d1">
            Book a free coach consultation and find out which trainer and programme is right for
            your goals.
          </p>
          <div className="cta-actions reveal reveal-d2">
            <Link href="/membership" className="btn-primary">Book Consultation</Link>
            <Link href="/programs" className="btn-ghost">View Programs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
