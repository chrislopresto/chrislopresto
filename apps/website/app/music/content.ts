export type VideoContent = {
  provider: 'youtube' | 'vimeo';
  id: string;
  /** Start playback here (seconds) — YouTube only */
  startSeconds?: number;
  reelTag: string;
  title: string;
  caption: string;
  /** Poster image URL — imported asset for Vimeo, i.ytimg.com for YouTube */
  posterSrc: string;
  posterAlt: string;
  aspectRatio: '16 / 9' | '4 / 3';
};

export type StreamingRelease = {
  no: string;
  title: string;
  role: string;
  memo: string;
  /** Optional rich memo with inline links; falls back to `memo` when absent. */
  memoParts?: Array<string | { text: string; href: string }>;
  kind: 'track' | 'album';
  spotifyId: string;
  appleMusicAlbumId: string;
  appleMusicTrackId?: string;
  /** Sub-listing (e.g. soundtrack cues) — display only */
  subTracks?: string[];
  /** Initials shown on the vinyl label */
  label: string;
  labelVariant: 'mustard' | 'red' | 'olive';
};

export type SoundcloudTrack = {
  no: string;
  title: string;
  role: string;
  memo: string;
  soundcloudTrackId: string;
};

export type ContactParts = {
  email: { user: string; domain: string; tld: string };
  phone: { country: string; area: string; prefix: string; line: string };
};

const youtubePoster = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

import vimeoBreadAndButterPoster from './images/vimeo-kimmel-bread-and-butter-poster.jpg';
import vimeoNinetyNineProblemsPoster from './images/vimeo-kimmel-99-problems-poster.jpg';

export const flagshipVideo: VideoContent = {
  provider: 'youtube',
  id: 'gHvJZNAp8m0',
  reelTag: 'Reel A1 · Flagship',
  title: 'Hugo — Bread and Butter · Live on Letterman',
  caption:
    'Late Show with David Letterman performance with Roc Nation / Epic Records recording artist Hugo. Finicky Hammond B3, frigid studio temperatures, Dave’s approval… “I like that!”',
  posterSrc: youtubePoster('gHvJZNAp8m0'),
  posterAlt: 'Hugo performing Bread and Butter on the Late Show with David Letterman',
  aspectRatio: '16 / 9',
};

export const reelVideos: VideoContent[] = [
  {
    provider: 'vimeo',
    id: '81288702',
    reelTag: 'A2 · ABC',
    title: 'Hugo — Bread and Butter — Jimmy Kimmel Live!',
    caption: 'Jimmy Kimmel Live! performance with Roc Nation / Epic Records recording artist Hugo.',
    posterSrc: vimeoBreadAndButterPoster,
    posterAlt: 'Jimmy Kimmel Live studio',
    aspectRatio: '4 / 3',
  },
  {
    provider: 'vimeo',
    id: '81288700',
    reelTag: 'A3 · ABC',
    title: 'Hugo — 99 Problems — Jimmy Kimmel Live!',
    caption: 'Jimmy Kimmel Live! performance with Roc Nation / Epic Records recording artist Hugo.',
    posterSrc: vimeoNinetyNineProblemsPoster,
    posterAlt: 'Hugo band on stage at Jimmy Kimmel Live',
    aspectRatio: '4 / 3',
  },
  {
    provider: 'youtube',
    id: 'eQT-dIrLnjU',
    reelTag: 'A4 · BK Shoot',
    title: 'Hugo — Mekong River Delta (music video shoot)',
    caption:
      'Jamie Rosenberg DP, dir. Chris Lenz. Music video shoot with Roc Nation / Epic Records recording artist Hugo. Long day, nice jacket.',
    posterSrc: youtubePoster('eQT-dIrLnjU'),
    posterAlt: 'Hugo — Mekong River Delta music video shoot',
    aspectRatio: '16 / 9',
  },
  {
    provider: 'youtube',
    id: 'hu55FP2DB5g',
    reelTag: 'A5 · NYC',
    title: 'Hugo — “Rock & Roll Delight” at Rockwood Music Hall',
    caption: 'Residency at Rockwood Music Hall leading up to US tour with Hugo.',
    posterSrc: youtubePoster('hu55FP2DB5g'),
    posterAlt: 'Hugo performing Rock and Roll Delight at Rockwood Music Hall',
    aspectRatio: '16 / 9',
  },
  {
    provider: 'youtube',
    id: 'L-5vFTePPSc',
    startSeconds: 202,
    reelTag: 'A6 · From 3:22',
    title: 'Stephanie White & the Philth Harmonic — Trying to Dream for You',
    caption: 'Intimate, improvised, otherwise-acoustic performance with Stephanie White.',
    posterSrc: youtubePoster('L-5vFTePPSc'),
    posterAlt: 'Stephanie White and the Philth Harmonic performing Trying to Dream for You',
    aspectRatio: '16 / 9',
  },
];

