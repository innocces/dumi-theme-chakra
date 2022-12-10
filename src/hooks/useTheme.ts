import { createContext, useContext } from 'react';

import {
  theme,
  type ThemeConfig,
  type Colors,
  type Theme
} from '@chakra-ui/react';

export type ThemeContext = {
  /**
   * @description custom or use inner color scheme of chakra
   * @description.zh-CN 自定义或chakra提供的色系
   * @default baseTheme.colors.purple
   */
  brand?: Colors;
  /**
   * @description manual change brand handler
   * @description.zh-CN 手动切换函数
   * @default changeBrand
   */
  changeBrand?: (brand: string | Colors) => void;
};

export type DocProviderProps = ThemeContext & {
  /**
   * @description total control of chakra theme config
   * @description.zh-CN 自定义chakra主题设置
   */
  config?: Partial<ThemeConfig & Theme>;
};

const themeContext = createContext<DocProviderProps>({
  brand: theme.colors.purple,
  changeBrand: () => void 0
});

themeContext.displayName = 'DUMITHEMECHAKRA';

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
  return useContext(themeContext);
}
