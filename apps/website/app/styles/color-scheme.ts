import { atomWithStorage, RESET } from 'jotai/utils';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';

type ColorScheme = 'light' | 'dark';
export const COLOR_SCHEME_KEY = '@chrislopresto/website/colorScheme';

const colorSchemeAtom = atomWithStorage<ColorScheme | undefined>(COLOR_SCHEME_KEY, undefined);

export function useColorScheme() {
  const [storedColorScheme, setStoredColorScheme] = useAtom(colorSchemeAtom);
  const [colorScheme, setColorScheme] = useState<ColorScheme | undefined>(storedColorScheme);

  useEffect(() => {
    const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemColorScheme: ColorScheme = colorSchemeMediaQuery.matches ? 'dark' : 'light';
    setColorScheme(storedColorScheme || systemColorScheme);

    const onPrefersColorSchemeChange = ({ matches }: MediaQueryListEvent): void => {
      const systemPreferredColorScheme: ColorScheme = matches ? 'dark' : 'light';
      setColorScheme(storedColorScheme || systemPreferredColorScheme);
    };

    colorSchemeMediaQuery.addEventListener('change', onPrefersColorSchemeChange);
    return () => {
      colorSchemeMediaQuery.removeEventListener('change', onPrefersColorSchemeChange);
    };
  }, [setColorScheme, storedColorScheme]);

  const toggle = () => {
    const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemColorScheme: ColorScheme = colorSchemeMediaQuery.matches ? 'dark' : 'light';
    const currentColorScheme = storedColorScheme || systemColorScheme;
    return currentColorScheme === 'light' ? setDark() : setLight();
  };

  const setLight = () => {
    return setStoredColorScheme('light');
  };
  const setDark = () => {
    return setStoredColorScheme('dark');
  };
  const matchSystem = () => {
    return setStoredColorScheme(RESET);
  };

  return {
    colorScheme,
    toggle,
    setLight,
    setDark,
    matchSystem,
  } as const;
}
