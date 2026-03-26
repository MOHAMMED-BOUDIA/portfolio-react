import { motion } from 'framer-motion';

const blobTransition = {
  duration: 18,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};

const BackgroundEffects = () => {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden' aria-hidden='true'>
      <motion.div
        className='absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl md:h-96 md:w-96'
        animate={{ x: [0, 55, -20], y: [0, 40, -15], scale: [1, 1.08, 0.96] }}
        transition={blobTransition}
      />

      <motion.div
        className='absolute right-[-5rem] top-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl md:h-80 md:w-80'
        animate={{ x: [0, -45, 30], y: [0, -35, 15], scale: [1, 0.95, 1.06] }}
        transition={{ ...blobTransition, duration: 22 }}
      />

      <motion.div
        className='absolute bottom-[-4rem] left-1/4 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl md:h-80 md:w-80'
        animate={{ x: [0, 35, -25], y: [0, -30, 20], scale: [1, 1.04, 0.92] }}
        transition={{ ...blobTransition, duration: 24 }}
      />

      <div className='absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,0.08),transparent_30%)]' />
    </div>
  );
};

export default BackgroundEffects;