import React, { useMemo, useState, useCallback } from 'react';
import type { FC, PropsWithChildren } from 'react';
import {
  extendTheme,
  ChakraProvider,
  useColorMode,
  theme as baseTheme,
  type ThemeConfig,
  type Colors,
  type Theme,
  type StyleFunctionProps
} from '@chakra-ui/react';

import { ThemeProvider } from '../../hooks/useTheme';

import { isObject } from '../../factory/tools';

import markdown from './markdown';

export { baseTheme };

export type DocProviderProps = {
  /**
   * @description custom or use inner color scheme of chakra
   * @default baseTheme.colors.purple
   */
  brand?: Colors;
  /**
   * @description total control of chakra theme config
   */
  config?: Partial<ThemeConfig & Theme>;
};

const DocProvider: FC<PropsWithChildren<DocProviderProps>> = ({
  children,
  config,
  brand = baseTheme.colors.purple
}) => {
  const { colorMode } = useColorMode();
  const [themeBrand, setThemeBrand] = useState(brand);

  const theme = useMemo(() => {
    return extendTheme({
      initialColorMode: colorMode ?? 'system',
      useSystemColorMode: false,
      styles: {
        ...baseTheme.styles,
        ...(config?.styles ?? {}),
        global: (props: StyleFunctionProps) => ({
          ...(baseTheme.styles.global ?? {}),
          ...(config?.styles?.global ?? {}),
          body: {
            p: 0
          },
          ...markdown(props)
        })
      },
      ...(config ?? {}),
      colors: {
        brand: themeBrand,
        ...(config?.colors ?? {})
      },
      space: {
        ...baseTheme.space,
        ...(config?.space ?? {}),
        18: '4.5rem'
      },
      sizes: {
        ...baseTheme.sizes,
        ...(config?.sizes ?? {}),
        18: '4.5rem',
        screenW: '100vw',
        screenH: '100vh',
        container: {
          ...baseTheme.sizes.container,
          ...(config?.sizes?.container ?? {}),
          xxl: '1392px'
        }
      },
      breakpoints: {
        ...baseTheme.breakpoints,
        ...(config?.breakpoints ?? {}),
        xxl: '1392px'
      }
    } as ThemeConfig);
  }, [config, colorMode, themeBrand]);

  const changeBrand = useCallback(
    (manualBrand: Colors | string) => {
      if (isObject(manualBrand)) {
        setThemeBrand(manualBrand);
      }
      if (typeof manualBrand === 'string' && manualBrand in theme.colors) {
        // @ts-ignore
        setThemeBrand(theme.colors[manualBrand]);
      }
    },
    [config]
  );

  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider value={{ brand: themeBrand, changeBrand, config: theme }}>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default DocProvider;
