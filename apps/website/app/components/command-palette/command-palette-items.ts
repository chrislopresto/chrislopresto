import { href } from 'react-router';
import {
  RiHomeLine,
  RiHeart2Line,
  RiChat1Line,
  RiPresentationLine,
  RiFileTextLine,
  RiBookOpenLine,
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiSunLine,
  RiMoonLine,
  RiRefreshLine,
} from '@remixicon/react';
export type PageItem = {
  label: string;
  path: string;
  icon: typeof RiHomeLine;
  keywords?: string[];
  external?: boolean;
};

export type SocialItem = {
  label: string;
  url: string;
  icon: typeof RiHomeLine;
};

export const pages: PageItem[] = [
  { label: 'Home', path: href('/'), icon: RiHomeLine },
  { label: 'Things', path: href('/things'), icon: RiHeart2Line, keywords: ['appreciate', 'favorites'] },
  { label: 'Thoughts', path: href('/thoughts'), icon: RiChat1Line },
  {
    label: 'Hot Swapping Our Rails Front End in Secret',
    path: href('/thoughts/hot-swapping-our-rails-front-end-in-secret'),
    icon: RiPresentationLine,
    keywords: ['railsconf', 'betterment'],
  },
  {
    label: 'Hot Swapping Our Rails Front End in Secret — Transcript',
    path: href('/thoughts/hot-swapping-our-rails-front-end-in-secret/transcript'),
    icon: RiFileTextLine,
  },
  {
    label: 'Living Style Guide Driven Development',
    path: href('/thoughts/living-style-guide-driven-development'),
    icon: RiPresentationLine,
    keywords: ['emberconf', 'ember'],
  },
  {
    label: 'Living Style Guide Driven Development — Transcript',
    path: href('/thoughts/living-style-guide-driven-development/transcript'),
    icon: RiFileTextLine,
  },
  {
    label: 'Storybook',
    path: '/storybook',
    icon: RiBookOpenLine,
    keywords: ['components', 'design system'],
    external: true,
  },
];

export type ColorModeValue = 'light' | 'dark' | 'system';

export type ColorModeItem = {
  label: string;
  value: ColorModeValue;
  icon: typeof RiHomeLine;
  keywords?: string[];
};

export const colorModes: ColorModeItem[] = [
  { label: 'Light', value: 'light', icon: RiSunLine, keywords: ['theme', 'color', 'mode'] },
  { label: 'Dark', value: 'dark', icon: RiMoonLine, keywords: ['theme', 'color', 'mode'] },
  { label: 'System', value: 'system', icon: RiRefreshLine, keywords: ['theme', 'color', 'mode', 'match', 'auto'] },
];

export const socials: SocialItem[] = [
  { label: 'Twitter / X', url: 'https://twitter.com/chrislopresto', icon: RiTwitterXFill },
  { label: 'GitHub', url: 'https://github.com/chrislopresto', icon: RiGithubFill },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/chrislopresto', icon: RiLinkedinBoxFill },
];
