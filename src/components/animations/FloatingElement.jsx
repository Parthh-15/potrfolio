import { motion } from 'framer-motion';

export default function FloatingElement({
  children,
  delay = 0,
  duration = 6,
  y = 20,
  className = '',
}) {
  return (
    <motion.div
      animate={{
        y: [-y / 2, y / 2, -y / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
