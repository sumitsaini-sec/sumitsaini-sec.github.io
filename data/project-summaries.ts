// Concise versions of the existing project descriptions and implementation notes.
// These describe personal projects and lab exercises, not enterprise deployments.
export const projectSummaries: Record<string, {role:string; environment:string; work:string[]; evidence:string; outcome:string; finding?:string}> = {
  'sentinel-desk': {
    role:'Personal project', environment:'Simulated SOC · synthetic telemetry',
    work:['Connected alerts to identity, endpoint and network evidence.','Built bookmarks, investigation worksheets and case handoffs.'],
    evidence:'Interface captures · public source',
    outcome:'A training workspace for evidence review, documented verdicts and assessment feedback.',
  },
  'home-lab': {
    role:'Lab setup & assessment', environment:'Isolated VMware network',
    work:['Configured Kali, Windows and Metasploitable lab hosts.','Documented Nmap / Nikto findings and remediation advice.'],
    evidence:'Scan capture · raw output · assessment report',
    finding:'The supplied Nmap capture records anonymous FTP access. The assessment did not perform exploitation.',
    outcome:'A documented reconnaissance assessment and a controlled environment for further defensive practice.',
  },
  'soc-dashboard': {
    role:'Personal project', environment:'Local dashboard · simulated alerts',
    work:['Organized alert context and structured analyst notes.','Added new-alert creation and saved case status.'],
    evidence:'Project description in resume',
    outcome:'An earlier practice dashboard for consistent alert triage and incident notes; described in the resume.',
  },
};
