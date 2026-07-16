import type { ReactElement } from 'react';
import { css, cva } from '../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../styled-system/types';

export type StreamingService = 'spotify' | 'apple-music';

export type ServiceToggleProps = {
  value: StreamingService;
  onChange: (s: StreamingService) => void;
  css?: SystemStyleObject;
};

const toggleCss = css.raw({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '.55rem',
  border: '2px solid var(--music-ink)',
  borderRadius: '3px',
  background: 'var(--music-paper-deep)',
  color: 'var(--music-ink)',
  fontFamily: 'inherit',
  fontSize: '.68rem',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  padding: '.35rem .7rem',
  cursor: 'pointer',
});

const labelCss = cva({
  variants: {
    active: {
      true: { color: 'var(--music-ink)', fontWeight: 700 },
      false: { color: 'var(--music-cream-dim)', fontWeight: 400 },
    },
  },
});

const trackCss = css({
  position: 'relative',
  display: 'inline-block',
  flexShrink: 0,
  width: '2.6rem',
  height: '1.15rem',
  border: '2px solid var(--music-ink)',
  borderRadius: '999px',
  background: 'var(--music-paper)',
});

const dotCss = cva({
  base: {
    position: 'absolute',
    top: '50%',
    left: '.12rem',
    width: '.82rem',
    height: '.82rem',
    borderRadius: '50%',
    background: 'var(--music-red)',
    transform: 'translateY(-50%)',
    _motionSafe: {
      transition: 'transform .2s ease',
    },
  },
  variants: {
    position: {
      left: {},
      right: { transform: 'translateY(-50%) translateX(1.3rem)' },
    },
  },
});

const finePrintCss = css({
  fontSize: '.6rem',
  fontWeight: 400,
  letterSpacing: 'normal',
  textTransform: 'none',
  color: 'var(--music-olive)',
});

export function ServiceToggle({ value, onChange, css: cssProp = {} }: ServiceToggleProps): ReactElement {
  const checked = value === 'apple-music';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label="Streaming service: Spotify or Apple Music"
      className={css(toggleCss, cssProp)}
      onClick={() => onChange(checked ? 'spotify' : 'apple-music')}
    >
      <span className={labelCss({ active: !checked })}>Spotify</span>
      <span className={trackCss} aria-hidden="true">
        <span className={dotCss({ position: checked ? 'right' : 'left' })} />
      </span>
      <span className={labelCss({ active: checked })}>Apple Music</span>
      <span className={finePrintCss}>· your choice</span>
    </button>
  );
}
