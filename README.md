# Sumit Saini — Cybersecurity Portfolio

Complete portfolio prepared for free GitHub Pages hosting. This package is ready to upload; the GitHub Pages address is not live until repository setup and publishing succeed.

## Publish without installing anything

1. Create a **public** repository in the `sumitsaini-sec` account named exactly **sumitsaini-sec.github.io**. Do not replace an existing repository without checking its content.
2. Upload the contents of this package into that repository. Keep `docs` at repository root, not inside another folder. `docs/index.html` must exist after upload.
3. Open repository **Settings → Pages**. Choose **Deploy from a branch**, select **main** and **/docs**, then **Save**.
4. Wait for GitHub's Pages deployment to complete. Open the address shown by **Visit site** and check the project case studies, SOC demo, mobile menu and resume.
5. Only after the new site works, replace the old portfolio link in LinkedIn and the GitHub profile README with the verified new address. Update the resume portfolio link too.

Expected address after successful setup: `https://sumitsaini-sec.github.io`.
GitHub Free requires this repository to be public. No domain purchase, API key or paid server is needed. There is no contact-form email service: the existing validated email-draft flow is preserved.

## Included

- `docs/`: complete ready-to-publish static site, images, local fonts and resume.
- `app/`, `components/`, `data/`, `hooks/`, `lib/`, `types/`, `public/`, `vendor/`: editable source and assets.
- `data/portfolio.ts`: central profile, tools, projects, experience and contact configuration.
- `next.config.ts`: standard Next.js static export; no Sites-specific runtime required.

## Edit and rebuild

Use Node.js 22.13 or newer and the pnpm version in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm build
```

Commit the refreshed `docs/` folder to publish updates. `pnpm dev` starts local source development. Do not upload `node_modules`, `.next`, or environment files.

## Validation and hosting differences

- Production static export and TypeScript checks passed.
- All rendered local asset references and anchor targets were checked against the export.
- Canonical, sitemap and social metadata target the planned GitHub Pages address.
- Existing layout and interaction components are preserved from the reviewed portfolio. A fresh browser check of this static export was unavailable; repeat the short checks in step 4 before sharing.
- GitHub Pages supplies hosting headers. The original Worker response-header configuration does not transfer. This export includes a meta Content Security Policy and referrer policy; it does not claim custom HSTS, Permissions-Policy or frame-ancestors headers.
- Linked project demos keep their actual project URLs. Moving this portfolio does not move Sentinel Desk itself.
- The current resume still links to the existing working portfolio until the new deployment is verified.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
