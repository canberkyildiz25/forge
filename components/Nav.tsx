'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '/programs', label: 'Programs' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/membership', label: 'Membership' },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      const y = window.scrollY;
      setScrolled(y > 60);
      if (nav.classList.contains('mob-open') || y < 100) nav.style.transform = '';
      else if (y > lastY + 6) nav.style.transform = 'translateY(-110%)';
      else if (y < lastY - 6) nav.style.transform = 'translateY(0)';
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close the mobile menu on navigation */
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav ref={navRef} className={`${scrolled ? 'scrolled' : ''} ${open ? 'mob-open' : ''}`}>
      <Link href="/" className="nav-logo">
        FORGE<span>.</span>
      </Link>
      <ul className="nav-links">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={pathname === href ? 'active' : ''}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/membership" className="nav-cta">
        Join Now
      </Link>
      <button
        type="button"
        className="nav-burger"
        aria-label="Menü"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        style={{ background: 'none', border: 'none' }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
