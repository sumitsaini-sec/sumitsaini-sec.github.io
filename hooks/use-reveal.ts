'use client';
import { useEffect } from 'react';
export function useReveal() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .06 });
    const elements = document.querySelectorAll<HTMLElement>('.section-heading,.project-card,.skill-block,.experience-item,.certificate,.resume-section');
    elements.forEach(element => {
      if (element.closest('details:not([open])')) return;
      if (element.getBoundingClientRect().top > window.innerHeight) {
        const siblings = Array.from(element.parentElement?.children ?? []);
        element.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(element) % 3, 2) * 75}ms`);
        element.classList.add('will-reveal');
        observer.observe(element);
      }
    });
    const revealAll = () => {
      if (motion.matches) elements.forEach(element => element.classList.add('revealed'));
    };
    motion.addEventListener('change', revealAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', revealAll);
      elements.forEach(element => element.classList.remove('will-reveal'));
    };
  }, []);
}
