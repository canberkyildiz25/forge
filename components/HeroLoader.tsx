'use client';

import { useEffect } from 'react';

/* Arms the hero entrance sequence (CSS-driven via .loaded) */
export default function HeroLoader() {
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const t = setTimeout(() => hero.classList.add('loaded'), 180);
    return () => clearTimeout(t);
  }, []);
  return null;
}
