import { useState } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { css, cva } from '../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../styled-system/types';
import type { VideoContent } from '../../content';

export type VideoFacadeProps = {
  video: VideoContent;
  variant?: 'flagship' | 'card';
  css?: SystemStyleObject;
  children?: ReactNode;
};

const frameCss = css.raw({
  position: 'relative',
  display: 'block',
  width: '100%',
  padding: 0,
  background: '#000',
  border: '1px solid rgba(217, 200, 158, .35)',
  outline: '6px solid rgba(0, 0, 0, .35)',
});

const facadeButtonCss = css.raw({
  cursor: 'pointer',
  '&:hover img, &:focus-visible img': {
    filter: 'none',
  },
  '&:hover [data-part="play-badge"], &:focus-visible [data-part="play-badge"]': {
    transform: 'translate(-50%, -50%) scale(1.08)',
    background: 'rgba(166, 71, 46, .75)',
  },
});

const posterCss = css({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'sepia(.22) saturate(.85) contrast(1.02)',
  _motionSafe: {
    transition: 'filter .3s ease',
  },
});

const playBadgeCss = cva({
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    border: '2px solid var(--music-paper)',
    background: 'rgba(31, 21, 12, .55)',
    pointerEvents: 'none',
    _motionSafe: {
      transition: 'transform .2s ease, background .2s ease',
    },
    _after: {
      content: '""',
      width: 0,
      height: 0,
      borderTop: '.5em solid transparent',
      borderBottom: '.5em solid transparent',
      borderLeft: '.85em solid var(--music-paper)',
      marginLeft: '.18em',
    },
  },
  variants: {
    variant: {
      flagship: { width: '3.4rem', height: '3.4rem', fontSize: '1.05rem' },
      card: { width: '2.5rem', height: '2.5rem', fontSize: '.78rem' },
    },
  },
});

const iframeCss = css({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  border: 0,
});

function videoEmbedSrc(video: VideoContent): string {
  if (video.provider === 'youtube') {
    const start = video.startSeconds ? `&start=${video.startSeconds}` : '';
    return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1${start}`;
  }
  return `https://player.vimeo.com/video/${video.id}?autoplay=1`;
}

export function VideoFacade({ video, variant = 'card', css: cssProp = {}, children }: VideoFacadeProps): ReactElement {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={css(frameCss, cssProp)} style={{ aspectRatio: video.aspectRatio }}>
        <iframe
          className={iframeCss}
          src={videoEmbedSrc(video)}
          title={video.title}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={css(frameCss, facadeButtonCss, cssProp)}
      style={{ aspectRatio: video.aspectRatio }}
      aria-label={`Play: ${video.title}`}
      onClick={() => setPlaying(true)}
    >
      <img className={posterCss} src={video.posterSrc} alt="" loading="lazy" />
      {children}
      <span className={playBadgeCss({ variant })} data-part="play-badge" aria-hidden="true" />
    </button>
  );
}
