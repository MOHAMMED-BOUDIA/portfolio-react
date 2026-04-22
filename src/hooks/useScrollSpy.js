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
    rootMargin = '-30% 0px -60% 0px',
    threshold = [0.1, 0.25, 0.5, 0.75],
    initialSection,
  } = {}
) => {
  const [activeSection, setActiveSection] = useState(initialSection || sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

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
        }
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

    return () => observer.disconnect();
  }, [initialSection, rootMargin, sectionIds, threshold]);

  return activeSection;
};

export default useScrollSpy;