import { useState } from 'react';
import { css, cva } from '../../styled-system/css';
import type { SystemStyleObject } from '../../styled-system/types';
import { displayType, musicRootCss, wrapCss } from './theme';
import {
  contactParts,
  education,
  flagshipVideo,
  gear,
  identityLines,
  reelVideos,
  rider,
  soundcloudTracks,
  streamingReleases,
  techHighlights,
  tvCredits,
} from './content';
import type { StreamingRelease } from './content';
import { VideoFacade } from './components/media-embed/media-embed';
import { AudioEmbed, type AudioSource } from './components/media-embed/audio-embed';
import { ServiceToggle, type StreamingService } from './components/service-toggle/service-toggle';
import { ObfuscatedContact } from './components/obfuscated-contact/obfuscated-contact';
import {
  EyebrowStamp,
  MusicSection,
  SectionHeading,
  SectionNote,
  SideLabel,
  TippedPhoto,
} from './components/music-section/music-section';
import { GigTriangle } from './components/gig-triangle/gig-triangle';
import studioSoloPhoto from './images/chris-lopresto-studio-solo.jpg';
import lettermanRigPhoto from './images/chris-lopresto-letterman-rig.jpg';
import salvagePhoto from './images/chris-lopresto-salvage.jpg';
import earlyGigPhoto from './images/chris-lopresto-early-gig.jpg';
import { NavLink } from 'react-router';

/* ── Kodachrome paper grain (mockup body::after) ─────────────────────── */

const GRAIN_BACKGROUND = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0.08'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`;

const grainCss: SystemStyleObject = {
  position: 'fixed',
  inset: 0,
  zIndex: 40,
  pointerEvents: 'none',
  opacity: 0.35,
};

/* ── Spine ───────────────────────────────────────────────────────────── */

const spineCss: SystemStyleObject = {
  borderBottom: '3px double var(--music-mahogany)',
  background: 'var(--music-paper-deep)',
  fontSize: '.72rem',
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  '& b': { fontWeight: 700 },
  paddingInline: '8px',
};

const spineRowCss: SystemStyleObject = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.25rem 1.5rem',
  justifyContent: 'space-between',
  paddingTop: '.55rem',
  paddingBottom: '.55rem',
};

/* ── Hero ────────────────────────────────────────────────────────────── */

const heroCss: SystemStyleObject = {
  padding: 'clamp(2.5rem, 7vw, 5.5rem) 8px clamp(2rem, 5vw, 4rem) 8px',
};

const heroGridCss: SystemStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
  gap: 'clamp(1.5rem, 5vw, 4rem)',
  alignItems: 'start',
  '@media (max-width: 800px)': { gridTemplateColumns: '1fr' },
};

const h1Css: SystemStyleObject = {
  ...displayType,
  fontSize: 'clamp(2.9rem, 9.5vw, 5.6rem)',
  lineHeight: 0.92,
  letterSpacing: '-.015em',
  textTransform: 'uppercase',
  color: 'var(--music-ink)',
  margin: 0,
};

/** The "o" in "LoPresto": the H1 is uppercased, so drop this glyph back to a
 *  smaller lowercase form for a bit of logotype personality. */
const smallOCss: SystemStyleObject = {
  textTransform: 'none',
  fontSize: '1.1em',
  fontWeight: 700,
};

const identityCss: SystemStyleObject = {
  marginTop: '1.8rem',
  marginBottom: 0,
  maxWidth: '30rem',
  listStyle: 'none',
  padding: 0,
  '& li': {
    fontSize: 'clamp(.95rem, 1.6vw, 1.1rem)',
    fontWeight: 700,
    padding: '.32rem 0',
    borderBottom: '1px dotted var(--music-mahogany)',
    _before: {
      content: '"×"',
      color: 'var(--music-mustard)',
      marginRight: '.7rem',
      fontWeight: 400,
    },
  },
};

const riderCss: SystemStyleObject = {
  marginTop: '1.6rem',
  marginBottom: 0,
  fontSize: '.8rem',
  lineHeight: 1.9,
  '& div': {
    borderLeft: '3px solid var(--music-paper-deep)',
    paddingLeft: '.8rem',
    marginBottom: '.35rem',
  },
  '& dt': {
    display: 'inline',
    color: 'var(--music-olive)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '.12em',
    fontSize: '.68rem',
  },
  '& dd': { display: 'inline', margin: '0 0 0 .4rem' },
};

