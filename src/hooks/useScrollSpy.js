import { useEffect, useState } from 'react';

/**
 * Generic scroll spy hook backed by IntersectionObserver.
 * Tracks the most visible observed section and returns its id.
 *
 * @param {string[]} sectionIds
 * @param {Object} [options]
 * @param {string} [options.rootMargin]
 * @param {number|number[]} [options.threshold]
 * @param {string} [options.initialSection]
 * @returns {string}
 */
export const useScrollSpy = (
  sectionIds,
  {
    rootMargin = '-15% 0px -55% 0px',
    threshold = [0, 0.1, 0.25, 0.5],
    initialSection,
    offset = 120,
  } = {}
) => {
  const [activeSection, setActiveSection] = useState(initialSection || sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

    let rafId = 0;

    const getCurrentSectionFromScroll = () => {
      const scrollPosition = window.scrollY + offset;
      let currentId = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        if (element.offsetTop <= scrollPosition) {
          currentId = id;
        }
      });

      if (currentId) {
        setActiveSection((prev) => (prev === currentId ? prev : currentId));
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        getCurrentSectionFromScroll();
        rafId = 0;
      });
    };

    const visibilityById = new Map(sectionIds.map((id) => [id, 0]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target?.id;
          if (!id) return;
          visibilityById.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let nextSection = initialSection || sectionIds[0];
        let maxRatio = 0;

        sectionIds.forEach((id) => {
          const ratio = visibilityById.get(id) || 0;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            nextSection = id;
          }
        });

        if (maxRatio > 0 && nextSection) {
          setActiveSection(nextSection);
          return;
        }

        // Fallback for edge cases where intersection ratios are all 0.
        getCurrentSectionFromScroll();
      },
      {
        rootMargin,
        threshold,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    getCurrentSectionFromScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [initialSection, offset, rootMargin, sectionIds, threshold]);

  return activeSection;
};

export default useScrollSpy;