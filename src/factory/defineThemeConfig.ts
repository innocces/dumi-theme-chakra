import type { ThemeConfig } from '../types';
import { baseTheme } from '../components/DocProvider';
import { prismThemes } from '../builtins/SourceCode';

export { baseTheme, prismThemes };

/**
 * @description provider declaration of config files
 * @param {ThemeConfig} config theme config
 * @returns {ThemeConfig}
 */
export default function defineThemeConfig(config: ThemeConfig): ThemeConfig {
  return config;
}
