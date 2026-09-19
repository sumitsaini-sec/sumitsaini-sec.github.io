// Entire dataset is synthetic. Documentation-range IP; no real lookup or response action.
export const demo = {
 id:'DEMO-001',title:'Failed logins followed by a successful login',severity:'High',host:'WIN-USER-01',user:'admin',ip:'203.0.113.42',destination:'192.0.2.10',date:'2026-09-01',window:'22:14:00–22:16:00 UTC',
 events:[
 {ref:'AUTH-01',time:'22:14:03',eventId:'4625',result:'Failed',detail:'Bad password · Logon type 10',outcome:'failure'},
 {ref:'AUTH-02',time:'22:14:08',eventId:'4625',result:'Failed',detail:'Bad password · Logon type 10',outcome:'failure'},
 {ref:'AUTH-03',time:'22:14:15',eventId:'4625',result:'Failed',detail:'Bad password · Logon type 10',outcome:'failure'},
 {ref:'AUTH-04',time:'22:14:22',eventId:'4625',result:'Failed',detail:'Bad password · Logon type 10',outcome:'failure'},
 {ref:'AUTH-05',time:'22:15:01',eventId:'4624',result:'Success',detail:'Remote interactive logon · Type 10',outcome:'success'},
 ],
 report:[
 ['Alert','DEMO-001 · Failed logins followed by a successful login · High'],
 ['Time','2026-09-01, 22:14:00–22:16:00 UTC'],
 ['User','admin · privileged local account in this synthetic host inventory'],
 ['Host','WIN-USER-01 · destination 192.0.2.10'],
 ['Source IP','203.0.113.42 · documentation-only address, not a real IOC'],
 ['Observed activity','Four 4625 failures followed by one 4624 success in 58 seconds; same host, username, source IP and logon type 10 [AUTH-01–05].'],
 ['Evidence reviewed','Synthetic Windows Security events AUTH-01–05; synthetic host inventory HOST-01; IP context IP-01; two-minute timeline.'],
 ['Scope','One host and one account in the supplied dataset. Other hosts, accounts and longer-term activity are not covered.'],
 ['Verdict','Needs more investigation. Possible password-guessing activity, but this sequence alone does not establish maliciousness or compromise.'],
 ['Confidence','High confidence in the observed sequence; low confidence in attribution or malicious intent.'],
 ['Action taken','Reviewed the simulated records. No account, host or network response was performed.'],
 ['Recommended action','Preserve relevant logs and request an L2 review. Consider containment only under an authorized playbook if compromise is corroborated.'],
 ['Escalation reason','Privileged account success after repeated failures leaves material unresolved risk. Post-login process telemetry and authorization are unavailable.'],
 ['Recommended next step','L2: validate the admin session with the account owner; review process/network activity after 22:15:01 UTC; extend authentication pivots to related hosts and a wider time window.'],
 ],
};
