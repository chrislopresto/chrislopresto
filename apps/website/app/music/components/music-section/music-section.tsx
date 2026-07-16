import type { FC, ReactNode } from 'react';
import { css, cva } from '../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../styled-system/types';
import { displayType, wrapCss } from '../../theme';

/**
 * Section scaffolding for the "Liner Notes" page. Tones mirror the mockup:
 * - paper:     default page stock (no chrome)
 * - paperDeep: sun-faded sleeve band (mockup .tv)
 * - inner:     dark gatefold inner sleeve (mockup .inner-sleeve / .closer)
 *
 * The inner tone re-points the --music-section-* vars so SideLabel /
 * SectionHeading / SectionNote recolor themselves without prop drilling.
 */
const sectionToneCss = cva({
  base: {
    paddingBlock: 'clamp(2.6rem, 7vw, 5rem)',
    paddingInline: '8px',
  },
  variants: {
    tone: {
      paper: {},
      paperDeep: {
        background: 'var(--music-paper-deep)',
        borderTop: '1px solid var(--music-mahogany)',
        borderBottom: '1px solid var(--music-mahogany)',
      },
      inner: {
        background: 'var(--music-inner)',
        color: 'var(--music-cream-dk)',
        borderTop: '6px solid var(--music-mahogany)',
        borderBottom: '6px solid var(--music-mahogany)',
        '--music-section-rule': 'var(--music-cream-dim)',
        '--music-section-cat': 'var(--music-cream-dim)',
        '--music-section-heading': 'var(--music-paper)',
        '--music-section-note': 'var(--music-cream-dim)',
      },
    },
  },
  defaultVariants: { tone: 'paper' },
});

export type MusicSectionTone = 'paper' | 'paperDeep' | 'inner';

type MusicSectionProps = {
  tone?: MusicSectionTone;
  id?: string;
  'aria-labelledby'?: string;
  'aria-label'?: string;
  /** Styles for the <section> itself. */
  css?: SystemStyleObject;
  children?: ReactNode;
};

export const MusicSection: FC<MusicSectionProps> = ({
  tone = 'paper',
  id,
  css: cssProp = {},
  children,
  ...ariaProps
}) => (
  <section id={id} {...ariaProps} className={css(sectionToneCss.raw({ tone }), cssProp)}>
    <div className={css(wrapCss)}>{children}</div>
  </section>
);

/** The "Side A ——— cat. details" rule that opens each section. */
export const SideLabel: FC<{ disc: string; cat: string; css?: SystemStyleObject }> = ({
  disc,
  cat,
  css: cssProp = {},
}) => (
  <div
    className={css(
      {
        display: 'flex',
        alignItems: 'baseline',
        gap: '1.1rem',
        marginBottom: '.4rem',
      },
      cssProp,
    )}
  >
    <span
      className={css(displayType, {
        fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
        color: 'var(--music-mustard)',
        whiteSpace: 'nowrap',
      })}
    >
      {disc}
    </span>
    <span
      aria-hidden="true"
      className={css({
        flex: '1',
        borderBottom: '3px double var(--music-section-rule, var(--music-mahogany))',
      })}
    />
    <span
      className={css({
        fontSize: '.7rem',
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--music-section-cat, var(--music-olive))',
        // Let the catalog text wrap on narrow phones instead of clipping.
        '@media (min-width: 541px)': { whiteSpace: 'nowrap' },
      })}
    >
      {cat}
    </span>
  </div>
);

/** Section h2 in the Fraunces display voice. */
export const SectionHeading: FC<{ id?: string; css?: SystemStyleObject; children?: ReactNode }> = ({
  id,
  css: cssProp = {},
  children,
}) => (
  <h2
    id={id}
    className={css(
      displayType,
      {
        fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
        lineHeight: 1.02,
        margin: '.4rem 0 1rem',
        color: 'var(--music-section-heading, var(--music-ink))',
      },
      cssProp,
    )}
  >
    {children}
  </h2>
);

/** Short typewritten note under a section heading. */
export const SectionNote: FC<{ css?: SystemStyleObject; children?: ReactNode }> = ({ css: cssProp = {}, children }) => (
  <p
    className={css(
      {
        fontSize: '.85rem',
        maxWidth: '42rem',
        color: 'var(--music-section-note, var(--music-ink-soft))',
        marginTop: 0,
        marginBottom: '2.2rem',
      },
      cssProp,
    )}
  >
    {children}
  </p>
);

/** Rubber-stamped eyebrow (hero + booking). */
export const EyebrowStamp: FC<{ css?: SystemStyleObject; children?: ReactNode }> = ({
  css: cssProp = {},
  children,
}) => (
  <span
    className={css(
      {
        display: 'inline-block',
        fontSize: '.72rem',
        fontWeight: 700,
        letterSpacing: '.22em',
        textTransform: 'uppercase',
        color: 'var(--music-red)',
        border: '2px solid var(--music-red)',
        padding: '.3rem .7rem .22rem',
        borderRadius: '2px',
        transform: 'rotate(-1.6deg)',
        marginBottom: '1.4rem',
        opacity: 0.85,
      },
      cssProp,
    )}
  >
    {children}
  </span>
);

const tippedCss = cva({
  base: {
    position: 'relative',
    margin: 0,
    background: 'var(--music-paper-lift)',
    padding: '.65rem .65rem 1rem',
    boxShadow: '0 3px 14px rgba(38, 25, 13, .28)',
    maxWidth: '24rem',
    '@media (max-width: 800px)': { marginTop: '1.5rem' },
  },
  variants: {
    tilt: {
      right: { transform: 'rotate(1.8deg)' },
      left: { transform: 'rotate(-2deg)' },
    },
  },
  defaultVariants: { tilt: 'right' },
});

const tapeCss: SystemStyleObject = {
  position: 'absolute',
  width: '5.2rem',
  height: '1.6rem',
  background: 'rgba(214, 196, 148, .8)',
  boxShadow: '0 1px 3px rgba(38,25,13,.18)',
  opacity: 0.9,
};

type TippedPhotoProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  /** Typed part of the caption. */
  caption?: ReactNode;
  /** Pencilled aside rendered in the Caveat hand. */
  hand?: ReactNode;
  tilt?: 'right' | 'left';
  css?: SystemStyleObject;
};

/** Tipped-in photograph on a paper mount with tape corners + caption. */
export const TippedPhoto: FC<TippedPhotoProps> = ({
  src,
  alt,
  width,
  height,
  loading,
  caption,
  hand,
  tilt = 'right',
  css: cssProp = {},
}) => (
  <figure className={css(tippedCss.raw({ tilt }), cssProp)}>
    <span
      aria-hidden="true"
      className={css(tapeCss, { top: '-0.7rem', left: '-1.6rem', transform: 'rotate(-38deg)' })}
    />
    <span
      aria-hidden="true"
      className={css(tapeCss, { top: '-0.7rem', right: '-1.6rem', transform: 'rotate(38deg)' })}
    />
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={css({
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        filter: 'sepia(.12) contrast(1.02)',
      })}
    />
    {(caption || hand) && (
      <figcaption
        className={css({
          fontSize: '.74rem',
          paddingTop: '.6rem',
          color: 'var(--music-ink-soft)',
        })}
      >
        {caption}
        {caption && hand ? ' ' : null}
        {hand && (
          <span
            className={css({
              fontFamily: 'var(--music-font-pencil)',
              fontSize: '1.15rem',
              color: 'var(--music-mahogany)',
            })}
          >
            {hand}
          </span>
        )}
      </figcaption>
    )}
  </figure>
);
