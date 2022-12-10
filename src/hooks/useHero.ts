import { useRouteMeta } from 'dumi';

import useThemeConfig from './useThemeConfig';
import type { HeroConfig } from '../slots/Hero';

export type FrontMatter = ReturnType<typeof useRouteMeta>['frontmatter'];

export type HeroStruct = Required<FrontMatter>['hero'];

export type HeroActionItem = Required<HeroStruct>['actions'][0] & {
  /**
   * @description button left icon
   * @description.zh-CN 按钮左侧的icon
   */
  icon?: string;
};

export type HeroWithIcon = Omit<HeroStruct, 'actions'> & {
  actions?: HeroActionItem[];
} & HeroConfig;

export default function useHero(): HeroWithIcon {
  const { hero = {} } = useThemeConfig() ?? {};
  const routeMetaHero = useRouteMeta().frontmatter?.hero ?? {};
  return {
    ...hero,
    ...routeMetaHero
  };
}
