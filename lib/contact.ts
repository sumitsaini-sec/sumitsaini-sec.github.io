export type ContactValues={name:string;email:string;subject:string;message:string};
export type ContactErrors=Partial<Record<keyof ContactValues,string>>;
export function cleanInput(text:string){return text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,'').trim();}
export function validateContact(values:ContactValues):ContactErrors{const errors:ContactErrors={};if(cleanInput(values.name).length<2)errors.name='Please enter at least 2 characters.';if(values.name.length>100)errors.name='Keep your name under 100 characters.';if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())||values.email.length>254)errors.email='Please enter a valid email address.';if(cleanInput(values.subject).length<3)errors.subject='Please add a subject of at least 3 characters.';if(values.subject.length>150)errors.subject='Keep the subject under 150 characters.';if(cleanInput(values.message).length<20)errors.message='Please include at least 20 characters about the opportunity.';if(values.message.length>3000)errors.message='Keep your message under 3,000 characters.';return errors;}
function emailParts(v:ContactValues){
  return {
    subject:cleanInput(v.subject).replace(/[\r\n]/g,' '),
    body:`Hello Sumit,\n\n${cleanInput(v.message)}\n\n${cleanInput(v.name)}\n${cleanInput(v.email)}`,
  };
}
export function buildEmailDraft(recipient:string,v:ContactValues){
  const {subject,body}=emailParts(v);
  return `To: ${recipient}\nSubject: ${subject}\n\n${body}`;
}
export function buildMailto(recipient:string,v:ContactValues){
  const {subject,body}=emailParts(v);
  return `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
