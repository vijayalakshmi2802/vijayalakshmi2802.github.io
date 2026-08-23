# Vijayalakshmi B — Technical Trainer Portfolio

A React + Vite portfolio positioning Vijayalakshmi B as a professional
Technical Trainer for engineering colleges, FDPs, and corporate training.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy

The `dist/` folder after `npm run build` is a static site — deploy it to
Netlify, Vercel, GitHub Pages, or any static host.

## Structure

- `src/data/content.js` — all editable copy (stats, expertise lists,
  institutions, programs, testimonials, contact info). Update numbers or
  text here without touching components.
- `src/components/` — one component per section (Hero, About, Expertise,
  CloudTraining, ProgrammingDSA, DataAnalytics, FullStack,
  PlacementTraining, Institutions, FDP, CorporateTraining, Programs,
  Methodology, Testimonials, WhyPartner, Delivery, CTA, Contact, Footer).
- `src/components/NetworkMotif.jsx` — the recurring node/path signature
  graphic used in the hero and CTA, echoing the cloud architecture
  diagrams (VPC/subnet style) taught in the cloud training content.

## Notes

- The contact form opens the visitor's email client with a pre-filled
  message (mailto:) rather than submitting to a backend — wire it up to
  a form service (e.g. Formspree) or your own endpoint if you want
  submissions captured server-side instead.
- Icons are from `lucide-react`; LinkedIn/GitHub marks are small inline
  SVGs in `src/components/BrandIcons.jsx` since lucide-react no longer
  ships brand logos.
