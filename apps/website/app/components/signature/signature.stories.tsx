import type { Meta, StoryObj } from '@storybook/react';

import { Signature } from './signature';

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
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const signature: Story = {
  render: ({ color }) => {
    return <Signature css={{ color }} />;
  },
};
