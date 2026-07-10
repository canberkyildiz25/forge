import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="foot-top">
        <div className="foot-brand">
          <Link href="/" className="foot-logo">
            FORGE<span>.</span>
          </Link>
          <p>
            London’s most serious training floor. Built for athletes. Open to everyone willing to
            do the work.
          </p>
          <div className="foot-social">
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Strava</a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/trainers">Trainers</Link></li>
            <li><Link href="/membership">Membership</Link></li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Hours</h4>
          <ul>
            <li><a href="#">Mon – Fri — 05:30 – 23:00</a></li>
            <li><a href="#">Sat — 06:00 – 21:00</a></li>
            <li><a href="#">Sun — 07:00 – 20:00</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@forgeathletic.co.uk">hello@forgeathletic.co.uk</a></li>
            <li><a href="tel:+442071234567">+44 20 7123 4567</a></li>
            <li><a href="#">14 Bermondsey St, London SE1</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <p>© 2026 FORGE Athletic Ltd. All rights reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>
      <span className="foot-mark" aria-hidden="true">
        FORGE
      </span>
    </footer>
  );
}
