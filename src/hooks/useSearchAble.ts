import useThemeConfig from './useThemeConfig';

/**
 * @description whethen search component need
 * @returns {boolean}
 */
export default function useSearchAble(): boolean {
  return !!(useThemeConfig().search ?? true);
}
