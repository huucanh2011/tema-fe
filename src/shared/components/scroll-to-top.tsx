'use client';

import { useCallback } from 'react';

import { useWindowPosition } from '@/shared/hooks/use-window-position';
import { cn } from '@/shared/utils/string';

export const ScrollToTop = () => {
  const scrollY = useWindowPosition();

  const onClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      className={cn(
        'fixed bottom-10 right-0 z-50 transition-transform duration-300 md:right-2 xl:right-20',
        scrollY > 200 && 'rotate-180',
        scrollY <= 200 && 'rotate-0',
      )}
      onClick={onClick}
    >
      <img src="/icons/ic-arrow-circle-down.png" alt="Scroll to top" />
    </button>
  );
};
