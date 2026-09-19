'use client';
import Navigation from './navigation';
import Hero from './sections/hero';
import { About,Skills } from './sections/profile';
import Projects from './sections/projects';
import Workflow from './sections/workflow';
import Investigation from './sections/investigation';
import { Experience,Journey,TechnicalWork } from './sections/background';
import { Resume,Contact,Footer } from './sections/contact';
import { useReveal } from '@/hooks/use-reveal';
export default function Portfolio(){useReveal();return <><Navigation/><main id="main"><Hero/><About/><Skills/><Projects/><Workflow/><Investigation/><Experience/><Journey/><TechnicalWork/><Resume/><Contact/></main><Footer/></>}
