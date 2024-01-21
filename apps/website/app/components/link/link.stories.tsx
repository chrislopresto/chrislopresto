import { StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';

import { Link } from './link';
import { NavLink } from '@remix-run/react';

import { withRouter, reactRouterParameters } from 'storybook-addon-react-router-v6';

type StoryComponent = React.ComponentProps<typeof Link> & { demoText?: string };

const meta: Meta<StoryComponent> = {
  title: 'Components/Link',
  argTypes: {
    demoText: {
      type: 'string',
      name: 'Demo text',
    },
  },
  args: {
    demoText: 'I am an alluring link',
  },
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const Interactive: Story = {
  render: ({ demoText, ...args }) => (
    <Link href="https://example.com" {...args}>
      {demoText}
    </Link>
  ),
};

export const UsingRemixLink: Story = {
  render: ({ ...args }) => (
    <>
      <Link asChild {...args} css={{ mr: 2 }}>
        <NavLink to="/foo">Link to current route</NavLink>
      </Link>
      <Link asChild {...args}>
        <NavLink to="/fuf">Link to another route</NavLink>
      </Link>
    </>
  ),
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/foo',
        handle: 'Foo',
      },
    }),
  },
  args: {
    demoText: 'I am a Remix link',
  },
};
