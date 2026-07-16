import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { ServiceToggle, type StreamingService } from './service-toggle';
import { css } from '../../../../styled-system/css';
import { musicRootCss } from '../../theme';

const meta: Meta<typeof ServiceToggle> = {
  title: 'Music/ServiceToggle',
  component: ServiceToggle,
  decorators: [
    (Story) => (
      <div className={css(musicRootCss, { padding: '2rem' })}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => {
    const [service, setService] = useState<StreamingService>(args.value ?? 'spotify');
    return (
      <ServiceToggle
        {...args}
        value={service}
        onChange={(next) => {
          setService(next);
          args.onChange?.(next);
        }}
      />
    );
  },
  args: {
    value: 'spotify',
    onChange: () => {},
  },
};