export const streamingReleases: StreamingRelease[] = [
  {
    no: 'B1',
    title: 'Lena Hall — Somebody',
    role: 'piano',
    memo: 'Piano for Lena Hall covering Depeche Mode. One of my favorite singers to play with. One of my favorite bands.',
    kind: 'track',
    spotifyId: '06Qn0JHvLlAjciTyzXL4py',
    appleMusicAlbumId: '1506418468',
    appleMusicTrackId: '1506418472',
    label: 'LH',
    labelVariant: 'mustard',
  },
  {
    no: 'B2',
    title: 'Wes Hutchinson — All the Plans Have Changed',
    role: 'keys · bg vocals',
    memo: 'Keys and backing vocals for an excellent album Wes recorded in 2013.',
    kind: 'album',
    spotifyId: '4YOlNN5cgUApJ55XUsXr1C',
    appleMusicAlbumId: '1550803106',
    label: 'WH',
    labelVariant: 'red',
  },
  {
    no: 'B3',
    title: 'Dave Wanamaker — Shelter EP',
    role: 'keys · bg vocals',
    memo: 'Keys and backing vocals for an EP Dave recorded in Nashville in 2016.',
    kind: 'album',
    spotifyId: '2TZ8h5rme5cfAiDGRzCYwI',
    appleMusicAlbumId: '1141285022',
    label: 'DW',
    labelVariant: 'olive',
  },
  {
    no: 'B4',
    title: 'Mister Rogers & Me (2010) — soundtrack',
    role: 'writing · piano',
    memo: 'Several song starters I recorded overnight for the soundtrack for Mister Rogers & Me (2010), directed by Benjamin Wagner.',
    memoParts: [
      'Several song starters I recorded overnight for the soundtrack for ',
      { text: 'Mister Rogers & Me (2010) - IMDb', href: 'https://www.imdb.com/title/tt1543511/' },
      ', directed by Benjamin Wagner.',
    ],
    kind: 'album',
    spotifyId: '37QgjXfemQeNO5lz8HIrS8',
    appleMusicAlbumId: '511379572',
    subTracks: ['Won’t You Be', 'Anecdotally', 'Descent', 'Landed'],
    label: 'MR',
    labelVariant: 'mustard',
  },
];

export const soundcloudTracks: SoundcloudTrack[] = [
  {
    no: '×1',
    title: 'Immediately',
    role: 'solo · c. 2010',
    memo: 'Track from an unreleased solo album recorded around 2010.',
    soundcloudTrackId: '29494640',
  },
  {
    no: '×2',
    title: '20251004',
    role: 'sketch · 2025-10-04',
    memo: 'One-take sketch to demo some video game soft synths I grabbed.',
    soundcloudTrackId: '2183084355',
  },
];

export const tvCredits = [
  { show: 'Late Night With David Letterman', detail: 'Roc Nation / Epic Records recording artist Hugo' },
  { show: 'Jimmy Kimmel Live!', detail: 'Roc Nation / Epic Records recording artist Hugo' },
  { show: 'Hennessy Art Of Mixing / MTV Asia', detail: 'Roc Nation / Epic Records recording artist Hugo' },
  { show: 'X Factor / US Season 1', detail: 'Piano for male semifinalists' },
  { show: 'CBS This Morning', detail: 'Independent recording artist Risa Binder' },
];

export const identityLines = [
  'Session musician.',
  'Songwriter.',
  'Recording artist.',
  'Music director.',
  'Band leader.',
];

export const rider = [
  { term: 'Instruments', detail: 'piano / keyboards / vocals / synths / guitars / bass / flute' },
  { term: 'Genres', detail: 'rock / pop / folk / jazz / latin / more' },
  { term: 'Contexts', detail: 'live / studio / touring / technology' },
];

export const techHighlights = [
  'Show computers, routing tracks, soft synths, clicks, sub-mixes, etc.',
  'Logic · MainStage · Reason · Ableton · Pro Tools',
  'Extensive software background.',
];

export const gear = [
  { kind: 'Piano', items: 'Shigeru Kawai SK-3' },
  { kind: 'Keyboards', items: 'Nord Electro 4 · Akai Advance 61 · Korg D1 · assorted iPad synths' },
  { kind: 'Bass', items: 'Lakland DJ-4' },
  { kind: 'Acoustic guitar', items: 'Taylor 614ce' },
  {
    kind: 'Selected past keyboards',
    items: 'Nord Lead 4 · Axiom Pro 61 · Yamaha Motif XS8',
    aside: '(no keytars, sadly)',
  },
];

export const education = {
  school: 'Mason Gross School of the Arts',
  university: 'Rutgers University',
  degrees: [
    { kind: 'Bachelor of Music', detail: 'Jazz Studies (piano)' },
    { kind: 'Bachelor of Science', detail: 'Computer Science' },
  ],
};

/**
 * Stored ONLY as parts — the joined email/phone strings must never appear
 * in source, SSR HTML, or the bundle. Assembled client-side after hydration.
 */
export const contactParts: ContactParts = {
  email: { user: 'chris', domain: 'chrislopresto', tld: 'com' },
  phone: { country: '1', area: '732', prefix: '470', line: '7796' },
};
