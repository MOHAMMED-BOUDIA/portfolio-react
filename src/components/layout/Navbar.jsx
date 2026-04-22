import { useMemo, useState, useEffect, useRef } from 'react';
import { BriefcaseBusiness, Code2, FolderKanban, GraduationCap, Handshake, Home, Menu, Sparkles, UserRound, X } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { NAV_ITEMS, PERSONAL_INFO } from '../../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [clickedSection, setClickedSection] = useState('home');
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const desktopNavRef = useRef(null);
  const navLinksRef = useRef({});
  const scrolled = useNavbarScroll();
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const effectiveActiveSection = clickedSection || activeSection;

  const NAVBAR_HEIGHT = 80; // Height offset for smooth scrolling

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep click state synced with scroll spy state.
  useEffect(() => {
    if (activeSection) {
      setClickedSection(activeSection);
    }
  }, [activeSection]);

  // Update underline position for active desktop link.
  useEffect(() => {
    const updateUnderlinePosition = () => {
      const activeLink = navLinksRef.current[effectiveActiveSection];
      const container = desktopNavRef.current;
      if (!activeLink || !container) {
        return;
      }

      const linkRect = activeLink.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const left = linkRect.left - containerRect.left;
      const width = linkRect.width;

      if (width > 0 && left >= 0) {
        setUnderlineStyle({ width, left });
      }
    };

    updateUnderlinePosition();

    const handleResize = () => {
      updateUnderlinePosition();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [effectiveActiveSection]);

  // Handle smooth scroll navigation for both desktop and mobile
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setClickedSection(id);
    setIsOpen(false); // Close mobile menu if open
    
    const element = document.getElementById(id);
    if (element) {
      // Enable smooth scrolling globally
      document.documentElement.style.scrollBehavior = 'smooth';
      
      const yOffset = -NAVBAR_HEIGHT;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      // Scroll with smooth behavior
      window.scrollTo({ 
        top: y, 
        behavior: 'smooth',
        left: 0
      });

      // Reset scroll behavior after animation completes (optional)
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
      }, 1000);
    }
  };

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
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-all duration-300 ${
        scrolled
          ? 'border-slate-800/80 bg-slate-950/90 shadow-lg shadow-cyan-500/5'
          : 'border-slate-800/40 bg-slate-950/60'
      }`}
    >
      {/* Scroll Progress Bar - Cyan gradient */}
      <div
        className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-[width] duration-200 ease-out'
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav className='container-shell flex h-16 items-center justify-between md:h-20' aria-label='Primary navigation'>
        <a
          href='#home'
          className='relative z-[60] inline-flex items-center gap-2 text-lg font-black tracking-tight text-white md:text-xl hover:opacity-80 transition-opacity'
          aria-label='Go to home section'
          onClick={(e) => {
            handleNavClick(e, 'home');
            setIsOpen(false);
          }}
        >
          <span className='inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]'>
            <Code2 size={16} />
          </span>
          {PERSONAL_INFO.name}
          <span className='text-cyan-400'>.dev</span>
        </a>

        {/* Desktop Navigation */}
        <ul ref={desktopNavRef} className='hidden items-center gap-1 md:flex lg:gap-2 relative'>
          {/* Sliding animated underline */}
          <div
            className='absolute -bottom-2 h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400 rounded-full shadow-[0_0_16px_rgba(34,211,238,0.6)] pointer-events-none'
            style={{
              width: underlineStyle.width,
              left: underlineStyle.left,
              transition: 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />

          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              {(() => {
                const ItemIcon = navIconMap[item.id] || Code2;
                const isActive = effectiveActiveSection === item.id;
                return (
                  <a
                    ref={(el) => {
                      if (el) navLinksRef.current[item.id] = el;
                    }}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`group relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-350 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive 
                        ? 'text-cyan-300' 
                        : 'text-slate-400 hover:text-slate-100 hover:transition-colors hover:duration-250'
                    }`}
                  >
                    {/* Background glow on active - Cyan highlight */}
                    {isActive && (
                      <span className='absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-cyan-500/15 to-cyan-400/10 blur-sm shadow-[inset_0_0_20px_rgba(34,211,238,0.15)] transition-all duration-350' />
                    )}
                    
                    <ItemIcon size={15} aria-hidden='true' className={`transition-all duration-350 group-hover:scale-110 ${isActive ? 'text-cyan-400' : ''}`} />
                    {item.label}
                  </a>
                );
              })()}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          className='relative z-[60] inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/50 p-2.5 text-slate-100 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden'
          aria-expanded={isOpen}
          aria-controls='mobile-nav'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className='transition-transform duration-200'>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Enhanced Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 min-h-screen bg-slate-950/60 backdrop-blur-md md:hidden z-[50]'
          />
          
          {/* Mobile Menu Drawer */}
          <div
            id='mobile-nav'
            className='fixed inset-x-0 top-20 z-[60] flex flex-col border-b border-slate-800 bg-gradient-to-b from-slate-950/98 via-slate-950/95 to-slate-950/90 pb-8 md:hidden shadow-2xl overflow-hidden'
          >
              <ul className='container-shell space-y-2 pt-6'>
                {NAV_ITEMS.map((item) => {
                  const ItemIcon = navIconMap[item.id] || Code2;
                  const isActive = effectiveActiveSection === item.id;
                  
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`group flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-bold transition-colors duration-350 relative overflow-hidden ${
                          isActive 
                            ? 'text-cyan-300' 
                            : 'text-slate-400 hover:text-white hover:transition-colors hover:duration-250'
                        }`}
                      >
                        {/* Background gradient on active - Blue highlight */}
                        {isActive && (
                          <span className='absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 via-cyan-400/15 to-transparent shadow-[inset_0_0_20px_rgba(34,211,238,0.15)]' />
                        )}
                        
                        {/* Icon Container */}
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-350 ${
                            isActive 
                              ? 'border-cyan-500/40 bg-gradient-to-br from-cyan-500/25 to-cyan-400/15 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
                              : 'border-slate-800 bg-slate-900/50 text-slate-500 group-hover:border-slate-700 group-hover:bg-slate-800'
                          }`}
                        >
                          <ItemIcon size={18} />
                        </div>

                        <span className='flex-1'>{item.label}</span>
                        
                        {/* Active Indicator - Blue dot */}
                        {isActive && (
                          <span className='h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-pulse' />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
