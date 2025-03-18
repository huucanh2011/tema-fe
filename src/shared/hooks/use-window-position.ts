import { useLayoutEffect, useState } from 'react';

export const useWindowPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};
