import { portfolio } from '@/data/portfolio';
import { SectionHeading, ExternalLink } from '@/components/shared';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
const highlights=['Python security utilities, defensive exercises and clear technical reports.','Network-security tasks, threat analysis and a Windows / Kali lab foundation.'];
export function Experience(){return <section id="experience" className="section experience-section"><div className="shell">
  <div className="experience-header"><SectionHeading number="04" label="EXPERIENCE" title="Learning through doing."/><span className="section-aside">Cybersecurity internships</span></div>
  <div className="experience-rail">{portfolio.experience.map((e,i)=><article className="experience-card" key={e.organization}>
    <div className="experience-order" aria-hidden="true">0{i+1}</div><div className="experience-top"><span className="experience-duration">{e.duration}</span>{e.dates&&<span>{e.dates}</span>}</div>
    <h3>{e.organization}</h3><p className="experience-role">{e.role}</p><p className="experience-highlight">{highlights[i]}</p>
    <details className="section-details experience-more"><summary>My work here</summary><ul>{e.responsibilities.map(r=><li key={r}>{r}</li>)}</ul><div className="tags">{e.technologies.map(t=><span key={t}>{t}</span>)}</div>{e.projects.map(link=><ExternalLink key={link} href={link}>Internship work<ArrowUpRight size={15}/></ExternalLink>)}{e.certificate&&<ExternalLink href={e.certificate}>Certificate<ArrowUpRight size={15}/></ExternalLink>}{e.verificationUrl&&<ExternalLink href={e.verificationUrl}>Verify experience<ArrowUpRight size={15}/></ExternalLink>}</details>
  </article>)}</div>
  <details className="section-details training-drawer"><summary><GraduationCap size={21}/> Additional training <span>2 completed job simulations</span></summary><div className="training-mini-grid">{portfolio.certifications.map(c=><article key={c.organization}><span className="tiny-label">{c.organization}</span><h4>{c.name}</h4><p>{c.skills.join(' · ')}</p><small>{c.date} · Job simulation</small>{c.credentialUrl&&<ExternalLink href={c.credentialUrl}>Credential<ArrowUpRight size={15}/></ExternalLink>}</article>)}</div><p className="training-note">Practical simulations, separate from employment.</p></details>
</div></section>}
