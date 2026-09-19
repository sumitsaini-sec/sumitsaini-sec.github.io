import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
await rm(resolve(root, 'docs'), { recursive: true, force: true });
await mkdir(resolve(root, 'docs'), { recursive: true });
await cp(resolve(root, 'out'), resolve(root, 'docs'), { recursive: true });
const csp = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'";
for (const name of ['index.html','404.html']) {
 const file = resolve(root, 'docs', name);
 const html = await readFile(file, 'utf8');
 await writeFile(file, html.replace('<head>', `<head><meta http-equiv="Content-Security-Policy" content="${csp}"><meta name="referrer" content="strict-origin-when-cross-origin">`));
}
await writeFile(resolve(root,'docs','.nojekyll'), '');
console.log('GitHub Pages output ready in docs/');
