import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export const useCountUp = ({ 
  end, 
  start = 0, 
  duration = 1600, 
  suffix = '',
  decimals = 0 
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = performance.now();
            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress = easeOutCubic(progress);
              const value = start + (end - start) * easedProgress;
              
              setCount(decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.round(value));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, start, duration, hasAnimated, decimals]);

  return { count: `${count}${suffix}`, ref };
};
