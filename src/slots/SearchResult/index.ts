import DocSearch, { type DocSearchConfig } from './DocSearch';
import Cmdk from './Cmdk';

import useSearchAble from '../../hooks/useSearchAble';

export type SearchType = 'cmdk' | 'docsearch';

export enum SEARCHTYPE {
  /**
   * @description use cmdk & dumi origin search
   */
  CMDK = 'cmdk',
  /**
   * @description use algolia docsearch for search
   */
  DOCSEARCH = 'docsearch'
}

export type Search = {
  /**
   * @description site search type
   * @default cmdk
   */
  type: SearchType;
  /**
   * @description DocSearchConfig
   */
  config?: DocSearchConfig;
};

export { DocSearch, Cmdk };

export { useSearchAble };
