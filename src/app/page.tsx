import Image from "next/image";
import CountUp from "@/components/CountUp";
import CTA, { CTABand } from "@/components/CTA";
import LocalTime from "@/components/LocalTime";
import Parallax from "@/components/Parallax";
import ProjectLogo from "@/components/ProjectLogo";
import Reveal from "@/components/Reveal";
import SocialIcon, { type SocialIconName } from "@/components/SocialIcon";
import {
  getProfile,
  getRepos,
  timeAgo,
  yearsOnGitHub,
  type Repo,
} from "@/lib/github";

const GITHUB_URL = "https://github.com/Luciano655dev";
const EMAIL = "lucianomenezes655@gmail.com";

const FEATURED = [
  {
    repo: "daykeeper.app",
    title: "Daykeeper",
    logo: "/Daykeeper-logo.png",
    role: "Founder · Design · Fullstack",
    description:
      "A journal-style social and calendar platform that turns days into memories. Web app, public API and docs, all built and shipped from scratch.",
    stack: ["TypeScript", "React", "Node.js", "MongoDB"],
    links: [
      { label: "Live site", url: "https://daykeeper.app" },
      { label: "API", url: "https://api.daykeeper.app" },
      { label: "Docs", url: "https://docs.daykeeper.app" },
      { label: "Source", url: `${GITHUB_URL}/daykeeper.app` },
    ],
  },
  {
    repo: "OneMoreGood",
    title: "OneMoreGood",
    logo: "/Onemoregood-logo.png",
    role: "Founder · Fullstack",
    description:
      "A non-profit e-commerce that fundraises for small organizations by selling socks, handling storefront, checkout and fulfilment end to end.",
    stack: ["TypeScript", "Next.js", "E-commerce"],
    links: [
      { label: "Live site", url: "https://onemoregood.org" },
      { label: "Source", url: `${GITHUB_URL}/OneMoreGood` },
    ],
  },
  {
    repo: "BetterPomo",
    title: "BetterPomo",
    logo: "/Betterpomo-logo.png",
    role: "Founder · Fullstack",
    description:
      "A pomodoro platform built for company: run focus sessions with friends in real time, then keep a record of the work you actually got done.",
    stack: ["TypeScript", "Next.js", "Real-time"],
    links: [
      { label: "Live site", url: "https://betterpomo.com" },
      { label: "Source", url: `${GITHUB_URL}/BetterPomo` },
    ],
  },
  {
    repo: "HobbyASAP",
    title: "HobbyASAP",
    logo: "/HobbyASAP-logo.png",
    role: "Founder · Fullstack",
    description:
      "An AI-powered platform that helps people learn any hobby as fast as possible, generating structured learning paths from a single prompt.",
    stack: ["TypeScript", "Next.js", "AI"],
    links: [
      { label: "Live site", url: "https://hobbyasap.com" },
      { label: "Source", url: `${GITHUB_URL}/HobbyASAP` },
    ],
  },
] as const;

// Career milestones — edit freely: add internships, jobs, awards, moves.
const TIMELINE = [
  {
    year: "2018–2019",
    title: "Starting with games",
    description:
      "Learned to program by building games — shipping small titles, joining game jams, and competing locally.",
  },
  {
    year: "2020–2021",
    title: "Building independently",
    description:
      "Started creating games on my own, explored web development, and began sharing personal projects on GitHub.",
  },
  {
    year: "2022–2023",
    title: "From projects to freelance",
    description:
      "Built websites, solved coding challenges, worked on personal projects, and started freelancing for real clients, including websites and a game for a small church.",
  },
  {
    year: "2024",
    title: "Building Daykeeper",
    description:
      "Started creating Daykeeper from scratch — my most complex project to date — after relocating to Orlando, Florida.",
  },
  {
    year: "2025–2026",
    title: "Software and startups",
    description:
      "Interned at Phoebus Tecnologia across two summers and kept expanding my portfolio with products like OneMoreGood, BetterPomo, and HobbyASAP.",
  },
] as const;

const SKILLS = [
  {
    group: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "HTML/CSS",
      "SQL",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native"
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Redis",
      "RESTful APIs",
      "Authentication",
      "Scalability",
    ],
  },
  {
    group: "Databases & Storage",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Mongoose",
      "AWS S3",
    ],
  },
  {
    group: "Spoken",
    items: [
      "English (fluent)",
      "Portuguese (fluent)",
      "Spanish (basic)",
    ],
  },
] as const;

