'use client';
import { useState } from 'react';
import { workflow } from '@/data/portfolio';
import { SectionHeading } from '@/components/shared';
import { ArrowRight, Crosshair, Check, ChevronDown } from 'lucide-react';
function Detail({index}:{index:number}) {
  const item=workflow[index];
  return <><div className="workflow-detail-top"><Crosshair size={22}/><span>STAGE {String(index+1).padStart(2,'0')} / {workflow.length}</span></div><h3>{item.title}</h3><p>{item.detail}</p><blockquote>“{item.question}”</blockquote><div className="workflow-artifact"><Check size={16}/><span>{item.artifact}</span></div></>;
}
export default function Workflow(){
  const [step,setStep]=useState(0);
  const [mobileStep,setMobileStep]=useState<number | null>(0);
  return <section className="section method-section" id="workflow"><div className="shell"><div className="method-intro"><SectionHeading number="05" label="METHOD" title="From signal to a clear handoff."/><div className="method-phases"><span><b>01</b>Validate</span><ArrowRight size={18}/><span><b>02</b>Investigate</span><ArrowRight size={18}/><span><b>03</b>Document</span></div></div><details className="section-details method-drawer"><summary>Explore my investigation process <span>10 stages</span></summary><div className="workflow-layout">
    <div className="workflow-interactive"><div className="workflow-steps" role="group" aria-label="Investigation stages">{workflow.map((item,index)=><button key={item.title} className={`workflow-step ${step===index?'active':''}`} onClick={()=>setStep(index)} aria-pressed={step===index} aria-controls="workflow-detail"><span>{String(index+1).padStart(2,'0')}</span>{item.title}{step===index&&<ArrowRight size={16}/>}</button>)}</div><div className="workflow-detail" id="workflow-detail" role="region" aria-live="polite" aria-label="Selected investigation stage"><div className="workflow-detail-inner" key={step}><Detail index={step}/></div></div></div>
    <div className="workflow-mobile">{workflow.map((item,index)=><div className={`workflow-accordion ${mobileStep===index?'active':''}`} key={item.title}><h3><button aria-expanded={mobileStep===index} aria-controls={`mobile-stage-${index}`} id={`mobile-stage-trigger-${index}`} onClick={()=>setMobileStep(mobileStep===index?null:index)}><span>{String(index+1).padStart(2,'0')}</span>{item.title}<ChevronDown size={18}/></button></h3><div hidden={mobileStep!==index} id={`mobile-stage-${index}`} role="region" aria-labelledby={`mobile-stage-trigger-${index}`}><p>{item.detail}</p><blockquote>“{item.question}”</blockquote><span className="workflow-artifact"><Check size={16}/>{item.artifact}</span></div></div>)}</div>
  </div></details></div></section>;
}
