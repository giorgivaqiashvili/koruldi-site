# Koruldi site

Informational marketing site for the Koruldi DevOps engineering squad, built with Next.js (App
Router), TypeScript, and Tailwind CSS. Includes a "Request our services" contact form that stores
submissions in Postgres (via Prisma) and emails a notification (via Resend).

> **Contact email:** `hello@koruldi.com` in `src/lib/site.ts` is a placeholder until a real domain
> is registered — update it there once you have one (everything else pulls from that file too).
>
> **Team page:** `src/app/team/page.tsx` currently has placeholder names/roles/bios — swap in real
> team members when ready.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/team` — Team
- `/contact` — Contact + service request form

Placeholder copy is marked `[Placeholder]` where you should swap in real content (team bios,
company story, etc).

## Getting started

```bash
npm install
cp .env.example .env   # then fill in real values
npx prisma migrate dev --name init
npm run dev
```

Open http://localhost:3000.

Without a real `DATABASE_URL`, `RESEND_API_KEY`, and `CONTACT_NOTIFY_EMAIL` set, the contact form
will fail to save submissions / silently skip sending email (a warning is logged) — see
`.env.example` for what's required.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Postgres connection string. A free option: [Neon](https://neon.tech) or [Vercel Postgres](https://vercel.com/storage/postgres). |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for sending notification emails. |
| `CONTACT_NOTIFY_EMAIL` | Address that receives new service request notifications. |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend (defaults to `onboarding@resend.dev` for testing). |

## Database

Schema lives in `prisma/schema.prisma` (single `ServiceRequest` model). After changing it:

```bash
npx prisma migrate dev --name <change-description>
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add the environment variables above in the Vercel project settings.
4. Vercel auto-detects Next.js — no extra config needed. Every push to `main` deploys to
   production; PRs get preview deployments.

CI (`.github/workflows/ci.yml`) runs lint + build on every push/PR.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Prisma + PostgreSQL
- Resend (email)
- Zod (form validation)
