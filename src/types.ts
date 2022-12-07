import type { DocProviderProps } from './components/DocProvider';
import type { SocialMap } from './components/Social';
import type { Search } from './slots/SearchResult';
import type { AnnouncementBarConfig } from './slots/AnnouncementBar';

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
  /**
   * @description whether use search feature, when boolean, open or close. use object to config more
   * @default true
   */
  search?: boolean | Search;
  /**
   * @description announcementBar of top container setting
   */
  announcementBar?: AnnouncementBarConfig;
};
