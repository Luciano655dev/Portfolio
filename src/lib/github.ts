const USERNAME = "Luciano655dev";
const API = "https://api.github.com";

export interface Profile {
  name: string;
  bio: string;
  location: string;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  createdAt: string;
}

export interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  fork: boolean;
  updatedAt: string;
  homepage: string | null;
  url: string;
}

/**
 * Snapshot used when the GitHub API is unavailable or rate-limited,
 * so the page always renders complete.
 */
const FALLBACK_PROFILE: Profile = {
  name: "Luciano Menezes",
  bio: "Fullstack dev",
  location: "Orlando, Florida",
  avatarUrl: "https://avatars.githubusercontent.com/u/83819836?v=4",
  publicRepos: 42,
  followers: 101,
  createdAt: "2021-05-07T11:52:30Z",
};

const FALLBACK_REPOS: Repo[] = [
  {
    name: "portfolio-steam-ui",
    description: "A portfolio website based on the Steam profile interface",
    language: "JavaScript",
    stars: 13,
    fork: false,
    updatedAt: "2025-11-26T13:12:54Z",
    homepage: null,
    url: "https://github.com/Luciano655dev/portfolio-steam-ui",
  },
  {
    name: "HobbyASAP",
    description: "An AI-powered tool to learn any hobby as fast as possible",
    language: "TypeScript",
    stars: 9,
    fork: false,
    updatedAt: "2026-04-11T01:38:53Z",
    homepage: "https://hobbyasap.com",
    url: "https://github.com/Luciano655dev/HobbyASAP",
  },
  {
    name: "better-format",
    description: "An NPM package for formatting variables and inspecting their details",
    language: "JavaScript",
    stars: 8,
    fork: false,
    updatedAt: "2024-02-29T22:55:51Z",
    homepage: null,
    url: "https://github.com/Luciano655dev/better-format",
  },
  {
    name: "api.daykeeper.app",
    description: "Daykeeper's API, backend code",
    language: "JavaScript",
    stars: 7,
    fork: false,
    updatedAt: "2026-06-17T07:55:31Z",
    homepage: "https://api.daykeeper.app",
    url: "https://github.com/Luciano655dev/api.daykeeper.app",
  },
  {
    name: "daykeeper.app",
    description: "Daykeeper's web app",
    language: "TypeScript",
    stars: 3,
    fork: false,
    updatedAt: "2026-06-17T08:02:52Z",
    homepage: "https://daykeeper.app",
    url: "https://github.com/Luciano655dev/daykeeper.app",
  },
  {
    name: "OneMoreGood",
    description:
      "A non-profit organization that helps Santa Terezinha, Paraíba, Brazil by selling socks",
    language: "TypeScript",
    stars: 1,
    fork: false,
    updatedAt: "2026-06-27T17:51:47Z",
    homepage: "https://onemoregood.org",
    url: "https://github.com/Luciano655dev/OneMoreGood",
  },
  {
    name: "BetterPomo",
    description: "A platform to do pomodoro with friends and save your work",
    language: "TypeScript",
    stars: 0,
    fork: false,
    updatedAt: "2026-06-17T05:39:47Z",
    homepage: "https://better-pomo.vercel.app",
    url: "https://github.com/Luciano655dev/BetterPomo",
  },
  {
    name: "RealTimeChat-Socket.io",
    description: "A real-time chat built with JavaScript and Socket.io",
    language: "HTML",
    stars: 3,
    fork: false,
    updatedAt: "2023-04-23T21:27:58Z",
    homepage: null,
    url: "https://github.com/Luciano655dev/RealTimeChat-Socket.io",
  },
];

async function githubFetch(path: string): Promise<unknown | null> {
  try {
    const res = await fetch(`${API}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getProfile(): Promise<Profile> {
  const data = (await githubFetch(`/users/${USERNAME}`)) as Record<
    string,
    unknown
  > | null;
  if (!data) return FALLBACK_PROFILE;
  return {
    name: (data.name as string) ?? FALLBACK_PROFILE.name,
    bio: (data.bio as string) ?? FALLBACK_PROFILE.bio,
    location: (data.location as string) ?? FALLBACK_PROFILE.location,
    avatarUrl: (data.avatar_url as string) ?? FALLBACK_PROFILE.avatarUrl,
    publicRepos: (data.public_repos as number) ?? FALLBACK_PROFILE.publicRepos,
    followers: (data.followers as number) ?? FALLBACK_PROFILE.followers,
    createdAt: (data.created_at as string) ?? FALLBACK_PROFILE.createdAt,
  };
}

export async function getRepos(): Promise<Repo[]> {
  const data = (await githubFetch(
    `/users/${USERNAME}/repos?per_page=100&sort=updated`,
  )) as Record<string, unknown>[] | null;
  if (!data) return FALLBACK_REPOS;
  return data.map((r) => ({
    name: r.name as string,
    description: r.description as string | null,
    language: r.language as string | null,
    stars: r.stargazers_count as number,
    fork: r.fork as boolean,
    updatedAt: r.updated_at as string,
    homepage: (r.homepage as string) || null,
    url: r.html_url as string,
  }));
}

export function timeAgo(iso: string): string {
  const seconds = (Date.now() - new Date(iso).getTime()) / 1000;
  const units: [number, string][] = [
    [31536000, "y"],
    [2592000, "mo"],
    [604800, "w"],
    [86400, "d"],
    [3600, "h"],
    [60, "m"],
  ];
  for (const [size, label] of units) {
    if (seconds >= size) return `${Math.floor(seconds / size)}${label} ago`;
  }
  return "just now";
}

export function yearsOnGitHub(createdAt: string): number {
  return Math.floor(
    (Date.now() - new Date(createdAt).getTime()) / (365.25 * 24 * 3600 * 1000),
  );
}