/* ── Side A: dark inner sleeve (videos) ──────────────────────────────── */

const flagshipCss: SystemStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.55fr) minmax(0, 1fr)',
  gap: 'clamp(1.4rem, 4vw, 3rem)',
  alignItems: 'end',
  marginBottom: 'clamp(2.4rem, 5vw, 3.6rem)',
  '@media (max-width: 800px)': { gridTemplateColumns: '1fr' },
};

const reelTagCss: SystemStyleObject = {
  position: 'absolute',
  top: '.6rem',
  left: '.6rem',
  fontSize: '.62rem',
  fontWeight: 700,
  letterSpacing: '.16em',
  textTransform: 'uppercase',
  background: 'var(--music-mustard)',
  color: 'var(--music-inner)',
  padding: '.18rem .5rem .12rem',
};

const flagTrackNoCss: SystemStyleObject = {
  color: 'var(--music-mustard)',
  fontWeight: 700,
  fontSize: '.8rem',
  letterSpacing: '.15em',
};

const flagTitleCss: SystemStyleObject = {
  fontFamily: 'var(--music-font-display)',
  fontWeight: 800,
  fontVariationSettings: "'opsz' 80, 'SOFT' 60",
  fontSize: 'clamp(1.5rem, 3.4vw, 2.2rem)',
  lineHeight: 1.08,
  color: 'var(--music-paper)',
  margin: '.4rem 0 .8rem',
};

const flagCaptionCss: SystemStyleObject = {
  fontSize: '.86rem',
  color: 'var(--music-cream-dim)',
  margin: 0,
};

const flagQuoteCss: SystemStyleObject = {
  color: 'var(--music-mustard)',
  fontWeight: 700,
};

const reelGridCss: SystemStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(14.5rem, 1fr))',
  gap: 'clamp(1.2rem, 3vw, 2rem)',
};

const reelTrackNoCss: SystemStyleObject = {
  color: 'var(--music-mustard)',
  fontSize: '.72rem',
  fontWeight: 700,
  letterSpacing: '.15em',
};

const reelTitleCss: SystemStyleObject = {
  fontSize: '.92rem',
  fontWeight: 700,
  lineHeight: 1.3,
  color: 'var(--music-paper)',
  margin: '.75rem 0 .35rem',
};

const reelCaptionCss: SystemStyleObject = {
  fontSize: '.78rem',
  color: 'var(--music-cream-dim)',
  margin: 0,
};

const rigStillCss: SystemStyleObject = {
  marginTop: 'clamp(2.4rem, 5vw, 3.6rem)',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
  gap: 'clamp(1.4rem, 4vw, 3rem)',
  alignItems: 'center',
  borderTop: '1px dotted var(--music-cream-dim)',
  paddingTop: 'clamp(1.8rem, 4vw, 2.6rem)',
  '@media (max-width: 800px)': { gridTemplateColumns: '1fr' },
};

const rigCaptionCss: SystemStyleObject = {
  fontSize: '.82rem',
  color: 'var(--music-cream-dim)',
  '& strong': {
    color: 'var(--music-paper)',
    display: 'block',
    marginBottom: '.5rem',
    fontSize: '.95rem',
  },
};

const rigHandCss: SystemStyleObject = {
  fontFamily: 'var(--music-font-pencil)',
  fontSize: '1.3rem',
  color: 'var(--music-mustard)',
  display: 'block',
  marginTop: '.8rem',
  transform: 'rotate(-1.5deg)',
};

const rigImgCss: SystemStyleObject = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
  border: '1px solid rgba(217, 200, 158, .35)',
  filter: 'sepia(.18) saturate(.9)',
  '@media (max-width: 800px)': { order: -1 },
};

/* ── Side B: tracklist ───────────────────────────────────────────────── */

const tracklistCss: SystemStyleObject = {
  listStyle: 'none',
  maxWidth: '46rem',
  margin: 0,
  padding: 0,
};

