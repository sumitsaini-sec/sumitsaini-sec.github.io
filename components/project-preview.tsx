import { ArrowRight, Fingerprint, Radar, Network, FileText, ShieldCheck, LockKeyhole, Terminal, Radio } from 'lucide-react';
import { ProjectVisual } from './shared';
import type { Project } from '@/types/portfolio';
export default function ProjectPreview({project}:{project:Project}){
 if(project.kind==='sentinel')return <ProjectVisual project={project}/>;
 if(project.kind==='incident')return <div className="case-art incident-art"><div className="art-label"><span>IR-SIM-004</span><span>SYNTHETIC CASE</span></div><ol className="incident-chain">
   <li><span className="chain-icon"><LockKeyhole size={17}/></span><strong>18 failed logins</strong><small>4625</small></li>
   <li><span className="chain-icon"><Fingerprint size={17}/></span><strong>Successful login</strong><small>4624</small></li>
   <li><span className="chain-icon"><Terminal size={17}/></span><strong>PowerShell process</strong><small>Sysmon 1</small></li>
   <li><span className="chain-icon"><Network size={17}/></span><strong>DNS + network</strong><small>Sysmon 22 / 3</small></li>
 </ol><p className="art-caption">One linked session. A documented response plan.</p></div>;
 if(project.kind==='packet')return <div className="case-art packet-art"><div className="art-label"><span>PYTHON + SCAPY</span><span>PASSIVE MONITOR</span></div><div className="packet-flow"><div><Radio size={29}/><strong>Capture</strong><small>Traffic</small></div><ArrowRight size={20}/><div><ShieldCheck size={29}/><strong>Correlate</strong><small>IP ↔ MAC</small></div><ArrowRight size={20}/><div><FileText size={29}/><strong>Record</strong><small>Logs + JSON</small></div></div><div className="protocol-strip">{['TCP','UDP','ICMP','ARP','DNS'].map(x=><span key={x}>{x}</span>)}</div><p className="art-caption">Mapping changes become reviewable alerts.</p></div>;
 return <div className="case-art recon-art"><div className="recon-radar" aria-hidden="true"><Radar size={46}/></div><div><span className="art-label">ISOLATED LAB</span><strong>Nmap + Nikto</strong><p>Services → findings → remediation</p></div></div>;
}
