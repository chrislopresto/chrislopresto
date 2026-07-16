import { expect, describe, it, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { composeStories } from '@storybook/react-vite';

import * as stories from './obfuscated-contact.stories';
import { contactParts } from '../../content';
// Raw source of the component module, for the source-discipline assertions.
import componentSource from './obfuscated-contact.tsx?raw';

const { Example: ObfuscatedContact } = composeStories(stories);

// Joined only here, at test runtime — never as a source literal.
const { email } = contactParts;
const expectedEmail = email.user + '@' + email.domain + '.' + email.tld;

describe('ObfuscatedContact', () => {
  afterEach(() => {
    cleanup();
  });

  it('assembles the mailto link after mount', async () => {
    render(<ObfuscatedContact />);

    const emailLink = await screen.findByRole('link', { name: expectedEmail });
    expect(emailLink.getAttribute('href')).toBe('mailto:' + expectedEmail);
    expect(emailLink.textContent).toBe(expectedEmail);
  });

  it('assembles the tel link after mount', async () => {
    render(<ObfuscatedContact />);

    const { phone } = contactParts;
    const displayPhone = `(${phone.area}) ${phone.prefix}-${phone.line}`;
    const phoneLink = await screen.findByRole('link', { name: displayPhone });
    expect(phoneLink.getAttribute('href')).toBe('tel:+' + phone.country + phone.area + phone.prefix + phone.line);
    expect(phoneLink.textContent).toBe(displayPhone);
  });

  it('renders the labels', async () => {
    render(<ObfuscatedContact />);

    expect(await screen.findByText('Mail'));
    expect(await screen.findByText('Telephone'));
  });

  it('never embeds joined contact strings in the component source', () => {
    expect(componentSource).not.toContain('chris@');
    expect(componentSource).not.toContain('470-7796');
    expect(componentSource).not.toContain('4707796');
  });
});
