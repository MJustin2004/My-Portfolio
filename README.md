# [Your Name] — QA Portfolio

Built with Next.js 14 (App Router) + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Where to edit things

- **All your content (name, projects, timeline, skills, socials, resume link):** `data/content.js`. This is the only file you should need to touch for day-to-day updates.
- **Resume file:** drop `resume.pdf` into the `public/` folder — the download button in Skills already points to `/resume.pdf`.
- **Project thumbnails:** currently placeholder boxes in `components/Projects.js`. Swap them for `next/image` once you have real screenshots — put images in `public/` and reference them, e.g. `/projects/thumbnail-1.png`.
- **Contact form:** `app/api/contact/route.js` currently just logs submissions server-side. Wire it up to a real email service (Resend, SendGrid, or Nodemailer) before launch — there's a commented example in that file.
- **Colors/fonts/spacing:** `tailwind.config.js` for the design tokens, `app/globals.css` for global styles.

## Deploy

Easiest path: push this to a GitHub repo and import it on [vercel.com](https://vercel.com) — zero config needed, it'll detect Next.js automatically.

## Still to do before this is launch-ready

1. Replace all `[bracketed]` placeholders in `data/content.js` with your real info.
2. Add real project thumbnails (or keep it minimal and text-only — that's a valid look too).
3. Wire up the contact form to an actual email service.
4. Add your resume PDF to `public/`.
5. Swap `#` placeholder links for real LinkedIn/GitHub/demo/repo URLs.
