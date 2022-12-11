import { useSiteData } from 'dumi';

export default function useLoading(): boolean {
  return useSiteData().loading;
}
