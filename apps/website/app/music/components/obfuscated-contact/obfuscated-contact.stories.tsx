import type { Meta, StoryObj } from '@storybook/react-vite';

import { ObfuscatedContact } from './obfuscated-contact';
import { contactParts } from '../../content';
import { musicRootCss } from '../../theme';
import { css } from '../../../../styled-system/css';

const meta: Meta<typeof ObfuscatedContact> = {
  title: 'Music/ObfuscatedContact',
  component: ObfuscatedContact,
  render: (props) => (
    <div className={css(musicRootCss, { padding: '2rem' })}>
      <ObfuscatedContact {...props} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    contact: contactParts,
  },
};
