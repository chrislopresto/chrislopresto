import type { MetaFunction } from 'react-router';
import type { Route } from './+types/route';
import musicStylesheet from './music.css?url';
import studioSolo from './images/chris-lopresto-studio-solo.jpg';
import { MusicPage } from './music-page';
import { CommandPalette } from '../components/command-palette/command-palette';

const ORIGIN = 'https://chrislopresto.com';
const PAPER = '#E9DDBC';

export const meta: MetaFunction = () => [
  { title: 'Chris LoPresto | Music' },
  {
    name: 'description',
    content:
      'Chris LoPresto — session musician, songwriter, recording artist, music director, band leader. Piano, keyboards, vocals, synths, guitars, bass, flute.',
  },
  { name: 'theme-color', content: PAPER },
  { property: 'og:title', content: 'Chris LoPresto | Music' },
  {
    property: 'og:description',
    content: 'Session musician. Songwriter. Recording artist. Music director. Band leader.',
  },
  { property: 'og:type', content: 'profile' },
  { property: 'og:image', content: `${ORIGIN}${studioSolo}` },
  { name: 'twitter:card', content: 'summary_large_image' },
];

export const links: Route.LinksFunction = () => [{ rel: 'stylesheet', href: musicStylesheet }];

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chris LoPresto',
  jobTitle: 'Session Musician',
  url: `${ORIGIN}/music`,
  knowsAbout: ['Piano', 'Keyboards', 'Vocals', 'Synthesizers', 'Guitar', 'Bass', 'Flute', 'Music Direction'],
  sameAs: [
    'https://soundcloud.com/chrislopresto',
    'https://open.spotify.com/artist/1VUEj407wXYLBnAwms1o9f',
    'https://www.youtube.com/watch?v=gHvJZNAp8m0',
  ],
};

export default function Music() {
  return (
    <>
      {/* Neutralize the site-shell body background (root.tsx) for the length
          of this route, including overscroll; unmounts on client-nav away. */}
      <style>{`html, body { background: ${PAPER}; }`}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <MusicPage />
      <CommandPalette />
    </>
  );
}
