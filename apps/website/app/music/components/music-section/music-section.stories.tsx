import type { Meta, StoryObj } from '@storybook/react-vite';

import { css } from '../../../../styled-system/css';
import { musicRootCss } from '../../theme';
import { EyebrowStamp, MusicSection, SectionHeading, SectionNote, SideLabel, TippedPhoto } from './music-section';
import earlyGigPhoto from '../../images/chris-lopresto-early-gig.jpg';

const meta: Meta<typeof MusicSection> = {
  title: 'Music/MusicSection',
  // The /music page is a single committed "Liner Notes" look: every color
  // comes from the --music-* vars set by musicRootCss, so these stories
  // render identically under the light and dark decorators.
  decorators: [
    (Story) => (
      <div className={css(musicRootCss)}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MusicSection>;

export const Tones: Story = {
  render: () => (
    <>
      <MusicSection tone="paper" aria-label="Paper tone">
        <SideLabel disc="Side B" cat="Recordings · Selected Sessions" />
        <SectionHeading>On record</SectionHeading>
        <SectionNote>The default page stock — aged sheet music, typewriter voice.</SectionNote>
      </MusicSection>
      <MusicSection tone="paperDeep" aria-label="Paper-deep tone">
        <SideLabel disc="As broadcast" cat="Television · Personnel Credits" />
        <SectionHeading>On air</SectionHeading>
        <SectionNote>Sun-faded sleeve band with hairline mahogany rules top and bottom.</SectionNote>
      </MusicSection>
      <MusicSection tone="inner" aria-label="Inner-sleeve tone">
        <SideLabel disc="Side A" cat="Moving Pictures · 6 Reels" />
        <SectionHeading>On tape</SectionHeading>
        <SectionNote>The dark gatefold inner sleeve — the side-label rule and note recolor themselves.</SectionNote>
      </MusicSection>
    </>
  ),
};

export const Stamp: Story = {
  render: () => (
    <MusicSection tone="paper" aria-label="Eyebrow stamp">
      <EyebrowStamp>Archival · Gatefold Edition</EyebrowStamp>
      <SectionHeading>Rubber-stamped eyebrow</SectionHeading>
    </MusicSection>
  ),
};

export const TippedInPhoto: Story = {
  render: () => (
    <MusicSection tone="paper" aria-label="Tipped-in photo">
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
          gap: '3rem',
          paddingTop: '1.5rem',
        })}
      >
        <TippedPhoto
          src={earlyGigPhoto}
          alt="A 1970s Kodachrome photo of Chris LoPresto as a baby, reaching up to the keys of a mahogany upright piano"
          width={689}
          height={519}
          caption="Upright, sheet music, first residency."
          hand="started early."
        />
        <TippedPhoto
          src={earlyGigPhoto}
          alt="A 1970s Kodachrome photo of Chris LoPresto as a baby, reaching up to the keys of a mahogany upright piano"
          width={689}
          height={519}
          tilt="left"
          hand="field recording, no overdubs"
        />
      </div>
    </MusicSection>
  ),
};
