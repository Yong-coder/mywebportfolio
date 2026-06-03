# Ian De Guzman — IT Professional Portfolio (PRD)

## Original Problem Statement
> "https://ian-tech-cv.preview.emergentagent.com/ can you make this website"

User asked to recreate an existing portfolio website. After clarification:
- Contact form: **Frontend-only** (no backend / no email) — sonner toast confirmation
- Content: **Keep all original info** (name, jobs, contact details) exactly
- Design: **More creative/unique** (NOT a 1:1 copy of the dark navy + cyan reference)

## Architecture
- **Frontend**: React 19 (CRA + craco) + Tailwind + shadcn/ui + sonner
- **Backend**: FastAPI + MongoDB (default template, untouched — frontend-only contact form per user choice)
- **Design system**: Swiss Brutalist (off-white `#F4F4F0` paper, charcoal `#111111` ink, International Klein Blue `#002FA7` accent). Fonts: Outfit (display) + JetBrains Mono (body).

## User Persona
A hiring manager / IT director / recruiter visiting a CV site for Ian Lemuel G. De Guzman — IT Support & Supervisor in Doha, Qatar with 7+ years experience.

## Core Requirements (static)
- Single-page portfolio with sections: Hero, About, Skills, Experience, Education, Contact
- All content preserved verbatim from reference (5 jobs, 4 skill categories, 1 education entry, contact info)
- Smooth-scroll navigation, sticky header, mobile menu
- data-testid on every interactive element

## What's Been Implemented (2026-02)
- ✅ Full site live at REACT_APP_BACKEND_URL with all 6 sections
- ✅ Sticky brutalist navigation with live AST clock, mobile drawer
- ✅ Hero: massive Outfit display name, system-id panel, tech marquee, CTAs
- ✅ About: numbered manifest paragraphs, stat cards, personal details panel, "Operations Loop" SVG diagram
- ✅ Skills: 4 categories (Infrastructure, Endpoint, Cloud, ITSM) + Other Tech tags
- ✅ Experience: collapsible accordion-style timeline (5 jobs), first one open by default
- ✅ Education: BS IT card with certification track sidebar (AZ-900, AZ-104, MS-365)
- ✅ Contact: 4-field form (name, email, subject, message) — **frontend-only**, sonner toast, validation
- ✅ Footer: large CTA, operating hours, back-to-top
- ✅ All testing-agent-v3 frontend tests pass at 100%

## Backlog (P0 / P1 / P2)
- **P1** — Real email delivery via Resend or SMTP if user wants the contact form to actually deliver
- **P1** — SEO: meta tags, OpenGraph image, sitemap, favicon
- **P2** — Downloadable PDF résumé generated from same data source
- **P2** — Light/dark theme toggle
- **P2** — Project case-study pages (`/projects/[slug]`) for deeper IT war-stories
- **P2** — Internationalization (Arabic) given Doha audience

## Next Tasks
1. If the user wants emails delivered → integrate Resend (collect API key, wire up `/api/contact`)
2. Add favicon + OG image with the `IDG` mark
3. Add a “Download CV” button that exports a one-page PDF
