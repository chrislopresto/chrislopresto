import { expect, describe, it, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { composeStories } from '@storybook/react-vite';

import * as stories from './media-embed.stories';

const { FlagshipYouTube, CardVimeo, SpotifyTrack, AppleMusicAlbum, SoundcloudTrack } = composeStories(stories);

afterEach(cleanup);

describe('VideoFacade', () => {
  it('renders a facade button with the poster and no iframe', () => {
    render(<FlagshipYouTube />);

    const button = screen.getByRole('button', {
      name: 'Play: Hugo — Bread and Butter · Live on Letterman',
    });
    const poster = button.querySelector('img');

    expect(poster?.getAttribute('src')).toBe('https://i.ytimg.com/vi/gHvJZNAp8m0/hqdefault.jpg');
    expect(document.querySelector('iframe')).toBeNull();
  });

  it('replaces the button with a youtube-nocookie autoplay iframe on click', () => {
    render(<FlagshipYouTube />);

    fireEvent.click(screen.getByRole('button'));

    const iframe = screen.getByTitle('Hugo — Bread and Butter · Live on Letterman');
    expect(iframe.getAttribute('src')).toBe('https://www.youtube-nocookie.com/embed/gHvJZNAp8m0?autoplay=1');
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('appends the start param when startSeconds is set', () => {
    const video = { ...FlagshipYouTube.args.video!, startSeconds: 202 };
    render(<FlagshipYouTube video={video} />);

    fireEvent.click(screen.getByRole('button'));

    const iframe = screen.getByTitle('Hugo — Bread and Butter · Live on Letterman');
    expect(iframe.getAttribute('src')).toBe('https://www.youtube-nocookie.com/embed/gHvJZNAp8m0?autoplay=1&start=202');
  });

  it('builds a vimeo player src for vimeo videos', () => {
    render(<CardVimeo />);

    expect(document.querySelector('iframe')).toBeNull();
    fireEvent.click(screen.getByRole('button'));

    const iframe = screen.getByTitle('Hugo — 99 Problems — Jimmy Kimmel Live!');
    expect(iframe.getAttribute('src')).toBe('https://player.vimeo.com/video/81288700?autoplay=1');
    expect(screen.queryByRole('button')).toBeNull();
  });
});

describe('AudioEmbed', () => {
  it('renders no iframe while closed', () => {
    render(<SpotifyTrack />);

    expect(screen.getByRole('button', { name: 'Play: Lena Hall — Somebody' }).getAttribute('aria-expanded')).toBe(
      'false',
    );
    expect(document.querySelector('iframe')).toBeNull();
  });

  it('opens a spotify track player and ejects it', () => {
    render(<SpotifyTrack />);

    fireEvent.click(screen.getByRole('button', { name: 'Play: Lena Hall — Somebody' }));

    const iframe = screen.getByTitle('Lena Hall — Somebody');
    expect(iframe.getAttribute('src')).toBe('https://open.spotify.com/embed/track/06Qn0JHvLlAjciTyzXL4py');
    expect(iframe.getAttribute('height')).toBe('152');

    const eject = screen.getByRole('button', { name: 'Close player: Lena Hall — Somebody' });
    expect(eject.getAttribute('aria-expanded')).toBe('true');
    fireEvent.click(eject);

    expect(document.querySelector('iframe')).toBeNull();
    expect(screen.getByRole('button', { name: 'Play: Lena Hall — Somebody' })).toBeTruthy();
  });

  it('opens an apple music album player', () => {
    render(<AppleMusicAlbum />);

    fireEvent.click(screen.getByRole('button', { name: 'Play: Wes Hutchinson — All the Plans Have Changed' }));

    const iframe = screen.getByTitle('Wes Hutchinson — All the Plans Have Changed');
    expect(iframe.getAttribute('src')).toBe('https://embed.music.apple.com/us/album/1550803106');
    expect(iframe.getAttribute('height')).toBe('450');
  });

  it('appends the track query param for apple music tracks', () => {
    render(
      <AppleMusicAlbum
        source={{ provider: 'apple-music', kind: 'track', albumId: '1506418468', trackId: '1506418472' }}
        title="Lena Hall — Somebody"
      />,
    );

    fireEvent.click(screen.getByRole('button'));

    const iframe = screen.getByTitle('Lena Hall — Somebody');
    expect(iframe.getAttribute('src')).toBe('https://embed.music.apple.com/us/album/1506418468?i=1506418472');
    expect(iframe.getAttribute('height')).toBe('175');
  });

  it('opens a soundcloud player with the encoded track url', () => {
    render(<SoundcloudTrack />);

    fireEvent.click(screen.getByRole('button', { name: 'Play: Immediately' }));

    const iframe = screen.getByTitle('Immediately');
    expect(iframe.getAttribute('src')).toBe(
      'https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F29494640&auto_play=true&show_user=true&color=%23C08A2B',
    );
    expect(iframe.getAttribute('height')).toBe('166');
  });
});
