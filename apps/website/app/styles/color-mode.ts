import { atomWithStorage, RESET } from 'jotai/utils';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useSyncExternalStore } from 'react';

type ColorMode = 'light' | 'dark';
export const COLOR_MODE_KEY = '@chrislopresto/website/colorScheme';
export const PREFERS_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export type UseColorModeResult = {
  colorMode: ColorMode;
  toggle: () => void;
  setLight: () => void;
  setDark: () => void;
  setColorMode: (colorMode: ColorMode) => void;
  matchSystem: () => void;
};

const preferredColorModeAtom = atomWithStorage<ColorMode | undefined>(COLOR_MODE_KEY, undefined, undefined, {
  getOnInit: true,
});

function subscribeToSystemColorScheme(onChange: () => void) {
  const systemColorSchemeMediaQuery = window.matchMedia(PREFERS_DARK_MEDIA_QUERY);
  systemColorSchemeMediaQuery.addEventListener('change', onChange);
  return () => systemColorSchemeMediaQuery.removeEventListener('change', onChange);
}

function getSystemColorMode(): ColorMode {
  const systemColorSchemeMediaQuery = window.matchMedia(PREFERS_DARK_MEDIA_QUERY);
  return systemColorSchemeMediaQuery.matches ? 'dark' : 'light';
}

const getColorModeServerSnapshot = () => undefined as unknown as ColorMode;

export function useColorMode(): UseColorModeResult {
  const [preferredColorMode, setPreferredColorMode] = useAtom(preferredColorModeAtom);

  const systemColorMode = useSyncExternalStore<ColorMode>(
    subscribeToSystemColorScheme,
    getSystemColorMode,
    getColorModeServerSnapshot,
  );
  const resolvedColorMode = preferredColorMode ?? systemColorMode;

  const matchSystem = useCallback(() => setPreferredColorMode(RESET), [setPreferredColorMode]);
  const setLight = useCallback(() => setPreferredColorMode('light'), [setPreferredColorMode]);
  const setDark = useCallback(() => setPreferredColorMode('dark'), [setPreferredColorMode]);
  const toggle = useCallback(
    () => setPreferredColorMode(resolvedColorMode === 'light' ? 'dark' : 'light'),
    [setPreferredColorMode, resolvedColorMode],
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-color-mode', resolvedColorMode);
  }, [resolvedColorMode]);

  return { colorMode: resolvedColorMode, toggle, setLight, setDark, setColorMode: setPreferredColorMode, matchSystem };
}
