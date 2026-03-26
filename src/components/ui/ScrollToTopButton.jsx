import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const ScrollToTopButton = () => {
  const { showScrollTop, scrollToTop } = useScrollToTop();

  return (
    <AnimatePresence>
      {showScrollTop ? (
        <motion.button
          type='button'
          onClick={scrollToTop}
          aria-label='Scroll back to top'
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className='fixed bottom-6 right-6 z-50 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-slate-200 shadow-lg backdrop-blur transition-colors hover:border-cyan-400 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400'
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;