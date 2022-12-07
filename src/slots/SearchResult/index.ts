import DocSearch, { type DocSearchConfig } from './DocSearch';
import Cmdk from './Cmdk';

import useSearchAble from '../../hooks/useSearchAble';

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
   * @default SEARCHTYPE.CMDK
   */
  type: SEARCHTYPE;
  /**
   * @description DocSearchConfig
   */
  config?: DocSearchConfig;
};

export { DocSearch, Cmdk };

export { useSearchAble };
