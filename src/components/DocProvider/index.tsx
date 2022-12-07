import React, { useMemo } from 'react';
import type { FC, PropsWithChildren } from 'react';
import {
  extendTheme,
  ChakraProvider,
  useColorMode,
  theme as baseTheme,
  type ThemeConfig,
  type Colors,
  type Theme
} from '@chakra-ui/react';

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

  const theme = useMemo(() => {
    return extendTheme({
      initialColorMode: colorMode ?? 'system',
      useSystemColorMode: false,
      ...(config ?? {}),
      colors: {
        brand,
        ...(config?.colors ?? {})
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
  }, [config, colorMode]);

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default DocProvider;
