import type { Meta, StoryObj } from '@storybook/react-vite';

import { MobileNav } from './mobile-nav';

import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

type StoryComponent = React.ComponentProps<typeof MobileNav>;

const meta: Meta<StoryComponent> = {
  title: 'Components/MobileNav',
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
  render: (args) => <MobileNav key={String(args.defaultOpen)} {...args} />,
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
