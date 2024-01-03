/* eslint-disable import/no-unresolved */
/* eslint-disable import/namespace */
import * as React from 'react';
import { StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';

import { css } from '../../../styled-system/css';

import { Heading, headingCss } from './heading';

type StoryComponent = React.ComponentProps<typeof Heading> & { demoText?: string; color?: string };

const meta: Meta<StoryComponent> = {
  title: 'Components/Heading',
  argTypes: {
    variant: {
      options: headingCss.variantMap.variant,
      control: { type: 'select' },
    },
    demoText: {
      type: 'string',
      name: 'Demo text',
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    color: {
      options: ['cyan', 'magenta', 'yellow', 'black'],
      control: { type: 'select' },
    },
  },
  args: {
    variant: 'title',
    demoText: 'I am a sensationalistic headline',
    as: 'h2',
    color: '',
  },
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const interactive: Story = {
  render: ({ demoText, color, ...args }) => (
    <Heading css={{ color }} {...args}>
      {demoText}
    </Heading>
  ),
};

export const showcase: Story = {
  render: ({ demoText }) => (
    <>
      <span className={css({ display: 'none', color: 'cyan' })}>cyan</span>
      <span className={css({ display: 'none', color: 'magenta' })}>magenta</span>
      <span className={css({ display: 'none', color: 'yellow' })}>yellow</span>
      <span className={css({ display: 'none', color: 'black' })}>black</span>
      {headingCss.variantMap.variant.map((variant) => (
        <div key={`example-${variant}`}>
          <p
            className={css({
              textStyle: 'body',
              mb: '1',
            })}
          >
            {variant}
          </p>
          <div className={css({ mb: '6' })}>
            <Heading as="h2" variant={variant}>
              {demoText}
            </Heading>
          </div>
        </div>
      ))}
    </>
  ),
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    demoText: "Don't panic",
  },
};
