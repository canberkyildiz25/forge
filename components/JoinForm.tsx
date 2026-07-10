'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

export default function JoinForm() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => {
      setSent(false);
      formRef.current?.reset();
    }, 5000);
    return () => clearTimeout(t);
  }, [sent]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form ref={formRef} className="join-form reveal reveal-d1" onSubmit={onSubmit}>
      <div className="f-row">
        <div className="f-group">
          <label htmlFor="jf-first">First Name</label>
          <input id="jf-first" type="text" placeholder="James" required />
        </div>
        <div className="f-group">
          <label htmlFor="jf-last">Last Name</label>
          <input id="jf-last" type="text" placeholder="Calloway" required />
        </div>
      </div>
      <div className="f-group">
        <label htmlFor="jf-email">Email</label>
        <input id="jf-email" type="email" placeholder="james@example.com" required />
      </div>
      <div className="f-group">
        <label htmlFor="jf-tier">Membership Tier</label>
        <select id="jf-tier" required defaultValue="">
          <option value="" disabled>
            Select a tier
          </option>
          <option>Challenger — £79/month</option>
          <option>Elite — £149/month</option>
          <option>Apex — £249/month</option>
        </select>
      </div>
      <div className="f-group">
        <label htmlFor="jf-goal">Your Goal</label>
        <textarea id="jf-goal" placeholder="Tell us what you’re training for…" rows={4} />
      </div>
      <button
        type="submit"
        className="join-submit"
        style={sent ? { background: '#2E7D32', color: '#EDE8DE' } : undefined}
      >
        {sent ? 'Request received — we’ll be in touch.' : 'Start My Free Trial'}
      </button>
    </form>
  );
}
