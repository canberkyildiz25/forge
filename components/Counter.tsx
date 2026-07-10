'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
}

/* Stat number that counts up when scrolled into view (Framer Motion) */
export default function Counter({ target, suffix }: CounterProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span className="stat-num">
      <b ref={ref}>{value.toLocaleString('en-GB')}</b>
      {suffix ? <i>{suffix}</i> : null}
    </span>
  );
}
