import { useScrollSpy } from './useScrollSpy';

/**
 * Hook to track which section is currently active for navbar highlighting.
 * Keeps the public API used by the navbar while delegating to the generic scroll spy hook.
 *
 * @param {string[]} sectionIds - Array of section element IDs to watch
 * @returns {string} - The ID of the currently active section
 */
export const useActiveSection = (sectionIds) => useScrollSpy(sectionIds);

export default useActiveSection;
