import type { Meta, StoryObj } from '@storybook/react';

import { css } from '../../../styled-system/css';

import { chromaticModes as modes } from '../../../.storybook/color-modes';

import { textStyles } from '../../../theme/text-styles';

type StoryComponent = { demoText?: string };

const meta: Meta<StoryComponent> = {
  title: 'Scales/Text',
  argTypes: {
    demoText: {
      type: 'string',
      name: 'Demo text',
    },
  },
  args: {
    demoText: 'I am a sensationalistic headline',
    color: '',
  },
  parameters: {
    chromatic: { modes },
  },
};
export default meta;

type Story = StoryObj<StoryComponent>;

const textStyleNames = Object.keys(textStyles);

export const Showcase: Story = {
  render: ({ demoText }) => (
    <>
      {textStyleNames.map((textStyle) => (
        <div key={`example-${textStyle}`}>
          <p
            className={css({
              textStyle: 'body',
              mb: '1',
            })}
          >
            {textStyle}
          </p>
          <div className={css({ mb: '6' })}>
            <span className={css({ textStyle })}>{demoText}</span>
          </div>
        </div>
      ))}
    </>
  ),
  args: {
    demoText: "Don't panic",
  },
};
