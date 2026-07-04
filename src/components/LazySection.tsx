import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const LazySection = ({
  children,
  threshold = 0.1,
  className = ""
}: {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px", amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default LazySection;