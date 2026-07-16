import type { Meta, StoryObj } from '@storybook/react-vite';

import { css } from '../../../../styled-system/css';
import { musicRootCss } from '../../theme';
import { GigTriangle } from './gig-triangle';

const meta: Meta<typeof GigTriangle> = {
  title: 'Music/GigTriangle',
  // All colors come from the --music-* vars set by musicRootCss (with the
  // mockup hexes as fallbacks), so the sketch is identical in light and dark.
  decorators: [
    (Story) => (
      <div className={css(musicRootCss, { padding: '2.5rem', maxWidth: '30rem' })}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof GigTriangle>;

export const PencilSketch: Story = {
  render: () => <GigTriangle />,
};

export const WithCaption: Story = {
  render: () => (
    <figure className={css({ textAlign: 'center', margin: 0 })}>
      <GigTriangle />
      <figcaption className={css({ fontSize: '.95rem', fontWeight: 700, marginTop: '.6rem' })}>
        The gig triangle matters.
        <span
          className={css({
            display: 'block',
            fontWeight: 400,
            fontSize: '.74rem',
            color: 'var(--music-ink-soft)',
            marginTop: '.25rem',
          })}
        >
          Sketched on the sleeve since day one. Two out of three ain’t bad; three is a keeper.
        </span>
      </figcaption>
    </figure>
  ),
};
