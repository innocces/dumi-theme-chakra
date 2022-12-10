import { useRouteMeta } from 'dumi';

export type FrontMatter = ReturnType<typeof useRouteMeta>['frontmatter'];

export type FeaturesItem = Required<FrontMatter>['features'][0] & {
  icon?: string;
};

export default function useFeatures(): FeaturesItem[] {
  return useRouteMeta().frontmatter?.features as FeaturesItem[];
}