const trackCss: SystemStyleObject = {
  padding: '1.05rem 0 .95rem',
  borderBottom: '1px dotted var(--music-mahogany)',
};

const trackLineCss: SystemStyleObject = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '.7rem',
  '@media (max-width: 540px)': { flexWrap: 'wrap' },
};

const trackNoCss: SystemStyleObject = {
  fontWeight: 700,
  color: 'var(--music-red)',
  fontSize: '.8rem',
  minWidth: '2rem',
};

const trackTitleCss: SystemStyleObject = {
  fontWeight: 700,
  fontSize: '.98rem',
};

const trackLeaderCss: SystemStyleObject = {
  flex: 1,
  borderBottom: '2px dotted var(--music-paper-deep)',
  transform: 'translateY(-.25em)',
  minWidth: '1.5rem',
  '@media (max-width: 540px)': { display: 'none' },
};

const trackRoleCss: SystemStyleObject = {
  fontSize: '.68rem',
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--music-olive)',
  textAlign: 'right',
  whiteSpace: 'nowrap',
  '@media (max-width: 540px)': { width: '100%', textAlign: 'left', paddingLeft: '2.7rem' },
};

const trackMemoCss: SystemStyleObject = {
  fontSize: '.8rem',
  color: 'var(--music-ink-soft)',
  margin: '.35rem 0 0 2.7rem',
  maxWidth: '36rem',
  '@media (max-width: 540px)': { marginLeft: 0 },
};

const memoLinkCss: SystemStyleObject = {
  color: 'var(--music-mahogany)',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  fontWeight: 700,
  '&:hover': { color: 'var(--music-red)' },
};

const subListCss: SystemStyleObject = {
  listStyle: 'none',
  padding: 0,
  margin: '.5rem 0 0 2.7rem',
  fontSize: '.78rem',
  '& li': { padding: '.12rem 0' },
  '@media (max-width: 540px)': { marginLeft: 0 },
};

const subNoCss: SystemStyleObject = {
  color: 'var(--music-mustard)',
  fontWeight: 700,
  marginRight: '.5rem',
};

const trackEmbedCss: SystemStyleObject = {
  marginTop: '.55rem',
  marginLeft: '2.7rem',
  '@media (max-width: 540px)': { marginLeft: 0 },
};

const vinylRowCss: SystemStyleObject = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const vinylBodyCss: SystemStyleObject = {
  flex: 1,
  minWidth: 0,
};

const vinylCss = cva({
  base: {
    flex: 'none',
    width: '3.1rem',
    height: '3.1rem',
    borderRadius: '50%',
    boxShadow: 'inset 0 0 0 1px rgba(38,25,13,.5), 0 2px 5px rgba(38,25,13,.3)',
    display: 'grid',
    placeItems: 'center',
    fontFamily: 'var(--music-font-display)',
    fontWeight: 900,
    fontSize: '.68rem',
  },
  variants: {
    label: {
      mustard: {
        background:
          'radial-gradient(circle at 50% 50%, var(--music-paper) 0 17%, transparent 17.5%), radial-gradient(circle at 50% 50%, var(--music-mustard) 0 34%, var(--music-ink) 34.5%)',
        color: 'var(--music-ink)',
      },
      red: {
        background:
          'radial-gradient(circle at 50% 50%, var(--music-paper) 0 17%, transparent 17.5%), radial-gradient(circle at 50% 50%, var(--music-red) 0 34%, var(--music-ink) 34.5%)',
        color: 'var(--music-paper)',
      },
      olive: {
        background:
          'radial-gradient(circle at 50% 50%, var(--music-paper) 0 17%, transparent 17.5%), radial-gradient(circle at 50% 50%, var(--music-olive) 0 34%, var(--music-ink) 34.5%)',
        color: 'var(--music-paper)',
      },
    },
  },
  defaultVariants: { label: 'mustard' },
});

const acetateHeadingCss: SystemStyleObject = {
  margin: '2.6rem 0 .4rem',
  fontSize: '.72rem',
  fontWeight: 700,
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: 'var(--music-red)',
};

const acetateNoCss: SystemStyleObject = {
  color: 'var(--music-olive)',
};

