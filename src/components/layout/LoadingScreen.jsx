import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div className="flex gap-1">
          {'Parth Pathari'.split('').map((char, i) => (
            <motion.span
              key={i}
              className="font-heading text-3xl sm:text-4xl font-bold text-text-primary"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.035,
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="w-48 h-0.5 bg-surface-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <motion.div
            className="h-full bg-slate-900 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.4, duration: 0.45, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
