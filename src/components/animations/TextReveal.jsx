import { motion } from 'framer-motion';

export default function TextReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ');

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
