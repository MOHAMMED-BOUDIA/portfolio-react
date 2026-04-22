import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import { Download, ExternalLink, Mail, Sparkles, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';
import cvFile from '../../assets/files/MOHAMMED BOUDIA(2).pdf';
import profileImage from '../../assets/images/profile.png';
import { fadeInUp, staggerContainer, viewport } from '../../utils/animations';
import { useEffect, useState } from 'react';

const TypewriterEffect = ({ phrases, className }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentPhrase) {
          // Finished typing, wait then start deleting
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait 2s at the end
        }
      } else {
        // Deleting
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(500); // Small pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className='ml-1 inline-block h-[0.9em] w-[4px] translate-y-[0.1em] bg-cyan-400'
      />
    </span>
  );
};

const HeroBackground = () => {
  return (
    <div className='absolute inset-0 -z-10 overflow-hidden'>
      {/* Primary Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[120px]'
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute -right-20 bottom-10 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[140px]'
      />
      
      {/* Soft Floating Circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
          }}
          className='absolute h-48 w-48 rounded-full bg-cyan-500/5 blur-[80px]'
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* Subtle Grid Overlay */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section id='home' className='relative min-h-[90vh] overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32'>
      <HeroBackground />

      <div className='container-shell relative z-10'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
          viewport={viewport}
          className='flex flex-col-reverse items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-20'
        >
          {/* Left Content Column (Appears below image on mobile) */}
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <motion.div 
              variants={fadeInUp}
              className='flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
            >
              <Sparkles size={14} className='animate-pulse text-cyan-400' />
              <span>{PERSONAL_INFO.availability}</span>
            </motion.div>

            <motion.div variants={fadeInUp} className='mt-8 space-y-3'>
              <h1 className='text-5xl font-black tracking-tight text-white md:text-7xl xl:text-8xl'>
                <span className='block opacity-90 leading-[1.1]'>Hi, I'm</span>
                <span className='block bg-gradient-to-r from-white via-cyan-100 to-slate-400 bg-clip-text text-transparent'>
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <div className='relative flex items-center gap-4'>
                <div className='h-px w-10 bg-cyan-500/50' />
                <p className='bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-2xl font-black uppercase tracking-tight text-transparent md:text-3xl lg:text-4xl min-h-[1.2em]'>
                  <TypewriterEffect 
                    phrases={[
                      "Full Stack Web Developer",
                      "Designing Clean User Experiences",
                      "Building Powerful Web Applications",
                      "Bringing Ideas to Life with Code"
                    ]} 
                  />
                </p>
              </div>
            </motion.div>

            <motion.p 
              variants={fadeInUp} 
              className='mt-8 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl'
            >
              I architect <span className='text-white font-medium'>high-performance</span> digital products with a focus on 
              <span className='text-white font-medium'> scalability</span>, 
              <span className='text-white font-medium'> clean code</span>, and 
              <span className='text-white font-medium'> intuitive UX</span>.
            </motion.p>

            <motion.div variants={fadeInUp} className='mt-10 flex flex-wrap items-center gap-5'>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href='#projects'>
                <Button 
                  className='group relative h-14 px-8 shadow-[0_0_30px_rgba(6,182,212,0.2)]'
                  icon={<ChevronRight size={20} className='transition-transform group-hover:translate-x-1' />}
                >
                  Explore Work
                </Button>
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={cvFile} download='Mohammed-Boudia-CV.pdf'>
                <Button variant='secondary' className='h-14 px-8 backdrop-blur-sm' icon={<Download size={18} />}>
                  Download CV
                </Button>
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className='mt-12 flex items-center gap-8'>
              <div className='flex items-center gap-4 text-slate-500'>
                <span className='text-[10px] font-black uppercase tracking-[0.3em]'>Connect</span>
                <div className='h-px w-10 bg-slate-800' />
                <SocialLinks className='gap-5' />
              </div>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <motion.div
            variants={fadeInUp}
            style={{ y: yParallax }}
            className='relative flex justify-center lg:justify-end mt-12 lg:mt-0'
          >
            {/* Soft Ambient Glow under image */}
            <div className='absolute -inset-10 -z-10 rounded-full bg-cyan-500/10 blur-[100px]' />
            
            <div className='relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] xl:h-[500px] xl:w-[500px]'>
              {/* Premium Glass Frame */}
              <div className='group relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-slate-900/40 p-1 backdrop-blur-sm shadow-2xl transition-all duration-700 hover:border-cyan-500/30'>
                <div className='h-full w-full overflow-hidden rounded-full bg-slate-800'>
                  <motion.img
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    src={profileImage}
                    alt={PERSONAL_INFO.name}
                    className='h-full w-full object-cover object-top filter transition-all duration-700 hover:brightness-110 group-hover:scale-110'
                  />
                </div>
                
                {/* Decorative Internal Glow */}
                <div className='pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10' />
              </div>
              
              {/* Floating Badge (Decorative) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className='absolute -bottom-6 -right-6 hidden sm:flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-lg shadow-2xl'
              >
                <div className='flex flex-col items-center gap-1'>
                  <Sparkles size={24} className='text-cyan-400' />
                  <span className='text-[8px] font-black uppercase tracking-widest text-white'>Designer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
