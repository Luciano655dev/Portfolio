# luciano-website

My personal portfolio — a single-page site that introduces who I am, the products I've founded, and the work I keep shipping. The open-source section is **live from the GitHub API**, so the site keeps itself up to date as I push new repositories.

**Live:** [luciano655dev.netlify.app](https://luciano655dev.netlify.app) · **Me:** [@Luciano655dev](https://github.com/Luciano655dev)

---

## Highlights

- **Self-updating.** Profile stats and the open-source grid are pulled from the GitHub REST API, so no manual editing is needed when a repo changes.
- **Motion by default, motion by choice.** Scroll reveals, a masked hero headline, an animated marquee, count-up stats, magnetic buttons, a parallax heading, a scroll-progress bar, and a custom cursor — all of it disabled under `prefers-reduced-motion: reduce`.
- **Server-first.** The page is a React Server Component; only the interactive bits ship JavaScript to the browser.
- **Resilient.** If GitHub is down or rate-limits the request, the page falls back to a committed snapshot instead of rendering empty.

## Tech stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Data | GitHub REST API |
| Fonts | Geist, Geist Mono, Instrument Serif (`next/font`) |

## Getting started

Requires **Node 20.9+**.

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

No environment variables are needed — the site calls GitHub's public, unauthenticated API.

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # fonts, metadata, scroll progress bar, custom cursor
│   ├── page.tsx        # the whole page + its content (see "Making it yours")
│   └── globals.css     # theme tokens, animation keyframes, reduced-motion rules
├── components/         # small client components, one animation each
│   ├── Reveal.tsx      # scroll-triggered entrance (up / left / right / scale / blur)
│   ├── CountUp.tsx     # animates a number when it scrolls into view
│   ├── Magnetic.tsx    # element leans toward the cursor
│   ├── Parallax.tsx    # gentle scroll-linked offset
│   ├── ScrollProgress.tsx
│   ├── Cursor.tsx      # dot + trailing ring (fine pointers only)
│   └── LocalTime.tsx   # my local clock, client-rendered to avoid hydration mismatch
└── lib/
    └── github.ts       # GitHub fetching, fallback snapshot, date helpers
```

## How the GitHub data works

`src/lib/github.ts` fetches the profile and repository list for the user in `USERNAME`, and Next caches the responses for an hour (`next: { revalidate: 3600 }`). Featured projects are excluded from the open-source grid, forks and description-less repos are filtered out, and the rest are sorted most-recently-updated first.

Every fetch is wrapped so that a failure — rate limit, outage, offline build — returns `FALLBACK_PROFILE` / `FALLBACK_REPOS` rather than throwing. The page therefore always renders complete, just occasionally with slightly stale numbers.

## Making it yours

Nearly all the content lives at the top of `src/app/page.tsx` as plain arrays:

- `FEATURED` — the flagship projects, with role, description, stack and links
- `TIMELINE` — career milestones
- `SKILLS` — grouped skills and languages
- `MARQUEE_ITEMS` — the words in the scrolling banner

Beyond that: set `USERNAME` in `src/lib/github.ts`, and restyle by editing the CSS custom properties (`--background`, `--foreground`, `--accent`, …) at the top of `src/app/globals.css`.

> **A note on styling:** the base element styles in `globals.css` live inside `@layer base`. Keep them there. Tailwind v4 puts its utilities in `@layer utilities`, and *unlayered* CSS overrides every layered rule regardless of specificity — so an unlayered `a { color: … }` will silently defeat `text-muted` and friends.

## Accessibility

Motion is treated as an enhancement. Every animation is gated behind `prefers-reduced-motion`, either in CSS or by bailing out of the effect in JavaScript, and the custom cursor only activates for fine pointers so touch and keyboard users keep the native one.

## Deployment

It's a stock Next.js app and deploys as-is to any Node host — Vercel, Netlify, or your own server via `npm run build && npm start`. The only external network dependencies are `api.github.com` and `avatars.githubusercontent.com`, the latter allow-listed for `next/image` in `next.config.ts`.

## License

The **code** is MIT licensed — see [LICENSE](./LICENSE). Take the components, the animation system, the layout, whatever is useful.

The **content** is not: my name, likeness, biography, project write-ups and career history are mine. If you build on this, please swap in your own story rather than shipping mine with a new name on it.
