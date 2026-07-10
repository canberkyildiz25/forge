'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/* IntersectionObserver reveals, off-screen video pausing,
   magnetic buttons and spotlight cards — re-bound per route. */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    const vio = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll<HTMLVideoElement>('video[autoplay]').forEach(v => vio.observe(v));

    const cleanups: Array<() => void> = [];
    if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
      document.querySelectorAll<HTMLElement>('.btn-primary, .btn-ghost, .nav-cta').forEach(btn => {
        const move = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.26;
          const y = (e.clientY - r.top - r.height / 2) * 0.26;
          btn.style.transform = `translate(${x}px, ${y}px)`;
        };
        const leave = () => { btn.style.transform = ''; };
        btn.addEventListener('mousemove', move);
        btn.addEventListener('mouseleave', leave);
        cleanups.push(() => {
          btn.removeEventListener('mousemove', move);
          btn.removeEventListener('mouseleave', leave);
        });
      });

      document
        .querySelectorAll<HTMLElement>('.tier-card, .prog-full-card, .trainer-full-card')
        .forEach(card => {
          const move = (e: MouseEvent) => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
            card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
          };
          card.addEventListener('mousemove', move);
          cleanups.push(() => card.removeEventListener('mousemove', move));
        });
    }

    return () => {
      io.disconnect();
      vio.disconnect();
      cleanups.forEach(fn => fn());
    };
  }, [pathname]);

  return null;
}
