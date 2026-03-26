import { useEffect, useState } from 'react';

export const useNavbarScroll = (threshold = 14) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
};

export default useNavbarScroll;