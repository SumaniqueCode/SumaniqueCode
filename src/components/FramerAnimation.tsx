import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

/* Base animation component with customizable properties */
export default function FramerAnimation({
  children,
  duration = 0.6,
  delay = 0,
  amount = 0,
  ix = 0,
  fx = 0,
  iy = 0,
  fy = 0,
  iOpacity = 0,
  fOpacity = 1,
  showOnce = true,
  className = ""
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  amount?: number | "some" | "all";
  ix?: number;
  fx?: number;
  iy?: number;
  fy?: number;
  iOpacity?: number;
  fOpacity?: number;
  showOnce?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: iOpacity, x: ix, y: iy }}
      whileInView={{ opacity: fOpacity, x: fx, y: fy }}
      viewport={{ once: showOnce, amount: amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Reveal component using hook approach with safer visibility */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: [0.22, 0.7, 0.32, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* FadeInUp animation - from bottom to top */
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* FadeInDown animation - from top to bottom */
export function FadeInDown({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* SlideInLeft animation - from left to right */
export function SlideInLeft({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* SlideInRight animation - from right to left */
export function SlideInRight({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* FadeIn animation - simple opacity fade */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}