'use client';
import { useEffect, useRef } from 'react';
export function CountOnce({value,pad=0}:{value:number;pad?:number}) {
  const ref=useRef<HTMLSpanElement>(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    const finish=()=>{if(el)el.textContent=String(value).padStart(pad,'0')};
    if(motion.matches) return;
    let frame=0; let start:number | undefined;
    const tick=(now:number)=>{start??=now;const progress=Math.min((now-start)/850,1);el.textContent=String(Math.round(value*(1-Math.pow(1-progress,3)))).padStart(pad,'0');if(progress<1)frame=requestAnimationFrame(tick)};
    const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){observer.disconnect();frame=requestAnimationFrame(tick)}},{threshold:.5});
    observer.observe(el);
    const changed=()=>{if(motion.matches){observer.disconnect();cancelAnimationFrame(frame);finish()}};
    motion.addEventListener('change',changed);
    return()=>{observer.disconnect();cancelAnimationFrame(frame);motion.removeEventListener('change',changed);finish()};
  },[value,pad]);
  return <><span className="sr-only">{String(value).padStart(pad,'0')}</span><span ref={ref} aria-hidden="true">{String(value).padStart(pad,'0')}</span></>;
}
