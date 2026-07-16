import type { FC } from 'react';
import { css } from '../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../styled-system/types';

/**
 * The signature element of the "Liner Notes" page: the gig triangle —
 * MUSIC / MONEY / HANG — drawn as a pencil sketch. Paths run through an
 * feTurbulence displacement filter and are double-stroked for graphite
 * wobble; the "need two." scrawl sits circled in the middle.
 *
 * Colors reference the --music-* vars (with the mockup hexes as fallbacks)
 * via inline style, since SVG presentation attributes don't resolve var().
 */
export const GigTriangle: FC<{ css?: SystemStyleObject }> = ({ css: cssProp = {} }) => (
  <svg
    viewBox="0 0 360 330"
    role="img"
    aria-label="Pencil sketch of the gig triangle: Music, Money, and Hang at the corners, with the note 'need two' in the middle"
    className={css(
      { display: 'block', width: '100%', maxWidth: '24rem', height: 'auto', marginInline: 'auto' },
      cssProp,
    )}
  >
    <defs>
      <filter id="music-graphite" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" seed="7" result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="5" />
      </filter>
    </defs>
    <g
      filter="url(#music-graphite)"
      fill="none"
      strokeLinecap="round"
      style={{ stroke: 'var(--music-ink-soft, #4A3722)' }}
    >
      {/* double-stroked triangle for graphite feel */}
      <path d="M180 48 L60 252 L300 252 Z" strokeWidth="2.6" />
      <path d="M182 52 L66 249 L295 248 Z" strokeWidth="1.1" opacity=".55" />
      {/* tick marks on each edge */}
      <path d="M113 152 L127 160" strokeWidth="2" />
      <path d="M233 160 L247 152" strokeWidth="2" />
      <path d="M172 259 L178 245" strokeWidth="2" />
      {/* circling the middle note */}
      <ellipse cx="180" cy="185" rx="58" ry="26" strokeWidth="1.6" opacity=".7" transform="rotate(-4 180 185)" />
    </g>
    <g
      fontFamily="'Courier Prime','Courier New',monospace"
      fontWeight="700"
      fontSize="17"
      textAnchor="middle"
      letterSpacing="2"
      style={{ fill: 'var(--music-ink, #26190D)' }}
    >
      <text x="180" y="34">
        MUSIC
      </text>
      <text x="47" y="280">
        MONEY
      </text>
      <text x="308" y="280">
        HANG
      </text>
    </g>
    <text
      x="180"
      y="193"
      fontFamily="'Caveat',cursive"
      fontSize="30"
      textAnchor="middle"
      transform="rotate(-4 180 190)"
      style={{ fill: 'var(--music-red, #A6472E)' }}
    >
      have two+
    </text>
  </svg>
);