/* Projects carry their logo and link through the marquee; tech is text-only. */
const MARQUEE_ITEMS: { label: string; logo?: string; url?: string }[] = [
  {
    label: "Daykeeper",
    logo: "/Daykeeper-logo.png",
    url: "https://daykeeper.app",
  },
  {
    label: "OneMoreGood",
    logo: "/Onemoregood-logo.png",
    url: "https://onemoregood.org",
  },
  {
    label: "BetterPomo",
    logo: "/Betterpomo-logo.png",
    url: "https://betterpomo.com",
  },
  {
    label: "HobbyASAP",
    logo: "/HobbyASAP-logo.png",
    url: "https://hobbyasap.com",
  },
  { label: "TypeScript" },
  { label: "React" },
  { label: "Next.js" },
  { label: "Python" },
  { label: "SQL Databases" },
];

const CONTACTS: {
  label: string;
  url: string;
  icon: SocialIconName;
  external?: boolean;
}[] = [
  { label: EMAIL, url: `mailto:${EMAIL}`, icon: "mail" },
  { label: "GitHub", url: GITHUB_URL, icon: "github", external: true },
  {
    label: "X / Twitter",
    url: "https://twitter.com/luciano655dev",
    icon: "x",
    external: true,
  },
  {
    label: "Discord",
    url: "https://discord.com/users/luciano655",
    icon: "discord",
    external: true,
  },
];

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572a5",
  HTML: "#e34c26",
  CSS: "#663399",
};

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted">
      {children}
    </p>
  );
}

