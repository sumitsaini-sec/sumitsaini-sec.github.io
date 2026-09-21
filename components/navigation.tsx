'use client';
import { Github, Linkedin } from '@/components/brand-icons';
import { useEffect, useRef, useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { portfolio } from '@/data/portfolio';
import { ExternalLink } from './shared';
const links = ['Home','Projects','About','Skills','Experience','Resume','Contact'];
export default function Navigation() {
  const [open,setOpen] = useState(false);
  const [active,setActive] = useState<string | null>('home');
  const destination = useRef<string | null>(null);
  useEffect(() => {
    let frame = 0;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
    const update = () => {
      frame = 0;
      const header = document.querySelector('header')?.getBoundingClientRect().height ?? 72;
      const marker = header + Math.min(110, (window.innerHeight - header) * .2);
      const visible = sections.find(section => {
        const box = section.getBoundingClientRect();
        return box.top <= marker && box.bottom > marker;
      });
      // Unlisted sections intentionally have no active navigation item.
      const id = visible?.id ?? null;
      setActive(id && links.some(link => link.toLowerCase() === id) ? id : null);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    ['scroll','resize','hashchange','popstate'].forEach(event => window.addEventListener(event,schedule,{passive:true}));
    const observer = new ResizeObserver(schedule);
    const main = document.querySelector('main');
    if(main) observer.observe(main);
    schedule();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      ['scroll','resize','hashchange','popstate'].forEach(event => window.removeEventListener(event,schedule));
    };
  }, []);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="nav-wrap"><nav aria-label="Main navigation" className="nav shell">
    <a className="brand" href="#home" aria-label={`${portfolio.personal.name}, home`}><span className="monogram">S<span>.</span></span><span>{portfolio.personal.name}<span className="brand-sub">Security operations</span></span></a>
    <div className="nav-links">{links.map(link=><a aria-current={active===link.toLowerCase()?'location':undefined} key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</div>
    <div className="nav-actions"><ExternalLink href={portfolio.socials.github} className="icon-link desktop-social" label={`${portfolio.personal.name} on GitHub`}><Github size={18}/></ExternalLink><ExternalLink href={portfolio.socials.linkedin} className="icon-link desktop-social" label={`${portfolio.personal.name} on LinkedIn`}><Linkedin size={18}/></ExternalLink><a className="button small nav-resume" href={portfolio.resume.path} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16}/></a>
    <Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><button className="menu-button icon-link" aria-label="Open navigation"><Menu size={22}/></button></DialogTrigger><DialogContent className="mobile-menu" onCloseAutoFocus={event=>{
      if(!destination.current) return;
      event.preventDefault();
      const section = document.getElementById(destination.current);
      destination.current = null;
      if(section){section.setAttribute('tabindex','-1'); section.focus({preventScroll:true}); section.scrollIntoView({block:'start'});}
    }}><DialogTitle>Explore the portfolio</DialogTitle><DialogDescription>{portfolio.personal.name} · Security operations</DialogDescription><div className="mobile-links">{links.map(link=><a key={link} href={`#${link.toLowerCase()}`} aria-current={active===link.toLowerCase()?'location':undefined} onClick={()=>{destination.current=link.toLowerCase();setOpen(false)}}>{link}<ArrowUpRight size={18}/></a>)}</div><div className="actions"><ExternalLink href={portfolio.socials.github}><Github size={18}/>GitHub</ExternalLink><ExternalLink href={portfolio.socials.linkedin}><Linkedin size={18}/>LinkedIn</ExternalLink></div></DialogContent></Dialog></div>
  </nav></header></>;
}
