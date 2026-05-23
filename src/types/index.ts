export interface Pill {
  name: string;
  highlight?: boolean;
}

export interface StatItem {
  value: string | number;
  label: string;
  isNumber?: boolean;
  suffix?: string;
}

export interface TimelineItem {
  role: string;
  year: string;
  description: string;
  isLive?: boolean;
}

export interface AboutData {
  lead: string;
  body: string;
  stats: StatItem[];
  timeline: TimelineItem[];
}

export interface SkillCategory {
  title: string;
  pills: Pill[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  pills: string[];
  hue: number;
  github: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: 'code' | 'file' | 'database' | string;
}

export interface Certificate {
  id: number;
  title: string;
  organization: string;
  year: string;
  link: string;
  badge: string;
  badgeType?: 'verified' | 'prog';
  inProgress?: boolean;
}

export interface SocialLink {
  url: string;
  username: string;
}

export interface ContactData {
  description: string;
  social: {
    github: SocialLink;
    linkedin: SocialLink;
  };
  phone: string;
}

export interface FunFact {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
}
