'use client';
import { useState, type PointerEvent } from 'react';
import { Github } from '@/components/brand-icons';
import { portfolio } from '@/data/portfolio';
import { selectedProjects, additionalProjects } from '@/data/selected-projects';
import ProjectPreview from '@/components/project-preview';
import { projectSummaries } from '@/data/project-summaries';
import { ArrowUpRight, FileText, X, ChevronDown, ShieldCheck, LockKeyhole } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { SectionHeading, ExternalLink } from '@/components/shared';
import type { Project } from '@/types/portfolio';
function CaseStudy({project:p}:{project:Project}){
  const c=p.caseStudy;const summary=projectSummaries[p.id];
  return <DialogContent className="case-modal" showCloseButton={false}>
    <DialogClose className="case-close" aria-label="Close case study"><X size={20}/></DialogClose>
    <div className="case-intro"><span className="eyebrow">CASE STUDY / {p.number} · {p.status}</span><DialogTitle>{p.name}</DialogTitle><DialogDescription>{p.subtitle}</DialogDescription></div>
    <div className="case-columns"><div><h3>Problem</h3><p>{c.problem}</p></div><div><h3>Environment</h3><p>{summary.environment}</p><p>{c.overview}</p></div></div>
    <div className="case-section"><h3>Objective</h3><p>{c.objective}</p></div>
    <details className="section-details architecture-details"><summary>Architecture & tools <span>View technical structure</span></summary><ol className="architecture-list">{c.architecture.map((a,i)=><li key={a}><span>{String(i+1).padStart(2,'0')}</span>{a}</li>)}</ol><div className="tags">{c.tools.map(t=><span key={t}>{t}</span>)}</div></details>
    <div className="case-section"><h3>Investigation approach</h3><ol className="numbered-list">{c.workflow.map(x=><li key={x}>{x}</li>)}</ol></div>
    <div className="case-section"><h3>Evidence reviewed</h3>{p.screenshots.length?p.screenshots.map(s=><figure key={s.src}><a href={s.src} target="_blank" rel="noopener noreferrer" className="evidence-image" aria-label={`Open full-size evidence: ${s.alt}`}><img src={s.src.replace('.png','-1600.webp')} srcSet={`${s.src.replace('.png','-960.webp')} 960w, ${s.src.replace('.png','-1600.webp')} 1600w`} sizes="(max-width: 700px) 90vw, 800px" alt={s.alt} width={s.width} height={s.height} loading="lazy" decoding="async"/></a><figcaption>{s.caption}</figcaption><div className="evidence-image-links"><ExternalLink href={s.src}>Full-size original<ArrowUpRight size={16}/></ExternalLink>{s.sourceUrl&&<ExternalLink href={s.sourceUrl}>Original on GitHub<ArrowUpRight size={16}/></ExternalLink>}</div></figure>):<div className="evidence-note"><FileText size={20}/><p>This earlier project is documented in my resume. A standalone repository and screenshots are not available here.</p><ExternalLink href={portfolio.resume.path}>View resume<ArrowUpRight size={16}/></ExternalLink></div>}{p.evidenceLinks&&<div className="evidence-resources">{p.evidenceLinks.map(e=><ExternalLink href={e.url} key={e.url}><FileText size={16}/>{e.label}<ArrowUpRight size={16}/></ExternalLink>)}</div>}</div>
    <div className="case-section"><h3>Actions performed</h3><ul>{c.implementation.map(x=><li key={x}>{x}</li>)}</ul></div>
    {summary.finding&&<div className="case-section"><h3>Findings</h3><p>{summary.finding}</p></div>}
    <div className="case-section"><h3>Outcome</h3><p>{summary.outcome}</p></div>
    <div className="case-columns"><div><h3>Challenges</h3><p>{c.challenges}</p></div><div><h3>Approach to improvement</h3><p>{c.solutions}</p></div></div>
    <div className="case-section"><h3>What I learned</h3><ul>{c.learnings.map(x=><li key={x}>{x}</li>)}</ul></div>
    <details className="section-details case-next"><summary>Next steps</summary><ul>{c.future.map(x=><li key={x}>{x}</li>)}</ul></details>
    <p className="source-note">{c.sourceNote}</p>
    <div className="actions">{p.github&&<ExternalLink href={p.github} className="button"><Github size={18}/>GitHub repository<ArrowUpRight size={16}/></ExternalLink>}{p.demo&&<ExternalLink href={p.demo} className="text-link">Open hosted lab<ArrowUpRight size={16}/></ExternalLink>}</div>
  </DialogContent>;
}
function ProjectCard({project:p}:{project:Project}) {
  const [expanded,setExpanded]=useState(false);
  const summary=projectSummaries[p.id];
  const featured=p.id==='sentinel-desk';
  const medium=p.id==='home-lab';
  const moveGlow=(event:PointerEvent<HTMLElement>)=>{
    if(event.pointerType==='touch') return;
    const card=event.currentTarget; const rect=card.getBoundingClientRect();
    card.style.setProperty('--glow-x',`${event.clientX-rect.left}px`);
    card.style.setProperty('--glow-y',`${event.clientY-rect.top}px`);
  };
  return <article className={`project-card showcase-card project-${p.kind} ${featured?'featured-project':medium?'medium-project':'large-case'}`} data-project-id={p.id} onPointerMove={moveGlow}>
    <Dialog>
      <div className="project-image"><ProjectPreview project={p}/></div>
      <div className="project-content">
        <span className="project-status">PROJECT {p.number} / {p.status.toUpperCase()}</span>
        <h3 className="project-title"><DialogTrigger asChild><button className="project-title-button">{p.name}<ArrowUpRight size={22}/></button></DialogTrigger></h3>
        {(p.kind==='sentinel'||p.kind==='packet')&&<p className="project-subtitle">{p.subtitle}</p>}
        <p className="project-description">{p.description}</p>
        <div className="tags" aria-label="Tools and concepts">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
        <div className="project-links">
          <DialogTrigger asChild><button className="text-link">Case study<ArrowUpRight size={16}/></button></DialogTrigger>
          {p.github&&<ExternalLink href={p.github} label={`${p.name} on GitHub`}><Github size={16}/>GitHub</ExternalLink>}
          {p.demo&&<ExternalLink href={p.demo}>Live lab<ArrowUpRight size={16}/></ExternalLink>}
          <button className="project-expand" aria-label={`${expanded?'Collapse':'Expand'} ${p.name} details`} aria-expanded={expanded} aria-controls={`project-details-${p.id}`} onClick={()=>setExpanded(!expanded)}><ChevronDown size={20}/></button>
        </div>
      </div>
      <div className="project-expanded" id={`project-details-${p.id}`} hidden={!expanded}>
        <div><span className="tiny-label">MY ROLE</span><p>{summary.role}</p><small>{summary.environment}</small></div>
        <div><span className="tiny-label">WHAT I BUILT</span><ul>{summary.work.map(line=><li key={line}>{line}</li>)}</ul></div>
        <div><span className="tiny-label">EVIDENCE</span><p>{summary.evidence}</p>{p.evidenceLinks?.map(e=><ExternalLink key={e.url} href={e.url}>{e.label}<ArrowUpRight size={14}/></ExternalLink>)}</div>
      </div>
      <CaseStudy project={p}/>
    </Dialog>
  </article>;
}
export default function Projects(){
  return <section id="projects" className="section projects-section"><div className="shell">
    <div className="heading-row"><SectionHeading number="01" label="SELECTED WORK" title="Built. Tested. Documented."/></div>
    <div className="project-showcase">{selectedProjects.map(p=><ProjectCard key={p.id} project={p}/>)}</div>
    <div className="more-projects"><h3>More projects</h3><div className="small-project-grid">{additionalProjects.map(p=>{const Icon=p.id==='antivirus'?ShieldCheck:LockKeyhole;return <ExternalLink key={p.id} href={p.url} className="small-project"><span className="small-project-icon"><Icon size={23}/></span><div><span className="tiny-label">{p.tag}</span><h4>{p.name}</h4><p>{p.description}</p></div><ArrowUpRight size={19}/></ExternalLink>})}</div></div>
  </div></section>;
}
