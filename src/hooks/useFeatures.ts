import { useRouteMeta } from 'dumi';

export type FrontMatter = ReturnType<typeof useRouteMeta>['frontmatter'];

export type FeaturesItem = Required<FrontMatter>['features'][0] & {
  /**
   * @description if not emoji, use url to display features icon
   * @description.zh-CN 在不使用emoji的情况下使用网络图片代替
   */
  icon?: string;
  /**
   * @description features tag, like: beta. advance
   * @description.zh-CN 标注特性的标签, 比如beta、advance
   */
  tag?: string;
};

export default function useFeatures(): FeaturesItem[] {
  return useRouteMeta().frontmatter?.features as FeaturesItem[];
}
