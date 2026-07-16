import { useState } from 'react';
import type { ReactElement } from 'react';
import { css } from '../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../styled-system/types';

export type AudioSource =
  | { provider: 'spotify'; kind: 'track' | 'album'; id: string }
  | { provider: 'apple-music'; kind: 'track' | 'album'; albumId: string; trackId?: string }
  | { provider: 'soundcloud'; kind: 'track'; id: string };

export type AudioEmbedProps = {
  source: AudioSource;
  title: string;
  css?: SystemStyleObject;
};

const pillCss = css({
  border: '2px solid var(--music-ink)',
  borderRadius: '3px',
  background: 'var(--music-paper-deep)',
  color: 'var(--music-ink)',
  fontFamily: 'inherit',
  fontSize: '.72rem',
  fontWeight: 700,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  padding: '.3rem .7rem',
  cursor: 'pointer',
  _hover: {
    color: 'var(--music-red)',
  },
});

const playerCss = css({
  display: 'block',
  marginTop: '.8rem',
  width: '100%',
  border: '1px solid var(--music-mahogany)',
});

function audioEmbed(source: AudioSource): { src: string; height: number } {
  switch (source.provider) {
    case 'spotify':
      return {
        src: `https://open.spotify.com/embed/${source.kind}/${source.id}`,
        height: source.kind === 'track' ? 152 : 352,
      };
    case 'apple-music':
      return {
        src: `https://embed.music.apple.com/us/album/${source.albumId}${source.trackId ? `?i=${source.trackId}` : ''}`,
        height: source.trackId ? 175 : 450,
      };
    case 'soundcloud':
      return {
        src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(
          `https://api.soundcloud.com/tracks/${source.id}`,
        )}&auto_play=true&show_user=true&color=%23C08A2B`,
        height: 166,
      };
  }
}

export function AudioEmbed({ source, title, css: cssProp = {} }: AudioEmbedProps): ReactElement {
  const [open, setOpen] = useState(false);
  const { src, height } = audioEmbed(source);

  return (
    <div className={css(cssProp)}>
      <button
        type="button"
        className={pillCss}
        aria-expanded={open}
        aria-label={open ? `Close player: ${title}` : `Play: ${title}`}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        {open ? '■ Eject' : '▶ Play'}
      </button>
      {open ? (
        <iframe
          className={playerCss}
          src={src}
          height={height}
          title={title}
          loading="eager"
          allow="autoplay; encrypted-media"
        />
      ) : null}
    </div>
  );
}
