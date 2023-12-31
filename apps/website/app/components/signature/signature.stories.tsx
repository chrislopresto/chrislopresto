import type { Meta, StoryObj } from '@storybook/react';

import { Signature } from './signature';
import { css } from '../../../styled-system/css';

type StoryComponent = React.ComponentProps<typeof Signature> & { color?: string };

const meta: Meta<StoryComponent> = {
  title: 'Example/Signature',
  component: Signature,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      options: ['pink.700', 'magenta', 'cyan', 'emerald.700', 'fuchsia.800', 'fuchsia.50'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const signature: Story = {
  render: ({ color }) => {
    return (
      <>
        <span className={css({ display: 'none', color: 'pink.700' })}>pink.700</span>
        <span className={css({ display: 'none', color: 'magenta' })}>magenta</span>
        <span className={css({ display: 'none', color: 'cyan' })}>cyan</span>
        <span className={css({ display: 'none', color: 'emerald.700' })}>emerald.700</span>
        <span className={css({ display: 'none', color: 'fuchsia.800' })}>fuchsia.800</span>
        <span className={css({ display: 'none', color: 'fuchsia.50' })}>fuchsia.50</span>
        <Signature css={css.raw({ color })} />
      </>
    );
  },
  args: {
    color: 'cyan',
  },
  argTypes: {
    css: {
      table: {
        disable: true,
      },
    },
  },
};
