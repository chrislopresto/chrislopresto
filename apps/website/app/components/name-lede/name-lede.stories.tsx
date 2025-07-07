import type { Meta, StoryObj } from '@storybook/react-vite';

import { NameLede } from './name-lede';

type StoryComponent = React.ComponentProps<typeof NameLede>;

const meta: Meta<StoryComponent> = {
  title: 'Components/Name Lede',
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const Example: Story = {
  render: () => <NameLede />,
};
