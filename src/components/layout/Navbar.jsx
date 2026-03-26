import { useMemo, useState } from 'react';
import { BriefcaseBusiness, Code2, FolderKanban, GraduationCap, Handshake, Home, Menu, Sparkles, UserRound, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { NAV_ITEMS, PERSONAL_INFO } from '../../utils/constants';
import { mobileMenu } from '../../utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useNavbarScroll();
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  const navIconMap = {
    home: Home,
    about: UserRound,
    skills: Sparkles,
    services: BriefcaseBusiness,
    projects: FolderKanban,
    education: GraduationCap,
    contact: Handshake,
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-colors duration-300 ${
        scrolled
          ? 'border-slate-800/80 bg-slate-950/90'
          : 'border-slate-800/40 bg-slate-950/60'
      }`}
    >
      <nav className='container-shell flex h-16 items-center justify-between md:h-20' aria-label='Primary navigation'>
        <a
          href='#home'
          className='relative z-[60] inline-flex items-center gap-2 text-lg font-black tracking-tight text-white md:text-xl'
          aria-label='Go to home section'
          onClick={() => setIsOpen(false)}
        >
          <span className='inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-500/10 text-cyan-300'>
            <Code2 size={16} />
          </span>
          {PERSONAL_INFO.name}
          <span className='text-cyan-400'>.dev</span>
        </a>

        <ul className='hidden items-center gap-6 md:flex'>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              {(() => {
                const ItemIcon = navIconMap[item.id] || Code2;
                return (
                  <a
                    href={`#${item.id}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      activeSection === item.id ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <ItemIcon size={14} aria-hidden='true' />
                    {item.label}
                  </a>
                );
              })()}
            </li>
          ))}
        </ul>

        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          className='relative z-[60] inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/50 p-2.5 text-slate-100 transition-all hover:border-cyan-400 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden'
          aria-expanded={isOpen}
          aria-controls='mobile-nav'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode='wait' initial={false}>
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing menu when clicking outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className='fixed inset-0 min-h-screen bg-slate-950/60 backdrop-blur-sm md:hidden z-[50]'
            />
            
            <motion.div
              id='mobile-nav'
              className='fixed inset-x-0 top-0 z-[60] flex flex-col border-b border-slate-800 bg-slate-950/95 pt-20 pb-8 md:hidden shadow-2xl overflow-hidden pointer-events-auto'
              variants={mobileMenu}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <ul className='container-shell space-y-2 relative z-[70]'>
                {NAV_ITEMS.map((item, index) => {
                  const ItemIcon = navIconMap[item.id] || Code2;
                  const isActive = activeSection === item.id;
                  
                  const handleLinkClick = (e, id) => {
                    e.preventDefault();
                    setIsOpen(false);
                    
                    const element = document.getElementById(id);
                    if (element) {
                      setTimeout(() => {
                        const yOffset = -80; // Offset for navbar height
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }, 50); // Small delay to prevent conflict with menu closing
                    }
                  };
                  
                  return (
                    <motion.li 
                      key={item.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * index }}
                      className="relative z-[80] pointer-events-auto"
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleLinkClick(e, item.id)}
                        className={`group flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-bold transition-all pointer-events-auto relative z-[90] ${
                          isActive 
                            ? 'bg-cyan-500/10 text-cyan-300 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]' 
                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                          isActive ? 'border-cyan-500/30 bg-cyan-500/20 text-cyan-300' : 'border-slate-800 bg-slate-900 text-slate-500 group-hover:border-slate-700'
                        }`}>
                          <ItemIcon size={18} />
                        </div>
                        {item.label}
                        {isActive && (
                          <motion.div 
                            layoutId="active-pill"
                            className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
