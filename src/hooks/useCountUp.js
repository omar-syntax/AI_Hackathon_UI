import { useEffect, useRef, useState } from "react";

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const rafRef = useRef(null);

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setValue(eased * target);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { value, start };
}
