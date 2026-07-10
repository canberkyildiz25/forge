'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/* Ember progress bar driven by Framer Motion's scroll spring */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 36, mass: 0.4 });

  return (
    <motion.div
      id="scroll-progress"
      style={{ scaleX, width: '100%', transformOrigin: '0 0' }}
      aria-hidden="true"
    />
  );
}
