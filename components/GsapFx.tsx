'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* Split a heading into animatable word spans (keeps <br>, <em>) */
function splitWords(root: HTMLElement): NodeListOf<HTMLElement> {
  const wrap = (node: Node) => {
    [...node.childNodes].forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (child.textContent ?? '').split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const outer = document.createElement('span');
          outer.className = 'w';
          const inner = document.createElement('span');
          inner.textContent = part;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        node.replaceChild(frag, child);
      } else if (
        child.nodeType === Node.ELEMENT_NODE &&
        (child as HTMLElement).tagName !== 'BR' &&
        !(child as HTMLElement).classList.contains('w')
      ) {
        wrap(child);
      }
    });
  };
  wrap(root);
  return root.querySelectorAll('.w > span');
}

export default function GsapFx() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      /* 1 — Section titles: staggered word rise */
      document
        .querySelectorAll<HTMLElement>('.section-title, .standard-title, .cta-title')
        .forEach(title => {
          if (title.dataset.split) return;
          title.dataset.split = '1';
          const host = title.closest('.reveal');
          if (host) host.classList.remove('reveal', 'reveal-d1', 'reveal-d2');
          const words = splitWords(title);
          gsap.fromTo(
            words,
            { yPercent: 135 },
            {
              yPercent: 0,
              duration: 0.9,
              stagger: 0.07,
              ease: 'power4.out',
              scrollTrigger: { trigger: title, start: 'top 88%', once: true },
            }
          );
          const eyebrow = title.parentElement?.querySelector<HTMLElement>('.eyebrow');
          if (eyebrow) {
            eyebrow.classList.remove('reveal', 'reveal-d1', 'reveal-d2', 'reveal-d3');
            gsap.fromTo(
              eyebrow,
              { opacity: 0, x: -28 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: { trigger: title, start: 'top 88%', once: true },
              }
            );
          }
        });

      /* 2 — Image curtains */
      gsap.utils
        .toArray<HTMLElement>(
          '.standard-media, .founder-media, .prog-full-img, .trainer-full-img, .fac-item, .join-media'
        )
        .forEach(el => {
          el.classList.remove('reveal', 'reveal-d1', 'reveal-d2', 'reveal-d3');
          gsap.fromTo(
            el,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.15,
              ease: 'power4.inOut',
              clearProps: 'clipPath',
              scrollTrigger: { trigger: el, start: 'top 86%', once: true },
            }
          );
        });

      /* 3 — Subtle image parallax */
      gsap.utils.toArray<HTMLElement>('.standard-img-main, .founder-media img').forEach(img => {
        gsap.fromTo(
          img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          }
        );
      });

      /* 4 — Film band scrub */
      const filmTitle = document.querySelector('.film-title');
      if (filmTitle) {
        gsap.fromTo(
          filmTitle,
          { scale: 0.9, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { trigger: '.film', start: 'top 80%', end: 'center center', scrub: 0.5 },
          }
        );
      }
      const filmVideo = document.querySelector('.film video');
      if (filmVideo) {
        gsap.fromTo(
          filmVideo,
          { yPercent: -6, scale: 1.12 },
          {
            yPercent: 6,
            scale: 1.12,
            ease: 'none',
            scrollTrigger: { trigger: '.film', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          }
        );
      }

      /* 5 — Footer watermark */
      const mark = document.querySelector('.foot-mark');
      if (mark) {
        gsap.fromTo(
          mark,
          { yPercent: 45 },
          {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom bottom', scrub: 0.4 },
          }
        );
      }

      /* 6 — Page-hero titles rise on load */
      document.querySelectorAll<HTMLElement>('.page-hero-title').forEach(title => {
        if (title.dataset.split) return;
        title.dataset.split = '1';
        const words = splitWords(title);
        gsap.fromTo(
          words,
          { yPercent: 135 },
          { yPercent: 0, duration: 1, stagger: 0.08, ease: 'power4.out', delay: 0.15 }
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
