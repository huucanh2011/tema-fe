'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const pad = (value: number) => value.toString().padStart(2, '0');

export const useCountdown = (targetDate: string | Date) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0)
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };

    return {
      days: pad(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: pad(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: pad(Math.floor((difference / 1000 / 60) % 60)),
      seconds: pad(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return timeLeft;
};
