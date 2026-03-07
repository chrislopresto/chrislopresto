import type { Meta, StoryObj } from '@storybook/react-vite';

import { CommandPalette } from './command-palette';

import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

type StoryComponent = React.ComponentProps<typeof CommandPalette>;

const meta: Meta<StoryComponent> = {
  title: 'Components/CommandPalette',
  argTypes: {
    defaultOpen: {
      control: { type: 'boolean' },
    },
  },
  args: {
    defaultOpen: true,
  },
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const Example: Story = {
  render: (args) => <CommandPalette key={String(args.defaultOpen)} {...args} />,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/',
        handle: 'Home',
      },
    }),
  },
};
