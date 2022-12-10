import { useSiteData } from 'dumi';

type Package = ReturnType<typeof useSiteData>['pkg'];

export default function usePackage(): Package {
  return useSiteData().pkg;
}
