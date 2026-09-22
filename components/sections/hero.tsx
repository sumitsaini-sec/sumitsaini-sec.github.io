import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
export default function Hero(){return <section className="hero shell hero-clean" id="home">
  <div className="hero-clean-top"><p className="hero-identity">{portfolio.personal.name}<span>Aspiring SOC Analyst L1</span></p><span className="hero-availability"><i/>Open to opportunities</span></div>
  <h1>Turning alerts<br/>into <span>answers.</span></h1>
  <div className="hero-clean-note"><p>Cybersecurity & AI student building practical skills in detection, investigation and response.</p><div className="actions"><a className="button primary" href="#projects">View projects<ArrowDownRight size={18}/></a><a className="text-link" href={portfolio.resume.path} target="_blank" rel="noopener noreferrer">Resume<ArrowUpRight size={17}/></a></div></div>
</section>}
