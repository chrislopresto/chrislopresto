import { renderHook } from '@testing-library/react';
import { COLOR_SCHEME_KEY, PREFERS_DARK_MEDIA_QUERY, useColorScheme } from './color-scheme';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { when } from 'vitest-when';
import { Provider } from 'jotai';

const wrapper = ({ children }: { children: React.ReactNode }) => <Provider>{children}</Provider>;

const matchMediaMatchesTrue = {
  matches: true,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};

const matchMediaMatchesFalse = {
  matches: false,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
};

beforeEach(() => {
  localStorage.removeItem(COLOR_SCHEME_KEY);
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('with a system preference for dark', () => {
  beforeEach(() => {
    const matchMediaMock = vi.fn();
    when(matchMediaMock).calledWith(PREFERS_DARK_MEDIA_QUERY).thenReturn(matchMediaMatchesTrue);
    vi.stubGlobal('matchMedia', matchMediaMock);
  });

  it('gets the default color scheme', () => {
    const { result } = renderHook(() => useColorScheme(), { wrapper });

    expect(result.current.colorScheme).toBe('dark');
  });

  it('sets the color scheme', () => {
    const { result, rerender } = renderHook(() => useColorScheme(), { wrapper });

    result.current.setLight();
    rerender();
    expect(result.current.colorScheme).toBe('light');
  });
});

describe('with a system preference for light', () => {
  beforeEach(() => {
    const matchMediaMock = vi.fn();
    when(matchMediaMock).calledWith(PREFERS_DARK_MEDIA_QUERY).thenReturn(matchMediaMatchesFalse);
    vi.stubGlobal('matchMedia', matchMediaMock);
  });

  it('gets the default color scheme', () => {
    const { result } = renderHook(() => useColorScheme(), { wrapper });

    expect(result.current.colorScheme).toBe('light');
  });

  it('sets the color scheme', () => {
    const { result, rerender } = renderHook(() => useColorScheme(), { wrapper });

    result.current.setDark();
    rerender();
    expect(result.current.colorScheme).toBe('dark');
  });
});

describe('with a stored color scheme of dark and a system preference for light', () => {
  beforeEach(() => {
    localStorage.setItem(COLOR_SCHEME_KEY, JSON.stringify('dark'));

    const matchMediaMock = vi.fn();
    when(matchMediaMock).calledWith(PREFERS_DARK_MEDIA_QUERY).thenReturn(matchMediaMatchesFalse);
    vi.stubGlobal('matchMedia', matchMediaMock);
  });

  it('gets the stored color scheme', () => {
    const { result } = renderHook(() => useColorScheme(), { wrapper });

    expect(result.current.colorScheme).toBe('dark');
  });

  it('matches the system color scheme', () => {
    const { result, rerender } = renderHook(() => useColorScheme(), { wrapper });

    expect(result.current.colorScheme).toBe('dark');

    result.current.matchSystem();
    rerender();
    expect(result.current.colorScheme).toBe('light');
  });

  it('toggles the color scheme', () => {
    const { result, rerender } = renderHook(() => useColorScheme(), { wrapper });

    expect(result.current.colorScheme).toBe('dark');

    result.current.toggle();
    rerender();
    expect(result.current.colorScheme).toBe('light');

    result.current.toggle();
    rerender();
    expect(result.current.colorScheme).toBe('dark');
  });
});
