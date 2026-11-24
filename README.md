# Nico Buenaventura – Portfolio

Personal portfolio built from the `brewed-ops/portfolio-template` (Vite, React, TypeScript, Three.js, GSAP). Content comes from Nico's résumé.

## Run it

```
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
```

## Where things live

| What | Where |
| ---- | ----- |
| Name, headline, email, LinkedIn, stats | `src/data/profile.ts` |
| Work history | `src/data/work.ts` |
| Skills and working style | `src/data/skills.ts` |
| FAQs on the Contact page | `src/data/faqs.ts` |
| About page copy | `src/components/AboutGrid.tsx` |
| Tools strip on Home | `src/components/ToolsMarquee.tsx` (icons in `public/icons/`) |
| Photo | replace `public/avatar.svg` (a monogram for now) or point `avatarSrc` in `profile.ts` at a `.webp`/`.png` |
| SEO title and description | `index.html` |
| Colors | `src/styles/tokens.css` |

## Notes

- The contact form opens the visitor's email app addressed to `profile.email`. To post to a backend instead, set `VITE_CONTACT_ENDPOINT` (see `src/lib/contact.ts`).
- Once deployed, add `og:url`, `og:image` and a canonical link in `index.html`.
- Adobe, Canva, CapCut and Filmora are shown as plain monogram tiles (`public/icons/mono-*.svg`), not their logos.

MIT license for the template code (see `LICENSE`).
