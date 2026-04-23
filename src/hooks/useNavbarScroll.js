import { useEffect, useState } from 'react';

export const useNavbarScroll = (threshold = 14) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
};

export default useNavbarScroll;