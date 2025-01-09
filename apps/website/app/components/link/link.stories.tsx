import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../../../styled-system/css';

import { Link } from './link';
import { NavLink } from 'react-router';

// eslint-disable-next-line import/no-unresolved
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

type StoryComponent = React.ComponentProps<typeof Link> & { demoText?: string };

const meta: Meta<StoryComponent> = {
  title: 'Components/Link',
  render: ({ demoText, ...args }) => (
    <Link href="https://example.com" {...args}>
      {demoText}
    </Link>
  ),
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

export const Interactive: Story = {};
export const Showcase: Story = {
  render: ({ demoText }) => {
    const colorModes = ['light', 'dark'];
    const pseudoDataAttrs = ['normal', 'hover', 'focus'];
    return colorModes.map((colorMode) => {
      const colorModeProp = { 'data-color-mode': colorMode };

      return (
        <div key={`example-${colorMode}`} {...colorModeProp} className={css({ mb: 3, bg: 'background', p: 3 })}>
          {pseudoDataAttrs.map((attr) => {
            const pseudoDataAttrProp = { [`data-${attr}`]: true };
            return (
              <div key={`example-${colorMode}-${attr}`} className={css({ mb: 3 })}>
                <div {...colorModeProp}>
                  <p
                    className={css({
                      textStyle: 'body',
                      color: 'default',
                      mb: '1',
                    })}
                  >
                    {attr}
                  </p>
                  <Link href="https://example.com" {...pseudoDataAttrProp}>
                    {demoText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  },
};

export const UsingReactRouterLink: Story = {
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
};
