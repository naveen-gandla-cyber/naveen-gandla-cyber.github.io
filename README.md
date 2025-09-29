# Naveen Gandla — Cybersecurity Portfolio

This repo hosts my portfolio site (matrix binary rain + radar + MITRE ATT&CK).

## Quick Deploy (GitHub Pages)

### Option A — User site (recommended)
Publishes at `https://<username>.github.io/`.

1. Create a public repo named `<username>.github.io` (replace with your GitHub username).
2. Upload `index.html` to the repo root.
3. Repo **Settings → Pages** → **Deploy from a branch**, Branch: `main`, Folder: `/`.
4. Wait ~1 minute, then open `https://<username>.github.io/`.

### Option B — Project site
Publishes at `https://<username>.github.io/<repo-name>/`.

1. Create a public repo with any name (e.g., `cyber-portfolio`).
2. Upload `index.html` to the repo root.
3. Settings → Pages → **Deploy from a branch**, Branch: `main`, Folder: `/`.
4. Visit the published URL shown by GitHub.

## Optional Files

- `resume.pdf` — If you place your resume in the repo root, the **Resume** button will work with `href="resume.pdf"`.
  - Or keep the current absolute link and host your resume elsewhere.
- `CNAME` — Only if you use a custom domain (put your domain name in this file).

## Edit MITRE Links

In `index.html`, find the `MITRE_LINKS` object and put your real URLs:

```js
const MITRE_LINKS = {
  'Initial Access': 'https://github.com/<you>/ir-drills',
  'Execution': 'https://github.com/<you>/soc-automation',
  'Persistence': 'https://github.com/<you>/cloud-blueprints',
  'T1566': 'https://github.com/<you>/ir-drills/tree/main/phishing',
  'T1189': 'https://github.com/<you>/ir-drills/tree/main/drive-by',
  'T1059.001': 'https://github.com/<you>/detections/powershell',
  'T1059': 'https://github.com/<you>/detections/cmd',
  'T1003': 'https://github.com/<you>/detections/credential-dumping',
  'T1547.001': 'https://github.com/<you>/persistence/run-keys'
};
```

## Local Preview

Just open `index.html` in your browser (no build step).
If you use a strict ad-blocker or corporate network, external CDNs (Tailwind/GSAP/D3) might be blocked — try another network if the page looks broken.

## License

Copyright © 2025 Naveen Gandla.
