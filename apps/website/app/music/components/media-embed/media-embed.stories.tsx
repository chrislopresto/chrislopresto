import type { Meta, StoryObj } from '@storybook/react-vite';

import { VideoFacade } from './media-embed';
import { AudioEmbed } from './audio-embed';
import type { VideoContent } from '../../content';
import { css } from '../../../../styled-system/css';
import { musicRootCss } from '../../theme';
import vimeoNinetyNineProblemsPoster from '../../images/vimeo-kimmel-99-problems-poster.jpg';

const flagshipVideo: VideoContent = {
  provider: 'youtube',
  id: 'gHvJZNAp8m0',
  reelTag: 'Reel A1 · Flagship',
  title: 'Hugo — Bread and Butter · Live on Letterman',
  caption: 'Late Show with David Letterman performance with Roc Nation / Epic Records recording artist Hugo.',
  posterSrc: 'https://i.ytimg.com/vi/gHvJZNAp8m0/hqdefault.jpg',
  posterAlt: 'Hugo performing Bread and Butter on the Late Show with David Letterman',
  aspectRatio: '16 / 9',
};

const cardVideo: VideoContent = {
  provider: 'vimeo',
  id: '81288700',
  reelTag: 'A3 · ABC',
  title: 'Hugo — 99 Problems — Jimmy Kimmel Live!',
  caption: 'Jimmy Kimmel Live! performance with Roc Nation / Epic Records recording artist Hugo.',
  posterSrc: vimeoNinetyNineProblemsPoster,
  posterAlt: 'Hugo band on stage at Jimmy Kimmel Live',
  aspectRatio: '4 / 3',
};

const meta: Meta<typeof VideoFacade> = {
  title: 'Music/MediaEmbed',
  component: VideoFacade,
  decorators: [
    (Story) => (
      <div className={css(musicRootCss, { padding: '2rem', maxWidth: '40rem' })}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FlagshipYouTube: Story = {
  args: {
    video: flagshipVideo,
    variant: 'flagship',
  },
};

export const CardVimeo: Story = {
  args: {
    video: cardVideo,
    variant: 'card',
  },
};

type AudioStory = StoryObj<typeof AudioEmbed>;

export const SpotifyTrack: AudioStory = {
  render: (args) => <AudioEmbed {...args} />,
  args: {
    source: { provider: 'spotify', kind: 'track', id: '06Qn0JHvLlAjciTyzXL4py' },
    title: 'Lena Hall — Somebody',
  },
};

export const AppleMusicAlbum: AudioStory = {
  render: (args) => <AudioEmbed {...args} />,
  args: {
    source: { provider: 'apple-music', kind: 'album', albumId: '1550803106' },
    title: 'Wes Hutchinson — All the Plans Have Changed',
  },
};

export const SoundcloudTrack: AudioStory = {
  render: (args) => <AudioEmbed {...args} />,
  args: {
    source: { provider: 'soundcloud', kind: 'track', id: '29494640' },
    title: 'Immediately',
  },
};
