import type { Meta, StoryObj } from '@storybook/react-vite';

import { Nav } from './nav';

import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

type StoryComponent = React.ComponentProps<typeof Nav>;

const meta: Meta<StoryComponent> = {
  title: 'Components/Nav',
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const Example: Story = {
  render: () => <Nav />,
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
