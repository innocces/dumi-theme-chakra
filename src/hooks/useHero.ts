import { useRouteMeta } from 'dumi';

export type FrontMatter = ReturnType<typeof useRouteMeta>['frontmatter'];

export type HeroStruct = Required<FrontMatter>['hero'];

export type HeroActionItem = Required<HeroStruct>['actions'][0] & {
  icon?: string;
};

export type HeroWithIcon = Omit<HeroStruct, 'actions'> & {
  actions?: HeroActionItem[];
};

export default function useHero(): HeroWithIcon {
  return useRouteMeta().frontmatter?.hero as HeroWithIcon;
}
