import { useEffect, useState } from 'react';

const TOTAL_WEEKS = 8;

export const useHtmlProgress = () => {
  const [completedWeeks, setCompletedWeeks] = useState(() => {
    if (typeof window === 'undefined') return Array(TOTAL_WEEKS).fill(false);

    try {
      const saved = localStorage.getItem('htmlCompletedWeeks');
      if (!saved) return Array(TOTAL_WEEKS).fill(false);
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return Array(TOTAL_WEEKS).fill(false);
      const normalized = Array(TOTAL_WEEKS)
        .fill(false)
        .map((_, i) => Boolean(parsed[i]));
      return normalized;
    } catch {
      return Array(TOTAL_WEEKS).fill(false);
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('htmlCompletedWeeks', JSON.stringify(completedWeeks));
      const completedCount = completedWeeks.filter(Boolean).length;
      const progress = Math.round((completedCount / TOTAL_WEEKS) * 100);
      localStorage.setItem('htmlProgress', String(progress));
    } catch {
      // abaikan error localStorage
    }
  }, [completedWeeks]);

  const toggleWeek = (index) => {
    setCompletedWeeks((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const resetProgress = () => {
    setCompletedWeeks(Array(TOTAL_WEEKS).fill(false));
  };

  return { completedWeeks, toggleWeek, resetProgress };
};
