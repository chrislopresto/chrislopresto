import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './signature.stories';

const { Example: Signature } = composeStories(stories);

describe('Signature', () => {
  it('renders', () => {
    render(<Signature />);

    expect(screen.getByText(`Chris LoPresto's signature`));
  });

  it('respects a custom description', () => {
    render(<Signature description="Hi there" />);

    expect(screen.getByText('Hi there'));
  });
});
