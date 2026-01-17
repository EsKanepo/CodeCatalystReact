import { useEffect, useState } from 'react';

// 5 sections: Fundamentals, State & Events, Hooks, Routing & API, Final Project
const TOTAL_SECTIONS = 5;

export const useReactProgress = () => {
  const [completedSections, setCompletedSections] = useState(() => {
    if (typeof window === 'undefined') return Array(TOTAL_SECTIONS).fill(false);

    try {
      const saved = localStorage.getItem('reactCompletedSections');
      if (!saved) return Array(TOTAL_SECTIONS).fill(false);
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return Array(TOTAL_SECTIONS).fill(false);
      const normalized = Array(TOTAL_SECTIONS)
        .fill(false)
        .map((_, i) => Boolean(parsed[i]));
      return normalized;
    } catch {
      return Array(TOTAL_SECTIONS).fill(false);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('reactCompletedSections', JSON.stringify(completedSections));
      const completedCount = completedSections.filter(Boolean).length;
      const progress = Math.round((completedCount / TOTAL_SECTIONS) * 100);
      localStorage.setItem('reactProgress', String(progress));
    } catch {
      // ignore
    }
  }, [completedSections]);

  const toggleSection = (index) => {
    setCompletedSections((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const resetProgress = () => {
    setCompletedSections(Array(TOTAL_SECTIONS).fill(false));
  };

  return { completedSections, toggleSection, resetProgress };
};