function ExternalArrow() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      ↗
    </span>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="group relative flex h-full flex-col justify-between gap-6 border border-line bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-muted/60 hover:bg-surface">
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium break-words">
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-reset transition-colors duration-300 after:absolute after:inset-0 group-hover:text-accent"
            >
              {repo.name}
            </a>
          </h3>
          <ExternalArrow />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {repo.description}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-xs text-muted">
        <span className="flex items-center gap-4">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="size-2 rounded-full"
                style={{
                  background: LANGUAGE_COLORS[repo.language] ?? "var(--muted)",
                }}
              />
              {repo.language}
            </span>
          )}
          {repo.stars > 0 && <span>★ {repo.stars}</span>}
          <span>{timeAgo(repo.updatedAt)}</span>
        </span>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline relative z-10 text-accent"
          >
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default async function Home() {
  const [profile, repos] = await Promise.all([getProfile(), getRepos()]);

  const featuredNames = new Set<string>(FEATURED.map((f) => f.repo));
  const openSource = repos
    .filter(
      (r) =>
        !r.fork &&
        r.description &&
        !featuredNames.has(r.name) &&
        r.name.toLowerCase() !== "luciano655dev",
    )
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    )
    .slice(0, 9);

  const years = yearsOnGitHub(profile.createdAt);
  const stats = [
    { value: years, suffix: "+", label: "years building" },
    { value: profile.publicRepos, suffix: "", label: "public repositories" },
    { value: profile.followers, suffix: "", label: "GitHub followers" },
    { value: 4, suffix: "", label: "products in production" },
  ];

  return (
    <main className="page-intro mx-auto w-full max-w-5xl px-6 sm:px-10">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="intro-fade flex items-center justify-between py-8">
        <a href="#top" className="link-reset font-mono text-sm tracking-tight">
          LM<span className="text-accent">.</span>
        </a>
        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted">
          <a
            href="#work"
            className="link-underline text-muted transition-colors hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#timeline"
            className="link-underline hidden text-muted transition-colors hover:text-foreground sm:inline"
          >
            Timeline
          </a>
          <a
            href="#about"
            className="link-underline text-muted transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#contact"
            className="link-underline text-muted transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hidden text-muted transition-colors hover:text-foreground sm:inline"
          >
            GitHub ↗
          </a>
          <CTA href={`mailto:${EMAIL}`} size="sm">
            Get in touch
          </CTA>
        </nav>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="top" className="flex min-h-[82svh] flex-col justify-center">
        <Reveal effect="blur">
          <div className="flex items-center gap-4">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={56}
              height={56}
              className="rounded-full border border-line transition-transform duration-300 hover:scale-110"
              priority
            />
            <div>
              <p className="font-medium">{profile.name}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Fullstack Developer — {profile.location}
              </p>
            </div>
          </div>
        </Reveal>
        <h1 className="mt-10 text-[clamp(2.75rem,8vw,6rem)] font-medium leading-[1.02] tracking-tight">
          <span className="mask-line">
            <span style={{ "--d": "100ms" } as React.CSSProperties}>
              Building{" "}
              <em className="font-serif italic font-normal text-accent">
                real products
              </em>
            </span>
          </span>
          <span className="mask-line">
            <span style={{ "--d": "220ms" } as React.CSSProperties}>
              from scratch.
            </span>
          </span>
        </h1>
        <Reveal delay={340}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            I design, build and ship complete platforms — frontend, backend,
            and everything in between. For me, technology is a means to reach
            the goal you seek, especially when it helps people.
          </p>
        </Reveal>
        <Reveal delay={460}>
          <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-sm">
            <CTA href={`mailto:${EMAIL}`} size="lg">
              Get in touch
            </CTA>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group link-underline text-muted transition-colors hover:text-foreground"
            >
              GitHub <ExternalArrow />
            </a>
            <span className="text-muted">
              Orlando, FL — <LocalTime /> local
            </span>
          </div>
        </Reveal>
      </section>

      {/* ── Marquee banner ──────────────────────────────────── */}
      <div className="marquee -mx-6 border-y border-line py-5 sm:-mx-10">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <span key={copy} aria-hidden={copy === 1} className="flex shrink-0">
              {MARQUEE_ITEMS.map((item) => {
                const content = (
                  <>
                    {item.logo && (
                      <Image
                        src={item.logo}
                        alt=""
                        width={36}
                        height={36}
                        className="size-9 shrink-0 rounded-lg border border-line object-cover"
                      />
                    )}
                    {item.label}
                  </>
                );

                return (
                  <span
                    key={item.label}
                    className="mx-6 flex items-center gap-4 text-2xl font-medium tracking-tight text-muted"
                  >
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        /* The duplicate copy is aria-hidden — keep it off the tab order. */
                        tabIndex={copy === 1 ? -1 : undefined}
                        className="link-reset flex items-center gap-4 transition-colors duration-300 hover:text-accent"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                    <span className="ml-8 text-accent">✦</span>
                  </span>
                );
              })}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats ───────────────────────────────────────────── */}
      <section className="border-b border-line py-12">
        <dl className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} effect="scale">
              <dd className="text-4xl font-medium tracking-tight">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">
                {s.label}
              </dt>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* ── Featured work ───────────────────────────────────── */}
      <section id="work" className="py-24 sm:py-32">
        <Reveal effect="left">
          <MonoLabel>01 — Selected Work</MonoLabel>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
            Products I{" "}
            <em className="font-serif italic font-normal text-accent">
              founded
            </em>{" "}
            and run
          </h2>
        </Reveal>
        <div className="mt-14">
          {FEATURED.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 100}
              effect={i % 2 === 0 ? "left" : "right"}
            >
              <article className="group relative grid gap-4 border-t border-line py-10 transition-colors duration-300 last:border-b hover:bg-surface/60 sm:grid-cols-[auto_1fr_auto] sm:gap-10">
                <span className="font-mono text-sm text-muted transition-colors duration-300 group-hover:text-accent">
                  0{i + 1}
                </span>
                <div>
                  {/* Logo sits beside the title and role together, not just the title. */}
                  <div className="flex items-center gap-4">
                    <ProjectLogo
                      name={project.title}
                      src={project.logo}
                      size={56}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                        <a
                          href={project.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-reset transition-colors duration-300 after:absolute after:inset-0 group-hover:text-accent"
                        >
                          {project.title}
                        </a>
                      </h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                        {project.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-line px-3 py-1 font-mono text-xs text-muted transition-colors duration-300 group-hover:border-muted/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="relative z-10 mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-muted transition-colors hover:text-accent"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
                <span className="justify-self-start font-mono text-xl text-muted transition-colors duration-300 group-hover:text-accent sm:justify-self-end">
                  <ExternalArrow />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal effect="scale" className="mt-20">
          <CTABand
            label="Your project, next on the list"
            headline="I built every one of these from an empty folder."
            accent="Yours could be next."
            note="Bring the idea and I'll handle design, frontend, backend and shipping it."
            action="Start a project"
            href={`mailto:${EMAIL}?subject=Project%20enquiry`}
          />
        </Reveal>
      </section>

      {/* ── Open source ─────────────────────────────────────── */}
      <section className="pb-24 sm:pb-32">
        <Reveal effect="left">
          <MonoLabel>02 — Open Source</MonoLabel>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
              Fresh from the{" "}
              <em className="font-serif italic font-normal text-accent">
                workshop
              </em>
            </h2>
            <a
              href={`${GITHUB_URL}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="group link-underline font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              All {profile.publicRepos} repositories <ExternalArrow />
            </a>
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
            Most recently updated first — live from GitHub
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openSource.map((repo, i) => (
            <Reveal
              key={repo.name}
              delay={(i % 3) * 100}
              effect="scale"
              className="h-full"
            >
              <RepoCard repo={repo} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────── */}
      <section id="timeline" className="border-t border-line py-24 sm:py-32">
        <Reveal effect="left">
          <MonoLabel>03 — Milestones</MonoLabel>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
            The road{" "}
            <em className="font-serif italic font-normal text-accent">
              so far
            </em>
          </h2>
        </Reveal>
        <ol className="relative mt-16 border-l border-line">
          {TIMELINE.map((item, i) => (
            <li key={item.year} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
              <Reveal delay={i * 90} effect="left">
                <span
                  aria-hidden
                  className="timeline-dot absolute top-1.5 size-2.5 rounded-full bg-accent"
                  style={{ left: "calc(-0.3125rem - 0.5px)" }}
                />
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                  <span className="font-mono text-sm text-accent">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── About ───────────────────────────────────────────── */}
      <section id="about" className="border-t border-line py-24 sm:py-32">
        <div className="grid gap-12 sm:grid-cols-[1fr_2fr]">
          <Reveal effect="left">
            <MonoLabel>04 — About</MonoLabel>
          </Reveal>
          <div>
            <Reveal effect="blur">
              <p className="text-2xl leading-snug tracking-tight sm:text-3xl">
                I&apos;m a full-stack developer based in Orlando, Florida,
                building products that turn ideas into{" "}
                <em className="font-serif italic text-accent">
                  useful, real-world software.
                </em>
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl leading-relaxed text-muted">
                My work spans social platforms, e-commerce, AI experiments,
                freelance websites, and full-stack products like Daykeeper,
                OneMoreGood, BetterPomo and HobbyASAP. I enjoy taking projects
                from concept to production — product design, APIs, databases,
                deployment and documentation included.
              </p>
            </Reveal>

            <dl className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {SKILLS.map((skill, i) => (
                <Reveal key={skill.group} delay={i * 80} effect="up">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    {skill.group}
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                    {skill.items.map((item, j) => (
                      <span key={item}>
                        {item}
                        {j < skill.items.length - 1 && (
                          <span className="text-muted"> ·</span>
                        )}
                      </span>
                    ))}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section id="contact" className="border-t border-line py-24 sm:py-32">
        <Reveal effect="blur">
          <MonoLabel>05 — Contact</MonoLabel>
          <Parallax speed={-0.05} maxOffset={28}>
            <h2 className="mt-10 text-[clamp(2.25rem,6.5vw,5rem)] font-medium leading-tight tracking-tight">
              Have a project in mind?
              <br />
              <em className="font-serif italic font-normal text-accent">
                Let&apos;s talk.
              </em>
            </h2>
          </Parallax>
          <div className="mt-12">
            <CTA href={`mailto:${EMAIL}`} size="lg">
              Get in touch
            </CTA>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm text-muted">
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.url}
                {...(contact.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="link-underline flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
              >
                <SocialIcon name={contact.icon} />
                {contact.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-8 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Luciano Menezes</span>
        <span className="flex gap-6">
          <span>Built with Next.js — data live from GitHub</span>
          <a
            href="#top"
            className="link-underline text-muted transition-colors hover:text-foreground"
          >
            Back to top ↑
          </a>
        </span>
      </footer>
    </main>
  );
}
