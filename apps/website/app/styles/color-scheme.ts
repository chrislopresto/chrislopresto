import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import Cookies from 'js-cookie';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';

export type ColorScheme = 'light' | 'dark';
const COLOR_SCHEME_KEY = 'clopColorScheme';

const cookieStorage = createJSONStorage<ColorScheme | undefined>(() => {
  return {
    getItem: (key) => Cookies.get(key) as ColorScheme,
    setItem: (key, newValue) => Cookies.set(key, newValue),
    removeItem: (key) => Cookies.remove(key),
  };
});

const colorSchemeAtom = atomWithStorage<ColorScheme | undefined>(COLOR_SCHEME_KEY, undefined, cookieStorage);

export function useColorScheme() {
  const [storedColorScheme, setStoredColorScheme] = useAtom(colorSchemeAtom);
  const [colorScheme, setColorScheme] = useState<ColorScheme | undefined>(storedColorScheme);

  useEffect(() => {
    const prefersColorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPreferredColorScheme: ColorScheme = prefersColorSchemeMediaQuery.matches ? 'dark' : 'light';
    setColorScheme(storedColorScheme || systemPreferredColorScheme);

    const onPrefersColorSchemeChange = ({ matches }: MediaQueryListEvent): void => {
      const systemPreferredColorScheme: ColorScheme = matches ? 'dark' : 'light';
      setColorScheme(storedColorScheme || systemPreferredColorScheme);
    };

    prefersColorSchemeMediaQuery.addEventListener('change', onPrefersColorSchemeChange);

    return () => {
      prefersColorSchemeMediaQuery.removeEventListener('change', onPrefersColorSchemeChange);
    };
  }, [setColorScheme, storedColorScheme]);

  return [colorScheme, setStoredColorScheme] as const;
}
