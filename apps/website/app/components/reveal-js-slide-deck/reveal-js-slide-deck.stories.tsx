import { StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';

import { RevealJsSlideDeck } from './reveal-js-slide-deck';

type StoryComponent = React.ComponentProps<typeof RevealJsSlideDeck>;

const meta: Meta<StoryComponent> = {
  title: 'Components/Reveal JS Slide Deck',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    slug: {
      options: ['living-style-guide-driven-development', 'betterment-rebranding-bonanza'],
      control: 'select',
    },
    title: { type: 'string' },
  },
  args: {
    slug: 'living-style-guide-driven-development',
    title: 'Living Style Guide Driven Development',
  },
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const Example: Story = {
  render: ({ ...args }) => <RevealJsSlideDeck {...args} />,
};
export const WithoutControls: Story = {
  render: ({ ...args }) => <RevealJsSlideDeck showControls={false} {...args} />,
};
export const SpecificSize: Story = {
  render: ({ ...args }) => <RevealJsSlideDeck {...args} />,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    width: { type: 'string' },
    height: { type: 'string' },
  },
  args: {
    width: '300px',
    height: '169px',
  },
};