/* ── TV credits ──────────────────────────────────────────────────────── */

const creditsCss: SystemStyleObject = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  maxWidth: '46rem',
  '& li': {
    display: 'flex',
    alignItems: 'baseline',
    gap: '.7rem',
    padding: '.7rem 0',
    borderBottom: '1px dotted var(--music-mahogany)',
    fontSize: '.9rem',
    '@media (max-width: 540px)': { flexWrap: 'wrap' },
  },
};

const creditShowCss: SystemStyleObject = { fontWeight: 700 };

const creditLeaderCss: SystemStyleObject = {
  flex: 1,
  borderBottom: '2px dotted var(--music-mahogany)',
  opacity: 0.45,
  transform: 'translateY(-.25em)',
  minWidth: '1.5rem',
  '@media (max-width: 540px)': { display: 'none' },
};

const creditWithCss: SystemStyleObject = {
  fontSize: '.74rem',
  color: 'var(--music-ink-soft)',
  textAlign: 'right',
  maxWidth: '15rem',
  '@media (max-width: 540px)': { textAlign: 'left', maxWidth: 'none' },
};

/* ── Fine print ──────────────────────────────────────────────────────── */

const fineColsCss: SystemStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gap: 'clamp(1.6rem, 4vw, 3rem)',
  marginBottom: 'clamp(2.4rem, 5vw, 3.5rem)',
};

const fineColHeadingCss: SystemStyleObject = {
  fontSize: '.74rem',
  letterSpacing: '.2em',
  textTransform: 'uppercase',
  color: 'var(--music-red)',
  borderBottom: '2px solid var(--music-mahogany)',
  paddingBottom: '.45rem',
  margin: '0 0 .8rem',
};

const fineListCss: SystemStyleObject = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: '.82rem',
  '& li': { padding: '.3rem 0', borderBottom: '1px dotted var(--music-paper-deep)' },
  '& b': { fontWeight: 700 },
};

const fineKindCss: SystemStyleObject = {
  color: 'var(--music-olive)',
  fontSize: '.68rem',
  textTransform: 'uppercase',
  letterSpacing: '.12em',
  display: 'block',
};

const fineAsideCss: SystemStyleObject = {
  fontSize: '.72rem',
  color: 'var(--music-ink-soft)',
  fontStyle: 'italic',
};

const salvageStripCss: SystemStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
  gap: 'clamp(1.4rem, 4vw, 3rem)',
  alignItems: 'center',
  '@media (max-width: 800px)': { gridTemplateColumns: '1fr' },
};

const pullQuoteCss: SystemStyleObject = {
  fontFamily: 'var(--music-font-display)',
  fontWeight: 800,
  fontVariationSettings: "'opsz' 80, 'SOFT' 80",
  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
  lineHeight: 1.15,
  color: 'var(--music-mahogany)',
  margin: 0,
  '& em': { color: 'var(--music-red)', fontStyle: 'normal' },
};

const salvageNoteCss: SystemStyleObject = {
  fontSize: '.82rem',
  color: 'var(--music-ink-soft)',
  margin: '.8rem 0 0',
};

/* ── Gig triangle + booking ──────────────────────────────────────────── */

const bookingGridCss: SystemStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
  gap: 'clamp(2rem, 5vw, 4rem)',
  alignItems: 'center',
  '@media (max-width: 800px)': { gridTemplateColumns: '1fr' },
};

const triangleFigCss: SystemStyleObject = {
  textAlign: 'center',
  margin: 0,
  '& figcaption': {
    fontSize: '.95rem',
    fontWeight: 700,
    marginTop: '.6rem',
  },
};

const bookingFineNoteCss: SystemStyleObject = {
  fontSize: '.72rem',
  color: 'var(--music-olive)',
  margin: '.9rem 0 0',
  maxWidth: '26rem',
};

/* ── Closer + footer ─────────────────────────────────────────────────── */

const footerCss: SystemStyleObject = {
  background: 'var(--music-inner)',
  color: 'var(--music-cream-dim)',
  fontSize: '.68rem',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  borderTop: '1px dotted rgba(217, 200, 158, .3)',
  paddingInline: '8px',
};

