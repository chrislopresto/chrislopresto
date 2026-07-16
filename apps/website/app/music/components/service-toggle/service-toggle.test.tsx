import { expect, describe, it, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { composeStories } from '@storybook/react-vite';

import * as stories from './service-toggle.stories';

const { Interactive } = composeStories(stories);

afterEach(cleanup);

describe('ServiceToggle', () => {
  it('renders a switch reflecting the current service', () => {
    render(<Interactive />);

    const toggle = screen.getByRole('switch', { name: 'Streaming service: Spotify or Apple Music' });
    expect(toggle.getAttribute('aria-checked')).toBe('false');
  });

  it('calls onChange with the other service when activated', () => {
    const onChange = vi.fn();
    render(<Interactive onChange={onChange} />);

    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);
    expect(onChange).toHaveBeenCalledWith('apple-music');
    expect(toggle.getAttribute('aria-checked')).toBe('true');

    fireEvent.click(toggle);
    expect(onChange).toHaveBeenLastCalledWith('spotify');
    expect(toggle.getAttribute('aria-checked')).toBe('false');
  });
});
