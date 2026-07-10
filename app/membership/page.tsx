import type { Metadata } from 'next';
import JoinForm from '@/components/JoinForm';
import { compareRows, tiers } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Membership',
  description:
    'Join FORGE Athletic. Three membership tiers — Challenger, Elite, and Apex. Your first two weeks are free. No contract required.',
};

export default function MembershipPage() {
  return (
    <main>
      <div className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=2000&q=80&fit=crop"
          alt="Loaded barbell waiting on the platform"
        />
        <div className="page-hero-content">
          <span className="eyebrow">Get Started</span>
          <h1 className="page-hero-title">Membership</h1>
        </div>
      </div>

      <section className="membership-page">
        <div className="reveal">
          <span className="eyebrow">Choose Your Level</span>
          <h2 className="section-title">
            No contracts.<br />
            <em>just commitment.</em>
          </h2>
        </div>
        <p className="membership-intro reveal">
          Every membership includes a two-week free trial. Cancel or change tier at any time. All
          prices include VAT.
        </p>

        <div className="membership-page-grid">
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
                {t.features.map(f => (
                  <li className={f.included ? 'in' : ''} key={f.label}>
                    {f.label}
                  </li>
                ))}
              </ul>
              <a href="#join-form" className={`tier-cta${t.featured ? '' : ' ghost'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="compare-wrap">
          <div className="reveal">
            <span className="eyebrow">Full Comparison</span>
            <h2 className="section-title">
              What’s <em>included.</em>
            </h2>
          </div>
          <div className="compare-table reveal">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Challenger</th>
                  <th>Elite</th>
                  <th>Apex</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(row => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    {[row.challenger, row.elite, row.apex].map((cell, i) => (
                      <td
                        key={i}
                        className={cell === '✓' ? 'check' : cell === '—' ? 'no' : undefined}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="join-form" className="join-section">
        <div className="join-inner">
          <figure className="join-media reveal">
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=900&q=80&fit=crop"
              alt="A member training at FORGE"
            />
            <figcaption>Your first session — we’ll walk the floor with you</figcaption>
          </figure>
          <div>
            <div className="join-head reveal">
              <span className="eyebrow">Start Today</span>
              <h2 className="section-title">
                Claim your<br />
                <em>free two weeks.</em>
              </h2>
              <p>
                Fill in the form below and one of our team will be in touch within 24 hours to get
                you booked in for your induction session.
              </p>
            </div>
            <JoinForm />
          </div>
        </div>
      </section>
    </main>
  );
}
