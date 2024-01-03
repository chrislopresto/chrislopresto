import type { Meta, StoryObj } from '@storybook/react';

import { Signature } from './signature';
import { css } from '../../../styled-system/css';

type StoryComponent = React.ComponentProps<typeof Signature> & { color?: string };

const meta: Meta<StoryComponent> = {
  title: 'Components/Signature',
  component: Signature,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: ['pink.700', 'magenta', 'cyan', 'emerald.700', 'fuchsia.800', 'fuchsia.50'],
      control: { type: 'select' },
    },
  },
  args: {
    description: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: ({ color, ...props }) => {
    return (
      <>
        <span className={css({ display: 'none', color: 'pink.700' })}>pink.700</span>
        <span className={css({ display: 'none', color: 'magenta' })}>magenta</span>
        <span className={css({ display: 'none', color: 'cyan' })}>cyan</span>
        <span className={css({ display: 'none', color: 'emerald.700' })}>emerald.700</span>
        <span className={css({ display: 'none', color: 'fuchsia.800' })}>fuchsia.800</span>
        <span className={css({ display: 'none', color: 'fuchsia.50' })}>fuchsia.50</span>
        <Signature css={css.raw({ color })} {...props} />
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
    description: {
      table: {
        disable: true,
      },
    },
  },
};
