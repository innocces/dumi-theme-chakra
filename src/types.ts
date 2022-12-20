import type { DocProviderProps } from './components/DocProvider';
import type { SocialMap } from './components/Social';
import type { Search } from './slots/SearchResult';
import type { AnnouncementBarConfig } from './slots/AnnouncementBar';
import type { HeroConfig } from './slots/Hero';
import type { CodeTheme, PRISMTHEME } from './builtins/SourceCode';

export { PRISMTHEME };

export type ThemeConfig = DocProviderProps & {
  /**
   * @description socails config: like github & discord
   * @description.zh-CN 社交配置: 比如 github & discord
   */
  social?: SocialMap;
  /**
   * @description splitor of helmet generate word: ${themeConfig.title} ${helmetIcon} ${subTitle}
   * @description.zh-CN 自动生成的title分隔符: 格式为: ${themeConfig.title} ${helmetIcon} ${subTitle}
   */
  helmetIcon?: string;
  /**
   * @description head meta description
   * @description.zh-CN 自定义header meta 描述信息
   */
  description?: string;
  /**
   * @description head meta keywords
   * @description.zh-CN 自定义header meta 关键字
   */
  keywords?: string[];
  /**
   * @description head meta author
   * @description.zh-CN 自定义header meta 作者
   */
  author?: string;
  /**
   * @description whether use search feature, when boolean, open or close. use object to config more
   * @description.zh-CN 是否使用搜索. 若为布尔值则表示开启或关闭. 也可以使用对象来配置更多
   * @default true
   */
  search?: boolean | Search;
  /**
   * @description announcementBar of top container setting
   * @description.zh-CN 文档头部声明条幅配置
   */
  announcementBar?: AnnouncementBarConfig;
  /**
   * @description hero setting for homepage
   * @description.zh-CN 首页的hero配置
   */
  hero?: HeroConfig;
  /**
   * @description doc body background image. if boolean. use default background image
   * @description.zh-CN 文档背景图片. 如果为布尔值, 使用默认背景图片
   * @default false
   */
  thumbBackground?: boolean | string;
  /**
   * @description setting panel visiblity
   * @description.zh-CN 是否展示主题设置面板
   * @default false
   */
  settingPanelVisible?: boolean;
  /**
   * @description <SourceCode /> setting
   * @description.zh-CN <SourceCode /> 组件配置
   */
  code?: {
    /**
     * @description prism themes
     * @description.zh-CN prism themes
     * @default { dark: PRISMTHEME.VSDARK, light: PRISMTHEME.VSLIGHT }
     */
    theme?: CodeTheme;
  };
};