const footerRowCss: SystemStyleObject = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.3rem 1.5rem',
  justifyContent: 'space-between',
  paddingTop: '1rem',
  paddingBottom: '1.2rem',
};

/* ── Helpers ─────────────────────────────────────────────────────────── */

function audioSourceFor(release: StreamingRelease, service: StreamingService): AudioSource {
  if (service === 'spotify') {
    return { provider: 'spotify', kind: release.kind, id: release.spotifyId };
  }
  return {
    provider: 'apple-music',
    kind: release.kind,
    albumId: release.appleMusicAlbumId,
    trackId: release.appleMusicTrackId,
  };
}

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'];

/** The flagship title/caption arrive as single strings; split them so the
 *  mockup's two-line title and mustard pull-quote survive the translation. */
const FLAGSHIP_QUOTE = '“I like that!”';
const [flagshipTitleLead, flagshipTitleTail] = flagshipVideo.title.split(' · ');
const flagshipHasQuote = flagshipVideo.caption.endsWith(FLAGSHIP_QUOTE);
const flagshipCaptionLead = flagshipHasQuote
  ? flagshipVideo.caption.slice(0, -FLAGSHIP_QUOTE.length)
  : flagshipVideo.caption;

/* ── Page ────────────────────────────────────────────────────────────── */

