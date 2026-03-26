import SocialLinks from '../ui/SocialLinks';
import { PERSONAL_INFO } from '../../utils/constants';
import { motion } from 'framer-motion';
import { fadeInUp, viewport } from '../../utils/animations';

const Footer = () => {
  return (
    <footer className='border-t border-slate-800/70 bg-slate-950/80 py-10'>
      <motion.div
        className='container-shell flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left'
        initial='hidden'
        whileInView='visible'
        viewport={viewport}
        variants={fadeInUp}
      >
        <div>
          <a href='#home' className='text-lg font-black text-white'>
            {PERSONAL_INFO.name}
            <span className='text-cyan-400'>.web</span>
          </a>
          <p className='mt-2 text-sm text-slate-400'>
            {PERSONAL_INFO.title} in {PERSONAL_INFO.location}
          </p>
        </div>
        <SocialLinks className='justify-center' />
        <div className='text-sm text-slate-400 md:text-right'>
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <a href='#home' className='mt-2 inline-block text-cyan-300 hover:text-cyan-200'>
            Back to top
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
