import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Justin Klitgaard",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Justin Klitgaard",
  DESCRIPTION: "An AI Engineer in Tokyo, Japan",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/Justin-K-Ellis",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/justin-klitgaard-ellis-384b9965/",
  },
];
