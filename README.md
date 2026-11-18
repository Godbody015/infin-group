# Infin Group website

Static, responsive site. No build step.

```
infin-group/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/ (logo-on-light.png, logo-on-dark.png)
├── _headers        security + cache headers
├── robots.txt
└── wrangler.jsonc  Cloudflare config
```

## Deploy to Cloudflare (Workers static assets)
1. `npm i -g wrangler && wrangler login`
2. From this folder: `wrangler deploy`
3. Custom domain: Workers & Pages → infin-group → Settings → Domains → add `infingroup.net.za`.

## Deploy via GitHub (auto-deploy)
Push this folder to a repo, then in Cloudflare: Workers & Pages → Create → Connect to Git.
Build command: none. Deploy command: `npx wrangler deploy`.
