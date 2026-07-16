import { css } from '../../styled-system/css';
import type { SystemStyleObject } from '../../styled-system/types';

/**
 * "Liner Notes" design system — the /music page's standalone aesthetic.
 * A single committed look (no light/dark participation): the page reads as
 * the gatefold liner notes of a well-loved 1970s record. Palette derived
 * from the Kodachrome scans in ./images (early-gig, studio-solo).
 *
 * Everything on the page styles itself with var(--music-*) so the whole
 * theme stays decoupled from the site's Panda semantic tokens and could be
 * lifted to a subdomain wholesale.
 */
export const musicVars: SystemStyleObject = {
  '--music-paper': '#E9DDBC', // aged sheet music — page stock
  '--music-paper-deep': '#DBC89C', // sun-faded sleeve — card stock / alt panels
  '--music-paper-lift': '#F4ECD4', // photo mounts, contact card
  '--music-ink': '#26190D', // brown-black ink (never pure black)
  '--music-ink-soft': '#4A3722', // secondary ink
  '--music-mahogany': '#5C3A22', // rules, frames, borders
  '--music-mustard': '#C08A2B', // primary accent ("onesie mustard '76")
  '--music-red': '#A6472E', // Kodachrome red — stamps + sparse emphasis only
  '--music-olive': '#6F6836', // secondary labels
  '--music-inner': '#1F150C', // inner sleeve — dark gatefold section
  '--music-cream-dk': '#D9C89E', // text on the dark section
  '--music-cream-dim': '#A6916A', // dim text on the dark section
  '--music-font-display': "'Fraunces', 'Iowan Old Style', Georgia, serif",
  '--music-font-mono': "'Courier Prime', 'Courier New', monospace",
  '--music-font-pencil': "'Caveat', cursive",
};

/** Display face settings — Fraunces at full optical size with the SOFT axis engaged. */
export const displayType: SystemStyleObject = {
  fontFamily: 'var(--music-font-display)',
  fontWeight: 900,
  fontVariationSettings: "'opsz' 144, 'SOFT' 100",
};

/** Root style for the page: paper stock, typewriter voice, focus ring. */
export const musicRootCss: SystemStyleObject = {
  ...musicVars,
  background: 'var(--music-paper)',
  color: 'var(--music-ink)',
  fontFamily: 'var(--music-font-mono)',
  fontSize: '1rem',
  lineHeight: 1.55,
  overflowX: 'clip',
  fontSmoothing: 'antialiased',
  '& :focus-visible': {
    outline: '3px solid var(--music-mustard)',
    outlineOffset: '3px',
  },
};

/** Content column shared by every section. */
export const wrapCss: SystemStyleObject = {
  maxWidth: '68rem',
  marginInline: 'auto',
  paddingInline: 'clamp(1.5rem, 4vw, 3rem)',
};

export const musicRootClassName = () => css(musicRootCss);
