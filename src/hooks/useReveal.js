import { useEffect, useRef } from 'react';

/** Revela um elemento ao entrar na viewport, respeitando movimento reduzido. */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.dataset.visible = 'true';
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.dataset.visible = 'true'; observer.disconnect(); }
    }, { threshold: 0.14 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
