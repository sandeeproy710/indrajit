# Portfolio (React scaffold)

This repository contains a static portfolio and a newly scaffolded React (Vite) application.

Quick start (after installing dependencies):

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

The original static `index.html` was preserved as `public/index.static.html`.

Assets (images, CSS, scripts) remain in the `assets/` folder and are imported by the React app.

Next steps: continue migrating sections into React components and verify the production build.

Deployment
----------

Build the production bundle and deploy the `dist/` folder to a static host (Vercel or Netlify are recommended).

1. Build locally:

```bash
npm install
npm run build
```

2. Deploy to Vercel (recommended):

- In the Vercel dashboard, create a new project and import this repository.
- Set the Framework Preset to "Other" or let Vercel auto-detect Vite.
- Build Command: `npm run build`
- Output Directory: `dist`
- (Optional) Add `NODE_ENV=production` in Environment Variables.

Alternatively, use the included `vercel.json` to instruct Vercel to serve `dist`.

3. Deploy to Netlify:

- In Netlify, create a new site from Git and connect this repository.
- Build command: `npm run build`
- Publish directory: `dist`
- (Optional) add a `netlify.toml` (included) to configure the build/publish settings.

Notes & Troubleshooting
- If you see the Vite config ESM/CJS warning when building, add `"type": "module"` to `package.json` or rename `vite.config.js` to `vite.config.mjs`.
- If build fails due to locked native binaries on Windows (esbuild/rollup), stop any Node processes and reinstall node_modules.
- For SPA routing on Netlify/Vercel, the included `vercel.json` sets a simple catch-all route; Netlify auto-handles SPA routing when using the `dist` folder.

If you want, I can also create a short deployment script or push a GitHub Actions workflow for CI/CD.