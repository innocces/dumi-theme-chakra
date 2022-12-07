import { useSiteData } from 'dumi';
import type { IThemeConfig } from 'dumi/dist/client/theme-api/types';
import type { ThemeConfig } from '../types';

/**
 * @description make themeConfig type as theme
 * @returns {ThemeConfig & IThemeConfig}
 */
export default function useThemeConfig(): ThemeConfig & IThemeConfig {
  return useSiteData().themeConfig as ThemeConfig & IThemeConfig;
}
