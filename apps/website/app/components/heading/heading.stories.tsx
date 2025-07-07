import type { Meta, StoryObj } from '@storybook/react-vite';

import { css } from '../../../styled-system/css';

import { Heading, headingCss } from './heading';

import { chromaticModes as modes } from '../../../.storybook/color-modes';

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
    demoText: "DON'T PANIC",
    as: 'h2',
    color: '',
  },
  parameters: {
    chromatic: { modes },
  },
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const Interactive: Story = {
  render: ({ demoText, color, ...args }) => (
    <Heading css={{ color }} {...args}>
      {demoText}
    </Heading>
  ),
};

export const Showcase: Story = {
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
