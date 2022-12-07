import type { DocProviderProps } from './components/DocProvider';
import type { SocialMap } from './components/Social';

export type ThemeConfig = DocProviderProps & {
  /**
   * @description socails config: like github & discord
   */
  social?: SocialMap;
  /**
   * @description splitor of helmet generate word: ${themeConfig.title} ${helmetIcon} ${subTitle}
   */
  helmetIcon?: string;
  /**
   * @description head meta description
   */
  description?: string;
  /**
   * @description head meta keywords
   */
  keywords?: string[];
  /**
   * @description head meta author
   */
  author?: string;
};
