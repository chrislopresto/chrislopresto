import type { Meta, StoryObj } from '@storybook/react-vite';

import { VisuallyHidden } from './visually-hidden';

type StoryComponent = React.ComponentProps<typeof VisuallyHidden>;

const meta: Meta<StoryComponent> = {
  title: 'Components/Visually Hidden',
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const Example: Story = {
  render: () => (
    <>
      Press the option key to see...
      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <rect width="12" height="12" fill="black" />
      </svg>
      <VisuallyHidden>Some descriptive text</VisuallyHidden>
    </>
  ),
};
