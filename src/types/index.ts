import type { AppLocale } from "@/i18n/routing";

/**
 * A string available in every supported locale.
 * Source data (data.ts) keeps the full translation; API routes flatten it
 * to a plain string based on the requested locale before sending to clients.
 */
export type Localized = Record<AppLocale, string>;

/** Recursively resolves localized values to strings for a single locale. */
export type LocalizedData<T> = T extends Localized
  ? string
  : T extends (infer Item)[]
    ? LocalizedData<Item>[]
    : T extends object
      ? { [Key in keyof T]: LocalizedData<T[Key]> }
      : T;

export interface Pill {
  name: string;
  highlight?: boolean;
}

export interface StatItem {
  value: string | number;
  label: Localized;
  isNumber?: boolean;
  suffix?: Localized;
}

export interface TimelineItem {
  role: Localized;
  year: Localized;
  description: Localized;
  isLive?: boolean;
}

export interface AboutHighlight {
  title: Localized;
  description: Localized;
}

export interface AboutTechnicalCategory {
  title: Localized;
  technologies: string[];
}

export interface AboutData {
  lead: Localized;
  body: Localized;
  highlights: AboutHighlight[];
  technicalProfile: AboutTechnicalCategory[];
  timeline: TimelineItem[];
}

export interface SkillItem {
  name: string;
  href: string;
  icon: string;
  accent?: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: Localized;
  description: Localized;
  pills: string[];
  hue: number;
  github: string | null;
  isPublic: boolean;
}

export interface Service {
  id: number;
  title: Localized;
  description: Localized;
  icon: 'code' | 'file' | 'database' | string;
}

export interface Certificate {
  id: number;
  title: Localized;
  issuer: string;
  description: Localized;
  issueDate: string; // ISO or short human-readable date
  image: string; // path under /public
  category?: string;
  featured?: boolean;
}

/** A certificate after its localized fields have been resolved for one locale. */
export type LocalizedCertificate = LocalizedData<Certificate>;

export interface SocialLink {
  url: string;
  username: string;
}

export interface ContactData {
  description: Localized;
  social: {
    github: SocialLink;
    linkedin: SocialLink;
    telegram: SocialLink;
    hackthebox: SocialLink;
  };
}

export interface FunFact {
  label: Localized;
  value: number;
  suffix: Localized;
  icon: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
}