export function MusicPage() {
  const [service, setService] = useState<StreamingService>('spotify');

  return (
    <main className={css(musicRootCss)}>
      {/* Kodachrome paper grain over everything (mockup body::after) */}
      <div aria-hidden="true" className={css(grainCss)} style={{ backgroundImage: GRAIN_BACKGROUND }} />

      {/* ── Spine ─────────────────────────────────────────────────── */}
      <header className={css(spineCss)}>
        <div className={css(wrapCss, spineRowCss)}>
          <span>
            <NavLink to="/">
              <b>Chris LoPresto</b>
            </NavLink>
          </span>
          <span>Music</span>
          <span className={css({ color: 'var(--music-red)' })}>CAT. NO. CLP-0732</span>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className={css(heroCss)} aria-labelledby="music-title">
        <div className={css(wrapCss, heroGridCss)}>
          <div>
            <EyebrowStamp>Keyboards · Vocals</EyebrowStamp>
            <h1 id="music-title" className={css(h1Css)}>
              Chris{' '}
              <span className={css({ color: 'var(--music-mustard)' })}>
                L<span className={css(smallOCss)}>o</span>
              </span>
              Presto
            </h1>
            <ul className={css(identityCss)}>
              {identityLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <dl className={css(riderCss)}>
              {rider.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <TippedPhoto
            src={studioSoloPhoto}
            alt="Chris LoPresto alone at a grand piano in a dark rehearsal room"
            width={600}
            height={600}
            caption="Studio solitude."
            hand="2012"
          />
        </div>
      </section>

      {/* ── Side A: moving pictures (dark inner sleeve) ───────────── */}
      <MusicSection tone="inner" id="videos" aria-labelledby="videos-title">
        <SideLabel disc="Side A" cat="Moving Pictures" />
        <SectionHeading id="videos-title">On tape</SectionHeading>
        <SectionNote>Broadcast performances, video shoots, and gigs on tape.</SectionNote>

        {/* flagship */}
        <div className={css(flagshipCss)}>
          <VideoFacade video={flagshipVideo} variant="flagship">
            <span className={css(reelTagCss)}>{flagshipVideo.reelTag}</span>
          </VideoFacade>
          <div>
            <span className={css(flagTrackNoCss)}>A1 · CBS · 2011-05-10</span>
            <h3 className={css(flagTitleCss)}>
              {flagshipTitleLead}
              {flagshipTitleTail ? (
                <>
                  <br />
                  {flagshipTitleTail}
                </>
              ) : null}
            </h3>
            <p className={css(flagCaptionCss)}>
              {flagshipCaptionLead}
              {flagshipHasQuote && <span className={css(flagQuoteCss)}>{FLAGSHIP_QUOTE}</span>}
            </p>
          </div>
        </div>

        {/* reel grid */}
        <div className={css(reelGridCss)}>
          {reelVideos.map((video) => (
            <div key={`${video.provider}-${video.id}`}>
              <VideoFacade video={video} variant="card" />
              <span className={css(reelTrackNoCss)}>{video.reelTag}</span>
              <h4 className={css(reelTitleCss)}>{video.title}</h4>
              <p className={css(reelCaptionCss)}>{video.caption}</p>
            </div>
          ))}
        </div>

        {/* archival still: the rig */}
        <div className={css(rigStillCss)}>
          <div className={css(rigCaptionCss)}>
            <strong>Old school + new school — Ed Sullivan Theater, 2011.</strong>
            Touring rig with a B3 upgrade for Letterman
            <span className={css(rigHandCss)}>It's always best to blend the decades</span>
          </div>
          <img
            src={lettermanRigPhoto}
            alt="Letterman stage rig: Hammond B3 organ, drum kit, and MacBook on a road case at the Ed Sullivan Theater"
            loading="lazy"
            className={css(rigImgCss)}
          />
        </div>
      </MusicSection>

      {/* ── Side B: recordings ────────────────────────────────────── */}
      <MusicSection tone="paper" id="recordings" aria-labelledby="recordings-title">
        <SideLabel disc="Side B" cat="Recordings · Selected Sessions" />
        <SectionHeading id="recordings-title">On record</SectionHeading>
        <SectionNote>Selected session work. Pick your player.</SectionNote>

        <ServiceToggle value={service} onChange={setService} css={{ marginBottom: '2.2rem' }} />

        <ol className={css(tracklistCss)}>
          {streamingReleases.map((release) => (
            <li key={release.no} className={css(trackCss)}>
              <div className={css(vinylRowCss)}>
                <span aria-hidden="true" className={vinylCss({ label: release.labelVariant })}>
                  {release.label}
                </span>
                <div className={css(vinylBodyCss)}>
                  <div className={css(trackLineCss)}>
                    <span className={css(trackNoCss)}>{release.no}</span>
                    <span className={css(trackTitleCss)}>{release.title}</span>
                    <span aria-hidden="true" className={css(trackLeaderCss)} />
                    <span className={css(trackRoleCss)}>{release.role}</span>
                  </div>
                  <p className={css(trackMemoCss)}>
                    {release.memoParts
                      ? release.memoParts.map((part, index) =>
                          typeof part === 'string' ? (
                            part
                          ) : (
                            <a key={index} className={css(memoLinkCss)} href={part.href}>
                              {part.text}
                            </a>
                          ),
                        )
                      : release.memo}
                  </p>
                  {release.subTracks && (
                    <ul className={css(subListCss)}>
                      {release.subTracks.map((subTrack, index) => (
                        <li key={subTrack}>
                          <span
                            className={css(subNoCss)}
                          >{`${release.no.toLowerCase()}-${ROMAN[index] ?? index + 1}`}</span>
                          {subTrack}
                        </li>
                      ))}
                    </ul>
                  )}
                  <AudioEmbed
                    key={service}
                    source={audioSourceFor(release, service)}
                    title={release.title}
                    css={trackEmbedCss}
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>

        <h3 className={css(acetateHeadingCss)}>Unreleased acetates · SoundCloud</h3>
        <ol className={css(tracklistCss)}>
          {soundcloudTracks.map((track) => (
            <li key={track.no} className={css(trackCss)}>
              <div className={css(trackLineCss)}>
                <span className={css(trackNoCss, acetateNoCss)}>{track.no}</span>
                <span className={css(trackTitleCss)}>{track.title}</span>
                <span aria-hidden="true" className={css(trackLeaderCss)} />
                <span className={css(trackRoleCss)}>{track.role}</span>
              </div>
              <p className={css(trackMemoCss)}>{track.memo}</p>
              <AudioEmbed
                source={{ provider: 'soundcloud', kind: 'track', id: track.soundcloudTrackId }}
                title={track.title}
                css={trackEmbedCss}
              />
            </li>
          ))}
        </ol>
      </MusicSection>

      {/* ── TV credits ────────────────────────────────────────────── */}
      <MusicSection tone="paperDeep" id="television" aria-labelledby="television-title">
        <SideLabel disc="As broadcast" cat="Television · Credits" />
        <SectionHeading id="television-title">On air</SectionHeading>
        <ul className={css(creditsCss)}>
          {tvCredits.map((credit) => (
            <li key={credit.show}>
              <span className={css(creditShowCss)}>{credit.show}</span>
              <span aria-hidden="true" className={css(creditLeaderCss)} />
              <span className={css(creditWithCss)}>{credit.detail}</span>
            </li>
          ))}
        </ul>
      </MusicSection>

      {/* ── Fine print: tech / gear / education + salvage strip ───── */}
      <MusicSection tone="paper" id="fine-print" aria-label="The fine print">
        <SideLabel disc="The fine print" cat="Equipment · Backstory" css={{ marginBottom: '2.2rem' }} />

        <div className={css(fineColsCss)}>
          <div>
            <h3 className={css(fineColHeadingCss)}>Technology</h3>
            <ul className={css(fineListCss)}>
              {techHighlights.map((item) => (
                // The tool-list line ("Logic · MainStage · …") is set bold in the mockup.
                <li key={item}>{item.includes('·') ? <b>{item}</b> : item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={css(fineColHeadingCss)}>Recorded with</h3>
            <ul className={css(fineListCss)}>
              {gear.map((item) => (
                <li key={item.kind}>
                  <span className={css(fineKindCss)}>{item.kind}</span>
                  {item.items}
                  {item.aside && (
                    <>
                      {' '}
                      <span className={css(fineAsideCss)}>{item.aside}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={css(fineColHeadingCss)}>Education</h3>
            <ul className={css(fineListCss)}>
              <li>
                <b>{education.school}</b>
                <br />
                {education.university}
              </li>
              {education.degrees.map((degree) => (
                <li key={degree.kind}>
                  <span className={css(fineKindCss)}>{degree.kind}</span>
                  {degree.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={css(salvageStripCss)}>
          <div>
            <p className={css(pullQuoteCss)}>
              Anything sounds good <em>if you commit.</em>
            </p>
            <p className={css(salvageNoteCss)}>Some ideas come easy. Some you have to work for.</p>
          </div>
          <TippedPhoto
            src={salvagePhoto}
            alt="Chris LoPresto sitting cross-legged on a brick street playing a wrecked upright piano"
            loading="lazy"
            tilt="left"
            hand="Live, no overdubs"
          />
        </div>
      </MusicSection>

      {/* ── Gig triangle + booking ────────────────────────────────── */}
      <MusicSection tone="paperDeep" id="booking" aria-labelledby="booking-title">
        <div className={css(bookingGridCss)}>
          <figure className={css(triangleFigCss)}>
            <GigTriangle />
          </figure>

          <div>
            <EyebrowStamp>Booking · Sessions</EyebrowStamp>
            <SectionHeading id="booking-title" css={{ marginBottom: '1.2rem' }}>
              Please reach out
            </SectionHeading>
            <ObfuscatedContact contact={contactParts} />
            <p className={css(bookingFineNoteCss)}>Humans only. Please no bots.</p>
          </div>
        </div>
      </MusicSection>

      {/* ── Closer ────────────────────────────────────────────────── */}
      <MusicSection
        tone="inner"
        aria-labelledby="closer-title"
        css={{
          borderBottom: 'none',
          textAlign: 'center',
          paddingBottom: 'clamp(3rem, 7vw, 5rem)',
        }}
      >
        <TippedPhoto
          src={earlyGigPhoto}
          alt="A 1970s Kodachrome photo of Chris LoPresto as a baby, reaching up to the keys of a mahogany upright piano"
          width={689}
          height={519}
          loading="lazy"
          caption="Early residency."
          hand="1982"
          css={{ marginInline: 'auto', maxWidth: '26rem', transform: 'rotate(-1.6deg)' }}
        />
        <SectionHeading id="closer-title" css={{ margin: '2rem 0 .4rem' }}>
          Always the piano.
        </SectionHeading>
      </MusicSection>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className={css(footerCss)}>
        <div className={css(wrapCss, footerRowCss)}>
          <span>© Chris LoPresto</span>
          <span>CLP-0732</span>
        </div>
      </footer>
    </main>
  );
}
