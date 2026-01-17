import { useEffect, useState } from 'react';

// 7 sections: Basics, Arrays/Objects, DOM, Async, ES6+, Advanced, Final Project
const TOTAL_SECTIONS = 7;

export const useJsProgress = () => {
  const [completedSections, setCompletedSections] = useState(() => {
    if (typeof window === 'undefined') return Array(TOTAL_SECTIONS).fill(false);

    try {
      const saved = localStorage.getItem('jsCompletedSections');
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
      localStorage.setItem('jsCompletedSections', JSON.stringify(completedSections));
      const completedCount = completedSections.filter(Boolean).length;
      const progress = Math.round((completedCount / TOTAL_SECTIONS) * 100);
      localStorage.setItem('jsProgress', String(progress));
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
