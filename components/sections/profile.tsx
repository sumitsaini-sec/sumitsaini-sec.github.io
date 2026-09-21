import { portfolio, skills, toolGroups } from '@/data/portfolio';
import { SectionHeading } from '@/components/shared';
import { Activity, Search, ShieldCheck, Network, Monitor, Code2, GraduationCap, ChevronDown } from 'lucide-react';
const icons:Record<string,typeof Activity>={activity:Activity,search:Search,shield:ShieldCheck,network:Network,monitor:Monitor,code:Code2};
const previews=['Splunk · alert triage','Phishing · endpoint evidence','Verdicts · clear handoffs','TCP/IP · DNS · subnetting','Windows · Linux · virtual labs','Python · SQL fundamentals'];
export function About(){return <section id="about" className="section about-section"><div className="shell about-editorial">
  <div><SectionHeading number="02" label="BEHIND THE WORK" title={'Curious by nature.\nDefensive by choice.'}/></div>
  <div className="about-note"><p>I’m Sumit, a Cybersecurity & AI student building practical skills for a SOC L1 role.</p><div className="education-compact"><GraduationCap size={23}/><div><strong>{portfolio.personal.education}</strong><span>{portfolio.personal.university}</span><small>{portfolio.personal.educationPeriod}</small></div></div></div>
</div></section>}
export function Skills(){return <section id="skills" className="section skills-section"><div className="shell">
  <div className="heading-row"><SectionHeading number="03" label="CAPABILITIES" title="The analyst toolkit."/><span className="section-aside">Hands-on practice.<br/>Growing every day.</span></div>
  <div className="capability-grid">{skills.map((s,i)=>{const Icon=icons[s.icon];return <details className="capability" key={s.title}><summary><span className="capability-icon"><Icon size={22}/></span><span className="capability-label"><strong>{s.title}</strong><small>{previews[i]}</small></span><ChevronDown className="disclosure-chevron" size={18}/></summary><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul></details>})}</div>
  <details className="section-details toolkit-details"><summary>Tools & hands-on exposure</summary><div className="tools-grid">{toolGroups.map(g=><div className="tool-group" key={g.title}><h4>{g.title}</h4>{g.tools.map(t=><div className="tool-row" key={t.name}><span>{t.name}</span><span className={`exposure ${t.level.toLowerCase().replace(' ','-')}`}>{t.level}</span></div>)}</div>)}</div><p className="tool-note">Exposure reflects personal projects and labs.</p></details>
</div></section>}
