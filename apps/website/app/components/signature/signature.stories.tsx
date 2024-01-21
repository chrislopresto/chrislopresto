import type { Meta, StoryObj } from '@storybook/react';

import { Signature, signatureCss } from './signature';
import { css } from '../../../styled-system/css';

type StoryComponent = React.ComponentProps<typeof Signature> & { color?: string };

const meta: Meta<StoryComponent> = {
  title: 'Components/Signature',
  component: Signature,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: signatureCss.variantMap.variant,
      control: { type: 'select' },
    },
    color: {
      options: [undefined, 'magenta', 'cyan'],
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
        <span className={css({ display: 'none', color: 'magenta' })}>magenta</span>
        <span className={css({ display: 'none', color: 'cyan' })}>cyan</span>
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
